import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.CheckBox import CheckBox
from pyjamas import Window

import pygwt

x = 0

def greet(sender):
    global x
    x += 1
    RootPanel().add(HTML("Not in Kansas no more: %d" %x))
    y = CheckBox("yellow road")
    r = CheckBox("red road")
    RootPanel().add(y)
    RootPanel().add(r)


if __name__ == '__main__':
    pyjd.setup("public/helloWorld.html?fred=foo#me")
    b = Button("Click me", greet, StyleName='panel')
    h = HTML("<b>Helloo World</b> (html)", StyleName='helloworldwords')
#    l = Label("Hello World (label)", StyleName='teststyle')
#    base = HTML("Hello from %s" % pygwt.getModuleBaseURL(),
#                                  StyleName='teststyle')
    p = HorizontalPanel()
    p.add(b)
#    p.add(h)
    RootPanel().add(p)
#    RootPanel().add(l)
#    RootPanel().add(base)
    pyjd.run()