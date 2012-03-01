class Race(object):
    def __init__(self, name, selectionList, instructions):
        self.name = name
        self.selectionList = selectionList
        self.instructions = instructions
        self.works = "worker"
    
    def __repr__(self):
        return '<pjBallotObj>'
        
class Contest(object):
    def __init__(self, name, selectionList=[], userSelection=[]):
        self.name = name 
        self.selectionList = selectionList #candidates
        self.userSelection = userSelection

class Candidate(object):
    def __init__(self, name):
        self.name = name

