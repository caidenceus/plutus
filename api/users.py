from passlib.hash import bcrypt
from db import DB


class Users(object):
    users = DB.users

    allowed_services = [
        "vanguard"
    ]

    @staticmethod
    def find_user(username):
        return Users.users.find_one(dict(user=username))
    
    @staticmethod
    def verify_password(password, p_hash):
        return bcrypt.verify(password, p_hash)

    @staticmethod
    def auth_user(username, password):
        user = Users.find_user(username)
        p_hash = user.get("password")
        return Users.verify_password(password, p_hash)