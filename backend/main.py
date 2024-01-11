from fastapi import FastAPI
from backend.models import User, Post, UserSettings

app = FastAPI()


@app.get("/")
def index():
    return {"test_key": "test_value"}
