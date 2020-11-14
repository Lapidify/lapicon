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
		'laplinear-tomato-fr-ln': '&#xa001;',
		'laplinear-lime-fr-ln': '&#xa002;',
		'laplinear-cabbage-fr-ln': '&#xa003;',
		'laplinear-melon-fr-ln': '&#xa004;',
		'laplinear-broccoli-fr-ln': '&#xa005;',
		'laplinear-peas-fr-ln': '&#xa006;',
		'laplinear-radish-fr-ln': '&#xa007;',
		'laplinear-cucumber-fr-ln': '&#xa008;',
		'laplinear-eggplant-fr-ln': '&#xa009;',
		'laplinear-orange-fr-ln': '&#xa00a;',
		'laplinear-blueberry-fr-ln': '&#xa00b;',
		'laplinear-pomegranate-fr-ln': '&#xa00c;',
		'laplinear-artichoke-fr-ln': '&#xa00d;',
		'laplinear-corn-fr-ln': '&#xa00e;',
		'laplinear-strawberry-fr-ln': '&#xa00f;',
		'laplinear-Raspberry-fr-ln': '&#xa010;',
		'laplinear-lettuce-fr-ln': '&#xa011;',
		'laplinear-mango-fr-ln': '&#xa012;',
		'laplinear-leek-fr-ln': '&#xa013;',
		'laplinear-pumpkin1-fr-ln': '&#xa014;',
		'laplinear-tangerine-fr-ln': '&#xa015;',
		'laplinear-paprika-fr-ln': '&#xa016;',
		'laplinear-onion-fr-ln': '&#xa017;',
		'laplinear-cherry-fr-ln': '&#xa018;',
		'laplinear-potato-fr-ln': '&#xa019;',
		'laplinear-apple-fr-ln': '&#xa01a;',
		'laplinear-kiwi-fr-ln': '&#xa01b;',
		'laplinear-pepper-fr-ln': '&#xa01c;',
		'laplinear-banana-fr-ln': '&#xa01d;',
		'laplinear-ginger-fr-ln': '&#xa01e;',
		'laplinear-plum-fr-ln': '&#xa01f;',
		'laplinear-sweet-potato-fr-ln': '&#xa020;',
		'laplinear-papaya-fr-ln': '&#xa021;',
		'laplinear-olive-fr-ln': '&#xa022;',
		'laplinear-carrot-fr-ln': '&#xa023;',
		'laplinear-lemon-fr-ln': '&#xa024;',
		'laplinear-pineapple-fr-ln': '&#xa025;',
		'laplinear-apricot-fr-ln': '&#xa026;',
		'laplinear-peach-fr-ln': '&#xa027;',
		'laplinear-passion-fruit-fr-ln': '&#xa028;',
		'laplinear-coconut-fr-ln': '&#xa029;',
		'laplinear-chili-fr-ln': '&#xa02a;',
		'laplinear-garlic-fr-ln': '&#xa02b;',
		'laplinear-grapes-fr-ln': '&#xa02c;',
		'laplinear-avocado-fr-ln': '&#xa02d;',
		'laplinear-pear-fr-ln': '&#xa02e;',
		'laplinear-zucchini-fr-ln': '&#xa02f;',
		'laplinear-asparagus-fr-ln': '&#xa030;',
		'laplinear-mushroom-fr-ln': '&#xa031;',
		'laplinear-watermelon-fr-ln': '&#xa032;',
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
