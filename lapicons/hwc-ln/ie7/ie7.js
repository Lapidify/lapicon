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
		'laplinear-scientist-hwc-ln': '&#xd0001;',
		'laplinear-werewolf-hwc-ln': '&#xd0002;',
		'laplinear-pumpkin-hwc-ln': '&#xd0003;',
		'laplinear-nurse-hwc-ln': '&#xd0004;',
		'laplinear-magician-hwc-ln': '&#xd0005;',
		'laplinear-unicorn-hwc-ln': '&#xd0006;',
		'laplinear-wrestler-hwc-ln': '&#xd0007;',
		'laplinear-gnome-hwc-ln': '&#xd0008;',
		'laplinear-cowboy-hwc-ln': '&#xd0009;',
		'laplinear-clown-hwc-ln': '&#xd000a;',
		'laplinear-scarecrow-hwc-ln': '&#xd000b;',
		'laplinear-fairy-hwc-ln': '&#xd000c;',
		'laplinear-astronaut-hwc-ln': '&#xd000d;',
		'laplinear-glasses-hwc-ln': '&#xd000e;',
		'laplinear-prisioner-hwc-ln': '&#xd000f;',
		'laplinear-viking-hwc-ln': '&#xd0010;',
		'laplinear-nun-hwc-ln': '&#xd0011;',
		'laplinear-mummy-hwc-ln': '&#xd0012;',
		'laplinear-knight-hwc-ln': '&#xd0013;',
		'laplinear-harlequin-hwc-ln': '&#xd0014;',
		'laplinear-princess-hwc-ln': '&#xd0015;',
		'laplinear-indian-woman-hwc-ln': '&#xd0016;',
		'laplinear-pirate-hwc-ln': '&#xd0017;',
		'laplinear-zombie-hwc-ln': '&#xd0018;',
		'laplinear-skeleton-hwc-ln': '&#xd0019;',
		'laplinear-cat-hwc-ln': '&#xd001a;',
		'laplinear-wizard-hwc-ln': '&#xd001b;',
		'laplinear-ghost-hwc-ln': '&#xd001c;',
		'laplinear-firefighter-hwc-ln': '&#xd001d;',
		'laplinear-troglodyte-hwc-ln': '&#xd001e;',
		'laplinear-rat-hwc-ln': '&#xd001f;',
		'laplinear-catrina-hwc-ln': '&#xd0020;',
		'laplinear-monster-hwc-ln': '&#xd0021;',
		'laplinear-ghost1-hwc-ln': '&#xd0022;',
		'laplinear-witch-hwc-ln': '&#xd0023;',
		'laplinear-serial-killer-hwc-ln': '&#xd0024;',
		'laplinear-alien-hwc-ln': '&#xd0025;',
		'laplinear-doll-hwc-ln': '&#xd0026;',
		'laplinear-devil-hwc-ln': '&#xd0027;',
		'laplinear-frankestein-hwc-ln': '&#xd0028;',
		'laplinear-bride-hwc-ln': '&#xd0029;',
		'laplinear-ninja-hwc-ln': '&#xd002a;',
		'laplinear-vampire-hwc-ln': '&#xd002b;',
		'laplinear-thief-hwc-ln': '&#xd002c;',
		'laplinear-angel-hwc-ln': '&#xd002d;',
		'laplinear-mime-hwc-ln': '&#xd002e;',
		'laplinear-little-red-riding-hood-hwc-ln': '&#xd002f;',
		'laplinear-robot-hwc-ln': '&#xd0030;',
		'laplinear-superheroine-hwc-ln': '&#xd0031;',
		'laplinear-police-hwc-ln': '&#xd0032;',
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
