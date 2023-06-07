from celery import Celery

app = Celery('celery-1', broker='redis-18982.c80.us-east-1-2.ec2.cloud.redislabs.com:18982', backend='redis-18982.c80.us-east-1-2.ec2.cloud.redislabs.com:18982')

@app.task
def celery_1_task():
    celery -A leaderboard worker --loglevel=info
    pass
