'''
Created on Feb 9, 2012

@author: Rahul
'''
import time
import os
os.environ["PYSCXMLPATH"] = "/Users/Rahul/Documents/eclipse/Python/PySCXML/resources/"
from scxml.pyscxml import StateMachine
    



with StateMachine("ballotSM.xml") as sm:
    sm.send('red')
#    time.sleep(1)
