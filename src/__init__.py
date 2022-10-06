from flask import Flask
from .routes import main
from .config import Config
from .seeders import seed_commands
from .models import db

flask_app = Flask(__name__)

# TODO: configuration
flask_app.config.from_object(Config)

flask_app.register_blueprint(main.bp)
db.init_app(flask_app)

flask_app.cli.add_command(seed_commands)
