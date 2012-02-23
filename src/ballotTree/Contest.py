'''
Created on Feb 9, 2012

@author: kurifuc4
'''

class CMUSVContest:
    name = ""
    #instructions = ""
    nextContest = ""
    prevContest = ""
    
    selection = ""
    candidateList = []
    
    def __init__(self, name):
        #self.instructions = instr
        self.name = name