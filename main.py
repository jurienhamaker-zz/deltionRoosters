from flask import Flask
import os
import views, shared, functions, routes

functions.setSettings()

ASSETS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
app = Flask(__name__, static_folder=ASSETS_DIR)
app.secret_key = "swag420"

routes.setRoutes(app)

app.debug = True
app.run(host='0.0.0.0')
	