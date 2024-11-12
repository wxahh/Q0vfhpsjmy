from utils.core.telegram import Accounts
from utils.starter import start, stats
import asyncio
from data import config
from itertools import zip_longest
from utils.core import get_all_lines
import os
import sys
import time
import json
import random
import requests
import threading
from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Server is running!"})

def start_server():
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

def keep_awake():
    url = "https://majjorik8ew-ztwl.onrender.com"
    while True:
        try:
            response = requests.get(url)
            print(f"Pinged {url}, status code: {response.status_code}")
        except Exception as e:
            print(f"Failed to ping {url}: {e}")
        time.sleep(13 * 60)

if __name__ == "__main__":
    threading.Thread(target=start_server, daemon=True).start()
    threading.Thread(target=keep_awake, daemon=True).start()


async def main():
    print("Soft's author: https://t.me/ApeCryptor\n")

    if not os.path.exists('sessions'): os.mkdir('sessions')

    if config.PROXY['USE_PROXY_FROM_FILE']:
        if not os.path.exists(config.PROXY['PROXY_PATH']):
            with open(config.PROXY['PROXY_PATH'], 'w') as f:
                f.write("")
    else:
        if not os.path.exists('sessions/accounts.json'):
            with open("sessions/accounts.json", 'w') as f:
                f.write("[]")

    
    accounts = await Accounts().get_accounts()

    tasks = []

    for thread, account in enumerate(accounts):
        session_name, phone_number, proxy = account.values()
        tasks.append(asyncio.create_task(start(session_name=session_name, phone_number=phone_number, thread=thread, proxy=proxy)))

    await asyncio.gather(*tasks)


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
