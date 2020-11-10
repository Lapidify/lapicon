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
		'lapdual-badge-sh': '&#xc0001;',
		'lapdual-shopping-bag-sh': '&#xc0004;',
		'lapdual-t-shirt-sh': '&#xc0009;',
		'lapdual-sale-sh': '&#xc000b;',
		'lapdual-money-sh': '&#xc0011;',
		'lapdual-calculator-sh': '&#xc0014;',
		'lapdual-box-sh': '&#xc0019;',
		'lapdual-star-sh': '&#xc001d;',
		'lapdual-shopping-bag1-sh': '&#xc001f;',
		'lapdual-tie-sh': '&#xc0022;',
		'lapdual-badge1-sh': '&#xc0025;',
		'lapdual-calendar-sh': '&#xc0028;',
		'lapdual-watch-sh': '&#xc002d;',
		'lapdual-badge2-sh': '&#xc0030;',
		'lapdual-hat-sh': '&#xc0034;',
		'lapdual-t-shirt1-sh': '&#xc0036;',
		'lapdual-purse-sh': '&#xc0039;',
		'lapdual-backpack-sh': '&#xc003c;',
		'lapdual-shopping-tag-sh': '&#xc003f;',
		'lapdual-chat-sh': '&#xc0045;',
		'lapdual-sale1-sh': '&#xc004a;',
		'lapdual-shopping-bag2-sh': '&#xc0051;',
		'lapdual-shopping-basket-sh': '&#xc0056;',
		'lapdual-shopping-basket1-sh': '&#xc005b;',
		'lapdual-mobile-store-sh': '&#xc0060;',
		'lapdual-buy-sh': '&#xc0063;',
		'lapdual-shop-sh': '&#xc0068;',
		'lapdual-download-sh': '&#xc006c;',
		'lapdual-mobile-phone-sh': '&#xc0070;',
		'lapdual-pay-sh': '&#xc0075;',
		'lapdual-location-pin-sh': '&#xc007c;',
		'lapdual-box1-sh': '&#xc007f;',
		'lapdual-pay1-sh': '&#xc0082;',
		'lapdual-gift-card-sh': '&#xc0089;',
		'lapdual-sale2-sh': '&#xc0090;',
		'lapdual-shopping-cart-sh': '&#xc0097;',
		'lapdual-shopping-cart1-sh': '&#xc009d;',
		'lapdual-add-to-cart-sh': '&#xc00a3;',
		'lapdual-shopping-cart2-sh': '&#xc00a8;',
		'lapdual-hanger-sh': '&#xc00ac;',
		'lapdual-shopping-bag3-sh': '&#xc00af;',
		'lapdual-dollar-sh': '&#xc00b2;',
		'lapdual-wallet-sh': '&#xc00b7;',
		'lapdual-coin-sh': '&#xc00ba;',
		'lapdual-buy1-sh': '&#xc00bd;',
		'lapdual-open-sh': '&#xc00c2;',
		'lapdual-closed-sh': '&#xc00c9;',
		'lapdual-present-sh': '&#xc00d1;',
		'lapdual-credit-card-sh': '&#xc00d6;',
		'lapdual-shopping-bag4-sh': '&#xc00dc;',
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
		c = c.match(/lapdual-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
