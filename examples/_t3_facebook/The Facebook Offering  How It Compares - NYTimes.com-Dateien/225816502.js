/* AG-develop_old 12.7.1-692 (2012-11-07 10:21:50 CET) */
rsinetsegs=['D08734_70010','D08734_70057','D08734_70747','H07707_11028','H07707_11044','H07707_11048','H07707_11074','D08734_72772','D08734_72773','H07707_11161','H07707_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['D08734_70010','D08734_70057','D08734_70747','H07707_11028','H07707_11044','H07707_11048','H07707_11074','D08734_72772','D08734_72773','H07707_11161','H07707_0'],'h07707');}