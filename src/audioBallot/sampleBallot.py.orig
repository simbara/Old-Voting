import pyttsx
from fysom import Fysom
import ParseModule
#from pyjamas import Window


engine = pyttsx.init()
race = ParseModule.initTree()

def tts(text):
    engine.stop()
    print text
    engine.say(text)
    engine.runAndWait()

def goToNextState(obj, pos, okToAdvance=True, contestPos=None):
    if fsm.current == 'contests':
        #print 'LOOK: current is contests, obj is ', obj, 'pos is ', pos, 'contestPos is ', contestPos
        fsm.selectContest(race=obj, contestPos=pos)
    elif fsm.current == 'candidates':
        #print 'LOOK: current is candidates, obj is ', obj, 'pos is ', pos, 'contestPos is ', contestPos
        fsm.reviewCandidates(choice=obj, pos=pos, contestPos=contestPos)
    elif fsm.current == 'review_candidates':
        if not okToAdvance:
            #print 'LOOK: current is review_candidates, obj is ', obj, 'pos is ', pos, 'contestPos is', contestPos
            fsm.reselectCandidates(race=obj, contestPos=contestPos)
        else:
            fsm.doneReview()
    elif fsm.current == 'check_done':
        if obj is not None:
            fsm.nextContest(race=obj, pos=pos)
        else:
            fsm.reviewBallot(race=obj, pos=pos)
    elif fsm.current == 'review_ballot':
        if okToAdvance:
            fsm.doneBallot()
        else:
            fsm.reselectContest() #TODO
        
        
'''
Traverse the list as provided by the 'obj', which can be either of type Race or Contest
If the 'store' argument is true, we are not only traversing a Contest's Candidates, we want to store
whatever selection the user made in the 'Contest.userSelection' list
'''
def traverselist(obj, contestPos=None):
    alist = obj.selectionList
    pos = 0
    tts('* ' + alist[pos].name + ' highlighted *')
    while 1:
        nb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        #if fsm.current == 'contests':
        #    if nb.strip() == 'g':
        #else:
        if nb.strip() == 'y':
            pos = (pos+1) if (pos+1<len(alist)) else 0
        elif nb.strip() == 'n':
            pos = len(alist)-1 if (pos-1<0) else pos-1
        elif nb.strip() == 'h':
            break;    
        tts('* ' + alist[pos].name + ' highlighted *')

    if fsm.current == 'candidates':
        #print 'CANDIDATES LOOK: obj is', obj.name, 'pos is ', pos, 'contestPos is ', contestPos
        goToNextState(obj, pos, contestPos=contestPos)
    else:
        #print 'DEFAULT GOTO, obj is', alist[pos], 'pos is ', pos, 'contestPos is ', contestPos
        goToNextState(alist[pos], pos, contestPos=contestPos)

'''
Define State Behaviors
'''
def printstatechange(e):
    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)

def onintro(e): 
    print 'hello!'
    
def oncontests(e): 
    tts('\nThe contests are:')
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        tts('\t' + str(i+1) + ') ' + contest.name) 
    traverselist(race)

# e.pos: the current Contest, which is the position in the race.selectionList
def oncandidates(e): 
    tts('\nCurrent race is: ' + e.race.name)
    tts('Candidates are:')
    currContest = race.selectionList[e.contestPos]
    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):
        tts("\t" + str(i+1) + ') ' + person.name)
    traverselist(currContest, contestPos=e.contestPos)

# e.pos: the user's selection in the position of the list
def onreviewcandidates(e):
    tts('\nReview Your Choice for ' + e.choice.name + ':')
    candidate = e.choice.selectionList[e.pos]
    tts('\t' + candidate.name)
    
    currChoice = 0
    tts('* <YES> highlighted *')
    while 1:
        nb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        if nb.strip() == 'y':
            currChoice += 1
        elif nb.strip() == 'n':
            currChoice -= 1
        elif nb.strip() == 'h':
            tts("\t* CONFIRMED")
            break;
        if currChoice % 2 == 0:
            tts('\t* <YES> highlighted *')
        else:
            tts('\t* <NO> highlighted *')
        
    if currChoice % 2 == 0:
        e.choice.userSelection[:] = []
        e.choice.userSelection.append(e.pos)
        goToNextState(None, None, okToAdvance=True)
    else:
        goToNextState(e.choice, e.pos, contestPos=e.contestPos, okToAdvance=False)

def oncheckdone(e):
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        if len(contest.userSelection) == 0:
            goToNextState(contest, i)
            return
    goToNextState(None, None)

# fsm.reviewBallot(race=obj, pos=pos)
def onreviewballot(e):
    tts('\nReview your selections:')
    for contest in race.selectionList:
        tts(contest.name + ':' + contest.selectionList[contest.userSelection[0]].name)
        
    currChoice = 0
    tts('* <YES> highlighted *')
    while 1:
        nb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        if nb.strip() == 'y':
            currChoice += 1
        elif nb.strip() == 'n':
            currChoice -= 1
        elif nb.strip() == 'h':
            tts("\t* CONFIRMED")
            break;
        if currChoice % 2 == 0:
            tts('\t* <YES> highlighted *')
        else:
            tts('\t* <NO> highlighted *')
        
    if currChoice % 2 == 0:
        goToNextState(None, None)
    else:
        goToNextState(e.race, e.pos, okToAdvance=False) # TODO
    
    
def ondoneballot(e):
    tts('\nVoting complete! Thanks for using this system!')

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
    {'name': 'otherContest', 'src': 'contests',  'dst': 'contests'}, # TODO
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'reselectContest', 'src': 'review_ballot', 'dst': 'contests'}, # TODO
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
