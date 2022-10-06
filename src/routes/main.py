from flask import Blueprint, render_template
from ..models import db, Member

bp = Blueprint("main", __name__, url_prefix="")

@bp.route("/")
def main():
    members = Member.query.all()
    return render_template("main.html", members=members)
