const { exec } = require('child_process');

exec('celery -A leaderboard beat', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running Celery beat: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Celery beat stderr: ${stderr}`);
    return;
  }
  console.log(`Celery beat stdout: ${stdout}`);
});
