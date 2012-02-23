'''
Created on Feb 9, 2012

@author: kurifuc4
'''
import ParseModule

class Race:
    contestList = []
    name = ""
    instructions = ""
    
    def __init__(self, name, instr):
        self.contestList = []
        self.name = name
        self.instructions = instr
        
class Contest:
    name = ""
    #instructions = ""
    nextContest = ""
    prevContest = ""
    
    selection = ""
    candidateList = []
    
    def __init__(self, name):
        #self.instructions = instr
        self.name = name        


class CMUSVCandidate:
    name = ""
    #party = ""
    
    def __init__(self, inName):
        self.name = inName
        #self.party = inParty      

def initTree():
    p = ParseModule.Parser("ballot.txt")
    race = p.parse()
    return race
   
#    print "Race:", race.name, ", Instructions:", race.instructions
#    for c in race.contestList:
#        print "\tContest:", c.name
#        for person in c.candidateList:
#            print "\t\tCandidate:", person.name
#    
    
# Main stuff
#initTree()
#print "done!"