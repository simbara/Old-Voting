/* start module: slideshow */
$pyjs.loaded_modules['slideshow'] = function (__mod_name__) {
	if($pyjs.loaded_modules['slideshow'].__was_initialized__) return $pyjs.loaded_modules['slideshow'];
	var $m = $pyjs.loaded_modules["slideshow"];
	$m.__repr__ = function() { return "<module: slideshow>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'slideshow';
	$m.__name__ = __mod_name__;


	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['SlideLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'slideshow';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.panel = panel;
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['setSlide'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SlideLoader', $p['tuple']($bases), $data);
	})();
	$m['Slideshow'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'slideshow';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.slide = $m['HTML']();
			$m['RootPanel']()['add']($p['getattr'](self, 'slide'));
			$m['HTTPRequest']()['asyncPost']('test_slide.txt', '', $m['SlideLoader'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('setSlide', function(content) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				content = arguments[1];
			}

			self['slide']['setHTML']($p['sprintf']('<pre>%s</pre>', content));
			return null;
		}
	, 1, [null,null,['self'],['content']]);
		$cls_definition['setSlide'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}
			var $add2,$add3,$add1,$add4;
			self['slide']['setHTML']($p['__op_add']($add3=$p['__op_add']($add1=text,$add2='<br />'),$add4=code));
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Slideshow', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['app'] = $m['Slideshow']();
		$m['app']['onModuleLoad']();
	}
	return this;
}; /* end slideshow */


/* end module: slideshow */


/*
PYJS_DEPS: ['pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest']
*/
