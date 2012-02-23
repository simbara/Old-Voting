'''
Created on Feb 9, 2012

@author: kurifuc4
'''
import re
import Candidate
import Race
import Contest

class Parser:

    contests = []
    races = []
    candidates = []
    inFile = ""

    # Patterns
    pCandidate = ""
    pRace = ""
    pContest = ""

    def __init__(self, fileLoc):
        self.inFile = fileLoc
        self.pCandidate = re.compile('Candidate:\s*(.+)', re.IGNORECASE)
        self.pRace = re.compile('Race:\s*(.+):(.+)', re.IGNORECASE)
        self.pContest = re.compile('Contest:\s*(.+)', re.IGNORECASE)
    
    def parse(self):
        f = open(self.inFile, 'r')
        race = ""
        contest = ""
        for line in f:
            mCandidate = self.pCandidate.match(line)
            mRace = self.pRace.match(line)
            mContest = self.pContest.match(line)
            if mRace:
                race = Race.CMUSVRace(mRace.group(1), mRace.group(2))
                self.races.append(race)
            elif mContest:
                contest = Contest.CMUSVContest(mContest.group(1))
                self.contests.append(contest)
            elif mCandidate:
                c = Candidate.CMUSVCandidate(mCandidate.group(1))
                self.candidates.append(c)
            # if empty line, assemble the pieces for this contest:
            else:
                for person in self.candidates:
                    #print "adding a candidate to contest.candidateList"
                    contest.candidateList.append(person)
                race.contestList.append(contest)
        return race
