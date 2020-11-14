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
		'laplinear-kombucha-dk-ln': '&#xe900;',
		'laplinear-milk-box-dk-ln': '&#xe901;',
		'laplinear-coffee-dk-ln': '&#xe902;',
		'laplinear-wine-dk-ln': '&#xe903;',
		'laplinear-wine1-dk-ln': '&#xe904;',
		'laplinear-champagne-dk-ln': '&#xe905;',
		'laplinear-martini-dk-ln': '&#xe906;',
		'laplinear-cosmopolitan-dk-ln': '&#xe907;',
		'laplinear-energy-drink-dk-ln': '&#xe908;',
		'laplinear-cappuccino-dk-ln': '&#xe909;',
		'laplinear-cola-dk-ln': '&#xe90a;',
		'laplinear-cola1-dk-ln': '&#xe90b;',
		'laplinear-matcha-dk-ln': '&#xe90c;',
		'laplinear-chocolate-milk-dk-ln': '&#xe90d;',
		'laplinear-mimosa-dk-ln': '&#xe90e;',
		'laplinear-soda-dk-ln': '&#xe90f;',
		'laplinear-sangria-dk-ln': '&#xe910;',
		'laplinear-beer-dk-ln': '&#xe911;',
		'laplinear-lemonade-dk-ln': '&#xe912;',
		'laplinear-tea-dk-ln': '&#xe913;',
		'laplinear-milkshake-dk-ln': '&#xe914;',
		'laplinear-coffee1-dk-ln': '&#xe915;',
		'laplinear-bubble-tea-dk-ln': '&#xe916;',
		'laplinear-mojito-dk-ln': '&#xe917;',
		'laplinear-latte-macchiato-dk-ln': '&#xe918;',
		'laplinear-infusion-dk-ln': '&#xe919;',
		'laplinear-horchata-dk-ln': '&#xe91a;',
		'laplinear-Ice-Tea-dk-ln': '&#xe91b;',
		'laplinear-smoothie-dk-ln': '&#xe91c;',
		'laplinear-beer1-dk-ln': '&#xe91d;',
		'laplinear-milk-dk-ln': '&#xe91e;',
		'laplinear-milkshake1-dk-ln': '&#xe91f;',
		'laplinear-strawberry-milk-dk-ln': '&#xe920;',
		'laplinear-whiskey-dk-ln': '&#xe921;',
		'laplinear-dalgona-dk-ln': '&#xe922;',
		'laplinear-smoothie1-dk-ln': '&#xe923;',
		'laplinear-iced-coffee-dk-ln': '&#xe924;',
		'laplinear-juice-box-dk-ln': '&#xe925;',
		'laplinear-cocktail-dk-ln': '&#xe926;',
		'laplinear-soda1-dk-ln': '&#xe927;',
		'laplinear-tea-pot-dk-ln': '&#xe928;',
		'laplinear-punch-dk-ln': '&#xe929;',
		'laplinear-ramune-dk-ln': '&#xe92a;',
		'laplinear-coconut-dk-ln': '&#xe92b;',
		'laplinear-margarita-dk-ln': '&#xe92c;',
		'laplinear-hot-chocolate-dk-ln': '&#xe92d;',
		'laplinear-water-dk-ln': '&#xe92e;',
		'laplinear-cocktail-shaker-dk-ln': '&#xe92f;',
		'laplinear-cream-soda-dk-ln': '&#xe930;',
		'laplinear-orange-juice-dk-ln': '&#xe931;',
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
