/*
 * jQuery Curry Plugin
 * version: 1.0 (20-FEB-2009)
 * author: Pierre Paridans
 * @requires jQuery v1.2 or later
 *
 * Inspired by the Prototype's function.curry() method
 *   http://www.prototypejs.org/api/function/curry
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {
	
$.curry = function(__method){
	if(!arguments.length > 1) { return __method; }
	var args = $.makeArray(arguments).slice(1,arguments.length);
	return function() {
		return __method.apply(this, args.concat($.makeArray(arguments)) );
	};
};

})(jQuery);
