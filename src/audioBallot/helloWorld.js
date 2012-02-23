/* start module: helloWorld */
$pyjs.loaded_modules['helloWorld'] = function (__mod_name__) {
	if($pyjs.loaded_modules['helloWorld'].__was_initialized__) return $pyjs.loaded_modules['helloWorld'];
	var $m = $pyjs.loaded_modules["helloWorld"];
	$m.__repr__ = function() { return "<module: helloWorld>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'helloWorld';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['x'] = 0;
	$m['greet'] = function(sender) {
		var $add2,r,y,$add1;
		$m['x'] = $p['__op_add']($add1=$m['x'],$add2=1);
		$m['RootPanel']()['add']($m['HTML']($p['sprintf']('Not in Kansas no more: %d', $m['x'])));
		y = $m['CheckBox']('yellow road');
		r = $m['CheckBox']('red road');
		$m['RootPanel']()['add'](y);
		$m['RootPanel']()['add'](r);
		return null;
	};
	$m['greet'].__name__ = 'greet';

	$m['greet'].__bind_type__ = 0;
	$m['greet'].__args__ = [null,null,['sender']];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/helloWorld.html?fred=foo#me');
		$m['b'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'panel'}, 'Click me', $m['greet']]);
		$m['h'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'helloworldwords'}, '<b>Helloo World</b> (html)']);
		$m['p'] = $m['HorizontalPanel']();
		$m['p']['add']($m['b']);
		$m['RootPanel']()['add']($m['p']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end helloWorld */


/* end module: helloWorld */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.Window', 'pygwt']
*/
