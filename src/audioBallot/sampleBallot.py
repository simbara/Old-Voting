from fysom import Fysom
import ParseModule
from pyjamas import Window


race = ParseModule.initTree()

def goToNextState(obj, pos, okToAdvance=True):
    if fsm.current == 'contests':
        fsm.selectContest(race=obj, contestPos=pos)
    elif fsm.current == 'candidates':
        # choice: user's selection
        fsm.reviewCandidates(choice=obj, pos=pos)
    elif fsm.current == 'review_candidates':
        if not okToAdvance:
            fsm.reselectCandidates(race=obj, contestPos=pos) #TODO
        else:
            fsm.doneReview()
    elif fsm.current == 'check_done':
        if obj is not None:
            fsm.nextContest(race=obj, pos=pos)
        else:
            fsm.reviewBallot()
    elif fsm.current == 'review_ballot':
        fsm.doneBallot()
        
'''
Traverse the list as provided by the 'obj', which can be either of type Race or Contest
If the 'store' argument is true, we are not only traversing a Contest's Candidates, we want to store
whatever selection the user made in the 'Contest.userSelection' list
'''
def traverselist(obj, store=False):
    alist = obj.selectionList
    pos = 0
    while 1:
        nb = raw_input('Please select one: ')
        if nb.strip() == 'h':
            pos = (pos+1) if (pos+1<len(alist)) else 0
        elif nb.strip() == 'y':
            pos
        elif nb.strip() == 'n':
            pos = len(alist)-1 if (pos-1<0) else pos-1
        
        if store == True:
            obj.userSelection.append(pos)
        goToNextState(alist[pos], pos)
        break

'''
Define State Behaviors
'''
def printstatechange(e):
    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)

def onintro(e): 
    print 'hello!'
    
def oncontests(e): 
    print '\nThe contests are:'
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        print '\t' + str(i+1) + ') ' + contest.name 
    traverselist(race)

# e.pos: the current Contest, which is the position in the race.selectionList
def oncandidates(e): 
    print '\nCurrent race is: ', e.race.name
    print 'Candidates are:'
    currContest = race.selectionList[e.contestPos] #todo
    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):
        print "\t" + str(i+1) + ') ' + person.name
    traverselist(currContest, store=True)
    
    #currContest.userSelection.append(choice)
    #print 'size is ', len(currContest.userSelection)
    #print 'you chose ', currContest.selectionList[currContest.userSelection[0]].name, "????"

#e.pos: the user's selection in the position of the list
def onreviewcandidates(e):
    print '\nReview Your Choice for', e.choice.name, ':'
    candidate = e.choice
    selection = e.pos
    print '\t', candidate.name
    print 'CHECK: POS IS ', selection
    
    while 1:
        nb = raw_input('Is this your choice? ')
        if nb.strip() == 'y':
            #goToNextState(candidate, selection)
            goToNextState(None, None)
            break
        else:
            #goToNextState(candidate, selection, False)
            goToNextState(candidate, None, False) # TODO PROBLEM
            break

def oncheckdone(e):
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        if len(contest.userSelection) == 0:
            goToNextState(contest, i)
            return
    goToNextState(None, None)

def onreviewballot(e):
    print '\nReview your selections:'
    for contest in race.selectionList:
        print 'Contest: ', contest.name, ':', contest.selectionList[contest.userSelection[0]].name
    goToNextState(None, None)
    
def ondoneballot(e):
    print '\nVoting complete! Thanks for using this system!'

'''
States and Events
'''
fsm = Fysom({
  'initial': 'intro',
  'events': [
    {'name': 'startVoting',  'src': 'intro',  'dst': 'contests'},
    {'name': 'selectContest', 'src': 'contests',   'dst': 'candidates'},
    {'name': 'reviewCandidates',  'src': 'candidates',   'dst': 'review_candidates'},
    {'name': 'reselectCandidates', 'src': 'review_candidates', 'dst': 'candidates'},
    {'name': 'doneReview',  'src': 'review_candidates',   'dst': 'check_done'},
    {'name': 'nextContest', 'src': 'check_done',  'dst': 'contests'},
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'doneBallot', 'src': 'review_ballot', 'dst': 'done_ballot'},    
  ],
    'callbacks': {
     'onintro': onintro,
     'oncontests': oncontests,
     'oncandidates': oncandidates,
     'onreview_candidates': onreviewcandidates,
     'oncheck_done': oncheckdone,
     'onreview_ballot': onreviewballot,
     'ondone_ballot': ondoneballot
    }
})


'''
Assign State Behaviors
'''
#fsm.onchangestate = printstatechange

fsm.startVoting()
