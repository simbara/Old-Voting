'''
Created on Feb 8, 2012

@author: Rahul
'''
from node import Node


class Tree():
    def __init__(self):
        self.nodes = []
        Root = Node('')
    
        
if __name__ == '__main__':
  
    contest1 = Node("Contest 1", "President", "Contest", 'Root')
    selection1 = Node('Selection 1', 'Obama', 'Selection', 'contest1')
    selection2 = Node('Selection 2', 'Romney', 'Selection', 'contest1')
    selection3 = Node('Selection 3', 'Santorum', 'Selection', 'contest1')
    contest1.add_child(selection1)
    contest1.add_child(selection2)
    contest1.add_child(selection3)
    
    contest2 = Node('Contest 2', 'Vice President', 'Contest', 'Root')
    selection21 = Node('Selection 1', 'Hillary', 'Selection', 'contest2')
    selection22 = Node('Selection 2', 'Biden' 'Selection', 'contest2')
    contest2.add_child(selection1)
    contest2.add_child(selection2) 
    
    for nodes in selection1.children:
        print nodes.data
    