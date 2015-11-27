  var NUMBER_CN = [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八" ];
    
  /*
   * jQuery Pines Notify (pnotify) Plugin 1.2.0
   *
   * http://pinesframework.org/pnotify/
   * Copyright (c) 2009-2012 Hunter Perrin
   *
   * Triple license under the GPL, LGPL, and MPL:
   *	  http://www.gnu.org/licenses/gpl.html
   *	  http://www.gnu.org/licenses/lgpl.html
   *	  http://www.mozilla.org/MPL/MPL-1.1.html
   */
    (function(d){var q,j,r,i=d(window),u={jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert",closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s",hi_menu:"ui-state-default ui-corner-bottom",hi_btn:"ui-state-default ui-corner-all",
    hi_btnhov:"ui-state-hover",hi_hnd:"ui-icon ui-icon-grip-dotted-horizontal"},bootstrap:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign",closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play",hi_menu:"well",hi_btn:"btn",hi_btnhov:"",hi_hnd:"icon-chevron-down"}},s=function(){r=d("body");i=d(window);i.bind("resize",function(){j&&clearTimeout(j);
    j=setTimeout(d.pnotify_position_all,10)})};document.body?s():d(s);d.extend({pnotify_remove_all:function(){var e=i.data("pnotify");e&&e.length&&d.each(e,function(){this.pnotify_remove&&this.pnotify_remove()})},pnotify_position_all:function(){j&&clearTimeout(j);j=null;var e=i.data("pnotify");e&&e.length&&(d.each(e,function(){var d=this.opts.stack;if(d)d.nextpos1=d.firstpos1,d.nextpos2=d.firstpos2,d.addpos2=0,d.animation=true}),d.each(e,function(){this.pnotify_position()}))},pnotify:function(e){var g,
    a;typeof e!="object"?(a=d.extend({},d.pnotify.defaults),a.text=e):a=d.extend({},d.pnotify.defaults,e);for(var p in a)typeof p=="string"&&p.match(/^pnotify_/)&&(a[p.replace(/^pnotify_/,"")]=a[p]);if(a.before_init&&a.before_init(a)===false)return null;var k,o=function(a,c){b.css("display","none");var f=document.elementFromPoint(a.clientX,a.clientY);b.css("display","block");var e=d(f),g=e.css("cursor");b.css("cursor",g!="auto"?g:"default");if(!k||k.get(0)!=f)k&&(n.call(k.get(0),"mouseleave",a.originalEvent),
    n.call(k.get(0),"mouseout",a.originalEvent)),n.call(f,"mouseenter",a.originalEvent),n.call(f,"mouseover",a.originalEvent);n.call(f,c,a.originalEvent);k=e},f=u[a.styling],b=d("<div />",{"class":"ui-pnotify "+a.addclass,css:{display:"none"},mouseenter:function(l){a.nonblock&&l.stopPropagation();a.mouse_reset&&g=="out"&&(b.stop(true),g="in",b.css("height","auto").animate({width:a.width,opacity:a.nonblock?a.nonblock_opacity:a.opacity},"fast"));a.nonblock&&b.animate({opacity:a.nonblock_opacity},"fast");
    a.hide&&a.mouse_reset&&b.pnotify_cancel_remove();a.sticker&&!a.nonblock&&b.sticker.trigger("pnotify_icon").css("visibility","visible");a.closer&&!a.nonblock&&b.closer.css("visibility","visible")},mouseleave:function(l){a.nonblock&&l.stopPropagation();k=null;b.css("cursor","auto");a.nonblock&&g!="out"&&b.animate({opacity:a.opacity},"fast");a.hide&&a.mouse_reset&&b.pnotify_queue_remove();a.sticker_hover&&b.sticker.css("visibility","hidden");a.closer_hover&&b.closer.css("visibility","hidden");d.pnotify_position_all()},
    mouseover:function(b){a.nonblock&&b.stopPropagation()},mouseout:function(b){a.nonblock&&b.stopPropagation()},mousemove:function(b){a.nonblock&&(b.stopPropagation(),o(b,"onmousemove"))},mousedown:function(b){a.nonblock&&(b.stopPropagation(),b.preventDefault(),o(b,"onmousedown"))},mouseup:function(b){a.nonblock&&(b.stopPropagation(),b.preventDefault(),o(b,"onmouseup"))},click:function(b){a.nonblock&&(b.stopPropagation(),o(b,"onclick"))},dblclick:function(b){a.nonblock&&(b.stopPropagation(),o(b,"ondblclick"))}});
    b.opts=a;b.container=d("<div />",{"class":f.container+" ui-pnotify-container "+(a.type=="error"?f.error:a.type=="info"?f.info:a.type=="success"?f.success:f.notice)}).appendTo(b);a.cornerclass!=""&&b.container.removeClass("ui-corner-all").addClass(a.cornerclass);a.shadow&&b.container.addClass("ui-pnotify-shadow");b.pnotify_version="1.2.0";b.pnotify=function(l){var c=a;typeof l=="string"?a.text=l:a=d.extend({},a,l);for(var e in a)typeof e=="string"&&e.match(/^pnotify_/)&&(a[e.replace(/^pnotify_/,"")]=
    a[e]);b.opts=a;a.cornerclass!=c.cornerclass&&b.container.removeClass("ui-corner-all").addClass(a.cornerclass);a.shadow!=c.shadow&&(a.shadow?b.container.addClass("ui-pnotify-shadow"):b.container.removeClass("ui-pnotify-shadow"));a.addclass===false?b.removeClass(c.addclass):a.addclass!==c.addclass&&b.removeClass(c.addclass).addClass(a.addclass);a.title===false?b.title_container.slideUp("fast"):a.title!==c.title&&(a.title_escape?b.title_container.text(a.title).slideDown(200):b.title_container.html(a.title).slideDown(200));
    a.text===false?b.text_container.slideUp("fast"):a.text!==c.text&&(a.text_escape?b.text_container.text(a.text).slideDown(200):b.text_container.html(a.insert_brs?String(a.text).replace(/\n/g,"<br />"):a.text).slideDown(200));b.pnotify_history=a.history;b.pnotify_hide=a.hide;a.type!=c.type&&b.container.removeClass(f.error+" "+f.notice+" "+f.success+" "+f.info).addClass(a.type=="error"?f.error:a.type=="info"?f.info:a.type=="success"?f.success:f.notice);if(a.icon!==c.icon||a.icon===true&&a.type!=c.type)b.container.find("div.ui-pnotify-icon").remove(),
    a.icon!==false&&d("<div />",{"class":"ui-pnotify-icon"}).append(d("<span />",{"class":a.icon===true?a.type=="error"?f.error_icon:a.type=="info"?f.info_icon:a.type=="success"?f.success_icon:f.notice_icon:a.icon})).prependTo(b.container);a.width!==c.width&&b.animate({width:a.width});a.min_height!==c.min_height&&b.container.animate({minHeight:a.min_height});a.opacity!==c.opacity&&b.fadeTo(a.animate_speed,a.opacity);!a.closer||a.nonblock?b.closer.css("display","none"):b.closer.css("display","block");
    !a.sticker||a.nonblock?b.sticker.css("display","none"):b.sticker.css("display","block");b.sticker.trigger("pnotify_icon");a.sticker_hover?b.sticker.css("visibility","hidden"):a.nonblock||b.sticker.css("visibility","visible");a.closer_hover?b.closer.css("visibility","hidden"):a.nonblock||b.closer.css("visibility","visible");a.hide?c.hide||b.pnotify_queue_remove():b.pnotify_cancel_remove();b.pnotify_queue_position();return b};b.pnotify_position=function(a){var c=b.opts.stack;if(c){if(!c.nextpos1)c.nextpos1=
    c.firstpos1;if(!c.nextpos2)c.nextpos2=c.firstpos2;if(!c.addpos2)c.addpos2=0;var d=b.css("display")=="none";if(!d||a){var f,e={},g;switch(c.dir1){case "down":g="top";break;case "up":g="bottom";break;case "left":g="right";break;case "right":g="left"}a=parseInt(b.css(g));isNaN(a)&&(a=0);if(typeof c.firstpos1=="undefined"&&!d)c.firstpos1=a,c.nextpos1=c.firstpos1;var h;switch(c.dir2){case "down":h="top";break;case "up":h="bottom";break;case "left":h="right";break;case "right":h="left"}f=parseInt(b.css(h));
    isNaN(f)&&(f=0);if(typeof c.firstpos2=="undefined"&&!d)c.firstpos2=f,c.nextpos2=c.firstpos2;if(c.dir1=="down"&&c.nextpos1+b.height()>i.height()||c.dir1=="up"&&c.nextpos1+b.height()>i.height()||c.dir1=="left"&&c.nextpos1+b.width()>i.width()||c.dir1=="right"&&c.nextpos1+b.width()>i.width())c.nextpos1=c.firstpos1,c.nextpos2+=c.addpos2+(typeof c.spacing2=="undefined"?25:c.spacing2),c.addpos2=0;if(c.animation&&c.nextpos2<f)switch(c.dir2){case "down":e.top=c.nextpos2+"px";break;case "up":e.bottom=c.nextpos2+
    "px";break;case "left":e.right=c.nextpos2+"px";break;case "right":e.left=c.nextpos2+"px"}else b.css(h,c.nextpos2+"px");switch(c.dir2){case "down":case "up":if(b.outerHeight(true)>c.addpos2)c.addpos2=b.height();break;case "left":case "right":if(b.outerWidth(true)>c.addpos2)c.addpos2=b.width()}if(c.nextpos1)if(c.animation&&(a>c.nextpos1||e.top||e.bottom||e.right||e.left))switch(c.dir1){case "down":e.top=c.nextpos1+"px";break;case "up":e.bottom=c.nextpos1+"px";break;case "left":e.right=c.nextpos1+"px";
    break;case "right":e.left=c.nextpos1+"px"}else b.css(g,c.nextpos1+"px");(e.top||e.bottom||e.right||e.left)&&b.animate(e,{duration:500,queue:false});switch(c.dir1){case "down":case "up":c.nextpos1+=b.height()+(typeof c.spacing1=="undefined"?25:c.spacing1);break;case "left":case "right":c.nextpos1+=b.width()+(typeof c.spacing1=="undefined"?25:c.spacing1)}}}};b.pnotify_queue_position=function(a){j&&clearTimeout(j);a||(a=10);j=setTimeout(d.pnotify_position_all,a)};b.pnotify_display=function(){b.parent().length||
    b.appendTo(r);a.before_open&&a.before_open(b)===false||(a.stack.push!="top"&&b.pnotify_position(true),a.animation=="fade"||a.animation.effect_in=="fade"?b.show().fadeTo(0,0).hide():a.opacity!=1&&b.show().fadeTo(0,a.opacity).hide(),b.animate_in(function(){a.after_open&&a.after_open(b);b.pnotify_queue_position();a.hide&&b.pnotify_queue_remove()}))};b.pnotify_remove=function(){if(b.timer)window.clearTimeout(b.timer),b.timer=null;a.before_close&&a.before_close(b)===false||b.animate_out(function(){a.after_close&&
    a.after_close(b)===false||(b.pnotify_queue_position(),a.remove&&b.detach())})};b.animate_in=function(d){g="in";var c;c=typeof a.animation.effect_in!="undefined"?a.animation.effect_in:a.animation;c=="none"?(b.show(),d()):c=="show"?b.show(a.animate_speed,d):c=="fade"?b.show().fadeTo(a.animate_speed,a.opacity,d):c=="slide"?b.slideDown(a.animate_speed,d):typeof c=="function"?c("in",d,b):b.show(c,typeof a.animation.options_in=="object"?a.animation.options_in:{},a.animate_speed,d)};b.animate_out=function(d){g=
    "out";var c;c=typeof a.animation.effect_out!="undefined"?a.animation.effect_out:a.animation;c=="none"?(b.hide(),d()):c=="show"?b.hide(a.animate_speed,d):c=="fade"?b.fadeOut(a.animate_speed,d):c=="slide"?b.slideUp(a.animate_speed,d):typeof c=="function"?c("out",d,b):b.hide(c,typeof a.animation.options_out=="object"?a.animation.options_out:{},a.animate_speed,d)};b.pnotify_cancel_remove=function(){b.timer&&window.clearTimeout(b.timer)};b.pnotify_queue_remove=function(){b.pnotify_cancel_remove();b.timer=
    window.setTimeout(function(){b.pnotify_remove()},isNaN(a.delay)?0:a.delay)};b.closer=d("<div />",{"class":"ui-pnotify-closer",css:{cursor:"pointer",visibility:a.closer_hover?"hidden":"visible"},click:function(){b.pnotify_remove();b.sticker.css("visibility","hidden");b.closer.css("visibility","hidden")}}).append(d("<span />",{"class":f.closer})).appendTo(b.container);(!a.closer||a.nonblock)&&b.closer.css("display","none");b.sticker=d("<div />",{"class":"ui-pnotify-sticker",css:{cursor:"pointer",visibility:a.sticker_hover?
    "hidden":"visible"},click:function(){a.hide=!a.hide;a.hide?b.pnotify_queue_remove():b.pnotify_cancel_remove();d(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){d(this).children().removeClass(f.pin_up+" "+f.pin_down).addClass(a.hide?f.pin_up:f.pin_down)}).append(d("<span />",{"class":f.pin_up})).appendTo(b.container);(!a.sticker||a.nonblock)&&b.sticker.css("display","none");a.icon!==false&&d("<div />",{"class":"ui-pnotify-icon"}).append(d("<span />",{"class":a.icon===true?a.type=="error"?
    f.error_icon:a.type=="info"?f.info_icon:a.type=="success"?f.success_icon:f.notice_icon:a.icon})).prependTo(b.container);b.title_container=d("<h4 />",{"class":"ui-pnotify-title"}).appendTo(b.container);a.title===false?b.title_container.hide():a.title_escape?b.title_container.text(a.title):b.title_container.html(a.title);b.text_container=d("<div />",{"class":"ui-pnotify-text"}).appendTo(b.container);a.text===false?b.text_container.hide():a.text_escape?b.text_container.text(a.text):b.text_container.html(a.insert_brs?
    String(a.text).replace(/\n/g,"<br />"):a.text);typeof a.width=="string"&&b.css("width",a.width);typeof a.min_height=="string"&&b.container.css("min-height",a.min_height);b.pnotify_history=a.history;b.pnotify_hide=a.hide;var h=i.data("pnotify");if(h==null||typeof h!="object")h=[];h=a.stack.push=="top"?d.merge([b],h):d.merge(h,[b]);i.data("pnotify",h);a.stack.push=="top"&&b.pnotify_queue_position(1);a.after_init&&a.after_init(b);if(a.history){var m=i.data("pnotify_history");typeof m=="undefined"&&(m=
    d("<div />",{"class":"ui-pnotify-history-container "+f.hi_menu,mouseleave:function(){m.animate({top:"-"+q+"px"},{duration:100,queue:false})}}).append(d("<div />",{"class":"ui-pnotify-history-header",text:"Redisplay"})).append(d("<button />",{"class":"ui-pnotify-history-all "+f.hi_btn,text:"All",mouseenter:function(){d(this).addClass(f.hi_btnhov)},mouseleave:function(){d(this).removeClass(f.hi_btnhov)},click:function(){d.each(h,function(){this.pnotify_history&&(this.is(":visible")?this.pnotify_hide&&
    this.pnotify_queue_remove():this.pnotify_display&&this.pnotify_display())});return false}})).append(d("<button />",{"class":"ui-pnotify-history-last "+f.hi_btn,text:"Last",mouseenter:function(){d(this).addClass(f.hi_btnhov)},mouseleave:function(){d(this).removeClass(f.hi_btnhov)},click:function(){var a=-1,b;do{b=a==-1?h.slice(a):h.slice(a,a+1);if(!b[0])break;a--}while(!b[0].pnotify_history||b[0].is(":visible"));if(!b[0])return false;b[0].pnotify_display&&b[0].pnotify_display();return false}})).appendTo(r),
    q=d("<span />",{"class":"ui-pnotify-history-pulldown "+f.hi_hnd,mouseenter:function(){m.animate({top:"0"},{duration:100,queue:false})}}).appendTo(m).offset().top+2,m.css({top:"-"+q+"px"}),i.data("pnotify_history",m))}a.stack.animation=false;b.pnotify_display();return b}});var t=/^on/,v=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,w=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,x=/^(scroll|resize|(un)?load|abort|error)$/,n=function(e,g){var a,e=e.toLowerCase();
    document.createEvent&&this.dispatchEvent?(e=e.replace(t,""),e.match(v)?(d(this).offset(),a=document.createEvent("MouseEvents"),a.initMouseEvent(e,g.bubbles,g.cancelable,g.view,g.detail,g.screenX,g.screenY,g.clientX,g.clientY,g.ctrlKey,g.altKey,g.shiftKey,g.metaKey,g.button,g.relatedTarget)):e.match(w)?(a=document.createEvent("UIEvents"),a.initUIEvent(e,g.bubbles,g.cancelable,g.view,g.detail)):e.match(x)&&(a=document.createEvent("HTMLEvents"),a.initEvent(e,g.bubbles,g.cancelable)),a&&this.dispatchEvent(a)):
    (e.match(t)||(e="on"+e),a=document.createEventObject(g),this.fireEvent(e,a))};d.pnotify.defaults={title:false,title_escape:false,text:false,text_escape:false,styling:"bootstrap",addclass:"",cornerclass:"",nonblock:false,nonblock_opacity:0.2,history:true,width:"300px",min_height:"16px",type:"notice",icon:true,animation:"fade",animate_speed:"slow",opacity:1,shadow:true,closer:true,closer_hover:true,sticker:true,sticker_hover:true,hide:true,delay:8E3,mouse_reset:true,remove:true,insert_brs:true,stack:{dir1:"down",
    dir2:"left",push:"bottom",spacing1:25,spacing2:25}}})(jQuery);    

  // 网页简繁体转换
  // 本js用于客户在网站页面选择繁体中文或简体中文显示，默认是正常显示，即简繁体同时显示
  // 在用户第一次访问网页时,会自动检测客户端语言进行操作并提示.此功能可关闭
  // 本程序只在UTF8编码下测试过，不保证其他编码有效
  
  // -------------- 以下参数大部分可以更改 --------------------
  //s = simplified 简体中文 t = traditional 繁体中文 n = normal 正常显示
  var zh_default = 's'; //默认语言，请不要改变
  var zh_choose = 's'; //当前选择
  var zh_expires = 365; //cookie过期天数
  var zh_browserLang = ''; //浏览器语言
  var zh_autoLang_t = true; //浏览器语言为繁体时自动进行操作
  var zh_autoLang_s = true; //浏览器语言为简体时自动进行操作
  var zh_autoLang_alert = false; //自动操作后是否显示提示消息
  //自动操作后的提示消息
  var zh_autoLang_msg = '歡迎來到本站,本站爲方便台灣香港的用戶\n1.采用UTF-8國際編碼,用任何語言發帖都不用轉碼.\n2.自動判斷繁體用戶,顯示繁體網頁\n3.在網頁最上方有語言選擇,如果浏覽有問題時可以切換\n4.本消息在cookie有效期內只顯示一次';
  var zh_autoLang_checked = 0; //次检测浏览器次数,第一次写cookie为1,提示后为2,今后将不再提示
  
  var zh_translate_status = "translate-status";
  var zh_translate_link = "translate-link";
  var zh_translate_skip = "translate-skip";
  var zh_translate_image = "translate-image";
  
  //判断浏览器语言的正则,ie为小写,ff为大写
  var zh_langReg_t = /^zh-tw|zh-hk$/i;
  var zh_langReg_s = /^zh-cn$/i;
  
  //简体繁体对照字表,可以自行替换
  var zh_s = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄元币';
  var zh_t = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩圓幤';
  
  // 将单个 String 翻译成当前字体
  String.prototype.tran = function() 
  {
    var s1,s2;
    if ( zh_choose == 't' ) 
    {
      s1 = zh_s;
      s2 = zh_t;
    }
    else if( zh_choose == 's' ) 
    {
      s1 = zh_t;
      s2 = zh_s;
    }
    else 
    {
      return this;
    }
    var a = '';
    var l = this.length;
    for( var i = 0; i < this.length; i++)
    {
      var c = this.charAt( i );
      var p = s1.indexOf( c );
      a += p < 0 ? c : s2.charAt( p );
    }
    return a;
  };
  
  function zh_tranBody( obj ) 
  { 
    var o = ( typeof( obj ) == "object" ) ? obj.childNodes : document.body.childNodes;
    for ( var i = 0; i < o.length; i++ ) 
    {
      var c = o.item( i );
      if ( '||BR|HR|TEXTAREA|SCRIPT|'.indexOf( "|"+ c.tagName +"|" ) > 0 ) 
        continue;
      if ( $( c ).hasClass( zh_translate_skip ) ) 
      {
        continue;
      }
      if ( $( c ).hasClass( "translate-image" ) )
      {
        if ( c.tagName == "IMG" )
        {
          var path = null;
          if ( $( c ).hasClass( "lazy" ) )
          {
            path = $( c ).attr( "data-original" );
          }
          else
          {
            path = $( c ).attr( "src" );
          }
          if ( zh_choose == "s" )
          {
            $( c ).attr( "src", path.replace( "_t.", ".") );
          }
          else if ( zh_choose == "t" && ( path.indexOf( "_t." ) == -1 ) )
          {
            $( c ).attr( "src", path.replace( ".", "_t.") );
          }
        }
        else
        {
          var background = $( c ).css( "background-image" );
          if ( background != "none" )
          {
            if ( zh_choose == "s" )
            {
              $( c ).css( "background-image", background.replace( "_t.png", ".png").replace( "_t.jpg", ".jpg") );
            }
            else if ( zh_choose == "t" && ( background.indexOf( "_t." ) == -1 ) )
            {
              $( c ).css( "background-image", background.replace( ".png", "_t.png").replace( ".jpg", "_t.jpg") );
            }
          }
        }
      }
      if ( c.title != '' && c.title != null ) c.title = c.title.tran();
      if ( c.alt != '' && c.alt != null) c.alt = c.alt.tran();
      if ( c.tagName == "INPUT" && c.value != '' && c.type != 'text' && c.type != 'hidden' && c.type != 'password' ) 
        c.value = c.value.tran();
      if ( c.nodeType == 3 ) 
      {
        c.data = c.data.tran();  
      }
      else
      {
        zh_tranBody( c );
      }
    }
  };
  
  function zh_tran( go ) 
  {
    if ( go ) zh_choose = go;
    setCookie( 'zh_choose', zh_choose, zh_expires );
    if ( go == 'n' ) 
    {
      window.location.reload();
    }
    else 
    {
      zh_tranBody();
    }
  };
  
  function zh_getLang() 
  {
    if ( getCookie( 'zh_choose' ) ) 
    {
      zh_choose = getCookie( 'zh_choose' );
      return true;
    }
    if ( !zh_autoLang_t && !zh_autoLang_s ) return false;
    if ( getCookie( 'zh_autoLang_checked' ) ) return false;
    if ( navigator.language ) 
    {
      zh_browserLang = navigator.language;
    }
    else if ( navigator.browserLanguage ) 
    {
      zh_browserLang = navigator.browserLanguage;
    }
    if ( zh_autoLang_t && zh_langReg_t.test( zh_browserLang ) ) 
    {
      zh_choose = 't';
    }
    else if ( zh_autoLang_s && zh_langReg_s.test( zh_browserLang ) ) 
    {
      zh_choose = 's';
    }
    zh_autoLang_checked = 1;
    setCookie( 'zh_choose', zh_choose, zh_expires );
    if ( zh_choose == zh_default ) return false;
    return true;
  };
  
  
  function zh_init() 
  {
    zh_getLang(); 
    
    var name = zh_choose == "t" ? "繁" : "简";
    $( $( "." + zh_translate_status ).find( "span" )[0] ).text( name );
    $( "." + zh_translate_link + "[language=s]" ).parent().click( function () {
      zh_tran( "s" );
      $( $( "." + zh_translate_status ).find( "span" )[0] ).text( "简" );
    } );
    $( "." + zh_translate_link + "[language=t]" ).parent().click( function () {
      zh_tran( "t" );
      $( $( "." + zh_translate_status ).find( "span" )[0] ).text( "繁" );
    } );
    //$( "." + zh_translate_link + "[language=en]" ).parent().click( function () {
    //  alert( "开发中。" );
    //} );
    
    if ( zh_choose != zh_default ) 
    {
      if ( window.onload ) 
      {
        window.onload_before_zh_init = window.onload;
        window.onload = function() {
          zh_tran( zh_choose );
          if ( getCookie( "zh_autoLang_check" ) ) 
          {
            alert( zh_autoLang_msg );
          };
          window.onload_before_zh_init();
        };
      }
      else 
      {
        window.onload = function() {
          zh_tran( zh_choose );
          if ( getCookie( "zh_autoLang_check") ) 
          {
            alert( zh_autoLang_msg );
          };
        };
      }
    }
  };
  
  function zh_isSimple()
  {
	  zh_getLang();
	  return zh_choose == "s";
  };


  /*
    自定义公共函数
  */
  
  function DC( tag ) { return $( document.createElement( tag ) ); };
  function TN( text ) { return $( document.createTextNode( text ) ); };
  function ID( text ) { return document.getElementById( text ); };
  
  function systemError( show, info, container )
  {
  	if ( show )
  	{
  	  var stack_context = {"dir1": "down", "dir2": "left", "context": $("#"+container) };
  		$.pnotify ( {
  			type: 'error',
  		    title : "&nbsp;&nbsp;&nbsp;" + info,
  		    icon: 'picon icon16 typ-icon-cancel white',
  		    stack : stack_context,
  		    //opacity : 0.8,
  		    delay : 2000, 
  		    history : false,
  		    sticker : false
  		} );
  	}
  };
  
  function systemInfo( show, info, container )
  {
  	if ( show )
  	{
  	  var stack_context = {"dir1": "down", "dir2": "left", "context": $("#"+container) };
  		$.pnotify ( {
  			type: 'info',
  		    title : "&nbsp;&nbsp;&nbsp;" + info,
  		    icon: 'picon icon24 icomoon-icon-bubble-notification white',
  		    stack : stack_context,
  		    text : "",
  		    //opacity : 0.8,
  		    delay : 2000, 
  		    history : false,
  		    sticker : false
  		} );
  	}
  };
  
  function systemSuccess( show, info )
  {
  	if ( show )
  	{
  		$.pnotify ( {
  			type : 'success',
  			title : "&nbsp;&nbsp;&nbsp;" + info,
  			icon : 'picon icon16 iconic-icon-check-alt white',
  			opacity : 0.8,
  			delay : 1000,
  			history : false,
  			sticker : false
  		} );
  	}
  };
  
  function displaySystemInfo( oMessage )
  {
    
    $( "#message-modal" ).find( "span" ).text( oMessage );
    $( "#message-modal" ).modal( {  keyboard: false, backdrop : "static" } );
    
  };
  	
  function hideSystemInfo() 
  {
    $( "#message-modal" ).modal( "hide" );
  };
  
  /**
   *	系统测试	
   */
  function systemCheck() {
  	//呈现引擎
  	var engine = {
  		ie : 0,
  		gecko : 0,
  		webkit : 0,
  		khtml : 0,
  		opera : 0,
  		//完整的版本号
  		ver: null 
  	};
  	//浏览器
  	var browser = {
  		//主要浏览器
  		ie : 0, 
  		firefox : 0, 
  		safari : 0,
  		konq : 0,
  		opera : 0,
  		chrome : 0,
  		//具体的版本号
  		ver : null 
  	};
  	//平台、设备和操作系统 
  	var system = {
  		win : false,
  		mac : false,
  		x11 : false,
  		//移动设备
  		iphone : false, 
  		ipod : false, 
  		ipad : false,
  		ios : false, 
  		android : false, 
  		nokiaN : false, 
  		winMobile : false,
  		//游戏系统 
  		wii : false, 
  		ps : false
  	};
  	
  	//检测呈现引擎和浏览器
  	var ua = navigator.userAgent; 
  	if ( window.opera ) {
  		engine.ver = browser.ver = window.opera.version();
  		engine.opera = browser.opera = parseFloat( engine.ver );
  	} else if ( /AppleWebKit\/(\S+)/.test( ua ) ) {
  		engine.ver = RegExp["$1"];
  		engine.webkit = parseFloat(engine.ver);
  		//确定是 Chrome 还是 Safari
  		if ( /Chrome\/(\S+)/.test( ua ) ) {
  			browser.ver = RegExp["$1"];
  			browser.chrome = parseFloat(browser.ver);
  		} else if ( /Version\/(\S+)/.test( ua ) ) {
  			browser.ver = RegExp["$1"];
  			browser.safari = parseFloat(browser.ver);
  		} else {
  			//近似地确定版本号
  			var safariVersion = 1;
  			if ( engine.webkit < 100 ) {
  				safariVersion = 1;
  			} else if ( engine.webkit < 312 ) {
              	safariVersion = 1.2;
  			} else if ( engine.webkit < 412 ) {
              	safariVersion = 1.3;
  			} else {
              	safariVersion = 2;
  			}
  			browser.safari = browser.ver = safariVersion;
  		}
      } else if ( /KHTML\/(\S+)/.test( ua ) || /Konqueror\/([^;]+)/.test( ua ) ) { 
      	engine.ver = browser.ver = RegExp["$1"];
  		engine.khtml = browser.konq = parseFloat(engine.ver);
  	} else if ( /rv:([^\)]+)\) Gecko\/\d{8}/.test( ua ) ) {
  	    engine.ver = RegExp["$1"];
  	    engine.gecko = parseFloat( engine.ver );
  		//确定是不是 Firefox
  		if ( /Firefox\/(\S+)/.test( ua ) ) {
  	        browser.ver = RegExp["$1"];
  	        browser.firefox = parseFloat( browser.ver );
  		}
  	} else if ( /MSIE ([^;]+)/.test( ua ) ) {
  	    engine.ver = browser.ver = RegExp["$1"];
  	    engine.ie = browser.ie = parseFloat( engine.ver );
  	}
  	//检测浏览器
  	browser.ie = engine.ie; 
  	browser.opera = engine.opera;
  	//检测平台
  	var p = navigator.platform;
  	system.win = p.indexOf( "Win" ) == 0;
  	system.mac = p.indexOf( "Mac" ) == 0;
  	system.x11 = ( p == "X11" ) || ( p.indexOf( "Linux" ) == 0 );
  	//检测 Windows 操作系统 
  	if ( system.win ){
  	    if ( /Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test( ua ) ) {
  	    	if ( RegExp["$1"] == "NT" ) {
  	    		switch( RegExp["$2"] ) {
  	    			case "5.0":
  	                    system.win = "2000";
  	                    break;
  	                case "5.1":
  	                    system.win = "XP";
  	                    break;
  	                case "6.0":
  	                    system.win = "Vista";
  	                    break;
  	                case "6.1":
  	                    system.win = "7";
  	                    break;
  	                default:
  	                    system.win = "NT";
  	                    break; 
  				}
  			} else if ( RegExp["$1"] == "9x" ) {
  				system.win = "ME";
  	        } else {
  	            system.win = RegExp["$1"];
  			} 
  		}
  	} 
  	
  	//移动设备
  	system.iphone = ua.indexOf( "iPhone" ) > -1;
  	system.ipod = ua.indexOf( "iPod" ) > -1;
  	system.ipad = ua.indexOf( "iPad" ) > -1;
  	system.nokiaN = ua.indexOf( "NokiaN ") > -1;
  	//windows mobile
  	if ( system.win == "CE" ) {
  		system.winMobile = system.win;
  	} else if ( system.win == "Ph" ) {
  		if( /Windows Phone OS (\d+.\d+)/.test( ua ) ) {
  			system.win = "Phone";
  			system.winMobile = parseFloat(RegExp["$1"]);
  		} 
  	}
  	//检测 iOS 版本
  	if ( system.mac && ua.indexOf( "Mobile" ) > -1 ) {
  		if ( /CPU (?:iPhone )?OS (\d+_\d+)/.test( ua ) ) {
                system.ios = parseFloat( RegExp.$1.replace( "_", "." ) );
          } else {
          	system.ios = 2; //不能真正检测出来,所以只能猜测
          } 
      }
  	//检测 Android 版本
  	if ( /Android (\d+\.\d+)/.test( ua ) ) {
  		system.android = parseFloat( RegExp.$1 );
  	}
  	//游戏系统
  	system.wii = ua.indexOf( "Wii" ) > -1; 
  	system.ps = /playstation/i.test( ua );
  	//返回这些对象 
  	return {
  		engine :     engine,
  		browser :    browser,
  		system :     system
  	}; 
  };
  
  function compareDate(date1, date2, offset) {
  	var year;
  	var month;
  	var day;
  	var arvstr = date1.split("-");
  	year = arvstr[0];
  	if (arvstr[1].length==1) {
  		month = "0" + arvstr[1];
  	} else {
  		month = arvstr[1];
  	}
  	if (arvstr[2].length==1) {
  		day = "0" + arvstr[2];
  	} else {
  		day = arvstr[2];
  	}
  	arvstr = year + "/" + month + "/" + day;
  	var arvtmp = new Date(arvstr);
  	var arv = arvtmp;
  	arv.setDate(arvtmp.getDate()+offset);
  	
  	var startstr = date2.split("-");
  	year = startstr[0];
  	if (startstr[1].length==1) {
  		month = "0" + startstr[1];
  	} else {
  		month = startstr[1];
  	}
  	if (startstr[2].length==1) {
  		day = "0" + startstr[2];
  	} else {
  		day = startstr[2];
  	}
  	startstr = year + "/" + month + "/" + day;
  	var start = new Date(startstr);
  	var date1Comp = arv.getTime(); // milliseconds
  	var date2Comp = start.getTime();
  	if (date1Comp>date2Comp) {
  		return 1;
  	} else if (date1Comp<date2Comp) {
  		return -1;
  	}
  	return 0;
  };
  
  function dayDifference( dstr1, dstr2 )
  {
    var s1 = dstr1.toDate();
    var s2 = dstr2.toDate();
    var time= s2.getTime() - s1.getTime(); 
    return parseInt(time / (1000 * 60 * 60 * 24));
  };
  
  function evalJason( data )
  {
  	try
  	{
  		return eval( "(" + data + ")" );
  	}
  	catch ( err )
  	{
  		alert( err );	
  	}
  };
  
  function setCookie(name, value) {
  
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
       var LargeExpDate = new Date ();
       LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
    }
    document.cookie = name + "=" + escape (value)  + "; path=/" + ((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
    
  };
  
  function getCookie( Name ) {
    var search = Name + "=";
    if (document.cookie.length > 0) {
       offset = document.cookie.indexOf(search);
       if(offset != -1) {
        offset += search.length;
        end = document.cookie.indexOf(";", offset);
        if(end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(offset, end));
       }else {
        return '';
       }
    }
  };
  
  function eraseCookie(name) {
  	setCookie(name,"",-1);
  };
  
  function updateUserInfo()
  {
    if ( typeof USER != "undefined" )
    {
      if ( USER )
      {
        $( "#userid" ).val( USER.uid );
        $( "#username" ).text( USER.uname );
        $( "#my-credit" ).text( USER.ucredit );
        if ( USER.utotal >= 10000 )
        {
          $( "#my-vip" ).show();
        }
        else
        {
          $( "#my-vip" ).hide();
        }
        if ( typeof USER.uhead != "undefined" && USER.uhead != "" && USER.uhead != null )
        {
          var sep = USER.uhead.split( ":" );
          if ( sep[0] == "http" )
          {
            $( "#usermenu" ).find( "img.media-object" ).attr( "src", "/images/avatar/5rabbit.png" );
          }
          else{
            $( "#usermenu" ).find( "img.media-object" ).attr( "src", USER.uhead );
          }
        }
        else
        {
          $( "#usermenu" ).find( "img.media-object" ).attr( "src", "https://www.wannar.com/images/avatar/5rabbit.png" );
        }
        $( "#signup" ).hide();
        $( "#usermenu" ).show();
      }
      
      else
      {
        $( "#signup" ).show();
        $( "#usermenu" ).hide();
        /*
        var loginInCookie = getCookie( "user_login" );
        if ( loginInCookie != null && loginInCookie.trim() != "" )
        {
          var user = loginInCookie.split( "@#" );
          USER.uid = parseInt( user[ 0 ] );
          USER.uname = user[ 1 ];
          $( "#userid" ).val( USER.uid );
          $( "#username" ).text( USER.uname );
          $( "#signup" ).hide();
          $( "#usermenu" ).show();
        }
        else
        {
          $( "#signup" ).show();
          $( "#usermenu" ).hide();
        }
        */
      }
      
    }

  };
  
  function userLogOut( cb )
  {
    $.ajax( {
        url : '/data/logout.php',
        type : 'POST',
        dataType : 'json',
        timeout : 8000,
        success : function( data ) 
        {
          USER = null;
          $( "#userid" ).val( 0 );
          $( "#username" ).text( "" );
          $( "#signup" ).show();
          $( "#usermenu" ).hide();
          eraseCookie( "user_login" );
          $( "#float_box" ).find( ".shopcart" ).text( 0 ).hide();
          // this is for shopcart.php
          $( "#all-order" ).hide();
          $( "#empty-cart" ).show();
          if ( cb ) cb();
    		}
      } );
  };
  
  function labelInformation()
  {
    $( "span.service-airport" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>提供免费时段内的专人机场接/送服务，您也可以自行入住第1晚酒店或第2天与旅行团直接汇合。</div>"
    } );
      
    $( "span.service-pickup" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>提供便捷的当地参团方式，您可选择就近的上车地点入团。</div>"
    } );
    
    $( "span.service-hotel" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>贴心提供行程前后的酒店加订服务，让您提前入住参团当日酒店，或续住行程结束的酒店。</div>"
    } );
    
    $( "span.service-share" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>提供配房服务，为您搭配双人房旅伴，分担团费，比单人出游更实惠。</div>"
    } );
    
    $( "span.discount-buy2get1" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>共3位参团，入住1间双人房（2张床），前2位各支付双人一房标准团费，第3位免费。所列价格已调整。</div>"
    } );
    
    $( "span.discount-buy2get2" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>共4位参团，入住1间双人房(2张床)，前2位支付双人房标准团费，第3、第4位免费。所列价格已调整。</div>"
    } );
    
    $( "span.discount-extra" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>购买行程总价超过一定数额后，可以获赠额外的玩哪儿积分。</div>"
    } );
    
    $( "span.discount-getpoints" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>购买行程的支付价格，可以获赠同等数额的玩哪儿积分。每100点积分可以兑换1美金。</div>"
    } );
    
    $( "span.discount-usepoints" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>购买行程支付时，可以使用玩哪儿积分。每100点积分可以兑换1美金。</div>"
    } );
    
    $( "span.discount-vip" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info'>VIP客户享受额外的折扣。多重折扣<b style='color:red;'>可以</b>叠加使用。</div>"
    } );
    
    $( "span.service-hotel-detail" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      html : true,
      content : "<div class='label-info-long'>\
      <p><b>服务说明：</b>配房服务是将两位愿意接受拼房的同性游客安排在同一房间内入住，以节省双方团费的一种服务。相比独住一间房，配房服务可帮助您节省20%以上的团费，适用于独自出行接受拼房，但又找不到结伴对象的游客。</p>\
      <p><b>如何使用：</b>在您填写“房间安排”信息时，对于需要玩哪儿提供配房服务的房间，选择“成人”1人，并勾选后边的“我要配房”选框。结算费用时，您只需支付“二人/房”价格的单人费用，以及配房手续费。</p>\
      </div>"
    } );
    
    $( "span.service-share-detail" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      title : "",
      html : true,
      content : "<div class='label-info-long'>\
      <p><b>服务说明：</b>配房服务是将两位愿意接受拼房的同性游客安排在同一房间内入住，以节省双方团费的一种服务。相比独住一间房，配房服务可帮助您节省20%以上的团费，适用于独自出行接受拼房，但又找不到结伴对象的游客。</p>\
      <p><b>如何使用：</b>在您填写“房间安排”信息时，对于需要玩哪儿提供配房服务的房间，选择“成人”1人，并勾选后边的“我要配房”选框。结算费用时，您只需支付“二人/房”价格的单人费用，以及配房手续费。</p>\
      </div>"
    } );
    
    $( "span.service-together-detail" ).popover( {
      trigger : "hover",
      placement : "bottom", 
      html : true,
      content : "<div class='label-info-long'>\
      <p><b>服务说明：</b>配房服务是将两位愿意接受拼房的同性游客安排在同一房间内入住，以节省双方团费的一种服务。相比独住一间房，配房服务可帮助您节省20%以上的团费，适用于独自出行接受拼房，但又找不到结伴对象的游客。</p>\
      <p><b>如何使用：</b>在您填写“房间安排”信息时，对于需要玩哪儿提供配房服务的房间，选择“成人”1人，并勾选后边的“我要配房”选框。结算费用时，您只需支付“二人/房”价格的单人费用。</p>\
      </div>"
    } );
      
  };
  
  function getUSD2CNYRate()
  {
    return 6.4;
  };
  
  function getCurrentCurrency()
  {
    var current = "usd";
    if ( getCookie( "current_currency" ) ) 
    {
      current = getCookie( "current_currency" );
    }
    return current;
  };
    
  function currency_init()
  {
    var toCurrency = getCurrentCurrency();
    convertCurrency( toCurrency, true );
  };
  
  
  function convertCurrency( toCurrency, init )
  {
    /*
    var CURRENT_CURRENCY = "usd";
    if ( !init && getCookie( "current_currency" ) ) 
    {
      CURRENT_CURRENCY = getCookie( "current_currency" );
    }
    */
    
    var rate = getUSD2CNYRate();
    
    setCookie( "current_currency", toCurrency );
    
    //alert( toCurrency + "（" + getCookie( "current_currency" ) + "）" );
    
    //if ( toCurrency != CURRENT_CURRENCY )
    //{
      
      var converts = $( "span.currency-convert" );
      if ( toCurrency == "cny" )
      {
        for ( var i = 0; i < converts.length; i++ )
        {
          var price_str = $( converts[i] ).text().trim();
          if ( price_str != "" && price_str[0] == "$" )
          {
            var dollar = price_str.replace( "$", "" );
            var value = ( parseFloat( dollar ) * rate ).toFixed( 1 );
            $( converts[i] ).attr( "original", dollar );
            $( converts[i] ).text( "￥" + value );
          }
        }
        $( $( "a.currency-status" ).find( "span" )[0] ).text( "人民币" );
      }
      else
      {
        for ( var i = 0; i < converts.length; i++ )
        {
          if ( typeof $( converts[i] ).attr( "original" ) != "undefined" )
          {
            $( converts[i] ).text( "$" + $( converts[i] ).attr( "original" ) );
          }
        }
        $( $( "a.currency-status" ).find( "span" )[0] ).text( "美元" );
      }
      
      setCookie( "current_currency", toCurrency );
  
    //}
  };
  
  function convertToCurrentCurrency( price )
  {
    var default_currency = "usd";
    if ( getCookie( "current_currency" ) ) 
    {
      default_currency = getCookie( "current_currency" );
    }
    
    if ( default_currency == "cny" )
    {
      var dollar = price.replace( "$", "" );
      var value = ( parseFloat( dollar ) * getUSD2CNYRate() ).toFixed( 1 );
      return "￥" + value;
    }
    else
    {
      return price;
    }
  };
  
  /**
   *	将对象放置于屏幕中央	
   */
  $.fn.center = function () 
  {
      this.css( "position", "absolute" );
      //this.css( "top", ( $( window ).height() - this.height() ) / 2+$( window ).scrollTop() + "px" );
      //this.css( "left", ( $( window ).width() - this.width() ) / 2+$( window ).scrollLeft() + "px" );
      this.css( "top", ( $( window ).height() - this.height() ) / 2 - 108  + "px" );
      this.css( "left", ( $( window ).width() - this.width() ) / 2 + "px" );
      return this;
  };
  
  /**
   *	打印格式化日期	
   */
  Date.prototype.format = function( format )
  {
  	var o = 
  	{
  		"M+" : this.getMonth()+1, //month
  		"d+" : this.getDate(), //day
  		"h+" : this.getHours(), //hour
  		"m+" : this.getMinutes(), //minute
  		"s+" : this.getSeconds(), //second
  		"q+" : Math.floor((this.getMonth()+3)/3), //quarter
  		"S" : this.getMilliseconds() //millisecond
  	};
  	if( /(y+)/.test( format ) ) 
  	{
  		format = format.replace( RegExp.$1, ( this.getFullYear() + "" ).substr( 4 - RegExp.$1.length ) );
    }
  	for ( var k in o )
  	{
  		if( new RegExp( "("+ k +")" ).test( format ) )
  			format = format.replace( RegExp.$1, RegExp.$1.length == 1 ? o[k] : ( "00"+ o[k] ).substr( ( ""+ o[k] ).length ) );
    }
  	return format;
  };
  
  Date.prototype.week = function()
  {
    switch( this.getDay() )
    {
      case 0:
        return "周日";
      case 1:
        return "周一";
      case 2:
        return "周二";
      case 3:
        return "周三";
      case 4:
        return "周四";
      case 5:
        return "周五";
      case 6:
        return "周六";
    }
  };
  
  Date.prototype.addDays = function(d)
  {
      this.setDate(this.getDate() + d);
  };
  
  Date.prototype.addWeeks = function(w)
  {
      this.addDays(w * 7);
  };
  
  Date.prototype.addMonths= function(m)
  {
      var d = this.getDate();
      this.setMonth(this.getMonth() + m);
      if (this.getDate() < d)
          this.setDate(0);
  };
  
  Date.prototype.addYears = function(y)
  {
      var m = this.getMonth();
      this.setFullYear(this.getFullYear() + y);
      if (m < this.getMonth()) 
       {
          this.setDate(0);
       }
  };
  
  /**
   *	字符串处理函数原型
   */
  $.extend( String.prototype, {
  	isPositiveInteger : function() 
  	{
  		return ( new RegExp(/^[1-9]\d*$/).test( this ) );
  	},
  	isInteger : function() 
  	{
  		return ( new RegExp( /^\d+$/ ).test( this ) );
  	},
  	isNumber :  function() 
  	{
  		return ( new RegExp( /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/ ).test( this ) );
  	},
  	isAlphanumeric : function() 
  	{
  		return ( new RegExp( /^\w+$/i ).test( this ) );
  	},
  	leftPadding : function( padString, length ) 
  	{
  		var str = this;
  		while ( str.length < length )
  			str = padString + str;
  		return str;
  	},
  	encode : function() 
  	{
  		return escape( this );
  	},
  	decode : function() 
  	{
  		return unescape( this );
  	},
  	trim : function() 
  	{
  		return this.replace( /(^\s*)|(\s*$)|\r|\n/g, "" );
  	},
  	cut : function( length ) 
  	{
  		return this.length >= length ?  this.substr( 0, length ) + " ..."  : this;
  	},
  	trans : function() 
  	{
  		return this.replace( /&lt;/g, '<' ).replace( /&gt;/g, '>' ).replace( /&quot;/g, '"' );
  	},
  	replaceAll : function( os, ns ) 
  	{
  		return this.replace( new RegExp( os, "gm" ), ns );
  	},
  	skipChar : function( ch ) 
  	{
  		if ( !this || this.length === 0 ) { return ''; }
  		if ( this.charAt( 0 ) === ch ) { return this.substring( 1 ).skipChar( ch ); }
  		return this;
  	},
  	stripHtml : function() 
  	{
  		return this.replace( /<("[^"]*"|'[^']*'|[^'">])*>/gi, "" );
  	},
  	isValidPwd : function() 
  	{
  		return ( new RegExp( /^([_]|[a-zA-Z0-9]){6,32}$/ ).test( this ) ); 
  	},
  	isValidMail : function()
  	{
  		return( new RegExp( /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ ).test( this.trim() ) );
  	},
  	isSpaces : function() 
  	{
  		for( var i = 0; i < this.length; i += 1 ) 
  		{
  			var ch = this.charAt( i );
  			if ( ch != ' ' && ch != "\n" && ch != "\t" && ch != "\r" ) 
  			{ 
  				return false; 
  			}
  		}
  		return true;
  	},
  	isPhone : function() 
  	{
  		return ( new RegExp( /(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/ ).test( this ) );
  	},
  	isUrl : function() 
  	{
  		return ( new RegExp( /^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/ ).test( this ) );
  	},
  	isExternalUrl : function() 
  	{
  		return this.isUrl() && this.indexOf( "://" + document.domain ) == -1;
  	},
  	localLength : function() 
  	{
  		var asc_length = this.replace( /[^\x00-\xff]/g, "" ).length;
  		var all_length = this.replace( /[^\x00-\xff]/g, "**" ).length;
  		return ( all_length - asc_length ) / 2 + asc_length;
  	},
  	toDate : function()
  	{
    	var temp = this.toString(); 
  
      temp = temp.replace(/-/g, "/"); 
      
      var date = new Date(Date.parse(temp)); 
      
      return date;
  	}
  } );
  
  Array.prototype.contains = function( obj ) { 
    var i = this.length; 
    while ( i-- ) 
    { 
      if ( this[i] === obj ) 
      { 
        return true; 
      } 
    } 
    return false; 
  };
  Array.prototype.unique = function () {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i]) == -1) {
            newArr.push(this[i]);
        }
    }
    return newArr;
  };
    
    function showModal( type )
    {
      $( ".modal-bg-cover[for="+type+"]" ).fadeIn();
      $( ".modal-bg[for="+type+"]" ).fadeIn();
    };
        
    function closeModal( type )
    {
      $( ".modal-bg-cover[for="+type+"]" ).fadeOut();
      $( ".modal-bg[for="+type+"]" ).fadeOut();
    };
        
    jQuery( function( $ ) {
      $( document ).ready( function() {
        
        currency_init();
        zh_init();
        
        // 返回按钮
        $( ".return" ).click( function() {
          history.go( -1 );
        } );
        
        // 侧边栏modal
        $( ".sidebar-btn" ).click( function() {
          showModal( "sidebar" );
          
          if ( zh_isSimple() ) {
	          
	          $( ".zh-translate" ).html( "简" ).attr( "for", "simp" );
	          
          } else {
	          
	          $( ".zh-translate" ).html( "繁" ).attr( "for", "tran" );
          }
		  
          if ( getCurrentCurrency() == "usd" )
          {
           $(".currency[for=usd]").removeClass("currency-unselected").addClass( "currency-selected" );
           $(".currency[for=cny]").removeClass( "currency-selected" ).addClass( "currency-unselected" );         
          }
          else
          {
           $(".currency[for=usd]").removeClass("currency-selected").addClass( "currency-unselected" );
           $(".currency[for=cny]").removeClass( "currency-unselected" ).addClass( "currency-selected" );   
          }
 
        } );
                
        $( ".modal-bg[for=sidebar]" ).click( function () {
          closeModal( "sidebar" );
        } );
        
        $( ".zh-translate" ).click( function( event ) {
	        
	        if ( $ ( this ).attr( "for" ) == "simp" ) {
		        
		        $ ( this ).html( "繁" ).attr( "for", "tran" );  
		        zh_tran( "t" );
	        
	        } else {
		        $ ( this ).html( "简" ).attr( "for", "simp" );
            zh_tran( "s" );
	        }
	        
	        event.stopPropagation();
	        
        });
        
        $( ".currency" ).click( function( event ) {
	        
	        $( this ).removeClass( "currency-unselected" ).addClass( "currency-selected" );
	        $( this ).siblings().removeClass( "currency-selected" ).addClass( "currency-unselected" );
	        
	        if ( $( this ).attr( "for" ) == "usd" )
	        {
		        // 美元
		        convertCurrency( "usd", false );
	        }
	        else
	        {
		        // 人民币
		        convertCurrency( "cny", false );
	        }
	        
	        event.stopPropagation();
	        
        } );
        
        // 客服
        $( "a[for='chat-service']" ).click( function(){
          if ( typeof $zopim != "undefined" )
          {
            $zopim.livechat.window.show();          
          }
          else
          {
            showModal( "service" );
          }
        } );
        
        // 登录提示框
        $( ".modal-bg[for=login] .close" ).click( function () {
          closeModal( "login" );
        } );
        
         // 客服
        $( "[for=service-modal]" ).click( function () {
          showModal( "service" );
        } );
        
        $( ".modal-bg[for=service] .close" ).click( function () {
          closeModal( "service" );
        } );
        
        // 关闭下载
        $( ".close" ).click( function () {
          $( ".download-bg-layer" ).animate( { "bottom" : "-90px" } );
          $( ".download-layer" ).animate( { "bottom" : "-90px" } );
        } );
        
        // 搜索
        $( ".search-btn" ).click( function () {
          
          var query = $( ".search-input" ).find( "input" ).val().trim();
          if ( query != "" )
          {
            window.location.href = "http://m.wannar.com/search/category-all/q=" + query;
          }
          
        } );
        
      } );
    } );