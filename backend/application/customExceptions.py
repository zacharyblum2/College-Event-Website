#A class file that we can use to create our own custom exceptions to use in the views and models and stuff

class IncorrectPassword(Exception):
    "Raised if a user enters the incorrect password when trying to login"
    pass
