class Race(object):
    def __init__(self, name, instr):
        self.selectionList = []
        self.name = name
        self.instructions = instr
        
class Contest(object):
    def __init__(self, name):
        self.name = name 
        self.selectionList = [] #candidates
        self.userSelection = []

class Candidate(object):
    def __init__(self, inName):
        self.name = inName
