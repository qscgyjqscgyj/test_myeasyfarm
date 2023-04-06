import os

from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': os.environ.get('MONGO_DB_NAME'),
    'host': os.environ.get('MONGO_HOST'),
}

db = MongoEngine(app)

@app.route('/')
def index():
    return 'Hello, world!'

from . import models, api
