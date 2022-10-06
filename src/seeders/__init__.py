from ..models import db, Member
from flask.cli import AppGroup

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
    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_members():
    db.session.execute('DELETE FROM members')
    db.session.commit()

# Create a seed group to hold our commands
seed_commands = AppGroup("seed")

# Defining commands
@seed_commands.command("all")
def seed():
    seed_members()

@seed_commands.command("undo")
def undo():
    print("\n")
    print("Clearing database")
    print("\n")
    undo_members()

@seed_commands.command("restore")
def restore():
    db.drop_all()
    db.create_all()
