/* start module: sampleBallot */
$pyjs.loaded_modules['sampleBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sampleBallot'].__was_initialized__) return $pyjs.loaded_modules['sampleBallot'];
	var $m = $pyjs.loaded_modules["sampleBallot"];
	$m.__repr__ = function() { return "<module: sampleBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sampleBallot';
	$m.__name__ = __mod_name__;


	$m['Fysom'] = $p['___import___']('fysom.Fysom', null, null, false);
	$m['ParseModule'] = $p['___import___']('ParseModule', null);
	$m['p'] = $m['ParseModule']['Parser']('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt');
	$m['race'] = $m['p']['parse']();
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ParseModule']
*/
