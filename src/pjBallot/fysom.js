/* start module: fysom */
$pyjs.loaded_modules['fysom'] = function (__mod_name__) {
	if($pyjs.loaded_modules['fysom'].__was_initialized__) return $pyjs.loaded_modules['fysom'];
	var $m = $pyjs.loaded_modules["fysom"];
	$m.__repr__ = function() { return "<module: fysom>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'fysom';
	$m.__name__ = __mod_name__;


	$m['__author__'] = 'Mansour';
	$m['__copyright__'] = 'Copyright 2011, Mansour and Jake Gordon';
	$m['__credits__'] = $p['list'](['Mansour', 'Jake Gordon']);
	$m['__license__'] = 'MIT';
	$m['__version__'] = '1.0';
	$m['__maintainer__'] = 'Mansour';
	$m['__email__'] = 'mansour@oxplot.com';
	$m['FysomError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FysomError', $p['tuple']($bases), $data);
	})();
	$m['Fysom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		$method = $pyjs__bind_method2('__init__', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}

			self['_apply'](cfg);
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isstate', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			return $p['op_eq']($p['getattr'](self, 'current'), state);
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['isstate'] = $method;
		$method = $pyjs__bind_method2('can', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and3,$and2;
			return ($p['bool']($and1=$p['getattr'](self, '_map').__contains__(event))?($p['bool']($and2=$p['getattr'](self, '_map').__getitem__(event).__contains__($p['getattr'](self, 'current')))?!$p['bool']($p['hasattr'](self, 'transition')):$and2):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['can'] = $method;
		$method = $pyjs__bind_method2('cannot', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			return !$p['bool'](self['can'](event));
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['cannot'] = $method;
		$method = $pyjs__bind_method2('_apply', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}
			var $iter3_type,$iter4_type,$iter4_iter,$iter3_idx,$iter2_iter,init,add,$iter3_iter,events,$iter2_type,$and4,$and5,callbacks,$iter2_idx,$iter3_array,tmap,$iter2_nextval,e,name,$iter4_nextval,$iter4_idx,$iter4_array,$iter3_nextval,$iter2_array;
			init = ($p['bool'](cfg.__contains__('initial'))? (cfg.__getitem__('initial')) : (null));
			if ($p['bool']($p['isinstance'](init, $p['basestring']))) {
				init = $p['dict']([['state', init]]);
			}
			events = ($p['bool'](cfg.__contains__('events'))? (cfg.__getitem__('events')) : ($p['list']([])));
			callbacks = ($p['bool'](cfg.__contains__('callbacks'))? (cfg.__getitem__('callbacks')) : ($p['dict']([])));
			tmap = $p['dict']([]);
			self._map = tmap;
			add = function(e) {
				var src,$iter1_nextval,$iter1_type,$iter1_iter,s,$iter1_array,$iter1_idx;
				src = ($p['bool']($p['isinstance'](e.__getitem__('src'), $p['basestring']))? ($p['list']([e.__getitem__('src')])) : (e.__getitem__('src')));
				if ($p['bool'](!tmap.__contains__(e.__getitem__('name')))) {
					tmap.__setitem__(e.__getitem__('name'), $p['dict']([]));
				}
				$iter1_iter = src;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					s = $iter1_nextval.$nextval;
					tmap.__getitem__(e.__getitem__('name')).__setitem__(s, e.__getitem__('dst'));
				}
				return null;
			};
			add.__name__ = 'add';

			add.__bind_type__ = 0;
			add.__args__ = [null,null,['e']];
			if ($p['bool'](init)) {
				if ($p['bool'](!init.__contains__('event'))) {
					init.__setitem__('event', 'startup');
				}
				add($p['dict']([['name', init.__getitem__('event')], ['src', 'none'], ['dst', init.__getitem__('state')]]));
			}
			$iter2_iter = events;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				e = $iter2_nextval.$nextval;
				add(e);
			}
			$iter3_iter = tmap;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				name = $iter3_nextval.$nextval;
				$p['setattr'](self, name, self['_build_event'](name));
			}
			$iter4_iter = callbacks;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				name = $iter4_nextval.$nextval;
				$p['setattr'](self, name, callbacks.__getitem__(name));
			}
			self.current = 'none';
			if ($p['bool'](($p['bool']($and4=init)?!init.__contains__('defer'):$and4))) {
				$p['getattr'](self, init.__getitem__('event'))();
			}
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['_apply'] = $method;
		$method = $pyjs__bind_method2('_build_event', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var fn;
			fn = function() {
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}
				var $iter5_nextval,src,$iter5_idx,e,_tran,$iter5_array,dst,$iter5_iter,$iter5_type,k;
				if ($p['bool']($p['hasattr'](self, 'transition'))) {
					throw ($m['FysomError']($p['sprintf']('event %s inappropriate because previous transition did not complete', event)));
				}
				if ($p['bool'](!$p['bool'](self['can'](event)))) {
					throw ($m['FysomError']($p['sprintf']('event %s inappropriate in current state %s', $p['tuple']([event, $p['getattr'](self, 'current')]))));
				}
				src = $p['getattr'](self, 'current');
				dst = $p['getattr'](self, '_map').__getitem__(event).__getitem__(src);
				$m['_e_obj'] = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'fysom';
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('_e_obj', $p['tuple']($bases), $data);
				})();
				e = $m['_e_obj']();
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([self, event, src, dst]), 4, null);
				e.fsm = $tupleassign1[0];
				e.event = $tupleassign1[1];
				e.src = $tupleassign1[2];
				e.dst = $tupleassign1[3];
				$iter5_iter = kwargs;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					k = $iter5_nextval.$nextval;
					$p['setattr'](e, k, kwargs.__getitem__(k));
				}
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'current'), dst))) {
					if ($p['bool']($p['op_eq'](self['_before_event'](e), false))) {
						return null;
					}
					_tran = function() {

						$p['delattr'](self, 'transition');
						self.current = dst;
						self['_enter_state'](e);
						self['_change_state'](e);
						self['_after_event'](e);
						return null;
					};
					_tran.__name__ = '_tran';

					_tran.__bind_type__ = 0;
					_tran.__args__ = [null,null];
					self.transition = _tran;
				}
				if ($p['bool'](!$p['op_eq'](self['_leave_state'](e), false))) {
					if ($p['bool']($p['hasattr'](self, 'transition'))) {
						self['transition']();
					}
				}
				return null;
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,['kwargs']];
			return fn;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_build_event'] = $method;
		$method = $pyjs__bind_method2('_before_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $add2,$add1,fnname;
			fnname = $p['__op_add']($add1='onbefore',$add2=$p['getattr'](e, 'event'));
			if ($p['bool']($p['hasattr'](self, fnname))) {
				return $p['getattr'](self, fnname)(e);
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_before_event'] = $method;
		$method = $pyjs__bind_method2('_after_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$iter6_idx,$iter6_type,$add3,$iter6_array,$add6,$add4,$add5,$iter6_iter,$iter6_nextval;
			$iter6_iter = $p['list']([$p['__op_add']($add3='onafter',$add4=$p['getattr'](e, 'event')), $p['__op_add']($add5='on',$add6=$p['getattr'](e, 'event'))]);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				fnname = $iter6_nextval.$nextval;
				if ($p['bool']($p['hasattr'](self, fnname))) {
					return $p['getattr'](self, fnname)(e);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_after_event'] = $method;
		$method = $pyjs__bind_method2('_leave_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $add8,fnname,$add7;
			fnname = $p['__op_add']($add7='onleave',$add8=$p['getattr'](e, 'src'));
			if ($p['bool']($p['hasattr'](self, fnname))) {
				return $p['getattr'](self, fnname)(e);
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_leave_state'] = $method;
		$method = $pyjs__bind_method2('_enter_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$iter7_nextval,$add9,$iter7_iter,$iter7_array,$add10,$add11,$add12,$iter7_idx,$iter7_type;
			$iter7_iter = $p['list']([$p['__op_add']($add9='onenter',$add10=$p['getattr'](e, 'dst')), $p['__op_add']($add11='on',$add12=$p['getattr'](e, 'dst'))]);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				fnname = $iter7_nextval.$nextval;
				if ($p['bool']($p['hasattr'](self, fnname))) {
					return $p['getattr'](self, fnname)(e);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_enter_state'] = $method;
		$method = $pyjs__bind_method2('_change_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname;
			fnname = 'onchangestate';
			if ($p['bool']($p['hasattr'](self, fnname))) {
				return $p['getattr'](self, fnname)(e);
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_change_state'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Fysom', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
	}
	return this;
}; /* end fysom */


/* end module: fysom */


