from flask import Flask
from .routes import main
from .config import Config
from .seeders import seed_commands
from .models import db
from flask_migrate import Migrate

flask_app = Flask(__name__)

# TODO: configuration
flask_app.config.from_object(Config)

flask_app.register_blueprint(main.bp, url_prefix="/api")
db.init_app(flask_app)
Migrate(flask_app, db)

flask_app.cli.add_command(seed_commands)
