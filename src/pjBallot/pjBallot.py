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



class pjBallot:
    
    def __init__(self):
        self.mainPanel = VerticalPanel()
        self.contest = HorizontalPanel()
        self.contest.setStyleName('words')
        self.selection = HorizontalPanel()
        self.selection.setStyleName('words')
        self.button = Button('test', self.test)
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
        h = HTML("<b />Contest: ")
        self.contest.add(h)
        l = HTML("<b />Selection: ")
        self.selection.add(l)
#        self.mainPanel.add(self.button)
        self.mainPanel.add(self.contest)
        self.mainPanel.add(self.selection)
        
        panel = FocusPanel(Widget=self.mainPanel)
        gp = RootPanelListener(panel)
        manageRootPanel(gp)
        RootPanel().add(panel)
        panel.setFocus(True)
        

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
