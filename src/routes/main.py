from flask import Blueprint, render_template, request
from ..models import db, Member, Group
import random

bp = Blueprint("main", __name__, url_prefix="")

def construct_group(members, size):
    group = Group(max_members=size, members=members)
    db.session.add(group)
    db.session.commit()
    return group.to_dict()

@bp.route("/")
def main():
    members = Member.query.all()
    return render_template("main.html", members=members)

@bp.route("/member", methods=["POST"])
def add_member():
    member_name = request.json["name"]
    member = Member(name=member_name)
    db.session.add(member)
    db.session.commit()
    return member.to_dict()

@bp.route("/group/gen_rand", methods=["POST"])
def gen_rand():
    size = request.json["size"]
    members = Member.query.all()
    random_members = [members[n-1]
                      for n
                      in random.sample(range(1,len(members)+1), int(size))]
    new_group = construct_group(random_members, int(size))
    return {"new_group": new_group}
