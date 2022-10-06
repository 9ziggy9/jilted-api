from ..models import db, Member
from flask.cli import AppGroup

seed_commands = AppGroup("seed")

def seed_members():
    david = Member(name="david")
    brad = Member(name="brad")
    john = Member(name="john")
    cesar = Member(name="cesar")
    ziggy = Member(name="ziggy")

    db.session.add(david)
    db.session.add(brad)
    db.session.add(john)
    db.session.add(cesar)
    db.session.add(ziggy)
    db.session.commit()

def undo_members():
    db.session.execute("DELETE FROM members")
    db.session.commit()

@seed_commands.command("all")
def seed():
    seed_members()

@seed_commands.command("undo")
def undo():
    undo_members()

@seed_commands.command("restore")
def restore():
    print("Purging database")
    db.drop_all()
    db.create_all()
