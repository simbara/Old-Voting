/* start module: Candidate */
$pyjs.loaded_modules['Candidate'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Candidate'].__was_initialized__) return $pyjs.loaded_modules['Candidate'];
	var $m = $pyjs.loaded_modules["Candidate"];
	$m.__repr__ = function() { return "<module: Candidate>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Candidate';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[8] = 'Candidate.py, line 8:\n    self.name = name';
	$m.__track_lines__[1] = "Candidate.py, line 1:\n    '''";
	$m.__track_lines__[6] = 'Candidate.py, line 6:\n    class Candidate(object):';
	$m.__track_lines__[7] = 'Candidate.py, line 7:\n    def __init__(self, name):';


	$pyjs.track.module='Candidate';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=6;
	$m['Candidate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Candidate';
		$pyjs.track.lineno=7;
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$pyjs.track={module:'Candidate', lineno:7};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='Candidate';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=8;
			self.$$name = name;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=6;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Candidate', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Candidate */


/* end module: Candidate */


