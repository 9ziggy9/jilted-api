from ..models import db, Member
from flask.cli import AppGroup

seed_commands = AppGroup("seed")

def seed_members():
    start_members = ["david", "brad", "john", "cesar", "ziggy",
                     "matt", "jake", "gary", "amanda", "an", "sam",
                     "ben", "brandon", "alex", "hai", "jack", "jae",
                     "justin", "katy", "keanen", "kevin", "kyle",
                     "logan", "lyn", "maliha", "fiona", "randy",
                     "tony", "will", "yibo", "thenu", "nate"]

    print("\n")
    print("Seeding all members ...")

    for m in start_members:
        mem = Member(name=m)
        db.session.add(mem)

    db.session.commit()

def undo_members():
    db.session.execute("DELETE FROM members")
    db.session.commit()

def undo_groups():
    db.session.execute("DELETE FROM groups")
    db.session.commit()

@seed_commands.command("all")
def seed():
    seed_members()

@seed_commands.command("undo")
def undo():
    undo_members()
    undo_groups()

@seed_commands.command("restore")
def restore():
    print("Purging database")
    db.drop_all()
    db.create_all()
