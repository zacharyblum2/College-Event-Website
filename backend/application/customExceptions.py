#A class file that we can use to create our own custom exceptions to use in the views and models and stuff

class IncorrectPassword(Exception):
    "Raised if a user enters the incorrect password when trying to login"
    pass

class UserAlreadyExists(Exception):
    "Raised if a user is trying to register with an email that is already in the database"
    pass