﻿for(var i = 0; i < 112; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';
u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u88', 'pd1u88','none','',500,'none','',500);

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

	SetPanelState('u88', 'pd2u88','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u91', function(e) {

if ((GetWidgetText('u91')) != ('')) {

	SetPanelState('u88', 'pd2u88','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u88', 'pd0u88','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u91', function(e) {

if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

}
else
if ((GetWidgetText('u91')) == ('""')) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

	SetPanelState('u88', 'pd0u88','none','',500,'none','',500);

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u100'] = 'top';
u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

	SetPanelState('u93', 'pd1u93','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u93', 'pd1u93','none','',500,'none','',500);

	SetPanelState('u98', 'pd2u98','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u101', function(e) {

if ((GetWidgetText('u101')) != ('')) {

	SetPanelState('u98', 'pd2u98','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u101', function(e) {

if (true) {

	SetPanelState('u93', 'pd0u93','none','',500,'none','',500);

}
else
if ((GetWidgetText('u101')) == ('""')) {

	SetPanelState('u93', 'pd0u93','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';
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
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';
u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if ((GetWidgetText('u78')) == ('')) {

	SetPanelState('u75', 'pd1u75','none','',500,'none','',500);

	SetPanelState('u68', 'pd1u68','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u68', 'pd1u68','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u78', function(e) {

if ((GetWidgetText('u78')) != ('')) {

	SetPanelState('u75', 'pd2u75','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u75', 'pd0u75','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u78', function(e) {

if (true) {

	SetPanelState('u68', 'pd0u68','none','',500,'none','',500);

}
else
if ((GetWidgetText('u78')) == ('""')) {

	SetPanelState('u68', 'pd0u68','none','',500,'none','',500);

	SetPanelState('u75', 'pd0u75','none','',500,'none','',500);

}
});
