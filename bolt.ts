import bolt from '@slack/bolt';
import 'dotenv/config';

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message('hello', async ({ message, say }) => {
  if (message.subtype !== 'message_deleted' && message.subtype !== 'message_replied' && message.subtype !== 'message_changed') {
    await say(`Hey there <@${message.user}>!`);
  }
});

(async () => {
  await app.start();
  app.logger.info('⚡️ Bolt app is running!');
})();
