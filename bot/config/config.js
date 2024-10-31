require("dotenv").config();
const _isArray = require("../utils/_isArray");
const settings = {
  API_ID: 29928597,
  API_HASH: 'a9d52a67363af8e4a39972f26f5b17f4',

  AUTO_APPLY_TURBO: process.env.AUTO_APPLY_TURBO
    ? process.env.AUTO_APPLY_TURBO.toLowerCase() === "true"
    : true,

  AUTO_APPLY_ENERGY: process.env.AUTO_APPLY_ENERGY
    ? process.env.AUTO_APPLY_ENERGY.toLowerCase() === "true"
    : true,

  AUTO_UPGRADE_DAMAGE: process.env.AUTO_UPGRADE_DAMAGE
    ? process.env.AUTO_UPGRADE_DAMAGE.toLowerCase() === "true"
    : true,

  AUTO_UPGRADE_RECHARGE: process.env.AUTO_UPGRADE_RECHARGE
    ? process.env.AUTO_UPGRADE_RECHARGE.toLowerCase() === "true"
    : true,

  AUTO_UPGRADE_ENERGY: process.env.AUTO_UPGRADE_ENERGY
    ? process.env.AUTO_UPGRADE_ENERGY.toLowerCase() === "true"
    : true,

  AUTO_BUY_TAPBOT: process.env.AUTO_BUY_TAPBOT
    ? process.env.AUTO_BUY_TAPBOT.toLowerCase() === "true"
    : true,

  AUTO_CLAIM_AND_START_TAPBOT: process.env.AUTO_CLAIM_AND_START_TAPBOT
    ? process.env.AUTO_CLAIM_AND_START_TAPBOT.toLowerCase() === "true"
    : true,

  AUTO_COMPLETE_TASKS: process.env.AUTO_COMPLETE_TASKS
    ? process.env.AUTO_COMPLETE_TASKS.toLowerCase() === "true"
    : true,

  AUTO_SPIN: process.env.AUTO_SPIN
    ? process.env.AUTO_SPIN.toLowerCase() === "true"
    : true,

  MAX_DAMAGE_LEVEL: process.env.MAX_DAMAGE_LEVEL
    ? /^\d+$/.test(process.env.MAX_DAMAGE_LEVEL)
    : 4,

  MAX_RECHARGE_LEVEL: process.env.MAX_RECHARGE_LEVEL
    ? /^\d+$/.test(process.env.MAX_RECHARGE_LEVEL)
    : 4,

  MAX_ENERGY_LEVEL: process.env.MAX_ENERGY_LEVEL
    ? /^\d+$/.test(process.env.MAX_ENERGY_LEVEL)
    : 4,

  MIN_AVAILABLE_ENERGY: process.env.MIN_AVAILABLE_ENERGY
    ? /^\d+$/.test(process.env.MIN_AVAILABLE_ENERGY)
    : 500,

  RANDOM_TURBO_TAPS:
    process.env.RANDOM_TURBO_TAPS && _isArray(process.env.RANDOM_TURBO_TAPS)
      ? JSON.parse(process.env.RANDOM_TURBO_TAPS)
      : [1000, 1500],

  RANDOM_TAPS:
    process.env.RANDOM_TAPS && _isArray(process.env.RANDOM_TAPS)
      ? JSON.parse(process.env.RANDOM_TAPS)
      : [50, 200],

  SLEEP_BETWEEN_REQUESTS:
    process.env.SLEEP_BETWEEN_REQUESTS &&
    _isArray(process.env.SLEEP_BETWEEN_REQUESTS)
      ? JSON.parse(process.env.SLEEP_BETWEEN_REQUESTS)
      : process.env.SLEEP_BETWEEN_REQUESTS &&
        /^\d+$/.test(process.env.SLEEP_BETWEEN_REQUESTS)
      ? parseInt(process.env.SLEEP_BETWEEN_REQUESTS)
      : [1000, 2000],

  DELAY_BETWEEN_STARTING_BOT:
    process.env.DELAY_BETWEEN_STARTING_BOT &&
    _isArray(process.env.DELAY_BETWEEN_STARTING_BOT)
      ? JSON.parse(process.env.DELAY_BETWEEN_STARTING_BOT)
      : [10, 50],

  DELAY_BETWEEN_TURBO:
    process.env.DELAY_BETWEEN_TURBO && _isArray(process.env.DELAY_BETWEEN_TURBO)
      ? JSON.parse(process.env.DELAY_BETWEEN_TURBO)
      : [10, 50],

  DELAY_BETWEEN_TAPS:
    process.env.DELAY_BETWEEN_TAPS && _isArray(process.env.DELAY_BETWEEN_TAPS)
      ? JSON.parse(process.env.DELAY_BETWEEN_TAPS)
      : [10, 50],

  DELAY_BETWEEN_TASKS:
    process.env.DELAY_BETWEEN_TASKS && _isArray(process.env.DELAY_BETWEEN_TASKS)
      ? JSON.parse(process.env.DELAY_BETWEEN_TASKS)
      : [10, 50],

  USE_PROXY_FROM_JS_FILE: process.env.USE_PROXY_FROM_JS_FILE
    ? process.env.USE_PROXY_FROM_JS_FILE.toLowerCase() === "true"
    : false,

  USE_REGISTRATION_PROXY: process.env.USE_REGISTRATION_PROXY
    ? process.env.USE_REGISTRATION_PROXY.toLowerCase() === "true"
    : false,

  USE_QUERY_ID: process.env.USE_QUERY_ID
    ? process.env.USE_QUERY_ID.toLowerCase() === "true"
    : true,

  USE_PROXY_FROM_TXT_FILE: process.env.USE_PROXY_FROM_TXT_FILE
    ? process.env.USE_PROXY_FROM_TXT_FILE.toLowerCase() === "true"
    : false,
  CAN_CREATE_SESSION: false,

  USE_CODES_FROM_FILE: process.env.USE_CODES_FROM_FILE
    ? process.env.USE_CODES_FROM_FILE.toLowerCase() === "true"
    : true,

  AUTO_TAPPING: process.env.AUTO_TAPPING
    ? process.env.AUTO_TAPPING.toLowerCase() === "true"
    : true,
};

module.exports = settings;
