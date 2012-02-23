from fysom import Fysom
import ParseModule
from pyjamas import Window


race = ParseModule.initTree()


'''
function helpers
'''
def traverselist(alist):
    pos = 0
    while 1:
        nb = raw_input('Please select one: ')
        if nb.strip() == 'n':
            print alist[pos].name
            break
        elif nb.strip() == 'h':
            pos = (pos+1) if (pos+1<len(alist)) else 0
            print alist[pos].name      
#        elif nb.strip() == 'j':    
#        elif nb.strip() == 'k':    
        elif nb.strip() == 'l':
            pos = len(alist)-1 if (pos-1<0) else pos-1
            print alist[pos].name 
                

'''
Define State Behaviors
'''
def printstatechange(e):
    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)

def onintro(e): 
    print 'hello!'
    
def oncontests(e): 
    print 'The contests are:'
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        print str(i+1) + ') ' +  contest.name 
    traverselist(race.selectionList)
        
#    try:
#        number = int(nb)
#    except:
#        print( "Invalid number" )
#    print ('%s \n' %(nb))
        
        
def oncandidates(e): print 'candidates!'


'''
States and Events
'''
fsm = Fysom({
  'initial': 'intro',
  'events': [
    {'name': 'startVoting',  'src': 'intro',  'dst': 'contests'},
    {'name': 'selectContest', 'src': 'contests',   'dst': 'candidates'},
    {'name': 'reviewCandidates',  'src': 'candidates',   'dst': 'review_candidates'},
    {'name': 'doneReview',  'src': 'review_candidates',   'dst': 'check_done'},
    {'name': 'nextContest', 'src': 'check_done',  'dst': 'contests'},
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'doneBallot', 'src': 'check_done', 'dst': 'done_ballot'},    
  ],
    'callbacks': {
     'onintro': onintro,
     'oncontests': oncontests    
    }
})


'''
Assign State Behaviors
'''
#fsm.onchangestate = printstatechange


fsm.startVoting()
