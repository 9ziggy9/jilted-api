from flask import Blueprint, jsonify, request
from ..models import db, Member, Group
from sqlalchemy import desc
import random

bp = Blueprint("main", __name__, url_prefix="")

def construct_group(members, size):
    group = Group(max_members=size, members=members)
    db.session.add(group)
    db.session.commit()
    return group.to_dict()

@bp.route("/member/all")
def get_members():
    members = Member.query.order_by(desc(Member.id)).all()
    return [m.to_dict() for m in members]

@bp.route("/group/all")
def get_groups():
    groups = Group.query.order_by(desc(Group.id)).all()
    return [g.to_dict() for g in groups]

@bp.route("/member/<int:id>", methods=["DELETE"])
def del_member(id):
    member = Member.query.get(id)
    db.session.delete(member)
    db.session.commit()
    return {"deletedId": member.id}

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
