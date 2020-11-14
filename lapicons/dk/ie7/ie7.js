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
		'laplinear-color-kombucha-dk': '&#xb0001;',
		'laplinear-color-milk-box-dk': '&#xb0015;',
		'laplinear-color-coffee-dk': '&#xb0027;',
		'laplinear-color-wine-dk': '&#xb0036;',
		'laplinear-color-wine1-dk': '&#xb0045;',
		'laplinear-color-champagne-dk': '&#xb0054;',
		'laplinear-color-martini-dk': '&#xb006b;',
		'laplinear-color-cosmopolitan-dk': '&#xb007a;',
		'laplinear-color-energy-drink-dk': '&#xb008a;',
		'laplinear-color-cappuccino-dk': '&#xb009c;',
		'laplinear-color-cola-dk': '&#xb00af;',
		'laplinear-color-cola1-dk': '&#xb00c1;',
		'laplinear-color-matcha-dk': '&#xb00d1;',
		'laplinear-color-chocolate-milk-dk': '&#xb00e4;',
		'laplinear-color-mimosa-dk': '&#xb00f8;',
		'laplinear-color-soda-dk': '&#xb0108;',
		'laplinear-color-sangria-dk': '&#xb0127;',
		'laplinear-color-beer-dk': '&#xb0145;',
		'laplinear-color-lemonade-dk': '&#xb015a;',
		'laplinear-color-tea-dk': '&#xb0175;',
		'laplinear-color-milkshake-dk': '&#xb0187;',
		'laplinear-color-coffee1-dk': '&#xb019c;',
		'laplinear-color-bubble-tea-dk': '&#xb01ab;',
		'laplinear-color-mojito-dk': '&#xb01c5;',
		'laplinear-color-latte-macchiato-dk': '&#xb01df;',
		'laplinear-color-infusion-dk': '&#xb01f0;',
		'laplinear-color-horchata-dk': '&#xb0204;',
		'laplinear-color-Ice-Tea-dk': '&#xb0215;',
		'laplinear-color-smoothie-dk': '&#xb0225;',
		'laplinear-color-beer1-dk': '&#xb023b;',
		'laplinear-color-milk-dk': '&#xb024f;',
		'laplinear-color-milkshake1-dk': '&#xb0262;',
		'laplinear-color-strawberry-milk-dk': '&#xb0275;',
		'laplinear-color-whiskey-dk': '&#xb028c;',
		'laplinear-color-dalgona-dk': '&#xb02a8;',
		'laplinear-color-smoothie1-dk': '&#xb02b6;',
		'laplinear-color-iced-coffee-dk': '&#xb02cf;',
		'laplinear-color-juice-box-dk': '&#xb02e0;',
		'laplinear-color-cocktail-dk': '&#xb02f7;',
		'laplinear-color-soda1-dk': '&#xb030f;',
		'laplinear-color-tea-pot-dk': '&#xb0320;',
		'laplinear-color-punch-dk': '&#xb0333;',
		'laplinear-color-ramune-dk': '&#xb0348;',
		'laplinear-color-coconut-dk': '&#xb0368;',
		'laplinear-color-margarita-dk': '&#xb037c;',
		'laplinear-color-hot-chocolate-dk': '&#xb038c;',
		'laplinear-color-water-dk': '&#xb03a1;',
		'laplinear-color-cocktail-shaker-dk': '&#xb03b4;',
		'laplinear-color-cream-soda-dk': '&#xb03c0;',
		'laplinear-color-orange-juice-dk': '&#xb03d2;',
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
		c = c.match(/laplinear-color-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
