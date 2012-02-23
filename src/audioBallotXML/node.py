'''
Created on Feb 8, 2012

@author: Rahul
'''


class Node(object):

    def __init__(self, name, data, level, parent=None):
        self.data = data
        self.name = name
        self.level = level
        self.parent = parent
        self.children = []
        
    def add_child(self, obj):
        self.children.append(obj)
        
