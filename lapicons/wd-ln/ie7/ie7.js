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
		'laplinear-arch-wd-ln': '&#xb001;',
		'laplinear-couple-wd-ln': '&#xb002;',
		'laplinear-ring-wd-ln': '&#xb003;',
		'laplinear-table-wd-ln': '&#xb004;',
		'laplinear-cake-wd-ln': '&#xb005;',
		'laplinear-bride-dress-wd-ln': '&#xb006;',
		'laplinear-camera-wd-ln': '&#xb007;',
		'laplinear-menu-wd-ln': '&#xb008;',
		'laplinear-rings-wd-ln': '&#xb009;',
		'laplinear-carriage-wd-ln': '&#xb00a;',
		'laplinear-gift-wd-ln': '&#xb00b;',
		'laplinear-certificate-wd-ln': '&#xb00c;',
		'laplinear-invitation-wd-ln': '&#xb00d;',
		'laplinear-ring1-wd-ln': '&#xb00e;',
		'laplinear-couple1-wd-ln': '&#xb00f;',
		'laplinear-groom-suit-wd-ln': '&#xb010;',
		'laplinear-bells-wd-ln': '&#xb011;',
		'laplinear-honey-moon-wd-ln': '&#xb012;',
		'laplinear-champagne-wd-ln': '&#xb013;',
		'laplinear-bouquet-wd-ln': '&#xb014;',
		'laplinear-bride-wd-ln': '&#xb015;',
		'laplinear-groom-wd-ln': '&#xb016;',
		'laplinear-dance-floor-wd-ln': '&#xb017;',
		'laplinear-balloon-wd-ln': '&#xb018;',
		'laplinear-viola-wd-ln': '&#xb019;',
		'laplinear-calendar-wd-ln': '&#xb01a;',
		'laplinear-wedding-car-wd-ln': '&#xb01b;',
		'laplinear-location-wd-ln': '&#xb01c;',
		'laplinear-couple2-wd-ln': '&#xb01d;',
		'laplinear-romantic-dinner-wd-ln': '&#xb01e;',
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
