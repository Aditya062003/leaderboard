const Celery = require('celery');
const redisUrl = "redis-18982.c80.us-east-1-2.ec2.cloud.redislabs.com:18982";
const app = new Celery(redisUrl);

app.task('leaderboard.worker', async () => {
  celery -A leaderboard worker --loglevel=info
});

app.task('leaderboard.beat', async () => {
  celery -A leaderboard beat -l info
});

module.exports = async (req, res) => {
  try {
    await app.worker('leaderboard.worker').delay();
    await app.worker('leaderboard.beat').delay();

    res.status(200).send('Celery tasks executed successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while executing Celery tasks.');
  }
};
