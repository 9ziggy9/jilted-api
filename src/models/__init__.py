from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Group(db.Model):
    __tablename__ = "groups"
    id = db.Column(db.Integer, primary_key=True)
    max_members = db.Column(db.Integer, default=2)
    members = db.relationship("Member", back_populates="group")

    def to_dict(self):
        return {
            "id": self.id,
            "max_members": self.max_members,
            "members": [m.to_dict() for m in self.members],
        }

class Member(db.Model):
    __tablename__ = "members"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))
    group = db.relationship("Group", back_populates="members")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "group_id": self.group_id,
        }
