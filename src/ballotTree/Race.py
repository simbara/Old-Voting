'''
Created on Feb 9, 2012

@author: kurifuc4
'''
class CMUSVRace:
    contestList = []
    name = ""
    instructions = ""
    
    def __init__(self, name, instr):
        self.contestList = []
        self.name = name
        self.instructions = instr