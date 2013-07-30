for(var i = 0; i < 95; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

function rdo7OnHeaderLoginClicked(e) {

}

function rdo10OnSignInWithOpenID(e) {

}

function rdo11OnSignInWithOpenIDClicked(e) {

if (true) {

rdo10OnSignInWithOpenID(e);

}

}
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';
u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u85', 'pd1u85','none','',500,'none','',500);

	SetPanelState('u80', 'pd1u80','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u80', 'pd1u80','none','',500,'none','',500);

	SetPanelState('u85', 'pd2u85','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u88', function(e) {

if ((GetWidgetText('u88')) != ('')) {

	SetPanelState('u85', 'pd2u85','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u85', 'pd0u85','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u88', function(e) {

if ((GetWidgetText('u88')) == ('')) {

	SetPanelState('u80', 'pd0u80','none','',500,'none','',500);

	SetPanelState('u85', 'pd0u85','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u80', 'pd0u80','none','',500,'none','',500);

}
});

$axure.eventManager.click('u90', function(e) {

if (true) {

rdo10OnSignInWithOpenID(e);

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';
$axure.eventManager.mouseover('u44', function(e) {
if (!IsTrueMouseOver('u44',e)) return;
if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u44', function(e) {
if (!IsTrueMouseOut('u44',e)) return;
if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u45', function(e) {
if (!IsTrueMouseOver('u45',e)) return;
if (true) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u45', function(e) {
if (!IsTrueMouseOut('u45',e)) return;
if (true) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u46', function(e) {
if (!IsTrueMouseOver('u46',e)) return;
if (true) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u46', function(e) {
if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u47', function(e) {
if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u47', function(e) {
if (!IsTrueMouseOut('u47',e)) return;
if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u48', function(e) {
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelState('u26', 'pd1u26','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u48', function(e) {
if (!IsTrueMouseOut('u48',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u49', function(e) {
if (!IsTrueMouseOver('u49',e)) return;
if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u49', function(e) {
if (!IsTrueMouseOut('u49',e)) return;
if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u57'] = 'top';u58.tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

rdo7OnHeaderLoginClicked(e);

}
});
gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u76'] = 'center';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

rdo11OnSignInWithOpenIDClicked(e);

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u79'] = 'top';