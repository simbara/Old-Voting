import re
from ballotTree import Contest, Race, Candidate

class Parser:
    def __init__(self, fileLoc):
        self.inFile = fileLoc
        self.pCandidate = re.compile('Candidate:\s*(.+)', re.IGNORECASE)
        self.pRace = re.compile('Race:\s*(.+):(.+)', re.IGNORECASE)
        self.pContest = re.compile('Contest:\s*(.+)', re.IGNORECASE)
        self.races = []
    
    def parse(self):
        f = open(self.inFile, 'r')
        for line in f:
            mCandidate = self.pCandidate.match(line)
            mRace = self.pRace.match(line)
            mContest = self.pContest.match(line)
            if mRace:
                race = Race(mRace.group(1), mRace.group(2))
                self.races.append(race)
            elif mContest:
                contest = Contest(mContest.group(1))
                race.selectionList.append(contest)
            elif mCandidate:
                c = Candidate(mCandidate.group(1))
                contest.selectionList.append(c)
        return race


def initTree():
    p = Parser('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt')
    race = p.parse()
    return race

def testTree():   
    p = Parser("/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt")
    race = p.parse()
    print "Race:", race.name, ", Instructions:", race.instructions
    for contest in race.selectionList:
        print "\tContest:", contest.name
        for person in contest.selectionList:
            print "\t\tCandidate:", person.name
    
    
##Main stuff
#testTree()
