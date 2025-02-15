'use strict';

const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message('hello', async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  await app.start();
  app.logger.info('⚡️ Bolt app is running!');
})();
