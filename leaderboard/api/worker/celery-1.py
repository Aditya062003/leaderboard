from celery import Celery

app = Celery('celery-1', broker=celery_broker_url, backend=celery_result_backend)

@app.task
def celery_1_task():
    # Your task logic for celery-1
    pass
