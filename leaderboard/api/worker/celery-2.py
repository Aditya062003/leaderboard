from celery import Celery

app = Celery('celery-2', broker='redis-18982.c80.us-east-1-2.ec2.cloud.redislabs.com:18982', backend='redis-18982.c80.us-east-1-2.ec2.cloud.redislabs.com:18982')

@app.task
def celery_2_task():
    celery -A leaderboard beat -l info
    pass
