/* start module: ParseModule */
$pyjs.loaded_modules['ParseModule'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ParseModule'].__was_initialized__) return $pyjs.loaded_modules['ParseModule'];
	var $m = $pyjs.loaded_modules["ParseModule"];
	$m.__repr__ = function() { return "<module: ParseModule>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ParseModule';
	$m.__name__ = __mod_name__;


	$m['re'] = $p['___import___']('re', null);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$m['Parser'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ParseModule';
		$method = $pyjs__bind_method2('__init__', function(fileLoc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileLoc = arguments[1];
			}

			self.inFile = fileLoc;
			self.pCandidate = $m['re']['compile']('Candidate:\\s*(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
			self.pRace = $m['re']['compile']('Race:\\s*(.+):(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
			self.pContest = $m['re']['compile']('Contest:\\s*(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
			self.races = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['fileLoc']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('parse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var mCandidate,$iter1_nextval,$iter1_type,f,mRace,c,$iter1_iter,race,$iter1_array,contest,line,mContest,$iter1_idx;
			f = $p['open']($p['getattr'](self, 'inFile'), 'r');
			$iter1_iter = f;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				line = $iter1_nextval.$nextval;
				mCandidate = self['pCandidate']['match'](line);
				mRace = self['pRace']['match'](line);
				mContest = self['pContest']['match'](line);
				if ($p['bool'](mRace)) {
					race = $m['Race'](mRace['group'](1), mRace['group'](2));
					self['races']['append'](race);
				}
				else if ($p['bool'](mContest)) {
					contest = $m['Contest'](mContest['group'](1));
					race['selectionList']['append'](contest);
				}
				else if ($p['bool'](mCandidate)) {
					c = $m['Candidate'](mCandidate['group'](1));
					contest['selectionList']['append'](c);
				}
			}
			return race;
		}
	, 1, [null,null,['self']]);
		$cls_definition['parse'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Parser', $p['tuple']($bases), $data);
	})();
	$m['initTree'] = function() {
		var p,race;
		p = $m['Parser']('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt');
		race = p['parse']();
		return race;
	};
	$m['initTree'].__name__ = 'initTree';

	$m['initTree'].__bind_type__ = 0;
	$m['initTree'].__args__ = [null,null];
	$m['testTree'] = function() {
		var $iter2_nextval,$iter2_type,person,$iter2_iter,contest,$iter3_nextval,$iter3_array,$iter3_idx,p,$iter2_idx,race,$iter3_iter,$iter3_type,$iter2_array;
		p = $m['Parser']('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt');
		race = p['parse']();
		$p['printFunc'](['Race:', $p['getattr'](race, '$$name'), ', Instructions:', $p['getattr'](race, 'instructions')], 1);
		$iter2_iter = $p['getattr'](race, 'selectionList');
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			contest = $iter2_nextval.$nextval;
			$p['printFunc'](['\tContest:', $p['getattr'](contest, '$$name')], 1);
			$iter3_iter = $p['getattr'](contest, 'selectionList');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				person = $iter3_nextval.$nextval;
				$p['printFunc'](['\t\tCandidate:', $p['getattr'](person, '$$name')], 1);
			}
		}
		return null;
	};
	$m['testTree'].__name__ = 'testTree';

	$m['testTree'].__bind_type__ = 0;
	$m['testTree'].__args__ = [null,null];
	return this;
}; /* end ParseModule */


/* end module: ParseModule */


/*
PYJS_DEPS: ['re', 'ballotTree.Contest', 'ballotTree', 'ballotTree.Race', 'ballotTree.Candidate']
*/
