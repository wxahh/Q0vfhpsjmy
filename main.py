import asyncio
import warnings
import logging

from contextlib import suppress

from bot.utils.launcher import process
from bot.utils import logger

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
