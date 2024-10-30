import asyncio
from contextlib import suppress
import os
import threading
import time
from flask import Flask, jsonify
import requests
from bot.utils.launcher import process

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Server is running!"})

def start_server():
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

def keep_awake():
    url = "https://okxmy-1xo1-ffqd-81pv.onrender.com"
    while True:
        try:
            response = requests.get(url)
            print(f"Pinged {url}, status code: {response.status_code}")
        except Exception as e:
            print(f"Failed to ping {url}: {e}")
        time.sleep(13 * 60)


async def main():
    await process()


if __name__ == '__main__':
    threading.Thread(target=start_server, daemon=True).start()
    threading.Thread(target=keep_awake, daemon=True).start()
    
    with suppress(KeyboardInterrupt):
        asyncio.run(main())
