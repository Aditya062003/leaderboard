const Celery = require('celery');
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379/0';
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
