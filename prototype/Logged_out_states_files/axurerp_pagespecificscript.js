for(var i = 0; i < 113; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u77', 'pd1u77','none','',500,'none','',500);

	SetPanelState('u72', 'pd1u72','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u72', 'pd1u72','none','',500,'none','',500);

	SetPanelState('u77', 'pd2u77','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u80', function(e) {

if ((GetWidgetText('u80')) != ('')) {

	SetPanelState('u77', 'pd2u77','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u77', 'pd0u77','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u80', function(e) {

if ((GetWidgetText('u80')) == ('')) {

	SetPanelState('u72', 'pd0u72','none','',500,'none','',500);

	SetPanelState('u77', 'pd0u77','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u72', 'pd0u72','none','',500,'none','',500);

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';
u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if ((GetWidgetText('u12')) == ('')) {

	SetPanelState('u9', 'pd1u9','none','',500,'none','',500);

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u12', function(e) {

if ((GetWidgetText('u12')) != ('')) {

	SetPanelState('u9', 'pd2u9','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u9', 'pd0u9','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u12', function(e) {

if ((GetWidgetText('u12')) == ('')) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

	SetPanelState('u9', 'pd0u9','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';
u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u25', function(e) {

if ((GetWidgetText('u25')) != ('')) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u25', function(e) {

if ((GetWidgetText('u25')) == ('')) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u106'] = 'top';
u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u104', 'pd1u104','none','',500,'none','',500);

	SetPanelState('u99', 'pd1u99','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u99', 'pd1u99','none','',500,'none','',500);

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u107', function(e) {

if ((GetWidgetText('u107')) != ('')) {

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u107', function(e) {

if ((GetWidgetText('u107')) == ('')) {

	SetPanelState('u99', 'pd0u99','none','',500,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u99', 'pd0u99','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';
u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

	SetPanelState('u27', 'pd1u27','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u27', 'pd1u27','none','',500,'none','',500);

	SetPanelState('u32', 'pd2u32','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u35', function(e) {

if ((GetWidgetText('u35')) != ('')) {

	SetPanelState('u32', 'pd2u32','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u35', function(e) {

if ((GetWidgetText('u35')) == ('')) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';
u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u94', 'pd1u94','none','',500,'none','',500);

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

	SetPanelState('u94', 'pd2u94','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u97', function(e) {

if ((GetWidgetText('u97')) != ('')) {

	SetPanelState('u94', 'pd2u94','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u94', 'pd0u94','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u97', function(e) {

if ((GetWidgetText('u97')) == ('')) {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

	SetPanelState('u94', 'pd0u94','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

}
});
gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';
u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u49', 'pd1u49','none','',500,'none','',500);

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

	SetPanelState('u49', 'pd2u49','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u52', function(e) {

if ((GetWidgetText('u52')) != ('')) {

	SetPanelState('u49', 'pd2u49','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u52', function(e) {

if ((GetWidgetText('u52')) == ('')) {

	SetPanelState('u44', 'pd0u44','none','',500,'none','',500);

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u44', 'pd0u44','none','',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';
u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if ((GetFocusedWidgetText()) == ('')) {

	SetPanelState('u59', 'pd1u59','none','',500,'none','',500);

	SetPanelState('u54', 'pd1u54','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u54', 'pd1u54','none','',500,'none','',500);

	SetPanelState('u59', 'pd2u59','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u62', function(e) {

if ((GetWidgetText('u62')) != ('')) {

	SetPanelState('u59', 'pd2u59','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u59', 'pd0u59','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u62', function(e) {

if ((GetWidgetText('u62')) == ('')) {

	SetPanelState('u54', 'pd0u54','none','',500,'none','',500);

	SetPanelState('u59', 'pd0u59','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u54', 'pd0u54','none','',500,'none','',500);

}
});
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';