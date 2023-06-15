const { exec } = require('child_process');

exec('celery -A leaderboard worker', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running Celery worker: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Celery worker stderr: ${stderr}`);
    return;
  }
  console.log(`Celery worker stdout: ${stdout}`);
});
