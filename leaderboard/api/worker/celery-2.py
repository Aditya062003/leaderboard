from celery import Celery

app = Celery('celery-2', broker=celery_broker_url, backend=celery_result_backend)

@app.task
def celery_2_task():
    # Your task logic for celery-2
    pass
