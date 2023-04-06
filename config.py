# config.py

import os

class Config(object):
    MONGODB_SETTINGS = {"DB": "test_myeasyfarm", "host": os.environ.get('MONGO_HOST')}
    SECRET_KEY = "\2\1thisismyscretkey\1\2\e\y\y\h"
    FLASK_APPBUILDER_BASEVIEW = "app.views.MainView"
