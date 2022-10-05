from flask import Flask
from .routes import main

flask_app = Flask(__name__)

# TODO: configuration

flask_app.register_blueprint(main.bp)
