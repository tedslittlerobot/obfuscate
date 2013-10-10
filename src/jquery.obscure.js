
(function ( $, window, document ) {

	defaults = defaults || {};

	/**
	 * Obfuscator - constructor
	 * @param HTMLElement element
	 * @param Object options
	 */
	var Obfuscator = function ( element, options ) {
		var self = this;

		/**
		 * _element
		 * The HTML Element attached to this instance
		 * @type HTMLElement
		 */
		Object.defineProperty( self, '_element', { value: element } );
		/**
		 * _defaults
		 * The default options
		 * @type Object
		 */
		Object.defineProperty( self, '_defaults', { value: defaults } );
		/**
		 * _name
		 * The name of the plugin
		 * @type String
		 */
		Object.defineProperty( self, '_name', { value: 'obfuscator' } );
		/**
		 * settings
		 * The instance settings
		 * @type Object
		 */
		Object.defineProperty( self, 'settings', {
			value: $.extend( {}, self._defaults, options ),
			writable: true,
			configurable: true
		} );

		self.init();
	};

	Obfuscator.prototype.init = {
			init: function () {
					console.log('xD');
			},
			yourOtherFunction: function () {
					// some logic
			}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn.obfuscate = function ( options ) {
			return this.each(function() {
					if ( !$.data( this, 'plugin_' + pluginName ) ) {
							$.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
					}
			});
	};

})( jQuery, window, document );
