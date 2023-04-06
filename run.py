from app import app

from app.init_data.upload_init_data import upload_init_data

upload_init_data()

app.run(host="0.0.0.0", port=8000, debug=True)
