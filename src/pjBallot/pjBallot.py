import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas import Window
from pyjamas.ui import KeyboardListener
from pyjamas.ui.KeyboardListener import KeyboardHandler
#from pyjamas.ui import ClickListener
#from pyjamas.ui.ClickListener import ClickHandler
from pyjamas.ui.FocusPanel import FocusPanel
from pyjamas import DOM

import pygwt
from pyjamas.JSONService import JSONProxy
from pyjamas.ui.Label import Label
from pyjamas import JSONService
#sampleBallot.fsm.startVoting()
from ballotTree import Candidate, Race, Contest
from json import loads
from pyjamas.JSONService import JSONResponseTextHandler


def tester(d):
    Window.alert("YAY")
    inst = 'yay'
    return inst


class pjBallot:
    
    def __init__(self):
        self.mainPanel = VerticalPanel()
        self.contest = HorizontalPanel()
        self.contest.setStyleName('words')
        self.selection = HorizontalPanel()
        self.selection.setStyleName('words')
        self.button = Button('test', self.test)
        self.status = Label('hi')
        self.x = 1
    
    def test(self):
        self.button.setText("No, really click me!")
#        Window.alert("Hello, AJAAAX!")
        self.contest.add(HTML('yay'))

    def nextContest(self):
        self.x += 1
        self.contest.clear()
        self.contest.add(HTML('<b /> Contest: %d' % self.x))

    def nextSelection(self):
        self.x += 1
        self.selection.clear()
        self.selection.add(HTML('<b /> Selection: %d' % self.x))
    
    def onKeyDown(self, sender, keycode, modifiers):
        pass

    def onKeyUp(self, sender, keycode, modifiers):
        pass

    def onKeyPress(self, sender, keycode, modifiers):
        DOM.eventPreventDefault(DOM.eventGetCurrentEvent()) #not needed
        if keycode == KeyboardListener.KEY_UP:
            self.nextContest()
        if keycode == KeyboardListener.KEY_DOWN:
            self.nextContest()
        if keycode == KeyboardListener.KEY_LEFT:
            self.nextSelection()
        if keycode == KeyboardListener.KEY_RIGHT:
            self.nextSelection()


    def onModuleLoad(self):
        self.remote_py = JSONService()
        h = HTML("<b />Contest: ")
        self.contest.add(h)
        l = HTML("<b />Selection: ")
        self.selection.add(l)
#        self.mainPanel.add(self.button)
        self.mainPanel.add(self.contest)
        self.mainPanel.add(self.selection)
        self.mainPanel.add(self.status)
        panel = FocusPanel(Widget=self.mainPanel)
        gp = RootPanelListener(panel)
        manageRootPanel(gp)
        RootPanel().add(panel)
        panel.setFocus(True)
#        self.remote_py.uppercase('yay', self)
        self.remote_py.passBallot(self)
        
#        encoded_object = '[{"__jsonclass__": "Candidate.Candidate", "name": "Barack Obama"}]'
##        test = json2.loads(encoded_object)
##        self.mainPanel.add(HTML("%s" % test))#json.loads(encoded_object)))#, object_hook=self.dict_to_object)))
#        foo = '["foo", {"bar":["baz", null, 1.0, 2]}]'
#        bar = loads(foo, object_hook=tester)
#        self.mainPanel.add(HTML(bar))

 
    def dict_to_object(self,d):
        Window.alert("Hello, AJAAAX!")
        self.mainPanel.add(HTML('whatevs: %s' % 12))
        if '__class__' in d:
            # import pdb
            # pdb.set_trace()
            class_name = d.pop('__class__')
            module_name = d.pop('__module__')
            module = __import__(module_name)
            print 'MODULE:', module
            class_ = getattr(module.ballotTree, class_name) #because module was just audioBallot
            print 'CLASS:', class_
            args = dict( (key.encode('ascii'), value) for key, value in d.items())
            print 'INSTANCE ARGS:', args
            inst = class_(**args)
        else:
            inst = d
        return inst       
    

    
    def onRemoteResponse(self, response, request_info): 
        race = response  
        name = race.works
        self.mainPanel.add(HTML('pleasework %s' % name))
#        self.mainPanel.add(HTML('pleasework2 %s' % JSONResponseTextHandler(response)))
#        test = JSONResponseTextHandler(response)
#        test.request
#        self.mainPanel.add(HTML('pleasework3 %s' % test.name))
#        encoded_object = '[{"__jsonclass__": "Candidate.Candidate", "name": "Barack Obama"}]'
#        foo = loads(response)
#        self.mainPanel.add(HTML(foo))
#        self.mainPanel.add(HTML("not working %s"  % 12 ))#loads(response)))#, object_hook=self.dict_to_object)))
#        bar = loads('["foo", {"bar":["baz", null, 1.0, 2]}]', object_hook=tester)
#        self.mainPanel.add(HTML(bar))
#        self.status.setText(request_info.method)
    
    def onRemoteError(self):
        pass
        
class JSONService(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, "http://127.0.0.1:8000/test-service/", ["passBallot", "echo", "reverse", "uppercase", "lowercase", "nonexistant"])        

class RootPanelListener(RootPanelCls, KeyboardHandler):
    def __init__(self, Parent, *args, **kwargs):
        self.Parent = Parent
        self.focussed = False
        self.Parent.setFocus(False)
        RootPanelCls.__init__(self, *args, **kwargs)
        KeyboardHandler.__init__(self)
        
        self.addKeyboardListener(self)
        
    def onKeyDown(self, sender, keyCode, modifiers = None):
        app.onKeyPress(sender, keyCode, modifiers)


            
if __name__ == '__main__':
#    pyjd.setup("public/Hello.html?fred=foo#me")
    app = pjBallot()
    app.onModuleLoad()
