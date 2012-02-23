
from pyjamas.ui.HTML import HTML
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.HTTPRequest import HTTPRequest

class SlideLoader:
    def __init__(self, panel):
        self.panel = panel

    def onCompletion(self, text):
        self.panel.setSlide(text)

    def onError(self, text, code):
        self.panel.onError(text, code)

    def onTimeout(self, text):
        self.panel.onTimeout(text)


class Slideshow:

    def onModuleLoad(self):
        self.slide = HTML()
        RootPanel().add(self.slide)

        HTTPRequest().asyncPost("test_slide.txt", "", SlideLoader(self))

    def setSlide(self, content):
        self.slide.setHTML("<pre>%s</pre>" % content)
        
    def onError(self, text, code):
        self.slide.setHTML(text + "<br />" + code)

if __name__ == '__main__':
    app = Slideshow()
    app.onModuleLoad()