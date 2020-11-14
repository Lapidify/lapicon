/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lapicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'laplinear-kombucha-dk-ln': '&#xe0001;',
		'laplinear-milk-box-dk-ln': '&#xe0002;',
		'laplinear-coffee-dk-ln': '&#xe0003;',
		'laplinear-wine-dk-ln': '&#xe0004;',
		'laplinear-wine1-dk-ln': '&#xe0005;',
		'laplinear-champagne-dk-ln': '&#xe0006;',
		'laplinear-martini-dk-ln': '&#xe0007;',
		'laplinear-cosmopolitan-dk-ln': '&#xe0008;',
		'laplinear-energy-drink-dk-ln': '&#xe0009;',
		'laplinear-cappuccino-dk-ln': '&#xe000a;',
		'laplinear-cola-dk-ln': '&#xe000b;',
		'laplinear-cola1-dk-ln': '&#xe000c;',
		'laplinear-matcha-dk-ln': '&#xe000d;',
		'laplinear-chocolate-milk-dk-ln': '&#xe000e;',
		'laplinear-mimosa-dk-ln': '&#xe000f;',
		'laplinear-soda-dk-ln': '&#xe0010;',
		'laplinear-sangria-dk-ln': '&#xe0011;',
		'laplinear-beer-dk-ln': '&#xe0012;',
		'laplinear-lemonade-dk-ln': '&#xe0013;',
		'laplinear-tea-dk-ln': '&#xe0014;',
		'laplinear-milkshake-dk-ln': '&#xe0015;',
		'laplinear-coffee1-dk-ln': '&#xe0016;',
		'laplinear-bubble-tea-dk-ln': '&#xe0017;',
		'laplinear-mojito-dk-ln': '&#xe0018;',
		'laplinear-latte-macchiato-dk-ln': '&#xe0019;',
		'laplinear-infusion-dk-ln': '&#xe001a;',
		'laplinear-horchata-dk-ln': '&#xe001b;',
		'laplinear-Ice-Tea-dk-ln': '&#xe001c;',
		'laplinear-smoothie-dk-ln': '&#xe001d;',
		'laplinear-beer1-dk-ln': '&#xe001e;',
		'laplinear-milk-dk-ln': '&#xe001f;',
		'laplinear-milkshake1-dk-ln': '&#xe0020;',
		'laplinear-strawberry-milk-dk-ln': '&#xe0021;',
		'laplinear-whiskey-dk-ln': '&#xe0022;',
		'laplinear-dalgona-dk-ln': '&#xe0023;',
		'laplinear-smoothie1-dk-ln': '&#xe0024;',
		'laplinear-iced-coffee-dk-ln': '&#xe0025;',
		'laplinear-juice-box-dk-ln': '&#xe0026;',
		'laplinear-cocktail-dk-ln': '&#xe0027;',
		'laplinear-soda1-dk-ln': '&#xe0028;',
		'laplinear-tea-pot-dk-ln': '&#xe0029;',
		'laplinear-punch-dk-ln': '&#xe002a;',
		'laplinear-ramune-dk-ln': '&#xe002b;',
		'laplinear-coconut-dk-ln': '&#xe002c;',
		'laplinear-margarita-dk-ln': '&#xe002d;',
		'laplinear-hot-chocolate-dk-ln': '&#xe002e;',
		'laplinear-water-dk-ln': '&#xe002f;',
		'laplinear-cocktail-shaker-dk-ln': '&#xe0030;',
		'laplinear-cream-soda-dk-ln': '&#xe0031;',
		'laplinear-orange-juice-dk-ln': '&#xe0032;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/laplinear-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
