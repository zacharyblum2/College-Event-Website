#A class file that we can use to create our own custom exceptions to use in the views and models and stuff

class IncorrectPassword(Exception):
    "Raised if a user enters the incorrect password when trying to login"
    pass

class ObjectAlreadyExists(Exception):
    "Raised if a user is trying to register with an email that is already in the database"
    pass

class OutOfUniversity(Exception):
    "Raised if a user is trying to do an action with a university they don't have permission to do it on"
    pass

class NotRSOAdmin(Exception):
    "Raised if a user is trying to create an rso event but they are not admin of that rso"
    pass