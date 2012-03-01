/* start module: pjBallot */
$pyjs.loaded_modules['pjBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pjBallot'].__was_initialized__) return $pyjs.loaded_modules['pjBallot'];
	var $m = $pyjs.loaded_modules["pjBallot"];
	$m.__repr__ = function() { return "<module: pjBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pjBallot';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'pjBallot.py, line 1:\n    import pyjd # this is dummy in pyjs.';
	$m.__track_lines__[2] = 'pjBallot.py, line 2:\n    from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel';
	$m.__track_lines__[3] = 'pjBallot.py, line 3:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
	$m.__track_lines__[4] = 'pjBallot.py, line 4:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
	$m.__track_lines__[5] = 'pjBallot.py, line 5:\n    from pyjamas.ui.Button import Button';
	$m.__track_lines__[6] = 'pjBallot.py, line 6:\n    from pyjamas.ui.HTML import HTML';
	$m.__track_lines__[7] = 'pjBallot.py, line 7:\n    from pyjamas import Window';
	$m.__track_lines__[8] = 'pjBallot.py, line 8:\n    from pyjamas.ui import KeyboardListener';
	$m.__track_lines__[9] = 'pjBallot.py, line 9:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
	$m.__track_lines__[12] = 'pjBallot.py, line 12:\n    from pyjamas.ui.FocusPanel import FocusPanel';
	$m.__track_lines__[13] = 'pjBallot.py, line 13:\n    from pyjamas import DOM';
	$m.__track_lines__[15] = 'pjBallot.py, line 15:\n    import pygwt';
	$m.__track_lines__[16] = 'pjBallot.py, line 16:\n    from pyjamas.JSONService import JSONProxy';
	$m.__track_lines__[17] = 'pjBallot.py, line 17:\n    from pyjamas.ui.Label import Label';
	$m.__track_lines__[18] = 'pjBallot.py, line 18:\n    from pyjamas import JSONService';
	$m.__track_lines__[20] = 'pjBallot.py, line 20:\n    from ballotTree import Candidate, Race, Contest';
	$m.__track_lines__[21] = 'pjBallot.py, line 21:\n    from json import loads';
	$m.__track_lines__[22] = 'pjBallot.py, line 22:\n    from pyjamas.JSONService import JSONResponseTextHandler';
	$m.__track_lines__[25] = 'pjBallot.py, line 25:\n    def tester(d):';
	$m.__track_lines__[26] = 'pjBallot.py, line 26:\n    Window.alert("YAY")';
	$m.__track_lines__[27] = "pjBallot.py, line 27:\n    inst = 'yay'";
	$m.__track_lines__[28] = 'pjBallot.py, line 28:\n    return inst';
	$m.__track_lines__[31] = 'pjBallot.py, line 31:\n    class pjBallot:';
	$m.__track_lines__[33] = 'pjBallot.py, line 33:\n    def __init__(self):';
	$m.__track_lines__[34] = 'pjBallot.py, line 34:\n    self.mainPanel = VerticalPanel()';
	$m.__track_lines__[35] = 'pjBallot.py, line 35:\n    self.contest = HorizontalPanel()';
	$m.__track_lines__[36] = "pjBallot.py, line 36:\n    self.contest.setStyleName('words')";
	$m.__track_lines__[37] = 'pjBallot.py, line 37:\n    self.selection = HorizontalPanel()';
	$m.__track_lines__[38] = "pjBallot.py, line 38:\n    self.selection.setStyleName('words')";
	$m.__track_lines__[39] = "pjBallot.py, line 39:\n    self.button = Button('test', self.test)";
	$m.__track_lines__[40] = "pjBallot.py, line 40:\n    self.status = Label('hi')";
	$m.__track_lines__[41] = 'pjBallot.py, line 41:\n    self.x = 1';
	$m.__track_lines__[43] = 'pjBallot.py, line 43:\n    def test(self):';
	$m.__track_lines__[44] = 'pjBallot.py, line 44:\n    self.button.setText("No, really click me!")';
	$m.__track_lines__[46] = "pjBallot.py, line 46:\n    self.contest.add(HTML('yay'))";
	$m.__track_lines__[48] = 'pjBallot.py, line 48:\n    def nextContest(self):';
	$m.__track_lines__[49] = 'pjBallot.py, line 49:\n    self.x += 1';
	$m.__track_lines__[50] = 'pjBallot.py, line 50:\n    self.contest.clear()';
	$m.__track_lines__[51] = "pjBallot.py, line 51:\n    self.contest.add(HTML('<b /> Contest: %d' % self.x))";
	$m.__track_lines__[53] = 'pjBallot.py, line 53:\n    def nextSelection(self):';
	$m.__track_lines__[54] = 'pjBallot.py, line 54:\n    self.x += 1';
	$m.__track_lines__[55] = 'pjBallot.py, line 55:\n    self.selection.clear()';
	$m.__track_lines__[56] = "pjBallot.py, line 56:\n    self.selection.add(HTML('<b /> Selection: %d' % self.x))";
	$m.__track_lines__[58] = 'pjBallot.py, line 58:\n    def onKeyDown(self, sender, keycode, modifiers):';
	$m.__track_lines__[59] = 'pjBallot.py, line 59:\n    pass';
	$m.__track_lines__[61] = 'pjBallot.py, line 61:\n    def onKeyUp(self, sender, keycode, modifiers):';
	$m.__track_lines__[62] = 'pjBallot.py, line 62:\n    pass';
	$m.__track_lines__[64] = 'pjBallot.py, line 64:\n    def onKeyPress(self, sender, keycode, modifiers):';
	$m.__track_lines__[65] = 'pjBallot.py, line 65:\n    DOM.eventPreventDefault(DOM.eventGetCurrentEvent()) #not needed';
	$m.__track_lines__[66] = 'pjBallot.py, line 66:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[67] = 'pjBallot.py, line 67:\n    self.nextContest()';
	$m.__track_lines__[68] = 'pjBallot.py, line 68:\n    if keycode == KeyboardListener.KEY_DOWN:';
	$m.__track_lines__[69] = 'pjBallot.py, line 69:\n    self.nextContest()';
	$m.__track_lines__[70] = 'pjBallot.py, line 70:\n    if keycode == KeyboardListener.KEY_LEFT:';
	$m.__track_lines__[71] = 'pjBallot.py, line 71:\n    self.nextSelection()';
	$m.__track_lines__[72] = 'pjBallot.py, line 72:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[73] = 'pjBallot.py, line 73:\n    self.nextSelection()';
	$m.__track_lines__[76] = 'pjBallot.py, line 76:\n    def onModuleLoad(self):';
	$m.__track_lines__[77] = 'pjBallot.py, line 77:\n    self.remote_py = JSONService()';
	$m.__track_lines__[78] = 'pjBallot.py, line 78:\n    h = HTML("<b />Contest: ")';
	$m.__track_lines__[79] = 'pjBallot.py, line 79:\n    self.contest.add(h)';
	$m.__track_lines__[80] = 'pjBallot.py, line 80:\n    l = HTML("<b />Selection: ")';
	$m.__track_lines__[81] = 'pjBallot.py, line 81:\n    self.selection.add(l)';
	$m.__track_lines__[83] = 'pjBallot.py, line 83:\n    self.mainPanel.add(self.contest)';
	$m.__track_lines__[84] = 'pjBallot.py, line 84:\n    self.mainPanel.add(self.selection)';
	$m.__track_lines__[85] = 'pjBallot.py, line 85:\n    self.mainPanel.add(self.status)';
	$m.__track_lines__[86] = 'pjBallot.py, line 86:\n    panel = FocusPanel(Widget=self.mainPanel)';
	$m.__track_lines__[87] = 'pjBallot.py, line 87:\n    gp = RootPanelListener(panel)';
	$m.__track_lines__[88] = 'pjBallot.py, line 88:\n    manageRootPanel(gp)';
	$m.__track_lines__[89] = 'pjBallot.py, line 89:\n    RootPanel().add(panel)';
	$m.__track_lines__[90] = 'pjBallot.py, line 90:\n    panel.setFocus(True)';
	$m.__track_lines__[92] = 'pjBallot.py, line 92:\n    self.remote_py.passBallot(self)';
	$m.__track_lines__[102] = 'pjBallot.py, line 102:\n    def dict_to_object(self,d):';
	$m.__track_lines__[103] = 'pjBallot.py, line 103:\n    Window.alert("Hello, AJAAAX!")';
	$m.__track_lines__[104] = "pjBallot.py, line 104:\n    self.mainPanel.add(HTML('whatevs: %s' % 12))";
	$m.__track_lines__[105] = "pjBallot.py, line 105:\n    if '__class__' in d:";
	$m.__track_lines__[108] = "pjBallot.py, line 108:\n    class_name = d.pop('__class__')";
	$m.__track_lines__[109] = "pjBallot.py, line 109:\n    module_name = d.pop('__module__')";
	$m.__track_lines__[110] = 'pjBallot.py, line 110:\n    module = __import__(module_name)';
	$m.__track_lines__[111] = "pjBallot.py, line 111:\n    print 'MODULE:', module";
	$m.__track_lines__[112] = 'pjBallot.py, line 112:\n    class_ = getattr(module.ballotTree, class_name) #because module was just audioBallot';
	$m.__track_lines__[113] = "pjBallot.py, line 113:\n    print 'CLASS:', class_";
	$m.__track_lines__[114] = "pjBallot.py, line 114:\n    args = dict( (key.encode('ascii'), value) for key, value in d.items())";
	$m.__track_lines__[115] = "pjBallot.py, line 115:\n    print 'INSTANCE ARGS:', args";
	$m.__track_lines__[116] = 'pjBallot.py, line 116:\n    inst = class_(**args)';
	$m.__track_lines__[118] = 'pjBallot.py, line 118:\n    inst = d';
	$m.__track_lines__[119] = 'pjBallot.py, line 119:\n    return inst';
	$m.__track_lines__[123] = 'pjBallot.py, line 123:\n    def onRemoteResponse(self, response, request_info):';
	$m.__track_lines__[124] = 'pjBallot.py, line 124:\n    race = response';
	$m.__track_lines__[125] = 'pjBallot.py, line 125:\n    name = race.works';
	$m.__track_lines__[126] = "pjBallot.py, line 126:\n    self.mainPanel.add(HTML('pleasework %s' % name))";
	$m.__track_lines__[139] = 'pjBallot.py, line 139:\n    def onRemoteError(self):';
	$m.__track_lines__[140] = 'pjBallot.py, line 140:\n    pass';
	$m.__track_lines__[142] = 'pjBallot.py, line 142:\n    class JSONService(JSONProxy):';
	$m.__track_lines__[143] = 'pjBallot.py, line 143:\n    def __init__(self):';
	$m.__track_lines__[144] = 'pjBallot.py, line 144:\n    JSONProxy.__init__(self, "http://127.0.0.1:8000/test-service/", ["passBallot", "echo", "reverse", "uppercase", "lowercase", "nonexistant"])';
	$m.__track_lines__[146] = 'pjBallot.py, line 146:\n    class RootPanelListener(RootPanelCls, KeyboardHandler):';
	$m.__track_lines__[147] = 'pjBallot.py, line 147:\n    def __init__(self, Parent, *args, **kwargs):';
	$m.__track_lines__[148] = 'pjBallot.py, line 148:\n    self.Parent = Parent';
	$m.__track_lines__[149] = 'pjBallot.py, line 149:\n    self.focussed = False';
	$m.__track_lines__[150] = 'pjBallot.py, line 150:\n    self.Parent.setFocus(False)';
	$m.__track_lines__[151] = 'pjBallot.py, line 151:\n    RootPanelCls.__init__(self, *args, **kwargs)';
	$m.__track_lines__[152] = 'pjBallot.py, line 152:\n    KeyboardHandler.__init__(self)';
	$m.__track_lines__[154] = 'pjBallot.py, line 154:\n    self.addKeyboardListener(self)';
	$m.__track_lines__[156] = 'pjBallot.py, line 156:\n    def onKeyDown(self, sender, keyCode, modifiers = None):';
	$m.__track_lines__[157] = 'pjBallot.py, line 157:\n    app.onKeyPress(sender, keyCode, modifiers)';
	$m.__track_lines__[161] = "pjBallot.py, line 161:\n    if __name__ == '__main__':";
	$m.__track_lines__[163] = 'pjBallot.py, line 163:\n    app = pjBallot()';
	$m.__track_lines__[164] = 'pjBallot.py, line 164:\n    app.onModuleLoad()';


	$pyjs.track.module='pjBallot';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=3;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=5;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=6;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=7;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=8;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=9;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=12;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=13;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=17;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONService'] = $p['___import___']('pyjamas.JSONService', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=20;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['loads'] = $p['___import___']('json.loads', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=22;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONResponseTextHandler'] = $p['___import___']('pyjamas.JSONService.JSONResponseTextHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=25;
	$m['tester'] = function(d) {
		var inst;
		$pyjs.track={module:'pjBallot',lineno:25};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pjBallot';
		$pyjs.track.lineno=25;
		$pyjs.track.lineno=26;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Window']['alert']('YAY');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=27;
		inst = 'yay';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=28;
		var $pyjs__ret = inst;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['tester'].__name__ = 'tester';

	$m['tester'].__bind_type__ = 0;
	$m['tester'].__args__ = [null,null,['d']];
	$pyjs.track.lineno=31;
	$m['pjBallot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=33;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:33};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=34;
			self.mainPanel = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['VerticalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=35;
			self.contest = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=36;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=37;
			self.selection = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=38;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs.track.lineno=39;
			self.button = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Button']('test', $p['getattr'](self, 'test'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.track.lineno=40;
			self.status = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Label']('hi');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=41;
			self.x = 1;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=43;
		$method = $pyjs__bind_method2('test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:43};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=44;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['button']['setText']('No, really click me!');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.track.lineno=46;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('yay');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test'] = $method;
		$pyjs.track.lineno=48;
		$method = $pyjs__bind_method2('nextContest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			$pyjs.track={module:'pjBallot', lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			self.x = $p['__op_add']($add1=$p['getattr'](self, 'x'),$add2=1);
			$pyjs.track.lineno=50;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs.track.lineno=51;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Contest: %d', $p['getattr'](self, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextContest'] = $method;
		$pyjs.track.lineno=53;
		$method = $pyjs__bind_method2('nextSelection', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,$add4;
			$pyjs.track={module:'pjBallot', lineno:53};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=54;
			self.x = $p['__op_add']($add3=$p['getattr'](self, 'x'),$add4=1);
			$pyjs.track.lineno=55;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs.track.lineno=56;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %d', $p['getattr'](self, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextSelection'] = $method;
		$pyjs.track.lineno=58;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=59;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=61;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:61};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=62;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs.track.lineno=64;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:64};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=65;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventPreventDefault']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=66;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
				$pyjs.track.lineno=67;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			}
			$pyjs.track.lineno=68;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs.track.lineno=69;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			$pyjs.track.lineno=72;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs.track.lineno=73;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$pyjs.track.lineno=76;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var h,gp,l,panel;
			$pyjs.track={module:'pjBallot', lineno:76};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=77;
			self.remote_py = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONService']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs.track.lineno=78;
			h = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b />Contest: ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs.track.lineno=79;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add'](h);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs.track.lineno=80;
			l = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b />Selection: ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=81;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['add'](l);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=83;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'contest'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=84;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'selection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=85;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'status'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs.track.lineno=86;
			panel = (function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$p['getattr'](self, 'mainPanel')}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs.track.lineno=87;
			gp = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof RootPanelListener == "undefined"?$m.RootPanelListener:RootPanelListener)(panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs.track.lineno=88;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['manageRootPanel'](gp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs.track.lineno=89;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m['RootPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['add'](panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs.track.lineno=90;
			(function(){try{try{$pyjs.in_try_except += 1;
			return panel['setFocus'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs.track.lineno=92;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['remote_py']['passBallot'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$pyjs.track.lineno=102;
		$method = $pyjs__bind_method2('dict_to_object', function(d) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				d = arguments[1];
			}
			var value,$iter1_nextval,$iter1_idx,class_name,args,module,$iter1_iter,class_,inst,$iter1_array,key,module_name,$iter1_type;
			$pyjs.track={module:'pjBallot', lineno:102};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=102;
			$pyjs.track.lineno=103;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['Window']['alert']('Hello, AJAAAX!');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs.track.lineno=104;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('whatevs: %s', 12);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs.track.lineno=105;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](d.__contains__('__class__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
				$pyjs.track.lineno=108;
				class_name = (function(){try{try{$pyjs.in_try_except += 1;
				return d['pop']('__class__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs.track.lineno=109;
				module_name = (function(){try{try{$pyjs.in_try_except += 1;
				return d['pop']('__module__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs.track.lineno=110;
				module = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__import__'](module_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs.track.lineno=111;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['MODULE:', module], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs.track.lineno=112;
				class_ = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr']($p['getattr'](module, 'ballotTree'), class_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs.track.lineno=113;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['CLASS:', class_], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs.track.lineno=114;
				args = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter1_iter = d['items']();
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								var $tupleassign1 = $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
								key = $tupleassign1[0];
								value = $tupleassign1[1];
								$yield_value = $p['tuple']([key['encode']('ascii'), value]);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs.track.lineno=115;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['INSTANCE ARGS:', args], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs.track.lineno=116;
				inst = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, class_, null, args, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			else {
				$pyjs.track.lineno=118;
				inst = d;
			}
			$pyjs.track.lineno=119;
			$pyjs.track.lineno=119;
			var $pyjs__ret = inst;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['d']]);
		$cls_definition['dict_to_object'] = $method;
		$pyjs.track.lineno=123;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var race,name;
			$pyjs.track={module:'pjBallot', lineno:123};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=123;
			$pyjs.track.lineno=124;
			race = response;
			$pyjs.track.lineno=125;
			name = $p['getattr'](race, 'works');
			$pyjs.track.lineno=126;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('pleasework %s', name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$pyjs.track.lineno=139;
		$method = $pyjs__bind_method2('onRemoteError', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:139};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=139;
			$pyjs.track.lineno=140;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRemoteError'] = $method;
		$pyjs.track.lineno=31;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('pjBallot', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=142;
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=143;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:143};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=143;
			$pyjs.track.lineno=144;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONProxy']['__init__'](self, 'http://127.0.0.1:8000/test-service/', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['passBallot', 'echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=142;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=146;
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=147;
		$method = $pyjs__bind_method2('__init__', function(Parent) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				Parent = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Parent != 'undefined') {
					if (Parent !== null && typeof Parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Parent;
						Parent = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs.track={module:'pjBallot', lineno:147};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=147;
			$pyjs.track.lineno=148;
			self.Parent = Parent;
			$pyjs.track.lineno=149;
			self.focussed = false;
			$pyjs.track.lineno=150;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['Parent']['setFocus'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs.track.lineno=151;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs.track.lineno=152;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['KeyboardHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs.track.lineno=154;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['addKeyboardListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=156;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof modifiers == 'undefined') modifiers=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pjBallot', lineno:156};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=156;
			$pyjs.track.lineno=157;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.app['onKeyPress'](sender, keyCode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=146;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=161;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
		$pyjs.track.lineno=163;
		$m['app'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['pjBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
		$pyjs.track.lineno=164;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['app']['onModuleLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
	}
	return this;
}; /* end pjBallot */


/* end module: pjBallot */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.DOM', 'pygwt', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'ballotTree.Candidate', 'ballotTree', 'ballotTree.Race', 'ballotTree.Contest', 'json.loads', 'json', 'pyjamas.JSONService.JSONResponseTextHandler']
*/
