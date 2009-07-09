;(function($) {
/*
 * jQuery titleActsAsHint Plugin
 * version: 1.0 (26-JUN-2009)
 * author: Pierre Paridans
 * @requires jQuery v1.3 or later
 *
 * Inspired by the Thomas Funch's Prototype helper defaultValueActsAsHint
 *   http://github.com/madrobby/prototype_helpers/tree
 *
 * Use the field's title attribute as an hint.
 * Do nothing if there is no title attribute or it is empty.
 * Only applicable for input[type=text] and textareas.
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
$.fn.extend({
	titleActsAsHint: function(){
		var hintClass = "hint";
		$(this).filter("input:text, textarea").each(function(i,el){
			el = $(el);
			if(!el.attr("title") || el.attr("title") == ""){
				return;
			}
			el.focus(function(){
				var el = $(this);
				if(el.attr("title") != el.attr("value")) return;
				el.removeClass(hintClass).attr("value","");
			}).blur(function(){
				var el = $(this);
				if( $.trim(el.attr("value")) != "") return;
				el.addClass(hintClass).attr("value",el.attr("title"));
			}).blur();
		});
		return this;
	}
});
	
})(jQuery);
