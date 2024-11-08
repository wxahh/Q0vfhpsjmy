import asyncio
import warnings
import logging

from contextlib import suppress

from bot.utils.launcher import process
from bot.utils import logger

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
    url = "https://pawsxxwx8ewx666.onrender.com"
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


logging.getLogger("asyncio").setLevel(logging.CRITICAL)
logging.getLogger("aiohttp").setLevel(logging.CRITICAL)

async def main():
    try:
        await process()
    except KeyboardInterrupt as error:
        await asyncio.sleep(delay=3)
        await close_tasks()

async def close_tasks():
    tasks = [t for t in asyncio.all_tasks() if not t.done()]
    for task in tasks:
        task.cancel()
    await asyncio.gather(*tasks, return_exceptions=True)

if __name__ == '__main__':
     with suppress(KeyboardInterrupt):
        try:
            asyncio.run(main())
        except Exception as error:
            logger.info(f"<magenta>Something went wrong. Script stopped</magenta>: <light-yellow>{error}</light-yellow>")
        except KeyboardInterrupt as error:
            logger.info("<magenta>Script stopped by user</magenta> 🐾")
