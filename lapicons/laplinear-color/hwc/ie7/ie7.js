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
		el.innerHTML = '<span style="font-family: \'laplinear-color\'">' + entity + '</span>' + html;
	}
	var icons = {
		'laplinear-color-scientist-hwc': '&#xa0001;',
		'laplinear-color-werewolf-hwc': '&#xa001f;',
		'laplinear-color-pumpkin-hwc': '&#xa0034;',
		'laplinear-color-nurse-hwc': '&#xa004b;',
		'laplinear-color-magician-hwc': '&#xa0068;',
		'laplinear-color-unicorn-hwc': '&#xa0085;',
		'laplinear-color-wrestler-hwc': '&#xa009d;',
		'laplinear-color-gnome-hwc': '&#xa00ba;',
		'laplinear-color-cowboy-hwc': '&#xa00d4;',
		'laplinear-color-clown-hwc': '&#xa00f2;',
		'laplinear-color-scarecrow-hwc': '&#xa0110;',
		'laplinear-color-fairy-hwc': '&#xa012f;',
		'laplinear-color-astronaut-hwc': '&#xa0143;',
		'laplinear-color-glasses-hwc': '&#xa0155;',
		'laplinear-color-prisioner-hwc': '&#xa0171;',
		'laplinear-color-viking-hwc': '&#xa018a;',
		'laplinear-color-nun-hwc': '&#xa01a2;',
		'laplinear-color-mummy-hwc': '&#xa01b8;',
		'laplinear-color-knight-hwc': '&#xa01c7;',
		'laplinear-color-harlequin-hwc': '&#xa01de;',
		'laplinear-color-princess-hwc': '&#xa020a;',
		'laplinear-color-indian-woman-hwc': '&#xa0224;',
		'laplinear-color-pirate-hwc': '&#xa023d;',
		'laplinear-color-zombie-hwc': '&#xa0257;',
		'laplinear-color-skeleton-hwc': '&#xa0271;',
		'laplinear-color-cat-hwc': '&#xa0287;',
		'laplinear-color-wizard-hwc': '&#xa029f;',
		'laplinear-color-ghost-hwc': '&#xa02bd;',
		'laplinear-color-firefighter-hwc': '&#xa02d2;',
		'laplinear-color-troglodyte-hwc': '&#xa02ea;',
		'laplinear-color-rat-hwc': '&#xa0306;',
		'laplinear-color-catrina-hwc': '&#xa0320;',
		'laplinear-color-monster-hwc': '&#xa0340;',
		'laplinear-color-ghost1-hwc': '&#xa0355;',
		'laplinear-color-witch-hwc': '&#xa0367;',
		'laplinear-color-serial-killer-hwc': '&#xa0384;',
		'laplinear-color-alien-hwc': '&#xa03ac;',
		'laplinear-color-doll-hwc': '&#xa03be;',
		'laplinear-color-devil-hwc': '&#xa03d8;',
		'laplinear-color-frankestein-hwc': '&#xa03ed;',
		'laplinear-color-bride-hwc': '&#xa0406;',
		'laplinear-color-ninja-hwc': '&#xa041c;',
		'laplinear-color-vampire-hwc': '&#xa0432;',
		'laplinear-color-thief-hwc': '&#xa044a;',
		'laplinear-color-angel-hwc': '&#xa045d;',
		'laplinear-color-mime-hwc': '&#xa0471;',
		'laplinear-color-little-red-riding-hood-hwc': '&#xa048f;',
		'laplinear-color-robot-hwc': '&#xa04a5;',
		'laplinear-color-superheroine-hwc': '&#xa04ba;',
		'laplinear-color-police-hwc': '&#xa04d5;',
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
