!function(b){b(function(){b.support.transition=function(){var c=function(){var e=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},f;
for(f in d){if(e.style[f]!==undefined){return d[f]
}}}();
return c&&{end:c}
}()
})
}(window.jQuery),!function(e){var d=function(a,g){this.options=g,this.$element=e(a).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};
d.prototype={constructor:d,toggle:function(){return this[this.isShown?"hide":"show"]()
},show:function(){var a=this,g=e.Event("show");
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=!0,this.escape(),this.backdrop(function(){var b=e.support.transition&&a.$element.hasClass("fade");
a.$element.parent().length||a.$element.appendTo(document.body),a.$element.show(),b&&a.$element[0].offsetWidth,a.$element.addClass("in").attr("aria-hidden",!1),a.enforceFocus(),b?a.$element.one(e.support.transition.end,function(){a.$element.focus().trigger("shown")
}):a.$element.focus().trigger("shown")
})
},hide:function(a){a&&a.preventDefault();
var g=this;
a=e.Event("hide"),this.$element.trigger(a);
if(!this.isShown||a.isDefaultPrevented()){return
}this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},enforceFocus:function(){var a=this;
e(document).on("focusin.modal",function(b){a.$element[0]!==b.target&&!a.$element.has(b.target).length&&a.$element.focus()
})
},escape:function(){var b=this;
this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()
}):this.isShown||this.$element.off("keyup.dismiss.modal")
},hideWithTransition:function(){var a=this,g=setTimeout(function(){a.$element.off(e.support.transition.end),a.hideModal()
},500);
this.$element.one(e.support.transition.end,function(){clearTimeout(g),a.hideModal()
})
},hideModal:function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.removeBackdrop(),b.$element.trigger("hidden")
})
},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},backdrop:function(a){var i=this,h=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var g=e.support.transition&&h;
this.$backdrop=e('<div class="modal-backdrop '+h+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),g&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");
if(!a){return
}g?this.$backdrop.one(e.support.transition.end,a):a()
}else{!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,a):a()):a&&a()
}}};
var f=e.fn.modal;
e.fn.modal=function(a){return this.each(function(){var g=e(this),c=g.data("modal"),b=e.extend({},e.fn.modal.defaults,g.data(),typeof a=="object"&&a);
c||g.data("modal",c=new d(this,b)),typeof a=="string"?c[a]():b.show&&c.show()
})
},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=d,e.fn.modal.noConflict=function(){return e.fn.modal=f,this
},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(a){var j=e(this),i=j.attr("href"),h=e(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),g=h.data("modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},h.data(),j.data());
a.preventDefault(),h.modal(g).one("hide",function(){j.focus()
})
})
}(window.jQuery),!function(h){function k(){h(g).each(function(){j(h(this)).removeClass("open")
})
}function j(a){var f=a.attr("data-target"),e;
f||(f=a.attr("href"),f=f&&/#/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,"")),e=f&&h(f);
if(!e||!e.length){e=a.parent()
}return e
}var g="[data-toggle=dropdown]",l=function(a){var d=h(a).on("click.dropdown.data-api",this.toggle);
h("html").on("click.dropdown.data-api",function(){d.parent().removeClass("open")
})
};
l.prototype={constructor:l,toggle:function(a){var m=h(this),e,d;
if(m.is(".disabled, :disabled")){return
}return e=j(m),d=e.hasClass("open"),k(),d||e.toggleClass("open"),m.focus(),!1
},keydown:function(p){var o,n,m,e,b,a;
if(!/(38|40|27)/.test(p.keyCode)){return
}o=h(this),p.preventDefault(),p.stopPropagation();
if(o.is(".disabled, :disabled")){return
}e=j(o),b=e.hasClass("open");
if(!b||b&&p.keyCode==27){return p.which==27&&e.find(g).focus(),o.click()
}n=h("[role=menu] li:not(.divider):visible a",e);
if(!n.length){return
}a=n.index(n.filter(":focus")),p.keyCode==38&&a>0&&a--,p.keyCode==40&&a<n.length-1&&a++,~a||(a=0),n.eq(a).focus()
}};
var i=h.fn.dropdown;
h.fn.dropdown=function(a){return this.each(function(){var c=h(this),b=c.data("dropdown");
b||c.data("dropdown",b=new l(this)),typeof a=="string"&&b[a].call(c)
})
},h.fn.dropdown.Constructor=l,h.fn.dropdown.noConflict=function(){return h.fn.dropdown=i,this
},h(document).on("click.dropdown.data-api",k).on("click.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.dropdown-menu",function(b){b.stopPropagation()
}).on("click.dropdown.data-api",g,l.prototype.toggle).on("keydown.dropdown.data-api",g+", [role=menu]",l.prototype.keydown)
}(window.jQuery),!function(e){function d(a,j){var i=e.proxy(this.process,this),h=e(a).is("body")?e(window):e(a),g;
this.options=e.extend({},e.fn.scrollspy.defaults,j),this.$scrollElement=h.on("scroll.scroll-spy.data-api",i),this.selector=(this.options.target||(g=e(a).attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()
}d.prototype={constructor:d,refresh:function(){var a=this,g;
this.offsets=e([]),this.targets=e([]),g=this.$body.find(this.selector).map(function(){var i=e(this),h=i.data("target")||i.attr("href"),b=/^#\w/.test(h)&&e(h);
return b&&b.length&&[[b.position().top+(!e.isWindow(a.$scrollElement.get(0))&&a.$scrollElement.scrollTop()),h]]||null
}).sort(function(h,c){return h[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},process:function(){var i=this.$scrollElement.scrollTop()+this.options.offset,h=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=h-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget,j;
if(i>=n){return k!=(j=l.last()[0])&&this.activate(j)
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(!m[j+1]||i<=m[j+1])&&this.activate(l[j])
}},activate:function(a){var h,g;
this.activeTarget=a,e(this.selector).parent(".active").removeClass("active"),g=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',h=e(g).parent("li").addClass("active"),h.parent(".dropdown-menu").length&&(h=h.closest("li.dropdown").addClass("active")),h.trigger("activate")
}};
var f=e.fn.scrollspy;
e.fn.scrollspy=function(a){return this.each(function(){var g=e(this),c=g.data("scrollspy"),b=typeof a=="object"&&a;
c||g.data("scrollspy",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.scrollspy.Constructor=d,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=f,this
},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var a=e(this);
a.scrollspy(a.data())
})
})
}(window.jQuery),!function(e){var d=function(a){this.element=e(a)
};
d.prototype={constructor:d,show:function(){var a=this.element,l=a.closest("ul:not(.dropdown-menu)"),k=a.attr("data-target"),j,i,h;
k||(k=a.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
if(a.parent("li").hasClass("active")){return
}j=l.find(".active:last a")[0],h=e.Event("show",{relatedTarget:j}),a.trigger(h);
if(h.isDefaultPrevented()){return
}i=e(k),this.activate(a.parent("li"),l),this.activate(i,i.parent(),function(){a.trigger({type:"shown",relatedTarget:j})
})
},activate:function(a,l,k){function h(){j.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),i?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active"),k&&k()
}var j=l.find("> .active"),i=k&&e.support.transition&&j.hasClass("fade");
i?j.one(e.support.transition.end,h):h(),j.removeClass("in")
}};
var f=e.fn.tab;
e.fn.tab=function(a){return this.each(function(){var c=e(this),b=c.data("tab");
b||c.data("tab",b=new d(this)),typeof a=="string"&&b[a]()
})
},e.fn.tab.Constructor=d,e.fn.tab.noConflict=function(){return e.fn.tab=f,this
},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault(),e(this).tab("show")
})
}(window.jQuery),!function(e){var d=function(g,c){this.init("tooltip",g,c)
};
d.prototype={constructor:d,init:function(a,p,o){var n,m,l,k,j;
this.type=a,this.$element=e(p),this.options=this.getOptions(o),this.enabled=!0,l=this.options.trigger.split(" ");
for(j=l.length;
j--;
){k=l[j],k=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):k!="manual"&&(n=k=="hover"?"mouseenter":"focus",m=k=="hover"?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(m+"."+this.type,this.options.selector,e.proxy(this.leave,this)))
}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},getOptions:function(a){return a=e.extend({},e.fn[this.type].defaults,this.$element.data(),a),a.delay&&typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),a
},enter:function(a){var i=e.fn[this.type].defaults,h={},g;
this._options&&e.each(this._options,function(j,c){i[j]!=c&&(h[j]=c)
},this),g=e(a.currentTarget)[this.type](h).data(this.type);
if(!g.options.delay||!g.options.delay.show){return g.show()
}clearTimeout(this.timeout),g.hoverState="in",this.timeout=setTimeout(function(){g.hoverState=="in"&&g.show()
},g.options.delay.show)
},leave:function(a){var g=e(a.currentTarget)[this.type](this._options).data(this.type);
this.timeout&&clearTimeout(this.timeout);
if(!g.options.delay||!g.options.delay.hide){return g.hide()
}g.hoverState="out",this.timeout=setTimeout(function(){g.hoverState=="out"&&g.hide()
},g.options.delay.hide)
},show:function(){var a,n,m,l,k,j,i=e.Event("show");
if(this.hasContent()&&this.enabled){this.$element.trigger(i);
if(i.isDefaultPrevented()){return
}a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),k=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,a.detach().css({top:0,left:0,display:"block"}),this.options.container?a.appendTo(this.options.container):a.insertAfter(this.$element),n=this.getPosition(),m=a[0].offsetWidth,l=a[0].offsetHeight;
switch(k){case"bottom":j={top:n.top+n.height,left:n.left+n.width/2-m/2};
break;
case"top":j={top:n.top-l,left:n.left+n.width/2-m/2};
break;
case"left":j={top:n.top+n.height/2-l/2,left:n.left-m};
break;
case"right":j={top:n.top+n.height/2-l/2,left:n.left+n.width}
}this.applyPlacement(j,k),this.$element.trigger("shown")
}},applyPlacement:function(r,q){var p=this.tip(),o=p[0].offsetWidth,n=p[0].offsetHeight,m,l,k,j;
p.offset(r).addClass(q).addClass("in"),m=p[0].offsetWidth,l=p[0].offsetHeight,q=="top"&&l!=n&&(r.top=r.top+n-l,j=!0),q=="bottom"||q=="top"?(k=0,r.left<0&&(k=r.left*-2,r.left=0,p.offset(r),m=p[0].offsetWidth,l=p[0].offsetHeight),this.replaceArrow(k-o+m,m,"left")):this.replaceArrow(l-n,l,"top"),j&&p.offset(r)
},replaceArrow:function(h,g,i){this.arrow().css(i,h?50*(1-h/g)+"%":"")
},setContent:function(){var g=this.tip(),c=this.getTitle();
g.find(".tooltip-inner")[this.options.html?"html":"text"](c),g.removeClass("fade in top bottom left right")
},hide:function(){function g(){var c=setTimeout(function(){i.off(e.support.transition.end).detach()
},500);
i.one(e.support.transition.end,function(){clearTimeout(c),i.detach()
})
}var a=this,i=this.tip(),h=e.Event("hide");
this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?g():i.detach(),this.$element.trigger("hidden"),this
},fixTitle:function(){var b=this.$element;
(b.attr("title")||typeof b.attr("data-original-title")!="string")&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},hasContent:function(){return this.getTitle()
},getPosition:function(){var a=this.$element[0];
return e.extend({},typeof a.getBoundingClientRect=="function"?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())
},getTitle:function(){var h,g=this.$element,i=this.options;
return h=g.attr("data-original-title")||(typeof i.title=="function"?i.title.call(g[0]):i.title),h
},tip:function(){return this.$tip=this.$tip||e(this.options.template)
},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},enable:function(){this.enabled=!0
},disable:function(){this.enabled=!1
},toggleEnabled:function(){this.enabled=!this.enabled
},toggle:function(a){var g=a?e(a.currentTarget)[this.type](this._options).data(this.type):this;
g.tip().hasClass("in")?g.hide():g.show()
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}};
var f=e.fn.tooltip;
e.fn.tooltip=function(a){return this.each(function(){var g=e(this),c=g.data("tooltip"),b=typeof a=="object"&&a;
c||g.data("tooltip",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.tooltip.Constructor=d,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=f,this
}
}(window.jQuery),!function(e){var d=function(g,c){this.init("popover",g,c)
};
d.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:d,setContent:function(){var h=this.tip(),g=this.getTitle(),i=this.getContent();
h.find(".popover-title")[this.options.html?"html":"text"](g),h.find(".popover-content")[this.options.html?"html":"text"](i),h.removeClass("fade top bottom left right in")
},hasContent:function(){return this.getTitle()||this.getContent()
},getContent:function(){var h,g=this.$element,i=this.options;
return h=(typeof i.content=="function"?i.content.call(g[0]):i.content)||g.attr("data-content"),h
},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}});
var f=e.fn.popover;
e.fn.popover=function(a){return this.each(function(){var g=e(this),c=g.data("popover"),b=typeof a=="object"&&a;
c||g.data("popover",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.popover.Constructor=d,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=f,this
}
}(window.jQuery),!function(e){var d=function(a,g){this.options=e.extend({},e.fn.affix.defaults,g),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)
},this)),this.$element=e(a),this.checkPosition()
};
d.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var a=e(document).height(),p=this.$window.scrollTop(),o=this.$element.offset(),n=this.options.offset,m=n.bottom,l=n.top,k="affix affix-top affix-bottom",j;
typeof n!="object"&&(m=l=n),typeof l=="function"&&(l=n.top()),typeof m=="function"&&(m=n.bottom()),j=this.unpin!=null&&p+this.unpin<=o.top?!1:m!=null&&o.top+this.$element.height()>=a-m?"bottom":l!=null&&p<=l?"top":!1;
if(this.affixed===j){return
}this.affixed=j,this.unpin=j=="bottom"?o.top-p:null,this.$element.removeClass(k).addClass("affix"+(j?"-"+j:""))
};
var f=e.fn.affix;
e.fn.affix=function(a){return this.each(function(){var g=e(this),c=g.data("affix"),b=typeof a=="object"&&a;
c||g.data("affix",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.affix.Constructor=d,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=f,this
},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var a=e(this),g=a.data();
g.offset=g.offset||{},g.offsetBottom&&(g.offset.bottom=g.offsetBottom),g.offsetTop&&(g.offset.top=g.offsetTop),a.affix(g)
})
})
}(window.jQuery),!function(f){var e='[data-dismiss="alert"]',h=function(a){f(a).on("click",e,this.close)
};
h.prototype.close=function(a){function i(){j.trigger("closed").remove()
}var l=f(this),k=l.attr("data-target"),j;
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,"")),j=f(k),a&&a.preventDefault(),j.length||(j=l.hasClass("alert")?l:l.parent()),j.trigger(a=f.Event("close"));
if(a.isDefaultPrevented()){return
}j.removeClass("in"),f.support.transition&&j.hasClass("fade")?j.on(f.support.transition.end,i):i()
};
var g=f.fn.alert;
f.fn.alert=function(a){return this.each(function(){var c=f(this),b=c.data("alert");
b||c.data("alert",b=new h(this)),typeof a=="string"&&b[a].call(c)
})
},f.fn.alert.Constructor=h,f.fn.alert.noConflict=function(){return f.fn.alert=g,this
},f(document).on("click.alert.data-api",e,h.prototype.close)
}(window.jQuery),!function(e){var d=function(a,g){this.$element=e(a),this.options=e.extend({},e.fn.button.defaults,g)
};
d.prototype.setState=function(h){var g="disabled",k=this.$element,j=k.data(),i=k.is("input")?"val":"html";
h+="Text",j.resetText||k.data("resetText",k[i]()),k[i](j[h]||this.options[h]),setTimeout(function(){h=="loadingText"?k.addClass(g).attr(g,g):k.removeClass(g).removeAttr(g)
},0)
},d.prototype.toggle=function(){var b=this.$element.closest('[data-toggle="buttons-radio"]');
b&&b.find(".active").removeClass("active"),this.$element.toggleClass("active")
};
var f=e.fn.button;
e.fn.button=function(a){return this.each(function(){var g=e(this),c=g.data("button"),b=typeof a=="object"&&a;
c||g.data("button",c=new d(this,b)),a=="toggle"?c.toggle():a&&c.setState(a)
})
},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=d,e.fn.button.noConflict=function(){return e.fn.button=f,this
},e(document).on("click.button.data-api","[data-toggle^=button]",function(a){var g=e(a.target);
g.hasClass("btn")||(g=g.closest(".btn")),g.button("toggle")
})
}(window.jQuery),!function(e){var d=function(a,g){this.$element=e(a),this.options=e.extend({},e.fn.collapse.defaults,g),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()
};
d.prototype={constructor:d,dimension:function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},show:function(){var a,i,h,g;
if(this.transitioning||this.$element.hasClass("in")){return
}a=this.dimension(),i=e.camelCase(["scroll",a].join("-")),h=this.$parent&&this.$parent.find("> .accordion-group > .in");
if(h&&h.length){g=h.data("collapse");
if(g&&g.transitioning){return
}h.collapse("hide"),g||h.data("collapse",null)
}this.$element[a](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[a](this.$element[0][i])
},hide:function(){var a;
if(this.transitioning||!this.$element.hasClass("in")){return
}a=this.dimension(),this.reset(this.$element[a]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[a](0)
},reset:function(g){var c=this.dimension();
return this.$element.removeClass("collapse")[c](g||"auto")[0].offsetWidth,this.$element[g!==null?"addClass":"removeClass"]("collapse"),this
},transition:function(a,j,i){var h=this,g=function(){j.type=="show"&&h.reset(),h.transitioning=0,h.$element.trigger(i)
};
this.$element.trigger(j);
if(j.isDefaultPrevented()){return
}this.transitioning=1,this.$element[a]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,g):g()
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()
}};
var f=e.fn.collapse;
e.fn.collapse=function(a){return this.each(function(){var g=e(this),c=g.data("collapse"),b=e.extend({},e.fn.collapse.defaults,g.data(),typeof a=="object"&&a);
c||g.data("collapse",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=d,e.fn.collapse.noConflict=function(){return e.fn.collapse=f,this
},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(a){var j=e(this),i,h=j.attr("data-target")||a.preventDefault()||(i=j.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),g=e(h).data("collapse")?"toggle":j.data();
j[e(h).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(h).collapse(g)
})
}(window.jQuery),!function(e){var d=function(a,g){this.$element=e(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=g,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))
};
d.prototype={cycle:function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this
},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)
},to:function(a){var h=this.getActiveIndex(),g=this;
if(a>this.$items.length-1||a<0){return
}return this.sliding?this.$element.one("slid",function(){g.to(a)
}):h==a?this.pause().cycle():this.slide(a>h?"next":"prev",e(this.$items[a]))
},pause:function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this
},next:function(){if(this.sliding){return
}return this.slide("next")
},prev:function(){if(this.sliding){return
}return this.slide("prev")
},slide:function(r,q){var p=this.$element.find(".item.active"),o=q||p[r](),n=this.interval,m=r=="next"?"left":"right",l=r=="next"?"first":"last",k=this,a;
this.sliding=!0,n&&this.pause(),o=o.length?o:this.$element.find(".item")[l](),a=e.Event("slide",{relatedTarget:o[0],direction:m});
if(o.hasClass("active")){return
}this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var c=e(k.$indicators.children()[k.getActiveIndex()]);
c&&c.addClass("active")
}));
if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(a);
if(a.isDefaultPrevented()){return
}o.addClass(r),o[0].offsetWidth,p.addClass(m),o.addClass(m),this.$element.one(e.support.transition.end,function(){o.removeClass([r,m].join(" ")).addClass("active"),p.removeClass(["active",m].join(" ")),k.sliding=!1,setTimeout(function(){k.$element.trigger("slid")
},0)
})
}else{this.$element.trigger(a);
if(a.isDefaultPrevented()){return
}p.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")
}return n&&this.cycle(),this
}};
var f=e.fn.carousel;
e.fn.carousel=function(a){return this.each(function(){var i=e(this),h=i.data("carousel"),c=e.extend({},e.fn.carousel.defaults,typeof a=="object"&&a),b=typeof a=="string"?a:c.slide;
h||i.data("carousel",h=new d(this,c)),typeof a=="number"?h.to(a):b?h[b]():c.interval&&h.pause().cycle()
})
},e.fn.carousel.defaults={interval:5000,pause:"hover"},e.fn.carousel.Constructor=d,e.fn.carousel.noConflict=function(){return e.fn.carousel=f,this
},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(a){var l=e(this),k,j=e(l.attr("data-target")||(k=l.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"")),i=e.extend({},j.data(),l.data()),h;
j.carousel(i),(h=l.attr("data-slide-to"))&&j.data("carousel").pause().to(h).cycle(),a.preventDefault()
})
}(window.jQuery),!function(e){var d=function(a,g){this.$element=e(a),this.options=e.extend({},e.fn.typeahead.defaults,g),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()
};
d.prototype={constructor:d,select:function(){var b=this.$menu.find(".active").attr("data-value");
return this.$element.val(this.updater(b)).change(),this.hide()
},updater:function(b){return b
},show:function(){var a=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
return this.$menu.insertAfter(this.$element).css({top:a.top+a.height,left:a.left}).show(),this.shown=!0,this
},hide:function(){return this.$menu.hide(),this.shown=!1,this
},lookup:function(a){var g;
return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(g=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,g?this.process(g):this)
},process:function(a){var g=this;
return a=e.grep(a,function(b){return g.matcher(b)
}),a=this.sorter(a),a.length?this.render(a.slice(0,this.options.items)).show():this.shown?this.hide():this
},matcher:function(b){return ~b.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(h){var g=[],k=[],j=[],i;
while(i=h.shift()){i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?k.push(i):j.push(i):g.push(i)
}return g.concat(k,j)
},highlighter:function(g){var c=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return g.replace(new RegExp("("+c+")","ig"),function(i,h){return"<strong>"+h+"</strong>"
})
},render:function(a){var g=this;
return a=e(a).map(function(c,h){return c=e(g.options.item).attr("data-value",h),c.find("a").html(g.highlighter(h)),c[0]
}),a.first().addClass("active"),this.$menu.html(a),this
},next:function(a){var h=this.$menu.find(".active").removeClass("active"),g=h.next();
g.length||(g=e(this.$menu.find("li")[0])),g.addClass("active")
},prev:function(h){var g=this.$menu.find(".active").removeClass("active"),i=g.prev();
i.length||(i=this.$menu.find("li").last()),i.addClass("active")
},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))
},eventSupported:function(g){var c=g in this.$element;
return c||(this.$element.setAttribute(g,"return;"),c=typeof this.$element[g]=="function"),c
},move:function(b){if(!this.shown){return
}switch(b.keyCode){case 9:case 13:case 27:b.preventDefault();
break;
case 38:b.preventDefault(),this.prev();
break;
case 40:b.preventDefault(),this.next()
}b.stopPropagation()
},keydown:function(a){this.suppressKeyPressRepeat=~e.inArray(a.keyCode,[40,38,9,13,27]),this.move(a)
},keypress:function(b){if(this.suppressKeyPressRepeat){return
}this.move(b)
},keyup:function(b){switch(b.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return
}this.select();
break;
case 27:if(!this.shown){return
}this.hide();
break;
default:this.lookup()
}b.stopPropagation(),b.preventDefault()
},focus:function(b){this.focused=!0
},blur:function(b){this.focused=!1,!this.mousedover&&this.shown&&this.hide()
},click:function(b){b.stopPropagation(),b.preventDefault(),this.select(),this.$element.focus()
},mouseenter:function(a){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(a.currentTarget).addClass("active")
},mouseleave:function(b){this.mousedover=!1,!this.focused&&this.shown&&this.hide()
}};
var f=e.fn.typeahead;
e.fn.typeahead=function(a){return this.each(function(){var g=e(this),c=g.data("typeahead"),b=typeof a=="object"&&a;
c||g.data("typeahead",c=new d(this,b)),typeof a=="string"&&c[a]()
})
},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=d,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=f,this
},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(a){var g=e(this);
if(g.data("typeahead")){return
}g.typeahead(g.data())
})
}(window.jQuery);
var Days=(function(){var a;
return{initDay:function(b){var c=new Date(b.theDay);
b.year=c.getFullYear();
b.month=$.datepicker._defaults.monthNamesShort[c.getMonth()];
b.day=c.getDate();
b.inited=true
},newDay:function(b){b.render("/templates/newday.hb").swap(b.$element()).then(function(){b.app.trigger("initCalendar")
}).then(function(){$("#inputTheDay").val($("#datepicker1").val());
$("#inputTheDay").datepicker();
$("#inputStartDate").datetimepicker();
$("#inputDuration").timepicker({})
})
},addDay:function(b){$.ajax({type:"POST",data:$("form.new").serialize(),url:"/json/days/form",success:function(e,d,c){if(e.id==null){b.app.trigger("newError")
}else{b.app.clearTemplateCache();
b.redirect("#/")
}}})
},getDay:function(c,b){$.ajax({type:"GET",url:"/json/days/"+b,dataType:"json",complete:function(j,i,h){var d=$("div.span4");
var e;
var g=[];
if(j.responseText.length>0){e=$.parseJSON(j.responseText);
$.each(e.eventsOfTheDay,function(k,l){if(!l.inited){Events.initEvent(l)
}g.push(l.id)
})
}var f=b.replace(/\//g,".");
if(d.length){c.render("/templates/day.hb",{day:e,date:f}).replace("div.selected");
c.app.trigger("removeSelectedFromLatests",g)
}else{Events.getLatests(c,{day:e,date:f,eventIds:g})
}Days.updateCalendar()
}})
},getDayForAMonth:function(b,c){$.ajax({type:"GET",url:"/json/days/list/"+b+"/"+c,dataType:"json",complete:function(g,f,e){if(g.responseText.length>0){var d=$.parseJSON(g.responseText);
a=d.dates;
Days.updateCalendar(d.dates)
}}})
},getAll:function(b,c,d){b.load("/json/days/"+c+"/"+d,b.loadOptions).then(function(e){$.each(e,function(g,f){if(!f.inited){Days.initDay(f)
}$.each(f.eventsOfTheDay,function(h,i){if(!i.inited){Events.initEvent(i)
}})
});
return e
}).then(function(e){b.render("/templates/allevents.hb",{days:e}).swap(b.$element()).then(function(){Events.smiley();
$("#prependedDropdownButton").val(c);
var f=$('ul#monthFilter > li > a[data-filter="'+d+'"]').html();
$("#appendedDropdownButton").val(f);
$("ul.filter").on("click","a",function(){var j=$(this).data("filter").toString();
var i="";
var g="";
if(j.length>2){i=j;
var h=$("#appendedDropdownButton").val();
g=$("ul#monthFilter > li > a:contains("+h+")").data("filter");
$("#prependedDropdownButton").val(j)
}else{i=$("#prependedDropdownButton").val();
g=j;
$("#appendedDropdownButton").val($(this).html());
$("#appendedDropdownButton").data("filter",j)
}b.app.setLocation("#/days/"+i+"/"+g)
})
})
})
},updateCalendar:function(b){if(!b&&a){b=a
}$("#datepicker1 tr").each(function(){$.each(this.cells,function(){var c=$(this);
var e=$(this).find("a");
if(e){var d=e.html();
if(d){$.each(b,function(f,g){if(g==d){e.addClass("ui-state-has-event")
}})
}}})
})
}}
})();
var Events=(function(){return{initEvent:function(d){var b=new Date(d.startTime);
d.theDay=$.format.date(d.startTime,"yyyy.MM.dd");
d.startTime=$.format.date(d.startTime,"yyyy.MM.dd HH:mm");
d.hasDuration=(d.duration>0)?true:false;
if(d.hasDuration){var a=Math.floor(d.duration/(1000*60*60));
var f=Math.floor((d.duration-(a*1000*60*60))/(1000*60));
var c=(a<10)?"0"+a:""+a;
var e=(f<10)?"0"+f:""+f;
d.duration=c+":"+e
}d.year=b.getFullYear();
d.month=$.datepicker._defaults.monthNamesShort[b.getMonth()];
d.day=b.getDate();
if(b.getHours()>0||b.getMinutes()>0){d.hours=b.getHours().toString();
d.minutes=b.getMinutes().toString();
if(d.hours.length<2){d.hours="0"+d.hours
}if(d.minutes.length<2){d.minutes="0"+d.minutes
}d.hasTimePart=true
}d.inited=true
},newEvent:function(a){a.render("/templates/newevent.hb").swap(a.$element()).then(function(){a.app.trigger("initCalendar")
}).then(function(){$("#inputTheDay").val($("#datepicker1").val());
$("#inputStartDate").datetimepicker();
$("#inputDuration").timepicker({})
})
},newWord:function(a){a.render("/templates/newword.hb").swap(a.$element()).then(function(){$("ul.thumbnails").on("click","div.thumbnail",function(){var b=$(this);
$("div.thumbnail").removeClass("selected-img");
b.addClass("selected-img");
$("#kid_input").val(b.data("kid"))
})
})
},addEvent:function(a){$.ajax({type:"POST",data:$("form.new").serialize(),url:"/json/events/form",success:function(d,c,b){if(d.id==null){a.app.trigger("newError")
}else{a.app.clearTemplateCache();
a.redirect("#/")
}}})
},addWord:function(a){$.ajax({type:"POST",data:$("form.new").serialize(),url:"/json/words/form",success:function(d,c,b){if(d.id==null){a.app.trigger("newError")
}else{a.app.clearTemplateCache();
a.redirect("#/")
}}})
},getLatestWords:function(a){$("a#more-words-link").on("click",function(){$.ajax({type:"GET",url:"/json/words",dataType:"json",complete:function(e,d,c){var b=$.parseJSON(e.responseText);
a.render("/templates/uniquewords.hb",{accordion:"modal",words:b}).replace("div#modal-unique-words").then(function(){$("div#myModal").modal()
})
}})
});
$.ajax({type:"GET",url:"/json/words/latests/5",dataType:"json",complete:function(e,d,c){var b=$.parseJSON(e.responseText);
a.render("/templates/uniquewords.hb",{accordion:"original",words:b}).replace("div#latest-words")
}})
},getLatests:function(b,d){var c=$.parseJSON($("#latestPhotosJSON").val());
$.each(c,function(e,f){if(!f.inited){f.createdate=$.format.date(f.createdate,"yyyy.MM.dd HH:mm");
f.inited=true
}if(e==0){f.first=true
}});
var a=$("#newestVideo").val();
b.load("/json/events/latests/5",b.loadOptions).then(function(e){$.each(e,function(f,g){if(!g.inited){Events.initEvent(g)
}});
return e
}).then(function(e){var f=new Date();
var g={y:f.getFullYear(),m:(f.getMonth()+1).toString()};
if(g.m.length<2){g.m="0"+g.m
}b.render("/templates/latests.hb",{items:e,date:g,photos:c,videoId:a}).swap(b.$element()).then(function(){b.app.trigger("initCalendar")
}).then(function(){Events.getLatestWords(b);
if(d){b.render("/templates/day.hb",d).replace("div.selected");
if(d.eventIds.length>0){b.app.trigger("removeSelectedFromLatests",d.eventIds)
}}else{var h=$("#datepicker1").datepicker("getDate");
b.app.trigger("selectedDayChanged",{date:$.format.date(h,"yyyy.MM.dd")})
}$("#myCarousel").carousel({interval:5000,cycle:true})
})
})
},smiley:function(){$("div.row").each(function(a,c){var b=$(c).html().replace(/:\)/g,'<img src="/images/smiley.png" alt=":-)" />');
$(c).html(b)
})
},initNavbar:function(e){$("ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(true,true).delay(50).fadeIn()
},function(){$(this).removeClass("active").find(".dropdown-menu").stop(true,true).delay(50).fadeOut()
});
$("#buttonSearch").on("click",function(){var f=$("#inputSearch").val();
if(f.length<2){var g=$("#inputSearch");
g.tooltip({placement:"bottom",title:"Legalább 2 karakter hosszú legyen!"});
g.tooltip("show");
return
}$("#inputSearch").tooltip("destroy");
e.setLocation("#/search/"+f)
});
var b=$("li#liAllEvents");
var d=b.data("day-count");
var c=b.data("event-count");
b.tooltip({placement:"bottom",title:d+" napon "+c+" esemény van a naplóban."});
var a=$(".nav-collapse");
a.on("click","a.menu-link",function(){a.collapse("hide")
})
},search:function(b,a){b.load("/json/events/search/"+a,b.loadOptions).then(function(c){$.each(c,function(e,f){if(!f.inited){Events.initEvent(f);
var d=new Date(f.startTime);
f.year=d.getFullYear();
f.month=$.datepicker._defaults.monthNamesShort[d.getMonth()];
f.day=d.getDate()
}});
return c
}).then(function(d){var e=new Date();
var f={y:e.getFullYear(),m:(e.getMonth()+1).toString()};
if(f.m.length<2){f.m="0"+f.m
}var c={items:d,searchTerm:a,date:f};
b.render("/templates/search.hb",c).swap(b.$element()).then(function(){$("#inputSearch").val("");
b.$element().highlight(a,true);
Events.smiley()
})
})
}}
})();
fotoramaVersion="4.6.3",function(bB,bV,bI,bH,bQ){function bE(a){var b="bez_"+bH.makeArray(arguments).join("_").replace(".","p");
if("function"!=typeof bH.easing[b]){var c=function(g,k){var m=[null,null],l=[null,null],f=[null,null],j=function(i,e){return f[e]=3*g[e],l[e]=3*(k[e]-g[e])-f[e],m[e]=1-f[e]-l[e],i*(f[e]+i*(l[e]+i*m[e]))
},d=function(e){return f[0]+e*(2*l[0]+3*m[0]*e)
},h=function(i){for(var p,r=i,q=0;
++q<14&&(p=j(r,0)-i,!(Math.abs(p)<0.001));
){r-=p/d(r)
}return r
};
return function(e){return j(h(e),1)
}
};
bH.easing[b]=function(h,j,f,g,d){return g*c([a[0],a[1]],[a[2],a[3]])(j/d)+f
}
}return b
}function bZ(){}function bC(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))
}function bz(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]
}function bK(a){return a0?+bz(a.css("transform")):+a.css("left").replace("px","")
}function bX(a){var b={};
return a0?b.transform="translate3d("+a+"px,0,0)":b.left=a,b
}function bU(a){return{"transition-duration":a+"ms"}
}function bW(a,b){return isNaN(a)?b:a
}function bR(a,b){return bW(+String(a).replace(b||"px",""))
}function bJ(a){return/%$/.test(a)?bR(a,"%"):bQ
}function bG(a,b){return bW(bJ(a)/100*b,bR(a))
}function by(a){return(!isNaN(bR(a))||!isNaN(bR(a,"%")))&&a
}function bT(a,b,d,c){return(a-(c||0))*(b+(d||0))
}function bx(a,b,d,c){return -Math.round(a/(b+(d||0))-(c||0))
}function bv(a){var b=a.data();
if(!b.tEnd){var d=a[0],c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};
b8(d,c[c1.prefixed("transition")],function(e){b.tProp&&e.propertyName.match(b.tProp)&&b.onEndFn()
}),b.tEnd=!0
}}function bY(b,d,g,f){var a,c=b.data();
c&&(c.onEndFn=function(){a||(a=!0,clearTimeout(c.tT),g())
},c.tProp=d,clearTimeout(c.tT),c.tT=setTimeout(function(){c.onEndFn()
},1.5*f),bv(b))
}function bw(a,b){if(a.length){var d=a.data();
a0?(a.css(bU(0)),d.onEndFn=bZ,clearTimeout(d.tT)):a.stop();
var c=b2(b,function(){return bK(a)
});
return a.css(bX(c)),c
}}function b2(){for(var a,b=0,c=arguments.length;
c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);
b++){}return a
}function cB(a,b){return Math.round(a+(b-a)/1.5)
}function cb(){return cb.p=cb.p||("https:"===bI.protocol?"https://":"http://"),cb.p
}function bL(a){var b=bV.createElement("a");
return b.href=a,b
}function ck(b,c){if("string"!=typeof b){return b
}b=bL(b);
var f,d;
if(b.host.match(/youtube\.com/)&&b.search){if(f=b.search.split("v=")[1]){var a=f.indexOf("&");
-1!==a&&(f=f.substring(0,a)),d="youtube"
}}else{b.host.match(/youtube\.com|youtu\.be/)?(f=b.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):b.host.match(/vimeo\.com/)&&(d="vimeo",f=b.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""))
}return f&&d||!c||(f=b.href,d="custom"),f?{id:f,type:d,s:b.search.replace(/^\?/,""),p:cb()}:!1
}function cd(d,g,h){var c,f,b=d.video;
return"youtube"===b.type?(f=cb()+"img.youtube.com/vi/"+b.id+"/default.jpg",c=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),d.thumbsReady=!0):"vimeo"===b.type?bH.ajax({url:cb()+"vimeo.com/api/v2/video/"+b.id+".json",dataType:"jsonp",success:function(a){d.thumbsReady=!0,cx(g,{img:a[0].thumbnail_large,thumb:a[0].thumbnail_small},d.i,h)
}}):d.thumbsReady=!0,{img:c,thumb:f}
}function cx(f,j,k,d){for(var h=0,b=f.length;
b>h;
h++){var g=f[h];
if(g.i===k&&g.thumbsReady){var c={videoReady:!0};
c[a9]=c[bM]=c[cW]=!1,d.splice(h,1,bH.extend({},g,c,j));
break
}}}function cy(b){function c(o,j,h){var f=o.children("img").eq(0),m=o.attr("href"),p=o.attr("src"),n=f.attr("src"),g=j.video,k=h?ck(m,g===!0):!1;
k?m=!1:k=g,d(o,f,bH.extend(j,{video:k,img:j.img||m||p||n,thumb:j.thumb||n||p||m}))
}function d(h,k,l){var g=l.thumb&&l.img!==l.thumb,j=bR(l.width||h.attr("width")),f=bR(l.height||h.attr("height"));
bH.extend(l,{width:j,height:f,thumbratio:cp(l.thumbratio||bR(l.thumbwidth||k&&k.attr("width")||g||j)/bR(l.thumbheight||k&&k.attr("height")||g||f))})
}var a=[];
return b.children().each(function(){var e=bH(this),f=cv(bH.extend(e.data(),{id:e.attr("id")}));
if(e.is("a, img")){c(e,f,!0)
}else{if(e.is(":empty")){return
}d(e,null,bH.extend(f,{html:this,_html:e.html()}))
}a.push(f)
}),a
}function ch(a){return 0===a.offsetWidth&&0===a.offsetHeight
}function bN(a){return !bH.contains(bV.documentElement,a)
}function cj(a,b,d,c){return cj.i||(cj.i=1,cj.ii=[!0]),c=c||cj.i,"undefined"==typeof cj.ii[c]&&(cj.ii[c]=!0),a()?b():cj.ii[c]&&setTimeout(function(){cj.ii[c]&&cj(a,b,d,c)
},d||100),cj.i++
}function cP(a){bI.replace(bI.protocol+"//"+bI.host+bI.pathname.replace(/^\/?/,"/")+bI.search+"#"+a)
}function bF(B,w,j,g){var q=B.data(),b=q.measures;
if(b&&(!q.l||q.l.W!==b.width||q.l.H!==b.height||q.l.r!==b.ratio||q.l.w!==w.w||q.l.h!==w.h||q.l.m!==j||q.l.p!==g)){console.log("fit");
var z=b.width,A=b.height,p=w.w/w.h,y=b.ratio>=p,v="scaledown"===j,x="contain"===j,s="cover"===j,k=cs(g);
y&&(v||x)||!y&&s?(z=bC(w.w,0,v?z:1/0),A=z/b.ratio):(y&&s||!y&&(v||x))&&(A=bC(w.h,0,v?A:1/0),z=A*b.ratio),B.css({width:z,height:A,left:bG(k.x,w.w-z),top:bG(k.y,w.h-A)}),q.l={W:b.width,H:b.height,r:b.ratio,w:w.w,h:w.h,m:j,p:g}
}return !0
}function cE(a,b){var c=a[0];
c.styleSheet?c.styleSheet.cssText=b:a.html(b)
}function bu(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"
}function cm(d,h,k,j){if(!k){return !1
}if(!isNaN(d)){return d-(j?0:1)
}for(var c,g=0,b=h.length;
b>g;
g++){var f=h[g];
if(f.id===d){c=g;
break
}}return c
}function ci(a,b,c){c=c||{},a.each(function(){var e,d=bH(this),f=d.data();
f.clickOn||(f.clickOn=!0,bH.extend(cG(d,{onStart:function(g){e=g,(c.onStart||bZ).call(this,g)
},onMove:c.onMove||bZ,onTouchEnd:c.onTouchEnd||bZ,onEnd:function(g){g.moved||b.call(this,e)
}}),{noMove:!0}))
})
}function ct(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"
}function cz(a){for(var b=a.length;
b;
){var d=Math.floor(Math.random()*b--),c=a[b];
a[b]=a[d],a[d]=c
}return a
}function cf(a){return"[object Array]"==Object.prototype.toString.call(a)&&bH.map(a,function(b){return bH.extend({},b)
})
}function b7(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)
}function cv(a){if(a){var b={};
return bH.each(a,function(c,d){b[c.toLowerCase()]=d
}),b
}}function cp(a){if(a){var b=+a;
return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||bQ):b
}}function b8(a,b,d,c){b&&(a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent("on"+b,d))
}function cC(a){return !!a.getAttribute("disabled")
}function b6(a){return{tabindex:-1*a+"",disabled:a}
}function cg(a,b){b8(a,"keyup",function(c){cC(a)||13==c.keyCode&&b.call(a,c)
})
}function ca(a,b){b8(a,"focus",a.onfocusin=function(c){b.call(a,c)
},!0)
}function b5(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()
}function cw(a){return a?">":"<"
}function cs(a){return a=(a+"").split(/\s+/),{x:by(a[0])||cr,y:by(a[1])||cr}
}function b4(b,f){var g=b.data(),a=Math.round(f.pos),d=function(){g.sliding=!1,(f.onEnd||bZ)()
};
"undefined"!=typeof f.overPos&&f.overPos!==f.pos&&(a=f.overPos,d=function(){b4(b,bH.extend({},f,{overPos:f.pos,time:Math.max(cM,f.time/2)}))
});
var c=bH.extend(bX(a),f.width&&{width:f.width});
g.sliding=!0,a0?(b.css(bH.extend(bU(f.time),c)),f.time>10?bY(b,"transform",d,f.time):d()):b.stop().animate(c,f.time,aM,d)
}function aP(w,o,b,j,a,x){var v="undefined"!=typeof x;
if(v||(a.push(arguments),Array.prototype.push.call(arguments,a.length),!(a.length>1))){w=w||bH(w),o=o||bH(o);
var g=w[0],q=o[0],m="crossfade"===j.method,p=function(){if(!p.done){p.done=!0;
var c=(v||a.shift())&&a.shift();
c&&aP.apply(this,c),(j.onEnd||bZ)(!!c)
}},k=j.time/(x||1);
b.removeClass(cQ+" "+bA),w.stop().addClass(cQ),o.stop().addClass(bA),m&&q&&w.fadeTo(0,0),w.fadeTo(m?k:0,1,m&&p),o.fadeTo(k,0,p),g&&m||q||p()
}}function bg(a){var b=(a.touches||[])[0]||a;
a._x=b.pageX,a._y=b.clientY,a._now=bH.now()
}function cG(o,A){function D(b){return H=bH(b.target),J.checked=z=j=e=!1,I||J.flow||b.touches&&b.touches.length>1||b.which>1||a6&&a6.type!==b.type&&aV||(z=A.select&&H.is(A.select,a))?z:(B="touchstart"===b.type,j=H.is("a, a *",a),E=J.control,F=J.noMove||J.noSwipe||E?16:J.snap?0:4,bg(b),G=a6=b,cJ=b.type.replace(/down|start/,"move").replace(/Down/,"Move"),(A.onStart||bZ).call(a,b,{control:E,$target:H}),I=J.flow=!0,void ((!B||J.go)&&b5(b)))
}function x(d){if(d.touches&&d.touches.length>1||ay&&!d.isPrimary||cJ!==d.type||!I){return I&&q(),void (A.onTouchEnd||bZ)()
}bg(d);
var g=Math.abs(d._x-G._x),h=Math.abs(d._y-G._y),c=g-h,f=(J.go||J.x||c>=0)&&!J.noSwipe,b=0>c;
B&&!J.checked?(I=f)&&b5(d):(b5(d),(A.onMove||bZ).call(a,d,{touch:B})),!e&&Math.sqrt(Math.pow(g,2)+Math.pow(h,2))>F&&(e=!0),J.checked=J.checked||f||b
}function q(b){(A.onTouchEnd||bZ)();
var c=I;
J.control=I=!1,c&&(J.flow=!1),!c||j&&!J.checked||(b&&b5(b),aV=!0,clearTimeout(aD),aD=setTimeout(function(){aV=!1
},1000),(A.onEnd||bZ).call(a,{moved:e,$target:H,control:E,touch:B,startEvent:G,aborted:!b||"MSPointerCancel"===b.type}))
}function k(){J.flow||setTimeout(function(){J.flow=!0
},10)
}function C(){J.flow&&setTimeout(function(){J.flow=!1
},bs)
}var I,G,H,E,B,z,j,F,e,a=o[0],J={};
return ay?(b8(a,"MSPointerDown",D),b8(bV,"MSPointerMove",x),b8(bV,"MSPointerCancel",q),b8(bV,"MSPointerUp",q)):(b8(a,"touchstart",D),b8(a,"touchmove",x),b8(a,"touchend",q),b8(bV,"touchstart",k),b8(bV,"touchend",C),b8(bV,"touchcancel",C),aq.on("scroll",C),o.on("mousedown",D),aT.on("mousemove",x).on("mouseup",q)),o.on("click","a",function(b){J.checked&&b5(b)
}),J
}function b3(B,P){function G(d,b){j=!0,I=O=d._x,s=d._now,D=[[s,I]],Q=L=A.noMove||b?0:bw(B,(P.getPos||bZ)()),(P.onStart||bZ).call(c,d)
}function K(b,d){q=A.min,o=A.max,R=A.snap,U=b.altKey,j=J=!1,a=d.control,a||x.sliding||G(b)
}function C(d,b){A.noSwipe||(j||G(d),O=d._x,D.push([d._now,O]),L=Q-(I-O),H=bu(L,q,o),q>=L?L=cB(L,q):L>=o&&(L=cB(L,o)),A.noMove||(B.css(bX(L)),J||(J=!0,b.touch||ay||B.addClass(a7)),(P.onMove||bZ).call(c,d,{pos:L,edge:H})))
}function z(Z){if(!A.noSwipe||!Z.moved){j||G(Z.startEvent,!0),Z.touch||ay||B.removeClass(a7),N=bH.now();
for(var E,w,W,ae,V,p,n,y,b,X=N-bs,t=null,e=cM,Y=P.friction,f=D.length-1;
f>=0;
f--){if(E=D[f][0],w=Math.abs(E-X),null===t||W>w){t=E,ae=D[f][1]
}else{if(t===X||w>W){break
}}W=w
}n=bC(L,q,o);
var d=ae-O,M=d>=0,S=N-t,h=S>bs,g=!h&&L!==Q&&n===L;
R&&(n=bC(Math[g?M?"floor":"ceil":"round"](L/R)*R,q,o),q=o=n),g&&(R||n===L)&&(b=-(d/S),e*=bC(Math.abs(b),P.timeLow,P.timeHigh),V=Math.round(L+b*e/Y),R||(n=V),(!M&&V>o||M&&q>V)&&(p=M?q:o,y=V-p,R||(n=p),y=bC(n+0.03*y,p-50,p+50),e=Math.abs((L-y)/(b/Y)))),e*=U?10:1,(P.onEnd||bZ).call(c,bH.extend(Z,{moved:Z.moved||h&&R,pos:L,newPos:n,overPos:y,time:e}))
}}var I,O,Q,L,H,D,s,N,q,o,R,U,a,J,j,c=B[0],x=B.data(),A={};
return A=bH.extend(cG(P.$wrap,bH.extend({},P,{onStart:K,onMove:C,onEnd:z})),A)
}function aC(c,g){var h,b,f,d=c[0],a={prevent:{}};
return b8(d,ai,function(j){var n=j.wheelDeltaY||-1*j.deltaY||0,i=j.wheelDeltaX||-1*j.deltaX||0,q=Math.abs(i)&&!Math.abs(n),o=cw(0>i),p=b===o,k=bH.now(),e=bs>k-f;
b=o,f=k,q&&a.ok&&(!a.prevent[o]||h)&&(b5(j,!0),h&&p&&e||(g.shift&&(h=!0,clearTimeout(a.t),a.t=setTimeout(function(){h=!1
},bo)),(g.onEnd||bZ)(j,g.shift?o:i)))
}),a
}function ba(){bH.each(bH.Fotorama.instances,function(a,b){b.index=a
})
}function cN(a){bH.Fotorama.instances.push(a),ba()
}function aZ(a){bH.Fotorama.instances.splice(a.index,1),ba()
}var aG="fotorama",c0="fullscreen",bO=aG+"__wrap",a5=bO+"--css2",bp=bO+"--css3",aL=bO+"--video",cS=bO+"--fade",bt=bO+"--slide",ax=bO+"--no-controls",aU=bO+"--no-shadows",am=bO+"--pan-y",cV=bO+"--rtl",cq=bO+"--only-active",ab=bO+"--no-captions",af=bO+"--toggle-arrows",aJ=aG+"__stage",cU=aJ+"__frame",aj=cU+"--video",a8=aJ+"__shaft",aa=aG+"__grab",ah=aG+"__pointer",ar=aG+"__arr",aF=ar+"--disabled",au=ar+"--prev",aX=ar+"--next",cA=aG+"__nav",bk=cA+"-wrap",a3=cA+"__shaft",cL=cA+"--dots",bi=cA+"--thumbs",aO=cA+"__frame",cD=aO+"--dot",aA=aO+"--thumb",al=aG+"__fade",bA=al+"-front",cQ=al+"-rear",br=aG+"__shadow",b9=br+"s",aS=b9+"--left",bl=b9+"--right",aw=aG+"__active",cI=aG+"__select",bb=aG+"--hidden",cY=aG+"--fullscreen",b0=aG+"__fullscreen-icon",a1=aG+"__error",aN=aG+"__loading",bd=aG+"__loaded",cu=bd+"--full",bS=bd+"--img",a7=aG+"__grabbing",cK=aG+"__img",aW=cK+"--full",aE=aG+"__dot",cX=aG+"__thumb",bD=cX+"-border",a2=aG+"__html",bm=aG+"__video",aI=bm+"-play",cO=bm+"-close",bq=aG+"__caption",av=aG+"__caption__wrap",aR=aG+"__spinner",ak='" tabindex="0" role="button',cT=bH&&bH.fn.jquery.split(".");
if(!cT||cT[0]<1||1==cT[0]&&cT[1]<8){throw"Fotorama requires jQuery 1.8 or later and will not run without it."
}var cc={},c1=function(G,X,N){function L(a){V.cssText=a
}function R(a,b){return typeof a===b
}function J(a,b){return !!~(""+a).indexOf(b)
}function an(b,c){for(var d in b){var a=b[d];
if(!J(a,"-")&&V[a]!==N){return"pfx"==c?a:!0
}}return !1
}function H(c,f,g){for(var d in c){var b=f[c[d]];
if(b!==N){return g===!1?c[d]:R(b,"function")?b.bind(g||f):b
}}return !1
}function F(a,c,f){var d=a.charAt(0).toUpperCase()+a.slice(1),b=(a+" "+ae.join(d+" ")+d).split(" ");
return R(c,"string")||R(c,"undefined")?an(b,c):(b=(a+" "+B.join(d+" ")+d).split(" "),H(b,c,f))
}var P,Z,W,Y="2.6.2",U={},O=X.documentElement,K="modernizr",E=X.createElement(K),V=E.style,D=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),A="Webkit Moz O ms",ae=A.split(" "),B=A.toLowerCase().split(" "),ao={},I=[],j=I.slice,Q=function(w,e,d,h){var b,p,x,v,g=X.createElement("div"),m=X.body,k=m||X.createElement("body");
if(parseInt(d,10)){for(;
d--;
){x=X.createElement("div"),x.id=h?h[d]:K+(d+1),g.appendChild(x)
}}return b=["&#173;",'<style id="s',K,'">',w,"</style>"].join(""),g.id=K,(m?g:k).innerHTML+=b,k.appendChild(g),m||(k.style.background="",k.style.overflow="hidden",v=O.style.overflow,O.style.overflow="hidden",O.appendChild(k)),p=e(g,w),m?g.parentNode.removeChild(g):(k.parentNode.removeChild(k),O.style.overflow=v),!!p
},z={}.hasOwnProperty;
W=R(z,"undefined")||R(z.call,"undefined")?function(a,b){return b in a&&R(a.constructor.prototype[b],"undefined")
}:function(a,b){return z.call(a,b)
},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;
if("function"!=typeof b){throw new TypeError
}var d=j.call(arguments,1),c=function(){if(this instanceof c){var f=function(){};
f.prototype=b.prototype;
var g=new f,e=b.apply(g,d.concat(j.call(arguments)));
return Object(e)===e?e:g
}return b.apply(a,d.concat(j.call(arguments)))
};
return c
}),ao.csstransforms3d=function(){var a=!!F("perspective");
return a
};
for(var q in ao){W(ao,q)&&(Z=q.toLowerCase(),U[Z]=ao[q](),I.push((U[Z]?"":"no-")+Z))
}return U.addTest=function(a,b){if("object"==typeof a){for(var c in a){W(a,c)&&U.addTest(c,a[c])
}}else{if(a=a.toLowerCase(),U[a]!==N){return U
}b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(O.className+=" "+(b?"":"no-")+a),U[a]=b
}return U
},L(""),E=P=null,U._version=Y,U._prefixes=D,U._domPrefixes=B,U._cssomPrefixes=ae,U.testProp=function(a){return an([a])
},U.testAllProps=F,U.testStyles=Q,U.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")
},U
}(bB,bV),ac={ok:!1,is:function(){return !1
},request:function(){},cancel:function(){},event:"",prefix:""},aH="webkit moz o ms khtml".split(" ");
if("undefined"!=typeof bV.cancelFullScreen){ac.ok=!0
}else{for(var cR=0,ag=aH.length;
ag>cR;
cR++){if(ac.prefix=aH[cR],"undefined"!=typeof bV[ac.prefix+"CancelFullScreen"]){ac.ok=!0;
break
}}}ac.ok&&(ac.event=ac.prefix+"fullscreenchange",ac.is=function(){switch(this.prefix){case"":return bV.fullScreen;
case"webkit":return bV.webkitIsFullScreen;
default:return bV[this.prefix+"FullScreen"]
}},ac.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()
},ac.cancel=function(){return""===this.prefix?bV.cancelFullScreen():bV[this.prefix+"CancelFullScreen"]()
});
var a4,cZ={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},ad={top:"auto",left:"auto",className:""};
!function(a,b){a4=b()
}(this,function(){function E(c,f){var d,a=bV.createElement(c||"div");
for(d in f){a[d]=f[d]
}return a
}function j(a){for(var c=1,d=arguments.length;
d>c;
c++){a.appendChild(arguments[c])
}return a
}function i(p,h,f,d){var g=["opacity",h,~~(100*p),f,d].join("-"),c=0.01+f/d*100,l=Math.max(1-(1-p)/h*(100-c),p),v=z.substring(0,z.indexOf("Animation")).toLowerCase(),m=v&&"-"+v+"-"||"";
return k[g]||(e.insertRule("@"+m+"keyframes "+g+"{0%{opacity:"+l+"}"+c+"%{opacity:"+p+"}"+(c+0.01)+"%{opacity:1}"+(c+h)%100+"%{opacity:"+p+"}100%{opacity:"+l+"}}",e.cssRules.length),k[g]=1),g
}function b(a,d){var g,f,c=a.style;
for(d=d.charAt(0).toUpperCase()+d.slice(1),f=0;
f<w.length;
f++){if(g=w[f]+d,c[g]!==bQ){return g
}}return c[d]!==bQ?d:void 0
}function B(a,c){for(var d in c){a.style[b(a,d)||d]=c[d]
}return a
}function F(a){for(var c=1;
c<arguments.length;
c++){var f=arguments[c];
for(var d in f){a[d]===bQ&&(a[d]=f[d])
}}return a
}function D(a){for(var c={x:a.offsetLeft,y:a.offsetTop};
a=a.offsetParent;
){c.x+=a.offsetLeft,c.y+=a.offsetTop
}return c
}function q(a,c){return"string"==typeof a?a:a[c%a.length]
}function A(a){return"undefined"==typeof this?new A(a):void (this.opts=F(a||{},A.defaults,C))
}function y(){function a(c,d){return E("<"+c+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',d)
}e.addRule(".spin-vml","behavior:url(#default#VML)"),A.prototype.lines=function(G,h){function l(){return B(a("group",{coordsize:p+" "+p,coordorigin:-v+" "+-v}),{width:p,height:p})
}function g(c,f,d){j(n,j(B(l(),{rotation:360/h.lines*c+"deg",left:~~f}),j(B(a("roundrect",{arcsize:h.corners}),{width:v,height:h.width,left:h.radius,top:-h.width>>1,filter:d}),a("fill",{color:q(h.color,c),opacity:h.opacity}),a("stroke",{opacity:0}))))
}var H,v=h.length+h.width,p=2*v,m=2*-(h.width+h.length)+"px",n=B(l(),{position:"absolute",top:m,left:m});
if(h.shadow){for(H=1;
H<=h.lines;
H++){g(H,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
}}for(H=1;
H<=h.lines;
H++){g(H)
}return j(G,n)
},A.prototype.opacity=function(d,f,h,g){var c=d.firstChild;
g=g.shadow&&g.lines||0,c&&f+g<c.childNodes.length&&(c=c.childNodes[f+g],c=c&&c.firstChild,c=c&&c.firstChild,c&&(c.opacity=h))
}
}var z,w=["webkit","Moz","ms","O"],k={},e=function(){var a=E("style",{type:"text/css"});
return j(bV.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet
}(),C={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:0.25,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};
A.defaults={},F(A.prototype,{spin:function(M){this.stop();
var u,t,I=this,a=I.opts,Q=I.el=B(E(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),H=a.radius+a.length+a.width;
if(M&&(M.insertBefore(Q,M.firstChild||null),t=D(M),u=D(Q),B(Q,{left:("auto"==a.left?t.x-u.x+(M.offsetWidth>>1):parseInt(a.left,10)+H)+"px",top:("auto"==a.top?t.y-u.y+(M.offsetHeight>>1):parseInt(a.top,10)+H)+"px"})),Q.setAttribute("role","progressbar"),I.lines(Q,I.opts),!z){var N,L=0,J=(a.lines-1)*(1-a.direction)/2,G=a.fps,d=G/a.speed,P=(1-a.opacity)/(d*a.trail/100),K=d/a.lines;
!function O(){L++;
for(var c=0;
c<a.lines;
c++){N=Math.max(1-(L+(a.lines-c)*K)%d*P,a.opacity),I.opacity(Q,c*a.direction+J,N,a)
}I.timeout=I.el&&setTimeout(O,~~(1000/G))
}()
}return I
},stop:function(){var a=this.el;
return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=bQ),this
},lines:function(h,d){function g(c,m){return B(E(),{position:"absolute",width:d.length+d.width+"px",height:d.width+"px",background:c,boxShadow:m,transformOrigin:"left",transform:"rotate("+~~(360/d.lines*a+d.rotate)+"deg) translate("+d.radius+"px,0)",borderRadius:(d.corners*d.width>>1)+"px"})
}for(var f,a=0,l=(d.lines-1)*(1-d.direction)/2;
a<d.lines;
a++){f=B(E(),{position:"absolute",top:1+~(d.width/2)+"px",transform:d.hwaccel?"translate3d(0,0,0)":"",opacity:d.opacity,animation:z&&i(d.opacity,d.trail,l+a*d.direction,d.lines)+" "+1/d.speed+"s linear infinite"}),d.shadow&&j(f,B(g("#000","0 0 4px #000"),{top:"2px"})),j(h,j(f,g(q(d.color,a),"0 0 1px rgba(0,0,0,.1)")))
}return h
},opacity:function(a,c,d){c<a.childNodes.length&&(a.childNodes[c].style.opacity=d)
}});
var x=B(E("group"),{behavior:"url(#default#VML)"});
return !b(x,"transform")&&x.adj?y():z=b(x,"animation"),A
});
var ap,aB,aq=bH(bB),aT=bH(bV),cl="quirks"===bI.hash.replace("#",""),bh=c1.csstransforms3d,a0=bh&&!cl,cH=bh||"CSS1Compat"===bV.compatMode,bf=ac.ok,aK=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),co=!a0||aK,ay=navigator.msPointerEnabled,ai="onwheel" in bV.createElement("div")?"wheel":bV.onmousewheel!==bQ?"mousewheel":"DOMMouseScroll",bs=250,cM=300,bo=1400,b1=5000,aQ=2,bj=64,at=500,cF=333,a9="$stageFrame",cW="$navDotFrame",bM="$navThumbFrame",aY="auto",aM=bE([0.1,0,0.25,1]),bc=99999,cr="50%",bP={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:aQ,glimpse:0,fit:"contain",position:cr,thumbposition:cr,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:bj,thumbheight:bj,thumbmargin:aQ,thumbborderwidth:aQ,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:cM,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},az={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};
cj.stop=function(a){cj.ii[a]=!1
};
var a6,cJ,aV,aD;
jQuery.Fotorama=function(c5,dh){function c6(){bH.each(eo,function(a,b){if(!b.i){b.i=d3++;
var i=ck(b.video,!0);
if(i){var d={};
b.video=i,b.img||b.thumb?b.thumbsReady=!0:d=cd(b,eo,c2),cx(eo,{img:d.img,thumb:d.thumb},b.i,c2)
}}})
}function dp(a){return ee[a]||c2.fullScreen
}function c4(a){var d="keydown."+aG,k=aG+ej,i="keydown."+k,b="resize."+k+" orientationchange."+k;
a?(aT.on(i,function(l){var m,r;
df&&27===l.keyCode?(m=!0,dY(df,!0,!0)):(c2.fullScreen||dh.keyboard&&!c2.index)&&(27===l.keyCode?(m=!0,c2.cancelFullScreen()):l.shiftKey&&32===l.keyCode&&dp("space")||37===l.keyCode&&dp("left")||38===l.keyCode&&dp("up")?r="<":32===l.keyCode&&dp("space")||39===l.keyCode&&dp("right")||40===l.keyCode&&dp("down")?r=">":36===l.keyCode&&dp("home")?r="<<":35===l.keyCode&&dp("end")&&(r=">>")),(m||r)&&b5(l),r&&c2.show({index:r,slow:l.altKey,user:!0})
}),c2.index||aT.off(d).on(d,"textarea, input, select",function(l){!aB.hasClass(c0)&&l.stopPropagation()
}),aq.on(b,c2.resize)):(aT.off(i),aq.off(b))
}function de(a){a!==de.f&&(a?(c5.html("").addClass(aG+" "+L).append(D).before(Y).before(dZ),cN(c2)):(D.detach(),Y.detach(),dZ.detach(),c5.html(V.urtext).removeClass(L),aZ(c2)),c4(a),de.f=a)
}function dl(){eo=c2.data=eo||cf(dh.data)||cy(c5),es=c2.size=eo.length,!e.ok&&dh.shuffle&&cz(eo),c6(),z=dw(z),es&&de(!0)
}function db(){var a=2>es&&!dh.enableifsingleframe||df;
da.noMove=a||dW,da.noSwipe=a||!dh.swipe,!ex&&dt.toggleClass(aa,!dh.click&&!da.noMove&&!da.noSwipe),ay&&D.toggleClass(am,!da.noSwipe)
}function cn(a){a===!0&&(a=""),dh.autoplay=Math.max(+a||b1,1.5*dO)
}function dm(){function a(d,i){b[d?"add":"remove"].push(i)
}c2.options=dh=cv(dh),dW="crossfade"===dh.transition||"dissolve"===dh.transition,c3=dh.loop&&(es>2||dW&&(!ex||"slide"!==ex)),dO=+dh.transitionduration||cM,c9="rtl"===dh.direction,ee=bH.extend({},dh.keyboard&&az,dh.keyboard);
var b={add:[],remove:[]};
es>1||dh.enableifsingleframe?(x=dh.nav,d0="top"===dh.navposition,b.remove.push(cI),ef.toggle(!!dh.arrows)):(x=!1,ef.hide()),d8(),M=new a4(bH.extend(cZ,dh.spinner,ad,{direction:c9?-1:1})),dD(),q(),dh.autoplay&&cn(dh.autoplay),E=bR(dh.thumbwidth)||bj,W=bR(dh.thumbheight)||bj,F.ok=d5.ok=dh.trackpad&&!co,db(),em(dh,[dH]),Z="thumbs"===x,Z?(I(es,"navThumb"),g=R,en=bM,cE(Y,bH.Fotorama.jst.style({w:E,h:W,b:dh.thumbborderwidth,m:dh.thumbmargin,s:ej,q:!cH})),eu.addClass(bi).removeClass(cL)):"dots"===x?(I(es,"navDot"),g=s,en=cW,eu.addClass(cL).removeClass(bi)):(x=!1,eu.removeClass(bi+" "+cL)),x&&(d0?o.insertBefore(ed):o.insertAfter(ed),dv.nav=!1,dv(g,ey,"nav")),Q=dh.allowfullscreen,Q?(O.prependTo(ed),dj=bf&&"native"===Q):(O.detach(),dj=!1),a(dW,cS),a(!dW,bt),a(!dh.captions,ab),a(c9,cV),a("always"!==dh.arrows,af),ek=dh.shadows&&!co,a(!ek,aU),D.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),dP=bH.extend({},dh)
}function dR(a){return 0>a?(es+a%es)%es:a>=es?a%es:a
}function dw(a){return bC(a,0,es-1)
}function dg(a){return c3?dR(a):dw(a)
}function dC(a){return a>0||c3?a-1:!1
}function dS(a){return es-1>a||c3?a+1:!1
}function dK(){da.min=c3?-1/0:-bT(es-1,dH.w,dh.margin,dB),da.max=c3?1/0:-bT(0,dH.w,dh.margin,dB),da.snap=dH.w+dh.margin
}function j(){an.min=Math.min(0,dH.nw-ey.width()),an.max=0,ey.toggleClass(aa,!(an.noMove=an.min===an.max))
}function dL(b,d,k){if("number"==typeof b){b=new Array(b);
var a=!0
}return bH.each(b,function(l,y){if(a&&(y=l),"number"==typeof y){var u=eo[dR(y)];
if(u){var i="$"+d+"Frame",m=u[i];
k.call(this,l,y,u,m,i,m&&m.data())
}}})
}function ev(a,b,i,d){(!dN||"*"===dN&&d===dz)&&(a=by(dh.width)||by(a)||at,b=by(dh.height)||by(b)||cF,c2.resize({width:a,ratio:dh.ratio||i||a/b},0,d!==dz&&"*"))
}function G(d,l,m,k,b,i){dL(d,l,function(ao,P,eB,eH,eF,eG){function eD(u){var y=dR(P);
dT(u,{index:y,src:eJ,frame:eo[y]})
}function eA(){r.remove(),bH.Fotorama.cache[eJ]="error",eB.html&&"stage"===l||!a||a===eJ?(!eJ||eB.html||eE?"stage"===l&&(eH.trigger("f:load").removeClass(aN+" "+a1).addClass(bd),eD("load"),ev()):(eH.trigger("f:error").removeClass(aN).addClass(a1),eD("error")),eG.state="error",!(es>1&&eo[P]===eB)||eB.html||eB.deleted||eB.video||eE||(eB.deleted=!0,c2.splice(P,1))):(eB[B]=eJ=a,G([P],l,m,k,b,!0))
}function bn(){bH.Fotorama.measures[eJ]=eI.measures=bH.Fotorama.measures[eJ]||{width:C.width,height:C.height,ratio:C.width/C.height},ev(eI.measures.width,eI.measures.height,eI.measures.ratio,P),r.off("load error").addClass(cK+(eE?" "+aW:"")).prependTo(eH),bF(r,(bH.isFunction(m)?m():m)||dH,k||eB.fit||dh.fit,b||eB.position||dh.position),bH.Fotorama.cache[eJ]=eG.state="loaded",setTimeout(function(){eH.trigger("f:load").removeClass(aN+" "+a1).addClass(bd+" "+(eE?cu:bS)),"stage"===l?eD("load"):(eB.thumbratio===aY||!eB.thumbratio&&dh.thumbratio===aY)&&(eB.thumbratio=eI.measures.ratio,du())
},0)
}function J(){var u=10;
cj(function(){return !d7||!u--&&!co
},function(){bn()
})
}if(eH){var eE=c2.fullScreen&&eB.full&&eB.full!==eB.img&&!eG.$full&&"stage"===l;
if(!eG.$img||i||eE){var C=new Image,r=bH(C),eI=r.data();
eG[eE?"$full":"$img"]=r;
var B="stage"===l?eE?"full":"img":"thumb",eJ=eB[B],a=eE?null:eB["stage"===l?"thumb":"img"];
if("navThumb"===l&&(eH=eG.$wrap),!eJ){return void eA()
}bH.Fotorama.cache[eJ]?!function eC(){"error"===bH.Fotorama.cache[eJ]?eA():"loaded"===bH.Fotorama.cache[eJ]?setTimeout(J,0):setTimeout(eC,100)
}():(bH.Fotorama.cache[eJ]="*",r.on("load",J).on("error",eA)),eG.state="",C.src=eJ
}}})
}function be(a){dQ.append(M.spin().el).appendTo(a)
}function d8(){dQ.detach(),M&&M.stop()
}function ae(){var a=K[a9];
a&&!a.data().state&&(be(a),a.on("f:load f:error",function(){a.off("f:load f:error"),d8()
}))
}function ep(a){cg(a,dq),ca(a,function(){setTimeout(function(){b7(eu)
},0),S({time:dO,guessIndex:bH(this).data().eq,minMax:an})
})
}function I(a,b){dL(a,b,function(m,C,l,B,d,y){if(!B){B=l[d]=D[d].clone(),y=B.data(),y.data=l;
var k=B[0];
"stage"===b?(l.html&&bH('<div class="'+a2+'"></div>').append(l._html?bH(l.html).removeAttr("id").html(l._html):l.html).appendTo(B),l.caption&&bH(ct(bq,ct(av,l.caption))).appendTo(B),l.video&&B.addClass(aj).append(dJ.clone()),ca(k,function(){setTimeout(function(){b7(ed)
},0),dU({index:y.eq,user:!0})
}),ew=ew.add(B)):"navDot"===b?(ep(k),s=s.add(B)):"navThumb"===b&&(ep(k),y.$wrap=B.children(":first"),R=R.add(B),l.video&&y.$wrap.append(dJ.clone()))
}})
}function ea(a,b,i,d){return a&&a.length&&bF(a,b,i,d)
}function dr(a){dL(a,"stage",function(C,k,d,b,y,J){if(b){var B=dR(k),i=d.fit||dh.fit,m=d.position||dh.position;
J.eq=B,dn[a9][B]=b.css(bH.extend({left:dW?0:bT(k,dH.w,dh.margin,dB)},dW&&bU(0))),bN(b[0])&&(b.appendTo(dt),dY(d.$video)),ea(J.$img,dH,i,m),ea(J.$full,dH,i,m)
}})
}function et(a,d){if("thumbs"===x&&!isNaN(a)){var i=-a,b=-a+dH.nw;
R.each(function(){var y=bH(this),m=y.data(),B=m.eq,r=function(){return{h:W,w:m.w}
},k=r(),P=eo[B]||{},C=P.thumbfit||dh.thumbfit,J=P.thumbposition||dh.thumbposition;
k.w=m.w,m.l+m.w<i||m.l>b||ea(m.$img,k,C,J)||d&&G([B],"navThumb",r,C,J)
})
}}function dv(d,k,l){if(!dv[l]){var i="nav"===l&&Z,b=0;
k.append(d.filter(function(){for(var m,y=bH(this),B=y.data(),a=0,u=eo.length;
u>a;
a++){if(B.data===eo[a]){m=!0,B.eq=a;
break
}}return m||y.remove()&&!1
}).sort(function(a,m){return bH(a).data().eq-bH(m).data().eq
}).each(function(){if(i){var a=bH(this),m=a.data(),r=Math.round(W*m.data.thumbratio)||E;
m.l=b,m.w=r,a.css({width:r}),b+=r+dh.thumbmargin
}})),dv[l]=!0
}}function ec(a){return a-d1>dH.w/3
}function h(a){return !(c3||z+a&&z-es+a||df)
}function dD(){var a=h(0),b=h(1);
c.toggleClass(aF,a).attr(b6(a)),dA.toggleClass(aF,b).attr(b6(b))
}function q(){F.ok&&(F.prevent={"<":h(0),">":h(1)})
}function dI(a){var b,i,d=a.data();
return Z?(b=d.l,i=d.w):(b=a.position().left,i=a.width()),{c:b+i/2,min:-b+10*dh.thumbmargin,max:-b+dH.w-i-10*dh.thumbmargin}
}function A(a){var b=K[en].data();
b4(dk,{time:1.2*a,pos:b.l,width:b.w-2*dh.thumbborderwidth})
}function S(k){var m=eo[k.guessIndex][en];
if(m){var y=an.min!==an.max,u=k.minMax||y&&dI(K[en]),d=y&&(k.keep&&S.l?S.l:bC((k.coo||dH.nw/2)-dI(m).c,u.min,u.max)),l=y&&bC(d,an.min,an.max),b=1.1*k.time;
b4(ey,{time:b,pos:l||0,onEnd:function(){et(l,!0)
}}),ds(eu,bu(l,an.min,an.max)),S.l=d
}}function dX(){dE(en),X[en].push(K[en].addClass(aw))
}function dE(a){for(var b=X[a];
b.length;
){b.shift().removeClass(aw)
}}function dx(a){var b=dn[a];
bH.each(d4,function(d,i){delete b[dR(i)]
}),bH.each(b,function(d,i){delete b[d],i.detach()
})
}function c7(a){dB=n=z;
var b=K[a9];
b&&(dE(a9),X[a9].push(b.addClass(aw)),a||c2.show.onEnd(!0),bw(dt,0,!0),dx(a9),dr(d4),dK(),j())
}function em(a,b){a&&bH.each(b,function(d,i){i&&bH.extend(i,{width:a.width||i.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:cp(a.ratio)})
})
}function dT(a,b){c5.trigger(aG+":"+a,[c2,b])
}function d2(){clearTimeout(dc.t),d7=1,dh.stopautoplayontouch?c2.stopAutoplay():c8=!0
}function dc(){d7&&(dh.stopautoplayontouch||(ei(),ce()),dc.t=setTimeout(function(){d7=0
},cM+bs))
}function ei(){c8=!(!df&&!er)
}function ce(){if(clearTimeout(ce.t),cj.stop(ce.w),!dh.autoplay||c8){return void (c2.autoplay&&(c2.autoplay=!1,dT("stopautoplay")))
}c2.autoplay||(c2.autoplay=!0,dT("startautoplay"));
var a=z,b=K[a9].data();
ce.w=cj(function(){return b.state||a!==z
},function(){ce.t=setTimeout(function(){if(!c8&&a===z){var d=dG,i=eo[d][a9].data();
ce.w=cj(function(){return i.state||d!==dG
},function(){c8||d!==dG||c2.show(c3?cw(!c9):dG)
})
}},dh.autoplay)
})
}function eg(){c2.fullScreen&&(c2.fullScreen=!1,bf&&ac.cancel(dy),aB.removeClass(c0),ap.removeClass(c0),c5.removeClass(cY).insertAfter(dZ),dH=bH.extend({},dV),dY(df,!0,!0),d6("x",!1),c2.resize(),G(d4,"stage"),b7(aq,dF,f),dT("fullscreenexit"))
}function ds(a,b){ek&&(a.removeClass(aS+" "+bl),b&&!df&&a.addClass(b.replace(/^|\s/g," "+b9+"--")))
}function dY(a,b,d){b&&(D.removeClass(aL),df=!1,db()),a&&a!==df&&(a.remove(),dT("unloadvideo")),d&&(ei(),ce())
}function N(a){D.toggleClass(ax,a)
}function U(a){if(!da.flow){var b=a?a.pageX:U.x,d=b&&!h(ec(b))&&dh.click;
U.p!==d&&ed.toggleClass(ah,d)&&(U.p=d,U.x=b)
}}function dU(a){clearTimeout(dU.t),dh.clicktransition&&dh.clicktransition!==dh.transition?setTimeout(function(){var b=dh.transition;
c2.setOptions({transition:dh.clicktransition}),ex=b,dU.t=setTimeout(function(){c2.show(a)
},10)
},0):c2.show(a)
}function v(a,d){var i=a.target,b=bH(i);
b.hasClass(aI)?c2.playVideo():i===eb?c2.toggleFullScreen():df?i===el&&dY(df,!0,!0):d?N():dh.click&&dU({index:a.shiftKey||cw(ec(a._x)),slow:a.altKey,user:!0})
}function d6(a,b){da[a]=an[a]=b
}function dq(a){var b=bH(this).data().eq;
dU({index:b,slow:a.altKey,user:!0,coo:a._x-eu.offset().left})
}function eq(a){dU({index:ef.index(this)?">":"<",slow:a.altKey,user:!0})
}function ez(a){ca(a,function(){setTimeout(function(){b7(ed)
},0),N(!1)
})
}function du(){if(dl(),dm(),!du.i){du.i=!0;
var a=dh.startindex;
(a||dh.hash&&bI.hash)&&(dz=cm(a||bI.hash.replace(/^#/,""),eo,0===c2.index||a,a)),z=dB=n=eh=dz=dg(dz)||0
}if(es){if(d9()){return
}df&&dY(df,!0),d4=[],dx(a9),du.ok=!0,c2.show({index:z,time:0}),c2.resize()
}else{c2.destroy()
}}function d9(){return !d9.f===c9?(d9.f=c9,z=es-1-z,c2.reverse(),!0):void 0
}function e(){e.ok||(e.ok=!0,dT("ready"))
}ap=bH("html"),aB=bH("body");
var eo,es,g,M,df,K,d4,dB,n,eh,dM,p,dG,dz,c3,x,Z,d0,Q,dj,dW,E,W,dO,ex,ek,c9,ee,dN,f,dF,dd,c8,er,dV,d7,di,en,c2=this,ej=bH.now(),L=aG+ej,dy=c5[0],d3=1,V=c5.data(),Y=bH("<style></style>"),dZ=bH(ct(bb)),D=bH(ct(bO)),ed=bH(ct(aJ)).appendTo(D),dt=(ed[0],bH(ct(a8)).appendTo(ed)),ew=bH(),c=bH(ct(ar+" "+au+ak)),dA=bH(ct(ar+" "+aX+ak)),ef=c.add(dA).appendTo(ed),o=bH(ct(bk)),eu=bH(ct(cA)).appendTo(o),ey=bH(ct(a3)).appendTo(eu),s=bH(),R=bH(),dk=(dt.data(),ey.data(),bH(ct(bD)).appendTo(ey)),O=bH(ct(b0+ak)),eb=O[0],dJ=bH(ct(aI)),w=bH(ct(cO)).appendTo(ed),el=w[0],dQ=bH(ct(aR)),z=!1,dP={},dH={},da={},F={},an={},d5={},X={},dn={},d1=0,H=[];
D[a9]=bH(ct(cU)),D[bM]=bH(ct(aO+" "+aA+ak,ct(cX))),D[cW]=bH(ct(aO+" "+cD+ak,ct(aE))),X[a9]=[],X[bM]=[],X[cW]=[],dn[a9]={},D.addClass(a0?bp:a5).toggleClass(ax,!dh.controlsonstart),V.fotorama=this,c2.startAutoplay=function(a){return c2.autoplay?this:(c8=er=!1,cn(a||dh.autoplay),ce(),this)
},c2.stopAutoplay=function(){return c2.autoplay&&(c8=er=!0,ce()),this
},c2.show=function(ao){var B;
"object"!=typeof ao?(B=ao,ao={}):B=ao.index,B=">"===B?n+1:"<"===B?n-1:"<<"===B?0:">>"===B?es-1:B,B=isNaN(B)?cm(B,eo,!0):B,B="undefined"==typeof B?z||0:B,c2.activeIndex=z=dg(B),dM=dC(z),p=dS(z),dG=dR(z+(c9?-1:1)),d4=[z,dM,p],n=c3?B:z;
var k=Math.abs(eh-n),i=b2(ao.time,function(){return Math.min(dO*(1+(k-1)/12),2*dO)
}),b=ao.overPos;
ao.slow&&(i*=10);
var P=K;
c2.activeFrame=K=eo[z];
var T=P===K&&!ao.user;
dY(df,K.i!==eo[dR(dB)].i),I(d4,"stage"),dr(co?[n]:[n,dC(n),dS(n)]),d6("go",!0),T||dT("show",{user:ao.user,time:i}),c8=!0;
var m=c2.show.onEnd=function(a){if(!m.ok){if(m.ok=!0,a||c7(!0),T||dT("showend",{user:ao.user}),!a&&ex&&ex!==dh.transition){return c2.setOptions({transition:ex}),void (ex=!1)
}ae(),G(d4,"stage"),d6("go",!1),q(),U(),ei(),ce()
}};
if(dW){var J=K[a9],y=z!==eh?eo[eh][a9]:null;
aP(J,y,ew,{time:i,method:dh.transition,onEnd:m},H)
}else{b4(dt,{pos:-bT(n,dH.w,dh.margin,dB),overPos:b,time:i,onEnd:m})
}if(dD(),x){dX();
var C=dw(z+bC(n-eh,-1,1));
S({time:i,coo:C!==z&&ao.coo,guessIndex:"undefined"!=typeof ao.coo?C:z,keep:T}),Z&&A(i)
}return dd="undefined"!=typeof eh&&eh!==z,eh=z,dh.hash&&dd&&!c2.eq&&cP(K.id||z+1),this
},c2.requestFullScreen=function(){return Q&&!c2.fullScreen&&(f=aq.scrollTop(),dF=aq.scrollLeft(),b7(aq),d6("x",!0),dV=bH.extend({},dH),c5.addClass(cY).appendTo(aB.addClass(c0)),ap.addClass(c0),dY(df,!0,!0),c2.fullScreen=!0,dj&&ac.request(dy),c2.resize(),G(d4,"stage"),ae(),dT("fullscreenenter")),this
},c2.cancelFullScreen=function(){return dj&&ac.is()?ac.cancel(bV):eg(),this
},c2.toggleFullScreen=function(){return c2[(c2.fullScreen?"cancel":"request")+"FullScreen"]()
},b8(bV,ac.event,function(){!eo||ac.is()||df||eg()
}),c2.resize=function(i){if(!eo){return this
}var l=arguments[1]||0,y=arguments[2];
em(c2.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:cv(i),[dH,y||c2.fullScreen||dh]);
var m=dH.width,k=dH.height,b=dH.ratio,d=aq.height()-(x?eu.height():0);
return by(m)&&(D.addClass(cq).css({width:m,minWidth:dH.minwidth||0,maxWidth:dH.maxwidth||bc}),m=dH.W=dH.w=D.width(),dH.nw=x&&bG(dh.navwidth,m)||m,dh.glimpse&&(dH.w-=Math.round(2*(bG(dh.glimpse,m)||0))),dt.css({width:dH.w,marginLeft:(dH.W-dH.w)/2}),k=bG(k,d),k=k||b&&m/b,k&&(m=Math.round(m),k=dH.h=Math.round(bC(k,bG(dH.minheight,d),bG(dH.maxheight,d))),ed.stop().animate({width:m,height:k},l,function(){D.removeClass(cq)
}),c7(),x&&(eu.stop().animate({width:dH.nw},l),S({guessIndex:z,time:l,keep:!0}),Z&&dv.nav&&A(l)),dN=y||!0,e())),d1=ed.offset().left,this
},c2.setOptions=function(a){return bH.extend(dh,a),du(),this
},c2.shuffle=function(){return eo&&cz(eo)&&du(),this
},c2.destroy=function(){return c2.cancelFullScreen(),c2.stopAutoplay(),eo=c2.data=null,de(),d4=[],dx(a9),du.ok=!1,this
},c2.playVideo=function(){var a=K,b=a.video,d=z;
return"object"==typeof b&&a.videoReady&&(dj&&c2.fullScreen&&c2.cancelFullScreen(),cj(function(){return !ac.is()||d!==z
},function(){d===z&&(a.$video=a.$video||bH(bH.Fotorama.jst.video(b)),a.$video.appendTo(a[a9]),D.addClass(aL),df=a.$video,db(),ef.blur(),O.blur(),dT("loadvideo"))
})),this
},c2.stopVideo=function(){return dY(df,!0,!0),this
},ed.on("mousemove",U),da=b3(dt,{onStart:d2,onMove:function(a,b){ds(ed,b.edge)
},onTouchEnd:dc,onEnd:function(a){ds(ed);
var b=(ay&&!di||a.touch)&&dh.arrows&&"always"!==dh.arrows;
if(a.moved||b&&a.pos!==a.newPos&&!a.control){var d=bx(a.newPos,dH.w,dh.margin,dB);
c2.show({index:d,time:dW?dO:a.time,overPos:a.overPos,user:!0})
}else{a.aborted||a.control||v(a.startEvent,b)
}},timeLow:1,timeHigh:1,friction:2,select:"."+cI+", ."+cI+" *",$wrap:ed}),an=b3(ey,{onStart:d2,onMove:function(a,b){ds(eu,b.edge)
},onTouchEnd:dc,onEnd:function(a){function b(){S.l=a.newPos,ei(),ce(),et(a.newPos,!0)
}if(a.moved){a.pos!==a.newPos?(c8=!0,b4(ey,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),et(a.newPos),ek&&ds(eu,bu(a.newPos,an.min,an.max))):b()
}else{var d=a.$target.closest("."+aO,ey)[0];
d&&dq.call(d,a.startEvent)
}},timeLow:0.5,timeHigh:2,friction:5,$wrap:eu}),F=aC(ed,{shift:!0,onEnd:function(a,b){d2(),dc(),c2.show({index:b,slow:a.altKey})
}}),d5=aC(eu,{onEnd:function(a,b){d2(),dc();
var d=bw(ey)+0.25*b;
ey.css(bX(bC(d,an.min,an.max))),ek&&ds(eu,bu(d,an.min,an.max)),d5.prevent={"<":d>=an.max,">":d<=an.min},clearTimeout(d5.t),d5.t=setTimeout(function(){S.l=d,et(d,!0)
},bs),et(d)
}}),D.hover(function(){setTimeout(function(){d7||N(!(di=!0))
},0)
},function(){di&&N(!(di=!1))
}),ci(ef,function(a){b5(a),eq.call(this,a)
},{onStart:function(){d2(),da.control=!0
},onTouchEnd:dc}),ef.each(function(){cg(this,function(a){eq.call(this,a)
}),ez(this)
}),cg(eb,c2.toggleFullScreen),ez(eb),bH.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){c2[b]=function(){return eo=eo||[],"load"!==b?Array.prototype[b].apply(eo,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(eo=cf(arguments[0])),du(),c2
}
}),du()
},bH.fn.fotorama=function(a){return this.each(function(){var e=this,c=bH(this),d=c.data(),b=d.fotorama;
b?b.setOptions(a,!0):cj(function(){return !ch(e)
},function(){d.urtext=c.html(),new bH.Fotorama(c,bH.extend({},bP,bB.fotoramaDefaults,a,d))
})
})
},bH.Fotorama.instances=[],bH.Fotorama.cache={},bH.Fotorama.measures={},bH=bH||{},bH.Fotorama=bH.Fotorama||{},bH.Fotorama.jst=bH.Fotorama.jst||{},bH.Fotorama.jst.style=function(a){var b,c="";
cc.escape;
return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"
},bH.Fotorama.jst.video=function(a){function b(){d+=c.call(arguments,"")
}var d="",c=(cc.escape,Array.prototype.join);
return d+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),d+='" frameborder="0" allowfullscreen></iframe></div>\n'
},bH(function(){bH("."+aG+':not([data-auto="false"])').fotorama()
})
}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
this.Handlebars={};
(function(c){c.VERSION="1.0.0-rc.3";
c.COMPILER_REVISION=2;
c.REVISION_CHANGES={1:"<= 1.0.rc.2",2:">= 1.0.0-rc.3"};
c.helpers={};
c.partials={};
c.registerHelper=function(e,f,d){if(d){f.not=d
}this.helpers[e]=f
};
c.registerPartial=function(d,e){this.partials[d]=e
};
c.registerHelper("helperMissing",function(d){if(arguments.length===2){return undefined
}else{throw new Error("Could not find property '"+d+"'")
}});
var a=Object.prototype.toString,b="[object Function]";
c.registerHelper("blockHelperMissing",function(g,f){var d=f.inverse||function(){},i=f.fn;
var e="";
var h=a.call(g);
if(h===b){g=g.call(this)
}if(g===true){return i(this)
}else{if(g===false||g==null){return d(this)
}else{if(h==="[object Array]"){if(g.length>0){return c.helpers.each(g,f)
}else{return d(this)
}}else{return i(g)
}}}});
c.K=function(){};
c.createFrame=Object.create||function(d){c.K.prototype=d;
var e=new c.K();
c.K.prototype=null;
return e
};
c.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(f,d){if(c.logger.level<=f){var e=c.logger.methodMap[f];
if(typeof console!=="undefined"&&console[e]){console[e].call(console,d)
}}}};
c.log=function(e,d){c.logger.log(e,d)
};
c.registerHelper("each",function(d,n){var l=n.fn,f=n.inverse;
var h=0,k="",g;
if(n.data){g=c.createFrame(n.data)
}if(d&&typeof d==="object"){if(d instanceof Array){for(var e=d.length;
h<e;
h++){if(g){g.index=h
}k=k+l(d[h],{data:g})
}}else{for(var m in d){if(d.hasOwnProperty(m)){if(g){g.key=m
}k=k+l(d[m],{data:g});
h++
}}}}if(h===0){k=f(this)
}return k
});
c.registerHelper("if",function(e,d){var f=a.call(e);
if(f===b){e=e.call(this)
}if(!e||c.Utils.isEmpty(e)){return d.inverse(this)
}else{return d.fn(this)
}});
c.registerHelper("unless",function(f,e){var g=e.fn,d=e.inverse;
e.fn=d;
e.inverse=g;
return c.helpers["if"].call(this,f,e)
});
c.registerHelper("with",function(e,d){return d.fn(e)
});
c.registerHelper("log",function(e,d){var f=d.data&&d.data.level!=null?parseInt(d.data.level,10):1;
c.log(f,e)
})
}(this.Handlebars));
var handlebars=(function(){var g={trace:function c(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,partialName:25,params:26,hash:27,DATA:28,param:29,STRING:30,INTEGER:31,BOOLEAN:32,hashSegments:33,hashSegment:34,ID:35,EQUALS:36,PARTIAL_NAME:37,pathSegments:38,SEP:39,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"DATA",30:"STRING",31:"INTEGER",32:"BOOLEAN",35:"ID",36:"EQUALS",37:"PARTIAL_NAME",39:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[26,2],[26,1],[29,1],[29,1],[29,1],[29,1],[29,1],[27,1],[33,2],[33,1],[34,3],[34,3],[34,3],[34,3],[34,3],[25,1],[21,1],[38,3],[38,1]],performAction:function b(h,k,l,o,n,j,m){var i=j.length-1;
switch(n){case 1:return j[i-1];
break;
case 2:this.$=new o.ProgramNode([],j[i]);
break;
case 3:this.$=new o.ProgramNode(j[i-2],j[i]);
break;
case 4:this.$=new o.ProgramNode(j[i-1],[]);
break;
case 5:this.$=new o.ProgramNode(j[i]);
break;
case 6:this.$=new o.ProgramNode([],[]);
break;
case 7:this.$=new o.ProgramNode([]);
break;
case 8:this.$=[j[i]];
break;
case 9:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 10:this.$=new o.BlockNode(j[i-2],j[i-1].inverse,j[i-1],j[i]);
break;
case 11:this.$=new o.BlockNode(j[i-2],j[i-1],j[i-1].inverse,j[i]);
break;
case 12:this.$=j[i];
break;
case 13:this.$=j[i];
break;
case 14:this.$=new o.ContentNode(j[i]);
break;
case 15:this.$=new o.CommentNode(j[i]);
break;
case 16:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 17:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 18:this.$=j[i-1];
break;
case 19:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 20:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1],true);
break;
case 21:this.$=new o.PartialNode(j[i-1]);
break;
case 22:this.$=new o.PartialNode(j[i-2],j[i-1]);
break;
case 23:break;
case 24:this.$=[[j[i-2]].concat(j[i-1]),j[i]];
break;
case 25:this.$=[[j[i-1]].concat(j[i]),null];
break;
case 26:this.$=[[j[i-1]],j[i]];
break;
case 27:this.$=[[j[i]],null];
break;
case 28:this.$=[[new o.DataNode(j[i])],null];
break;
case 29:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 30:this.$=[j[i]];
break;
case 31:this.$=j[i];
break;
case 32:this.$=new o.StringNode(j[i]);
break;
case 33:this.$=new o.IntegerNode(j[i]);
break;
case 34:this.$=new o.BooleanNode(j[i]);
break;
case 35:this.$=new o.DataNode(j[i]);
break;
case 36:this.$=new o.HashNode(j[i]);
break;
case 37:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 38:this.$=[j[i]];
break;
case 39:this.$=[j[i-2],j[i]];
break;
case 40:this.$=[j[i-2],new o.StringNode(j[i])];
break;
case 41:this.$=[j[i-2],new o.IntegerNode(j[i])];
break;
case 42:this.$=[j[i-2],new o.BooleanNode(j[i])];
break;
case 43:this.$=[j[i-2],new o.DataNode(j[i])];
break;
case 44:this.$=new o.PartialNameNode(j[i]);
break;
case 45:this.$=new o.IdNode(j[i]);
break;
case 46:j[i-2].push(j[i]);
this.$=j[i-2];
break;
case 47:this.$=[j[i]];
break
}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],24:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],24:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],24:[1,16]},{17:23,18:[1,22],21:24,28:[1,25],35:[1,27],38:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{4:28,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{17:30,21:24,28:[1,25],35:[1,27],38:26},{17:31,21:24,28:[1,25],35:[1,27],38:26},{17:32,21:24,28:[1,25],35:[1,27],38:26},{25:33,37:[1,34]},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],24:[1,16]},{17:23,21:24,28:[1,25],35:[1,27],38:26},{5:[2,4],7:35,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],24:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23]},{18:[1,36]},{18:[2,27],21:41,26:37,27:38,28:[1,45],29:39,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,28]},{18:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],35:[2,45],39:[1,48]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],39:[2,47]},{10:49,20:[1,50]},{10:51,20:[1,50]},{18:[1,52]},{18:[1,53]},{18:[1,54]},{18:[1,55],21:56,35:[1,27],38:26},{18:[2,44],35:[2,44]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],24:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{18:[2,25],21:41,27:57,28:[1,45],29:58,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,26]},{18:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],35:[2,30]},{18:[2,36],34:59,35:[1,60]},{18:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],35:[2,31]},{18:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],35:[2,32]},{18:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],35:[2,33]},{18:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],35:[2,34]},{18:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],35:[2,35]},{18:[2,38],35:[2,38]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],36:[1,61],39:[2,47]},{35:[1,62]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{21:63,35:[1,27],38:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21]},{18:[1,64]},{18:[2,24]},{18:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],35:[2,29]},{18:[2,37],35:[2,37]},{36:[1,61]},{21:65,28:[1,69],30:[1,66],31:[1,67],32:[1,68],35:[1,27],38:26},{18:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],35:[2,46],39:[2,46]},{18:[1,70]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22]},{18:[2,39],35:[2,39]},{18:[2,40],35:[2,40]},{18:[2,41],35:[2,41]},{18:[2,42],35:[2,42]},{18:[2,43],35:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]}],defaultActions:{17:[2,1],25:[2,28],38:[2,26],57:[2,24]},parseError:function d(i,h){throw new Error(i)
},parse:function f(s){var z=this,n=[0],I=[null],u=[],J=this.table,i="",t=0,G=0,k=0,q=2,w=1;
this.lexer.setInput(s);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var j=this.lexer.yylloc;
u.push(j);
var l=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function y(p){n.length=n.length-2*p;
I.length=I.length-p;
u.length=u.length-p
}function x(){var p;
p=z.lexer.lex()||1;
if(typeof p!=="number"){p=z.symbols_[p]||p
}return p
}var F,B,m,E,K,v,D={},A,H,h,o;
while(true){m=n[n.length-1];
if(this.defaultActions[m]){E=this.defaultActions[m]
}else{if(F===null||typeof F=="undefined"){F=x()
}E=J[m]&&J[m][F]
}if(typeof E==="undefined"||!E.length||!E[0]){var C="";
if(!k){o=[];
for(A in J[m]){if(this.terminals_[A]&&A>2){o.push("'"+this.terminals_[A]+"'")
}}if(this.lexer.showPosition){C="Parse error on line "+(t+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+o.join(", ")+", got '"+(this.terminals_[F]||F)+"'"
}else{C="Parse error on line "+(t+1)+": Unexpected "+(F==1?"end of input":"'"+(this.terminals_[F]||F)+"'")
}this.parseError(C,{text:this.lexer.match,token:this.terminals_[F]||F,line:this.lexer.yylineno,loc:j,expected:o})
}}if(E[0] instanceof Array&&E.length>1){throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+F)
}switch(E[0]){case 1:n.push(F);
I.push(this.lexer.yytext);
u.push(this.lexer.yylloc);
n.push(E[1]);
F=null;
if(!B){G=this.lexer.yyleng;
i=this.lexer.yytext;
t=this.lexer.yylineno;
j=this.lexer.yylloc;
if(k>0){k--
}}else{F=B;
B=null
}break;
case 2:H=this.productions_[E[1]][1];
D.$=I[I.length-H];
D._$={first_line:u[u.length-(H||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(H||1)].first_column,last_column:u[u.length-1].last_column};
if(l){D._$.range=[u[u.length-(H||1)].range[0],u[u.length-1].range[1]]
}v=this.performAction.call(D,i,G,t,this.yy,E[1],I,u);
if(typeof v!=="undefined"){return v
}if(H){n=n.slice(0,-1*H*2);
I=I.slice(0,-1*H);
u=u.slice(0,-1*H)
}n.push(this.productions_[E[1]][0]);
I.push(D.$);
u.push(D._$);
h=J[n[n.length-2]][n[n.length-1]];
n.push(h);
break;
case 3:return true
}}return true
}};
var a=(function(){var k=({EOF:1,parseError:function m(p,o){if(this.yy.parser){this.yy.parser.parseError(p,o)
}else{throw new Error(p)
}},setInput:function(o){this._input=o;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var p=this._input[0];
this.yytext+=p;
this.yyleng++;
this.offset++;
this.match+=p;
this.matched+=p;
var o=p.match(/(?:\r\n?|\n).*/g);
if(o){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return p
},unput:function(q){var o=q.length;
var p=q.split(/(?:\r\n?|\n)/g);
this._input=q+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-o-1);
this.offset-=o;
var t=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(p.length-1){this.yylineno-=p.length-1
}var s=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===t.length?this.yylloc.first_column:0)+t[t.length-p.length].length-p[0].length:this.yylloc.first_column-o};
if(this.options.ranges){this.yylloc.range=[s[0],s[0]+this.yyleng-o]
}return this
},more:function(){this._more=true;
return this
},less:function(o){this.unput(this.match.slice(o))
},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);
return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var o=this.match;
if(o.length<20){o+=this._input.substr(0,20-o.length)
}return(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var o=this.pastInput();
var p=new Array(o.length+1).join("-");
return o+this.upcomingInput()+"\n"+p+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var u,s,p,r,q,o;
if(!this._more){this.yytext="";
this.match=""
}var v=this._currentRules();
for(var t=0;
t<v.length;
t++){p=this._input.match(this.rules[v[t]]);
if(p&&(!s||p[0].length>s[0].length)){s=p;
r=t;
if(!this.options.flex){break
}}}if(s){o=s[0].match(/(?:\r\n?|\n).*/g);
if(o){this.yylineno+=o.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length};
this.yytext+=s[0];
this.match+=s[0];
this.matches=s;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(s[0].length);
this.matched+=s[0];
u=this.performAction.call(this,this.yy,this,v[r],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(u){return u
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function h(){var o=this.next();
if(typeof o!=="undefined"){return o
}else{return this.lex()
}},begin:function i(o){this.conditionStack.push(o)
},popState:function n(){return this.conditionStack.pop()
},_currentRules:function l(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function i(o){this.begin(o)
}});
k.options={};
k.performAction=function j(s,p,r,o){var q=o;
switch(r){case 0:if(p.yytext.slice(-1)!=="\\"){this.begin("mu")
}if(p.yytext.slice(-1)==="\\"){p.yytext=p.yytext.substr(0,p.yyleng-1),this.begin("emu")
}if(p.yytext){return 14
}break;
case 1:return 14;
break;
case 2:if(p.yytext.slice(-1)!=="\\"){this.popState()
}if(p.yytext.slice(-1)==="\\"){p.yytext=p.yytext.substr(0,p.yyleng-1)
}return 14;
break;
case 3:p.yytext=p.yytext.substr(0,p.yyleng-4);
this.popState();
return 15;
break;
case 4:this.begin("par");
return 24;
break;
case 5:return 16;
break;
case 6:return 20;
break;
case 7:return 19;
break;
case 8:return 19;
break;
case 9:return 23;
break;
case 10:return 23;
break;
case 11:this.popState();
this.begin("com");
break;
case 12:p.yytext=p.yytext.substr(3,p.yyleng-5);
this.popState();
return 15;
break;
case 13:return 22;
break;
case 14:return 36;
break;
case 15:return 35;
break;
case 16:return 35;
break;
case 17:return 39;
break;
case 18:break;
case 19:this.popState();
return 18;
break;
case 20:this.popState();
return 18;
break;
case 21:p.yytext=p.yytext.substr(1,p.yyleng-2).replace(/\\"/g,'"');
return 30;
break;
case 22:p.yytext=p.yytext.substr(1,p.yyleng-2).replace(/\\'/g,"'");
return 30;
break;
case 23:p.yytext=p.yytext.substr(1);
return 28;
break;
case 24:return 32;
break;
case 25:return 32;
break;
case 26:return 31;
break;
case 27:return 35;
break;
case 28:p.yytext=p.yytext.substr(1,p.yyleng-2);
return 35;
break;
case 29:return"INVALID";
break;
case 30:break;
case 31:this.popState();
return 37;
break;
case 32:return 5;
break
}};
k.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:\s+)/,/^(?:[a-zA-Z0-9_$-/]+)/,/^(?:$)/];
k.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},par:{rules:[30,31],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return k
})();
g.lexer=a;
function e(){this.yy={}
}e.prototype=g;
g.Parser=e;
return new e
})();
Handlebars.Parser=handlebars;
Handlebars.parse=function(a){if(a.constructor===Handlebars.AST.ProgramNode){return a
}Handlebars.Parser.yy=Handlebars.AST;
return Handlebars.Parser.parse(a)
};
Handlebars.print=function(a){return new Handlebars.PrintVisitor().accept(a)
};
(function(){Handlebars.AST={};
Handlebars.AST.ProgramNode=function(c,b){this.type="program";
this.statements=c;
if(b){this.inverse=new Handlebars.AST.ProgramNode(b)
}};
Handlebars.AST.MustacheNode=function(g,d,c){this.type="mustache";
this.escaped=!c;
this.hash=d;
var f=this.id=g[0];
var e=this.params=g.slice(1);
var b=this.eligibleHelper=f.isSimple;
this.isHelper=b&&(e.length||d)
};
Handlebars.AST.PartialNode=function(b,c){this.type="partial";
this.partialName=b;
this.context=c
};
var a=function(b,c){if(b.original!==c.original){throw new Handlebars.Exception(b.original+" doesn't match "+c.original)
}};
Handlebars.AST.BlockNode=function(d,c,b,e){a(d.id,e);
this.type="block";
this.mustache=d;
this.program=c;
this.inverse=b;
if(this.inverse&&!this.program){this.isInverse=true
}};
Handlebars.AST.ContentNode=function(b){this.type="content";
this.string=b
};
Handlebars.AST.HashNode=function(b){this.type="hash";
this.pairs=b
};
Handlebars.AST.IdNode=function(f){this.type="ID";
this.original=f.join(".");
var d=[],g=0;
for(var e=0,b=f.length;
e<b;
e++){var c=f[e];
if(c===".."||c==="."||c==="this"){if(d.length>0){throw new Handlebars.Exception("Invalid path: "+this.original)
}else{if(c===".."){g++
}else{this.isScoped=true
}}}else{d.push(c)
}}this.parts=d;
this.string=d.join(".");
this.depth=g;
this.isSimple=f.length===1&&!this.isScoped&&g===0;
this.stringModeValue=this.string
};
Handlebars.AST.PartialNameNode=function(b){this.type="PARTIAL_NAME";
this.name=b
};
Handlebars.AST.DataNode=function(b){this.type="DATA";
this.id=b
};
Handlebars.AST.StringNode=function(b){this.type="STRING";
this.string=b;
this.stringModeValue=b
};
Handlebars.AST.IntegerNode=function(b){this.type="INTEGER";
this.integer=b;
this.stringModeValue=Number(b)
};
Handlebars.AST.BooleanNode=function(b){this.type="BOOLEAN";
this.bool=b;
this.stringModeValue=b==="true"
};
Handlebars.AST.CommentNode=function(b){this.type="comment";
this.comment=b
}
})();
var errorProps=["description","fileName","lineNumber","message","name","number","stack"];
Handlebars.Exception=function(c){var b=Error.prototype.constructor.apply(this,arguments);
for(var a=0;
a<errorProps.length;
a++){this[errorProps[a]]=b[errorProps[a]]
}};
Handlebars.Exception.prototype=new Error();
Handlebars.SafeString=function(a){this.string=a
};
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()
};
(function(){var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var d=/[&<>"'`]/g;
var b=/[&<>"'`]/;
var a=function(e){return c[e]||"&amp;"
};
Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()
}else{if(e==null||e===false){return""
}}if(!b.test(e)){return e
}return e.replace(d,a)
},isEmpty:function(e){if(!e&&e!==0){return true
}else{if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true
}else{return false
}}}}
})();
Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(g,f){g.prototype={compiler:g,disassemble:function(){var p=this.opcodes,o,m=[],r,q;
for(var n=0,h=p.length;
n<h;
n++){o=p[n];
if(o.opcode==="DECLARE"){m.push("DECLARE "+o.name+"="+o.value)
}else{r=[];
for(var k=0;
k<o.args.length;
k++){q=o.args[k];
if(typeof q==="string"){q='"'+q.replace("\n","\\n")+'"'
}r.push(q)
}m.push(o.opcode+" "+r.join(" "))
}}return m.join("\n")
},equals:function(k){var h=this.opcodes.length;
if(k.opcodes.length!==h){return false
}for(var n=0;
n<h;
n++){var o=this.opcodes[n],l=k.opcodes[n];
if(o.opcode!==l.opcode||o.args.length!==l.args.length){return false
}for(var m=0;
m<o.args.length;
m++){if(o.args[m]!==l.args[m]){return false
}}}return true
},guid:0,compile:function(h,j){this.children=[];
this.depths={list:[]};
this.options=j;
var k=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(k){for(var i in k){this.options.knownHelpers[i]=k[i]
}}return this.program(h)
},accept:function(h){return this[h.type](h)
},program:function(k){var j=k.statements,n;
this.opcodes=[];
for(var m=0,h=j.length;
m<h;
m++){n=j[m];
this[n.type](n)
}this.isSimple=h===1;
this.depths.list=this.depths.list.sort(function(l,i){return l-i
});
return this
},compileProgram:function(k){var h=new this.compiler().compile(k,this.options);
var m=this.guid++,o;
this.usePartial=this.usePartial||h.usePartial;
this.children[m]=h;
for(var n=0,j=h.depths.list.length;
n<j;
n++){o=h.depths.list[n];
if(o<2){continue
}else{this.addDepth(o-1)
}}return m
},block:function(l){var k=l.mustache,i=l.program,h=l.inverse;
if(i){i=this.compileProgram(i)
}if(h){h=this.compileProgram(h)
}var j=this.classifyMustache(k);
if(j==="helper"){this.helperMustache(k,i,h)
}else{if(j==="simple"){this.simpleMustache(k);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousMustache(k,i,h);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(m){var k=m.pairs,o,n;
this.opcode("pushHash");
for(var j=0,h=k.length;
j<h;
j++){o=k[j];
n=o[1];
if(this.options.stringParams){this.opcode("pushStringParam",n.stringModeValue,n.type)
}else{this.accept(n)
}this.opcode("assignToHash",o[0])
}this.opcode("popHash")
},partial:function(h){var i=h.partialName;
this.usePartial=true;
if(h.context){this.ID(h.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",i.name);
this.opcode("append")
},content:function(h){this.opcode("appendContent",h.string)
},mustache:function(j){var h=this.options;
var i=this.classifyMustache(j);
if(i==="simple"){this.simpleMustache(j)
}else{if(i==="helper"){this.helperMustache(j)
}else{this.ambiguousMustache(j)
}}if(j.escaped&&!h.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousMustache:function(l,j,i){var m=l.id,k=m.parts[0],h=j!=null||i!=null;
this.opcode("getContext",m.depth);
this.opcode("pushProgram",j);
this.opcode("pushProgram",i);
this.opcode("invokeAmbiguous",k,h)
},simpleMustache:function(h){var i=h.id;
if(i.type==="DATA"){this.DATA(i)
}else{if(i.parts.length){this.ID(i)
}else{this.addDepth(i.depth);
this.opcode("getContext",i.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperMustache:function(k,i,h){var l=this.setupFullMustacheParams(k,i,h),j=k.id.parts[0];
if(this.options.knownHelpers[j]){this.opcode("invokeKnownHelper",l.length,j)
}else{if(this.knownHelpersOnly){throw new Error("You specified knownHelpersOnly, but used the unknown helper "+j)
}else{this.opcode("invokeHelper",l.length,j)
}}},ID:function(m){this.addDepth(m.depth);
this.opcode("getContext",m.depth);
var j=m.parts[0];
if(!j){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",m.parts[0])
}for(var k=1,h=m.parts.length;
k<h;
k++){this.opcode("lookup",m.parts[k])
}},DATA:function(h){this.options.data=true;
this.opcode("lookupData",h.id)
},STRING:function(h){this.opcode("pushString",h.string)
},INTEGER:function(h){this.opcode("pushLiteral",h.integer)
},BOOLEAN:function(h){this.opcode("pushLiteral",h.bool)
},comment:function(){},opcode:function(h){this.opcodes.push({opcode:h,args:[].slice.call(arguments,1)})
},declare:function(h,i){this.opcodes.push({opcode:"DECLARE",name:h,value:i})
},addDepth:function(h){if(isNaN(h)){throw new Error("EWOT")
}if(h===0){return
}if(!this.depths[h]){this.depths[h]=true;
this.depths.list.push(h)
}},classifyMustache:function(k){var j=k.isHelper;
var l=k.eligibleHelper;
var i=this.options;
if(l&&!j){var h=k.id.parts[0];
if(i.knownHelpers[h]){j=true
}else{if(i.knownHelpersOnly){l=false
}}}if(j){return"helper"
}else{if(l){return"ambiguous"
}else{return"simple"
}}},pushParams:function(k){var h=k.length,j;
while(h--){j=k[h];
if(this.options.stringParams){if(j.depth){this.addDepth(j.depth)
}this.opcode("getContext",j.depth||0);
this.opcode("pushStringParam",j.stringModeValue,j.type)
}else{this[j.type](j)
}}},setupMustacheParams:function(h){var i=h.params;
this.pushParams(i);
if(h.hash){this.hash(h.hash)
}else{this.opcode("emptyHash")
}return i
},setupFullMustacheParams:function(j,i,h){var k=j.params;
this.pushParams(k);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
if(j.hash){this.hash(j.hash)
}else{this.opcode("emptyHash")
}return k
}};
var c=function(h){this.value=h
};
f.prototype={nameLookup:function(i,h){if(/^[0-9]+$/.test(h)){return i+"["+h+"]"
}else{if(f.isValidJavaScriptVariableName(h)){return i+"."+h
}else{return i+"['"+h+"']"
}}},appendToBuffer:function(h){if(this.environment.isSimple){return"return "+h+";"
}else{return{appendToBuffer:true,content:h,toString:function(){return"buffer += "+h+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(h,i,k,j){this.environment=h;
this.options=i||{};
Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!k;
this.context=k||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(h,i);
var m=h.opcodes,l;
this.i=0;
for(b=m.length;
this.i<b;
this.i++){l=m[this.i];
if(l.opcode==="DECLARE"){this[l.name]=l.value
}else{this[l.opcode].apply(this,l.args)
}}return this.createFunctionContext(j)
},nextOpcode:function(){var h=this.environment.opcodes;
return h[this.i+1]
},eat:function(){this.i=this.i+1
},preamble:function(){var h=[];
if(!this.isChild){var i=this.namespace;
var j="helpers = helpers || "+i+".helpers;";
if(this.environment.usePartial){j=j+" partials = partials || "+i+".partials;"
}if(this.options.data){j=j+" data = data || {};"
}h.push(j)
}else{h.push("")
}if(!this.environment.isSimple){h.push(", buffer = "+this.initializeBuffer())
}else{h.push("")
}this.lastContext=0;
this.source=h
},createFunctionContext:function(q){var k=this.stackVars.concat(this.registers.list);
if(k.length>0){this.source[1]=this.source[1]+", "+k.join(", ")
}if(!this.isChild){for(var p in this.context.aliases){this.source[1]=this.source[1]+", "+p+"="+this.context.aliases[p]
}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.source.push("return buffer;")
}var n=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var o=0,m=this.environment.depths.list.length;
o<m;
o++){n.push("depth"+this.environment.depths.list[o])
}var h=this.mergeSource();
if(!this.isChild){var r=Handlebars.COMPILER_REVISION,j=Handlebars.REVISION_CHANGES[r];
h="this.compilerInfo = ["+r+",'"+j+"'];\n"+h
}if(q){n.push(h);
return Function.apply(this,n)
}else{var s="function "+(this.name||"")+"("+n.join(",")+") {\n  "+h+"}";
Handlebars.log(Handlebars.logger.DEBUG,s+"\n\n");
return s
}},mergeSource:function(){var m="",k;
for(var l=0,h=this.source.length;
l<h;
l++){var j=this.source[l];
if(j.appendToBuffer){if(k){k=k+"\n    + "+j.content
}else{k=j.content
}}else{if(k){m+="buffer += "+k+";\n  ";
k=undefined
}m+=j+"\n  "
}}return m
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var h=["depth0"];
this.setupParams(0,h);
this.replaceStack(function(i){h.splice(1,0,i);
return"blockHelperMissing.call("+h.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var i=["depth0"];
this.setupParams(0,i);
var h=this.topStack();
i.splice(1,0,h);
i[i.length-1]="options";
this.source.push("if (!"+this.lastHelper+") { "+h+" = blockHelperMissing.call("+i.join(", ")+"); }")
},appendContent:function(h){this.source.push(this.appendToBuffer(this.quotedString(h)))
},append:function(){this.flushInline();
var h=this.popStack();
this.source.push("if("+h+" || "+h+" === 0) { "+this.appendToBuffer(h)+" }");
if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(h){if(this.lastContext!==h){this.lastContext=h
}},lookupOnContext:function(h){this.push(this.nameLookup("depth"+this.lastContext,h,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(h){return"typeof "+h+" === functionType ? "+h+".apply(depth0) : "+h
})
},lookup:function(h){this.replaceStack(function(i){return i+" == null || "+i+" === false ? "+i+" : "+this.nameLookup(i,h,"context")
})
},lookupData:function(h){this.push(this.nameLookup("data",h,"data"))
},pushStringParam:function(h,i){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(i);
if(typeof h==="string"){this.pushString(h)
}else{this.pushStackLiteral(h)
}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.register("hashTypes","{}")
}},pushHash:function(){this.hash={values:[],types:[]}
},popHash:function(){var h=this.hash;
this.hash=undefined;
if(this.options.stringParams){this.register("hashTypes","{"+h.types.join(",")+"}")
}this.push("{\n    "+h.values.join(",\n    ")+"\n  }")
},pushString:function(h){this.pushStackLiteral(this.quotedString(h))
},push:function(h){this.inlineStack.push(h);
return h
},pushLiteral:function(h){this.pushStackLiteral(h)
},pushProgram:function(h){if(h!=null){this.pushStackLiteral(this.programExpression(h))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(j,h){this.context.aliases.helperMissing="helpers.helperMissing";
var i=this.lastHelper=this.setupHelper(j,h,true);
this.push(i.name);
this.replaceStack(function(k){return k+" ? "+k+".call("+i.callParams+") : helperMissing.call("+i.helperMissingParams+")"
})
},invokeKnownHelper:function(j,h){var i=this.setupHelper(j,h);
this.push(i.name+".call("+i.callParams+")")
},invokeAmbiguous:function(h,l){this.context.aliases.functionType='"function"';
this.pushStackLiteral("{}");
var i=this.setupHelper(0,h,l);
var j=this.lastHelper=this.nameLookup("helpers",h,"helper");
var m=this.nameLookup("depth"+this.lastContext,h,"context");
var k=this.nextStack();
this.source.push("if ("+k+" = "+j+") { "+k+" = "+k+".call("+i.callParams+"); }");
this.source.push("else { "+k+" = "+m+"; "+k+" = typeof "+k+" === functionType ? "+k+".apply(depth0) : "+k+"; }")
},invokePartial:function(h){var i=[this.nameLookup("partials",h,"partial"),"'"+h+"'",this.popStack(),"helpers","partials"];
if(this.options.data){i.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+i.join(", ")+")")
},assignToHash:function(h){var j=this.popStack(),i;
if(this.options.stringParams){i=this.popStack();
this.popStack()
}var k=this.hash;
if(i){k.types.push("'"+h+"': "+i)
}k.values.push("'"+h+"': ("+j+")")
},compiler:f,compileChildren:function(h,m){var o=h.children,q,p;
for(var n=0,j=o.length;
n<j;
n++){q=o[n];
p=new this.compiler();
var k=this.matchExistingProgram(q);
if(k==null){this.context.programs.push("");
k=this.context.programs.length;
q.index=k;
q.name="program"+k;
this.context.programs[k]=p.compile(q,m,this.context);
this.context.environments[k]=q
}else{q.index=k;
q.name="program"+k
}}},matchExistingProgram:function(l){for(var k=0,j=this.context.environments.length;
k<j;
k++){var h=this.context.environments[k];
if(h&&h.equals(l)){return k
}}},programExpression:function(j){this.context.aliases.self="this";
if(j==null){return"self.noop"
}var p=this.environment.children[j],o=p.depths.list,n;
var m=[p.index,p.name,"data"];
for(var k=0,h=o.length;
k<h;
k++){n=o[k];
if(n===1){m.push("depth0")
}else{m.push("depth"+(n-1))
}}if(o.length===0){return"self.program("+m.join(", ")+")"
}else{m.shift();
return"self.programWithDepth("+m.join(", ")+")"
}},register:function(h,i){this.useRegister(h);
this.source.push(h+" = "+i+";")
},useRegister:function(h){if(!this.registers[h]){this.registers[h]=true;
this.registers.list.push(h)
}},pushStackLiteral:function(h){return this.push(new c(h))
},pushStack:function(i){this.flushInline();
var h=this.incrStack();
if(i){this.source.push(h+" = "+i+";")
}this.compileStack.push(h);
return h
},replaceStack:function(n){var k="",m=this.isInline(),h;
if(m){var l=this.popStack(true);
if(l instanceof c){h=l.value
}else{var i=this.stackSlot?this.topStackName():this.incrStack();
k="("+this.push(i)+" = "+l+"),";
h=this.topStack()
}}else{h=this.topStack()
}var j=n.call(this,h);
if(m){if(this.inlineStack.length||this.compileStack.length){this.popStack()
}this.push("("+k+j+")")
}else{if(!/^stack/.test(h)){h=this.nextStack()
}this.source.push(h+" = ("+k+j+");")
}return h
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var k=this.inlineStack;
if(k.length){this.inlineStack=[];
for(var j=0,h=k.length;
j<h;
j++){var l=k[j];
if(l instanceof c){this.compileStack.push(l)
}else{this.pushStack(l)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(h){var j=this.isInline(),i=(j?this.inlineStack:this.compileStack).pop();
if(!h&&(i instanceof c)){return i.value
}else{if(!j){this.stackSlot--
}return i
}},topStack:function(i){var h=(this.isInline()?this.inlineStack:this.compileStack),j=h[h.length-1];
if(!i&&(j instanceof c)){return j.value
}else{return j
}},quotedString:function(h){return'"'+h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'
},setupHelper:function(l,j,i){var k=[];
this.setupParams(l,k,i);
var h=this.nameLookup("helpers",j,"helper");
return{params:k,name:h,callParams:["depth0"].concat(k).join(", "),helperMissingParams:i&&["depth0",this.quotedString(j)].concat(k).join(", ")}
},setupParams:function(l,k,h){var r=[],p=[],q=[],j,m,o;
r.push("hash:"+this.popStack());
m=this.popStack();
o=this.popStack();
if(o||m){if(!o){this.context.aliases.self="this";
o="self.noop"
}if(!m){this.context.aliases.self="this";
m="self.noop"
}r.push("inverse:"+m);
r.push("fn:"+o)
}for(var n=0;
n<l;
n++){j=this.popStack();
k.push(j);
if(this.options.stringParams){q.push(this.popStack());
p.push(this.popStack())
}}if(this.options.stringParams){r.push("contexts:["+p.join(",")+"]");
r.push("types:["+q.join(",")+"]");
r.push("hashTypes:hashTypes")
}if(this.options.data){r.push("data:data")
}r="{"+r.join(",")+"}";
if(h){this.register("options",r);
k.push("options")
}else{k.push(r)
}return k.join(", ")
}};
var a=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var e=f.RESERVED_WORDS={};
for(var d=0,b=a.length;
d<b;
d++){e[a[d]]=true
}f.isValidJavaScriptVariableName=function(h){if(!f.RESERVED_WORDS[h]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(h)){return true
}return false
}
})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);
Handlebars.precompile=function(c,d){if(!c||(typeof c!=="string"&&c.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+c)
}d=d||{};
if(!("data" in d)){d.data=true
}var b=Handlebars.parse(c);
var a=new Handlebars.Compiler().compile(b,d);
return new Handlebars.JavaScriptCompiler().compile(a,d)
};
Handlebars.compile=function(a,b){if(!a||(typeof a!=="string"&&a.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a)
}b=b||{};
if(!("data" in b)){b.data=true
}var d;
function c(){var g=Handlebars.parse(a);
var f=new Handlebars.Compiler().compile(g,b);
var e=new Handlebars.JavaScriptCompiler().compile(f,b,undefined,true);
return Handlebars.template(e)
}return function(f,e){if(!d){d=c()
}return d.call(this,f,e)
}
};
Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(d,e,f){var c=this.programs[d];
if(f){return Handlebars.VM.program(e,f)
}else{if(c){return c
}else{c=this.programs[d]=Handlebars.VM.program(e);
return c
}}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop,compilerInfo:null};
return function(g,f){f=f||{};
var d=a.call(b,Handlebars,g,f.helpers,f.partials,f.data);
var h=b.compilerInfo||[],e=h[0]||1,j=Handlebars.COMPILER_REVISION;
if(e!==j){if(e<j){var c=Handlebars.REVISION_CHANGES[j],i=Handlebars.REVISION_CHANGES[e];
throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+c+") or downgrade your runtime to an older version ("+i+")."
}else{throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+h[1]+")."
}}return d
}
},programWithDepth:function(b,d,c){var a=Array.prototype.slice.call(arguments,2);
return function(f,e){e=e||{};
return b.apply(this,[f,e.data||d].concat(a))
}
},program:function(a,b){return function(d,c){c=c||{};
return a(d,c.data||b)
}
},noop:function(){return""
},invokePartial:function(a,c,e,f,d,g){var b={helpers:f,partials:d,data:g};
if(a===undefined){throw new Handlebars.Exception("The partial "+c+" could not be found")
}else{if(a instanceof Function){return a(e,b)
}else{if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+c+" could not be compiled when running in runtime-only mode")
}else{d[c]=Handlebars.compile(a,{data:g!==undefined});
return d[c](e,b)
}}}}};
Handlebars.template=Handlebars.VM.template;
(function(w,C){function v(){var e=D.elements;
return"string"==typeof e?e.split(" "):e
}function z(f){var e=u[f[d]];
e||(e={},A++,f[d]=A,u[A]=e);
return e
}function c(f,e,g){e||(e=C);
if(B){return e.createElement(f)
}g||(g=z(e));
e=g.cache[f]?g.cache[f].cloneNode():a.test(f)?(g.cache[f]=g.createElem(f)).cloneNode():g.createElem(f);
return e.canHaveChildren&&!F.test(f)?g.frag.appendChild(e):e
}function E(f,e){if(!e.cache){e.cache={},e.createElem=f.createElement,e.createFrag=f.createDocumentFragment,e.frag=e.createFrag()
}f.createElement=function(g){return !D.shivMethods?e.createElem(g):c(g,f,e)
};
f.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+v().join().replace(/\w+/g,function(g){e.createElem(g);
e.frag.createElement(g);
return'c("'+g+'")'
})+");return n}")(D,e.frag)
}function b(f){f||(f=C);
var e=z(f);
if(D.shivCSS&&!y&&!e.hasCSS){var h,g=f;
h=g.createElement("p");
g=g.getElementsByTagName("head")[0]||g.documentElement;
h.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
h=g.insertBefore(h.lastChild,g.firstChild);
e.hasCSS=!!h
}B||E(f,e);
return f
}var x=w.html5||{},F=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y,d="_html5shiv",A=0,u={},B;
(function(){try{var f=C.createElement("a");
f.innerHTML="<xyz></xyz>";
y="hidden" in f;
var e;
if(!(e=1==f.childNodes.length)){C.createElement("a");
var h=C.createDocumentFragment();
e="undefined"==typeof h.cloneNode||"undefined"==typeof h.createDocumentFragment||"undefined"==typeof h.createElement
}B=e
}catch(g){B=y=!0
}})();
var D={elements:x.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==x.shivCSS,supportsUnknownElements:B,shivMethods:!1!==x.shivMethods,type:"default",shivDocument:b,createElement:c,createDocumentFragment:function(g,f){g||(g=C);
if(B){return g.createDocumentFragment()
}for(var f=f||z(g),l=f.frag.cloneNode(),k=0,j=v(),i=j.length;
k<i;
k++){l.createElement(j[k])
}return l
}};
w.html5=D;
b(C)
})(this,document);
jQuery.fn.highlight=function(c,f){var b="";
if(f){b=a(c)
}else{b=c.toUpperCase()
}return this.each(function(){d(this,b)
});
function d(g,k){var n=0;
if(g.nodeType==3){var j=0;
if(f){j=g.data.search(k)
}else{j=g.data.toUpperCase().indexOf(k)
}if(j>=0){var m=document.createElement("span");
m.className="highlight";
var o=g.splitText(j);
var p=o.splitText(c.length);
var l=o.cloneNode(true);
m.appendChild(l);
o.parentNode.replaceChild(m,o);
n=1
}}else{if(g.nodeType==1&&g.childNodes&&!/(script|style)/i.test(g.tagName)){for(var h=0;
h<g.childNodes.length;
++h){h+=d(g.childNodes[h],k)
}}}return n
}function a(g){var k=e(g);
var j=k.replace(/([|()[{.+*?^$\\])/g,"\\$1");
var h=function(l){return charToAccentedCharClassMap[l]||l
};
var i=j.replace(/\S/g,h);
return new RegExp(i,"g")
}function e(h){var g=h;
for(var i in charToAccentedCharClassMap){g=g.replace(new RegExp(charToAccentedCharClassMap[i],"g"),i)
}return g
}};
jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;
with(this.parentNode){replaceChild(this.firstChild,this);
normalize()
}}).end()
};
var charToAccentedCharClassMap={A:"[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]",B:"[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]",C:"[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]",D:"[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]",E:"[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]",F:"[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]",G:"[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]",H:"[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]",I:"[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]",J:"[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]",K:"[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]",L:"[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]",M:"[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]",N:"[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]",O:"[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]",P:"[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]",Q:"[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]",R:"[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]",S:"[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]",T:"[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]",U:"[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]",V:"[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]",W:"[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]",X:"[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]",Y:"[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]",Z:"[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]"};
(function($){$.extend($.ui,{timepicker:{version:"0.9.3"}});
function Timepicker(){this.regional=[];
this.regional[""]={currentText:"Now",closeText:"Done",ampm:false,timeFormat:"hh:mm tt",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second"};
this._defaults={showButtonPanel:true,timeOnly:false,showHour:true,showMinute:true,showSecond:false,showTime:true,stepHour:0.05,stepMinute:0.05,stepSecond:0.05,hour:0,minute:0,second:0,hourMin:0,minuteMin:0,secondMin:0,hourMax:23,minuteMax:59,secondMax:59,minDateTime:null,maxDateTime:null,hourGrid:0,minuteGrid:0,secondGrid:0,alwaysSetTime:true,separator:" ",altFieldTimeOnly:true,showTimepicker:true};
$.extend(this._defaults,this.regional[""])
}$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,hour:0,minute:0,second:0,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",setDefaults:function(settings){extendRemove(this._defaults,settings||{});
return this
},_newInst:function($input,o){var tp_inst=new Timepicker(),inlineSettings={};
tp_inst.hour=tp_inst._defaults.hour;
tp_inst.minute=tp_inst._defaults.minute;
tp_inst.second=tp_inst._defaults.second;
tp_inst.ampm="";
tp_inst.$input=$input;
for(var attrName in this._defaults){var attrValue=$input.attr("time:"+attrName);
if(attrValue){try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}tp_inst._defaults=$.extend({},this._defaults,inlineSettings,o,{beforeShow:function(input,dp_inst){if($.isFunction(o.beforeShow)){o.beforeShow(input,dp_inst,tp_inst)
}},onChangeMonthYear:function(year,month,dp_inst){tp_inst._updateDateTime(dp_inst);
if($.isFunction(o.onChangeMonthYear)){o.onChangeMonthYear(year,month,dp_inst,tp_inst)
}},onClose:function(dateText,dp_inst){if(tp_inst.timeDefined===true&&$input.val()!=""){tp_inst._updateDateTime(dp_inst)
}if($.isFunction(o.onClose)){o.onClose(dateText,dp_inst,tp_inst)
}},timepicker:tp_inst});
if(o.altField){tp_inst.$altInput=$(o.altField).css({cursor:"pointer"}).focus(function(){$input.trigger("focus")
})
}if(tp_inst._defaults.minDate!==undefined&&tp_inst._defaults.minDate instanceof Date){tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())
}if(tp_inst._defaults.minDateTime!==undefined&&tp_inst._defaults.minDateTime instanceof Date){tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())
}if(tp_inst._defaults.maxDate!==undefined&&tp_inst._defaults.maxDate instanceof Date){tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())
}if(tp_inst._defaults.maxDateTime!==undefined&&tp_inst._defaults.maxDateTime instanceof Date){tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())
}return tp_inst
},_addTimePicker:function(dp_inst){var currDT=(this.$altInput&&this._defaults.altFieldTimeOnly)?this.$input.val()+" "+this.$altInput.val():this.$input.val();
this.timeDefined=this._parseTime(currDT);
this._limitMinMaxDateTime(dp_inst,false);
this._injectTimePicker()
},_parseTime:function(timeString,withDate){var regstr=this._defaults.timeFormat.toString().replace(/h{1,2}/ig,"(\\d?\\d)").replace(/m{1,2}/ig,"(\\d?\\d)").replace(/s{1,2}/ig,"(\\d?\\d)").replace(/t{1,2}/ig,"(am|pm|a|p)?").replace(/\s/g,"\\s?")+"$",order=this._getFormatPositions(),treg;
if(!this.inst){this.inst=$.datepicker._getInst(this.$input[0])
}if(withDate||!this._defaults.timeOnly){var dp_dateFormat=$.datepicker._get(this.inst,"dateFormat");
regstr=".{"+dp_dateFormat.length+",}"+this._defaults.separator+regstr
}treg=timeString.match(new RegExp(regstr,"i"));
if(treg){if(order.t!==-1){this.ampm=((treg[order.t]===undefined||treg[order.t].length===0)?"":(treg[order.t].charAt(0).toUpperCase()=="A")?"AM":"PM").toUpperCase()
}if(order.h!==-1){if(this.ampm=="AM"&&treg[order.h]=="12"){this.hour=0
}else{if(this.ampm=="PM"&&treg[order.h]!="12"){this.hour=(parseFloat(treg[order.h])+12).toFixed(0)
}else{this.hour=Number(treg[order.h])
}}}if(order.m!==-1){this.minute=Number(treg[order.m])
}if(order.s!==-1){this.second=Number(treg[order.s])
}return true
}return false
},_getFormatPositions:function(){var finds=this._defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2})/g),orders={h:-1,m:-1,s:-1,t:-1};
if(finds){for(var i=0;
i<finds.length;
i++){if(orders[finds[i].toString().charAt(0)]==-1){orders[finds[i].toString().charAt(0)]=i+1
}}}return orders
},_injectTimePicker:function(){var $dp=this.inst.dpDiv,o=this._defaults,tp_inst=this,hourMax=(o.hourMax-(o.hourMax%o.stepHour)).toFixed(0),minMax=(o.minuteMax-(o.minuteMax%o.stepMinute)).toFixed(0),secMax=(o.secondMax-(o.secondMax%o.stepSecond)).toFixed(0),dp_id=this.inst.id.toString().replace(/([^A-Za-z0-9_])/g,"");
if($dp.find("div#ui-timepicker-div-"+dp_id).length===0&&o.showTimepicker){var noDisplay=' style="display:none;"',html='<div class="ui-timepicker-div" id="ui-timepicker-div-'+dp_id+'"><dl><dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_'+dp_id+'"'+((o.showTime)?"":noDisplay)+">"+o.timeText+'</dt><dd class="ui_tpicker_time" id="ui_tpicker_time_'+dp_id+'"'+((o.showTime)?"":noDisplay)+'></dd><dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_'+dp_id+'"'+((o.showHour)?"":noDisplay)+">"+o.hourText+"</dt>",hourGridSize=0,minuteGridSize=0,secondGridSize=0,size;
if(o.showHour&&o.hourGrid>0){html+='<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_'+dp_id+'"'+((o.showHour)?"":noDisplay)+'></div><div style="padding-left: 1px"><table><tr>';
for(var h=o.hourMin;
h<hourMax;
h+=o.hourGrid){hourGridSize++;
var tmph=(o.ampm&&h>12)?h-12:h;
if(tmph<10){tmph="0"+tmph
}if(o.ampm){if(h==0){tmph=12+"a"
}else{if(h<12){tmph+="a"
}else{tmph+="p"
}}}html+="<td>"+tmph+"</td>"
}html+="</tr></table></div></dd>"
}else{html+='<dd class="ui_tpicker_hour" id="ui_tpicker_hour_'+dp_id+'"'+((o.showHour)?"":noDisplay)+"></dd>"
}html+='<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_'+dp_id+'"'+((o.showMinute)?"":noDisplay)+">"+o.minuteText+"</dt>";
if(o.showMinute&&o.minuteGrid>0){html+='<dd class="ui_tpicker_minute ui_tpicker_minute_'+o.minuteGrid+'"><div id="ui_tpicker_minute_'+dp_id+'"'+((o.showMinute)?"":noDisplay)+'></div><div style="padding-left: 1px"><table><tr>';
for(var m=o.minuteMin;
m<minMax;
m+=o.minuteGrid){minuteGridSize++;
html+="<td>"+((m<10)?"0":"")+m+"</td>"
}html+="</tr></table></div></dd>"
}else{html+='<dd class="ui_tpicker_minute" id="ui_tpicker_minute_'+dp_id+'"'+((o.showMinute)?"":noDisplay)+"></dd>"
}html+='<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_'+dp_id+'"'+((o.showSecond)?"":noDisplay)+">"+o.secondText+"</dt>";
if(o.showSecond&&o.secondGrid>0){html+='<dd class="ui_tpicker_second ui_tpicker_second_'+o.secondGrid+'"><div id="ui_tpicker_second_'+dp_id+'"'+((o.showSecond)?"":noDisplay)+'></div><div style="padding-left: 1px"><table><tr>';
for(var s=o.secondMin;
s<secMax;
s+=o.secondGrid){secondGridSize++;
html+="<td>"+((s<10)?"0":"")+s+"</td>"
}html+="</tr></table></div></dd>"
}else{html+='<dd class="ui_tpicker_second" id="ui_tpicker_second_'+dp_id+'"'+((o.showSecond)?"":noDisplay)+"></dd>"
}html+="</dl></div>";
$tp=$(html);
if(o.timeOnly===true){$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+o.timeOnlyTitle+"</div></div>");
$dp.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()
}this.hour_slider=$tp.find("#ui_tpicker_hour_"+dp_id).slider({orientation:"horizontal",value:this.hour,min:o.hourMin,max:hourMax,step:o.stepHour,slide:function(event,ui){tp_inst.hour_slider.slider("option","value",ui.value);
tp_inst._onTimeChange()
}});
this.minute_slider=$tp.find("#ui_tpicker_minute_"+dp_id).slider({orientation:"horizontal",value:this.minute,min:o.minuteMin,max:minMax,step:o.stepMinute,slide:function(event,ui){tp_inst.minute_slider.slider("option","value",ui.value);
tp_inst._onTimeChange()
}});
this.second_slider=$tp.find("#ui_tpicker_second_"+dp_id).slider({orientation:"horizontal",value:this.second,min:o.secondMin,max:secMax,step:o.stepSecond,slide:function(event,ui){tp_inst.second_slider.slider("option","value",ui.value);
tp_inst._onTimeChange()
}});
if(o.showHour&&o.hourGrid>0){size=100*hourGridSize*o.hourGrid/(hourMax-o.hourMin);
$tp.find(".ui_tpicker_hour table").css({width:size+"%",marginLeft:(size/(-2*hourGridSize))+"%",borderCollapse:"collapse"}).find("td").each(function(index){$(this).click(function(){var h=$(this).html();
if(o.ampm){var ap=h.substring(2).toLowerCase(),aph=parseInt(h.substring(0,2));
if(ap=="a"){if(aph==12){h=0
}else{h=aph
}}else{if(aph==12){h=12
}else{h=aph+12
}}}tp_inst.hour_slider.slider("option","value",h);
tp_inst._onTimeChange()
}).css({cursor:"pointer",width:(100/hourGridSize)+"%",textAlign:"center",overflow:"hidden"})
})
}if(o.showMinute&&o.minuteGrid>0){size=100*minuteGridSize*o.minuteGrid/(minMax-o.minuteMin);
$tp.find(".ui_tpicker_minute table").css({width:size+"%",marginLeft:(size/(-2*minuteGridSize))+"%",borderCollapse:"collapse"}).find("td").each(function(index){$(this).click(function(){tp_inst.minute_slider.slider("option","value",$(this).html());
tp_inst._onTimeChange()
}).css({cursor:"pointer",width:(100/minuteGridSize)+"%",textAlign:"center",overflow:"hidden"})
})
}if(o.showSecond&&o.secondGrid>0){$tp.find(".ui_tpicker_second table").css({width:size+"%",marginLeft:(size/(-2*secondGridSize))+"%",borderCollapse:"collapse"}).find("td").each(function(index){$(this).click(function(){tp_inst.second_slider.slider("option","value",$(this).html());
tp_inst._onTimeChange()
}).css({cursor:"pointer",width:(100/secondGridSize)+"%",textAlign:"center",overflow:"hidden"})
})
}var $buttonPanel=$dp.find(".ui-datepicker-buttonpane");
if($buttonPanel.length){$buttonPanel.before($tp)
}else{$dp.append($tp)
}this.$timeObj=$("#ui_tpicker_time_"+dp_id);
if(this.inst!==null){var timeDefined=this.timeDefined;
this._onTimeChange();
this.timeDefined=timeDefined
}var onSelect=tp_inst._defaults.onSelect;
if(onSelect){var inputEl=tp_inst.$input?tp_inst.$input[0]:null;
var onSelectHandler=function(){onSelect.apply(inputEl,[tp_inst.formattedDateTime,tp_inst])
};
this.hour_slider.bind("slidestop",onSelectHandler);
this.minute_slider.bind("slidestop",onSelectHandler);
this.second_slider.bind("slidestop",onSelectHandler)
}}},_limitMinMaxDateTime:function(dp_inst,adjustSliders){var o=this._defaults,dp_date=new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay),tp_date=new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay,this.hour,this.minute,this.second,0);
if(this._defaults.minDateTime!==null&&dp_date){var minDateTime=this._defaults.minDateTime,minDateTimeDate=new Date(minDateTime.getFullYear(),minDateTime.getMonth(),minDateTime.getDate(),0,0,0,0);
if(this.hourMinOriginal===null||this.minuteMinOriginal===null||this.secondMinOriginal===null){this.hourMinOriginal=o.hourMin;
this.minuteMinOriginal=o.minuteMin;
this.secondMinOriginal=o.secondMin
}if(minDateTimeDate.getTime()==dp_date.getTime()){this._defaults.hourMin=minDateTime.getHours();
this._defaults.minuteMin=minDateTime.getMinutes();
this._defaults.secondMin=minDateTime.getSeconds();
if(this.hour<this._defaults.hourMin){this.hour=this._defaults.hourMin
}if(this.minute<this._defaults.minuteMin){this.minute=this._defaults.minuteMin
}if(this.second<this._defaults.secondMin){this.second=this._defaults.secondMin
}}else{this._defaults.hourMin=this.hourMinOriginal;
this._defaults.minuteMin=this.minuteMinOriginal;
this._defaults.secondMin=this.secondMinOriginal
}}if(this._defaults.maxDateTime!==null&&dp_date){var maxDateTime=this._defaults.maxDateTime,maxDateTimeDate=new Date(maxDateTime.getFullYear(),maxDateTime.getMonth(),maxDateTime.getDate(),0,0,0,0);
if(this.hourMaxOriginal===null||this.minuteMaxOriginal===null||this.secondMaxOriginal===null){this.hourMaxOriginal=o.hourMax;
this.minuteMaxOriginal=o.minuteMax;
this.secondMaxOriginal=o.secondMax
}if(maxDateTimeDate.getTime()==dp_date.getTime()){this._defaults.hourMax=maxDateTime.getHours();
this._defaults.minuteMax=maxDateTime.getMinutes();
this._defaults.secondMax=maxDateTime.getSeconds();
if(this.hour>this._defaults.hourMax){this.hour=this._defaults.hourMax
}if(this.minute>this._defaults.minuteMax){this.minute=this._defaults.minuteMax
}if(this.second>this._defaults.secondMax){this.second=this._defaults.secondMax
}}else{this._defaults.hourMax=this.hourMaxOriginal;
this._defaults.minuteMax=this.minuteMaxOriginal;
this._defaults.secondMax=this.secondMaxOriginal
}}if(adjustSliders!==undefined&&adjustSliders===true){this.hour_slider.slider("option",{min:this._defaults.hourMin,max:this._defaults.hourMax}).slider("value",this.hour);
this.minute_slider.slider("option",{min:this._defaults.minuteMin,max:this._defaults.minuteMax}).slider("value",this.minute);
this.second_slider.slider("option",{min:this._defaults.secondMin,max:this._defaults.secondMax}).slider("value",this.second)
}},_onTimeChange:function(){var hour=(this.hour_slider)?this.hour_slider.slider("value"):false,minute=(this.minute_slider)?this.minute_slider.slider("value"):false,second=(this.second_slider)?this.second_slider.slider("value"):false;
if(hour!==false){hour=parseInt(hour,10)
}if(minute!==false){minute=parseInt(minute,10)
}if(second!==false){second=parseInt(second,10)
}var ampm=(hour<12)?"AM":"PM";
var hasChanged=(hour!=this.hour||minute!=this.minute||second!=this.second||(this.ampm.length>0&&this.ampm!=ampm));
if(hasChanged){if(hour!==false){this.hour=hour
}if(minute!==false){this.minute=minute
}if(second!==false){this.second=second
}}if(this._defaults.ampm){this.ampm=ampm
}this._formatTime();
if(this.$timeObj){this.$timeObj.text(this.formattedTime)
}this.timeDefined=true;
if(hasChanged){this._updateDateTime()
}},_formatTime:function(time,format,ampm){if(ampm==undefined){ampm=this._defaults.ampm
}time=time||{hour:this.hour,minute:this.minute,second:this.second,ampm:this.ampm};
var tmptime=format||this._defaults.timeFormat.toString();
if(ampm){var hour12=((time.ampm=="AM")?(time.hour):(time.hour%12));
hour12=(Number(hour12)===0)?12:hour12;
tmptime=tmptime.toString().replace(/hh/g,((hour12<10)?"0":"")+hour12).replace(/h/g,hour12).replace(/mm/g,((time.minute<10)?"0":"")+time.minute).replace(/m/g,time.minute).replace(/ss/g,((time.second<10)?"0":"")+time.second).replace(/s/g,time.second).replace(/TT/g,time.ampm.toUpperCase()).replace(/tt/g,time.ampm.toLowerCase()).replace(/T/g,time.ampm.charAt(0).toUpperCase()).replace(/t/g,time.ampm.charAt(0).toLowerCase())
}else{tmptime=tmptime.toString().replace(/hh/g,((time.hour<10)?"0":"")+time.hour).replace(/h/g,time.hour).replace(/mm/g,((time.minute<10)?"0":"")+time.minute).replace(/m/g,time.minute).replace(/ss/g,((time.second<10)?"0":"")+time.second).replace(/s/g,time.second);
tmptime=$.trim(tmptime.replace(/t/gi,""))
}if(arguments.length){return tmptime
}else{this.formattedTime=tmptime
}},_updateDateTime:function(dp_inst){dp_inst=this.inst||dp_inst,dt=new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay),dateFmt=$.datepicker._get(dp_inst,"dateFormat"),formatCfg=$.datepicker._getFormatConfig(dp_inst),timeAvailable=dt!==null&&this.timeDefined;
this.formattedDate=$.datepicker.formatDate(dateFmt,(dt===null?new Date():dt),formatCfg);
var formattedDateTime=this.formattedDate;
if(dp_inst.lastVal!==undefined&&(dp_inst.lastVal.length>0&&this.$input.val().length===0)){return
}if(this._defaults.timeOnly===true){formattedDateTime=this.formattedTime
}else{if(this._defaults.timeOnly!==true&&(this._defaults.alwaysSetTime||timeAvailable)){formattedDateTime+=this._defaults.separator+this.formattedTime
}}this.formattedDateTime=formattedDateTime;
if(!this._defaults.showTimepicker){this.$input.val(this.formattedDate)
}else{if(this.$altInput&&this._defaults.altFieldTimeOnly===true){this.$altInput.val(this.formattedTime);
this.$input.val(this.formattedDate)
}else{if(this.$altInput){this.$altInput.val(formattedDateTime);
this.$input.val(formattedDateTime)
}else{this.$input.val(formattedDateTime)
}}}this.$input.trigger("change")
}});
$.fn.extend({timepicker:function(o){o=o||{};
var tmp_args=arguments;
if(typeof o=="object"){tmp_args[0]=$.extend(o,{timeOnly:true})
}return $(this).each(function(){$.fn.datetimepicker.apply($(this),tmp_args)
})
},datetimepicker:function(o){o=o||{};
var $input=this,tmp_args=arguments;
if(typeof(o)=="string"){if(o=="getDate"){return $.fn.datepicker.apply($(this[0]),tmp_args)
}else{return this.each(function(){var $t=$(this);
$t.datepicker.apply($t,tmp_args)
})
}}else{return this.each(function(){var $t=$(this);
$t.datepicker($.timepicker._newInst($t,o)._defaults)
})
}}});
$.datepicker._base_selectDate=$.datepicker._selectDate;
$.datepicker._selectDate=function(id,dateStr){var inst=this._getInst($(id)[0]),tp_inst=this._get(inst,"timepicker");
if(tp_inst){tp_inst._limitMinMaxDateTime(inst,true);
inst.inline=inst.stay_open=true;
this._base_selectDate(id,dateStr+tp_inst._defaults.separator+tp_inst.formattedTime);
inst.inline=inst.stay_open=false;
this._notifyChange(inst);
this._updateDatepicker(inst)
}else{this._base_selectDate(id,dateStr)
}};
$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker;
$.datepicker._updateDatepicker=function(inst){if(typeof(inst.stay_open)!=="boolean"||inst.stay_open===false){this._base_updateDatepicker(inst);
var tp_inst=this._get(inst,"timepicker");
if(tp_inst){tp_inst._addTimePicker(inst)
}}};
$.datepicker._base_doKeyPress=$.datepicker._doKeyPress;
$.datepicker._doKeyPress=function(event){var inst=$.datepicker._getInst(event.target),tp_inst=$.datepicker._get(inst,"timepicker");
if(tp_inst){if($.datepicker._get(inst,"constrainInput")){var ampm=tp_inst._defaults.ampm,datetimeChars=tp_inst._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,ampm?"APM":"").replace(/T/g,ampm?"AP":"").replace(/tt/g,ampm?"apm":"").replace(/t/g,ampm?"ap":"")+" "+tp_inst._defaults.separator+$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat")),chr=String.fromCharCode(event.charCode===undefined?event.keyCode:event.charCode);
return event.ctrlKey||(chr<" "||!datetimeChars||datetimeChars.indexOf(chr)>-1)
}}return $.datepicker._base_doKeyPress(event)
};
$.datepicker._base_doKeyUp=$.datepicker._doKeyUp;
$.datepicker._doKeyUp=function(event){var inst=$.datepicker._getInst(event.target),tp_inst=$.datepicker._get(inst,"timepicker");
if(tp_inst){if(tp_inst._defaults.timeOnly&&(inst.input.val()!=inst.lastVal)){try{$.datepicker._updateDatepicker(inst)
}catch(err){$.datepicker.log(err)
}}}return $.datepicker._base_doKeyUp(event)
};
$.datepicker._base_gotoToday=$.datepicker._gotoToday;
$.datepicker._gotoToday=function(id){this._base_gotoToday(id);
this._setTime(this._getInst($(id)[0]),new Date())
};
$.datepicker._disableTimepickerDatepicker=function(target,date,withDate){var inst=this._getInst(target),tp_inst=this._get(inst,"timepicker");
if(tp_inst){tp_inst._defaults.showTimepicker=false;
tp_inst._onTimeChange();
tp_inst._updateDateTime(inst)
}};
$.datepicker._enableTimepickerDatepicker=function(target,date,withDate){var inst=this._getInst(target),tp_inst=this._get(inst,"timepicker");
if(tp_inst){tp_inst._defaults.showTimepicker=true;
tp_inst._onTimeChange();
tp_inst._updateDateTime(inst)
}};
$.datepicker._setTime=function(inst,date){var tp_inst=this._get(inst,"timepicker");
if(tp_inst){var defaults=tp_inst._defaults,hour=date?date.getHours():defaults.hour,minute=date?date.getMinutes():defaults.minute,second=date?date.getSeconds():defaults.second;
if((hour<defaults.hourMin||hour>defaults.hourMax)||(minute<defaults.minuteMin||minute>defaults.minuteMax)||(second<defaults.secondMin||second>defaults.secondMax)){hour=defaults.hourMin;
minute=defaults.minuteMin;
second=defaults.secondMin
}if(tp_inst.hour_slider){tp_inst.hour_slider.slider("value",hour)
}else{tp_inst.hour=hour
}if(tp_inst.minute_slider){tp_inst.minute_slider.slider("value",minute)
}else{tp_inst.minute=minute
}if(tp_inst.second_slider){tp_inst.second_slider.slider("value",second)
}else{tp_inst.second=second
}tp_inst._onTimeChange();
tp_inst._updateDateTime(inst)
}};
$.datepicker._setTimeDatepicker=function(target,date,withDate){var inst=this._getInst(target),tp_inst=this._get(inst,"timepicker");
if(tp_inst){this._setDateFromField(inst);
var tp_date;
if(date){if(typeof date=="string"){tp_inst._parseTime(date,withDate);
tp_date=new Date();
tp_date.setHours(tp_inst.hour,tp_inst.minute,tp_inst.second)
}else{tp_date=new Date(date.getTime())
}if(tp_date.toString()=="Invalid Date"){tp_date=undefined
}}this._setTime(inst,tp_date)
}};
$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker;
$.datepicker._setDateDatepicker=function(target,date){var inst=this._getInst(target),tp_date=(date instanceof Date)?new Date(date.getTime()):date;
this._updateDatepicker(inst);
this._base_setDateDatepicker.apply(this,arguments);
this._setTimeDatepicker(target,tp_date,true)
};
$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker;
$.datepicker._getDateDatepicker=function(target,noDefault){var inst=this._getInst(target),tp_inst=this._get(inst,"timepicker");
if(tp_inst){this._setDateFromField(inst,noDefault);
var date=this._getDate(inst);
if(date&&tp_inst._parseTime($(target).val(),true)){date.setHours(tp_inst.hour,tp_inst.minute,tp_inst.second)
}return date
}return this._base_getDateDatepicker(target,noDefault)
};
function extendRemove(target,props){$.extend(target,props);
for(var name in props){if(props[name]===null||props[name]===undefined){target[name]=props[name]
}}return target
}$.timepicker=new Timepicker();
$.timepicker.version="0.9.3"
})(jQuery);
(function(e){var b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var c=["January","February","March","April","May","June","July","August","September","October","November","December"];
var a=[];
a.Jan="01";
a.Feb="02";
a.Mar="03";
a.Apr="04";
a.May="05";
a.Jun="06";
a.Jul="07";
a.Aug="08";
a.Sep="09";
a.Oct="10";
a.Nov="11";
a.Dec="12";
e.format=(function(){function i(k){return b[parseInt(k,10)]||k
}function j(l){var k=parseInt(l,10)-1;
return d[k]||l
}function h(l){var k=parseInt(l,10)-1;
return c[k]||l
}var f=function(k){return a[k]||k
};
var g=function(n){var o=n;
var l="";
if(o.indexOf(".")!==-1){var m=o.split(".");
o=m[0];
l=m[1]
}var k=o.split(":");
if(k.length===3){hour=k[0];
minute=k[1];
second=k[2];
return{time:o,hour:hour,minute:minute,second:second,millis:l}
}else{return{time:"",hour:"",minute:"",second:"",millis:""}
}};
return{date:function(y,x){try{var l=null;
var u=null;
var s=null;
var A=null;
var m=null;
var k=null;
if(typeof y=="number"){return this.date(new Date(y),x)
}else{if(typeof y.getFullYear=="function"){u=y.getFullYear();
s=y.getMonth()+1;
A=y.getDate();
m=y.getDay();
k=g(y.toTimeString())
}else{if(y.search(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/)!=-1){var z=y.split(/[T\+-]/);
u=z[0];
s=z[1];
A=z[2];
k=g(z[3].split(".")[0]);
l=new Date(u,s-1,A);
m=l.getDay()
}else{var z=y.split(" ");
switch(z.length){case 6:u=z[5];
s=f(z[1]);
A=z[2];
k=g(z[3]);
l=new Date(u,s-1,A);
m=l.getDay();
break;
case 2:var w=z[0].split("-");
u=w[0];
s=w[1];
A=w[2];
k=g(z[1]);
l=new Date(u,s-1,A);
m=l.getDay();
break;
case 7:case 9:case 10:u=z[3];
s=f(z[1]);
A=z[2];
k=g(z[4]);
l=new Date(u,s-1,A);
m=l.getDay();
break;
case 1:var w=z[0].split("");
u=w[0]+w[1]+w[2]+w[3];
s=w[5]+w[6];
A=w[8]+w[9];
k=g(w[13]+w[14]+w[15]+w[16]+w[17]+w[18]+w[19]+w[20]);
l=new Date(u,s-1,A);
m=l.getDay();
break;
default:return y
}}}}var t="";
var p="";
var q="";
for(var o=0;
o<x.length;
o++){var v=x.charAt(o);
t+=v;
q="";
switch(t){case"ddd":p+=i(m);
t="";
break;
case"dd":if(x.charAt(o+1)=="d"){break
}if(String(A).length===1){A="0"+A
}p+=A;
t="";
break;
case"d":if(x.charAt(o+1)=="d"){break
}p+=parseInt(A,10);
t="";
break;
case"D":if(A==1||A==21||A==31){A=A+"st"
}else{if(A==2||A==22){A=A+"nd"
}else{if(A==3||A==23){A=A+"rd"
}else{A=A+"th"
}}}p+=A;
t="";
break;
case"MMMM":p+=h(s);
t="";
break;
case"MMM":if(x.charAt(o+1)==="M"){break
}p+=j(s);
t="";
break;
case"MM":if(x.charAt(o+1)=="M"){break
}if(String(s).length===1){s="0"+s
}p+=s;
t="";
break;
case"M":if(x.charAt(o+1)=="M"){break
}p+=parseInt(s,10);
t="";
break;
case"y":case"yyy":if(x.charAt(o+1)=="y"){break
}p+=t;
t="";
break;
case"yy":if(x.charAt(o+1)=="y"&&x.charAt(o+2)=="y"){break
}p+=String(u).slice(-2);
t="";
break;
case"yyyy":p+=u;
t="";
break;
case"H":if(x.charAt(o+1)=="H"){break
}p+=t;
t="";
break;
case"HH":p+=k.hour;
t="";
break;
case"H":if(x.charAt(o+1)=="H"){break
}p+=parseInt(k.hour,10);
t="";
break;
case"hh":var n=(k.hour==0?12:k.hour<13?k.hour:k.hour-12);
n=String(n).length==1?"0"+n:n;
p+=n;
t="";
break;
case"h":if(x.charAt(o+1)=="h"){break
}var n=(k.hour==0?12:k.hour<13?k.hour:k.hour-12);
p+=parseInt(n,10);
t="";
break;
case"m":if(x.charAt(o+1)=="m"){break
}p+=t;
t="";
break;
case"mm":p+=k.minute;
t="";
break;
case"s":if(x.charAt(o+1)=="s"){break
}p+=t;
t="";
break;
case"ss":p+=k.second.substring(0,2);
t="";
break;
case"S":case"SS":if(x.charAt(o+1)=="S"){break
}p+=t;
t="";
break;
case"SSS":p+=k.millis.substring(0,3);
t="";
break;
case"a":p+=k.hour>=12?"PM":"AM";
t="";
break;
case"p":p+=k.hour>=12?"p.m.":"a.m.";
t="";
break;
default:p+=v;
t="";
break
}}p+=q;
return p
}catch(r){console.log(r);
return y
}}}
}())
}(jQuery));
jQuery.format.date.defaultShortDateFormat="dd/MM/yyyy";
jQuery.format.date.defaultLongDateFormat="dd/MM/yyyy HH:mm:ss";
jQuery(document).ready(function(){jQuery(".shortDateFormat").each(function(a,b){if(jQuery(b).is(":input")){jQuery(b).val(jQuery.format.date(jQuery(b).val(),jQuery.format.date.defaultShortDateFormat))
}else{jQuery(b).text(jQuery.format.date(jQuery(b).text(),jQuery.format.date.defaultShortDateFormat))
}});
jQuery(".longDateFormat").each(function(a,b){if(jQuery(b).is(":input")){jQuery(b).val(jQuery.format.date(jQuery(b).val(),jQuery.format.date.defaultLongDateFormat))
}else{jQuery(b).text(jQuery.format.date(jQuery(b).text(),jQuery.format.date.defaultLongDateFormat))
}})
});
(function(T,S,R){var Q=T.document,P=T.Modernizr,O=function(b){return b.charAt(0).toUpperCase()+b.slice(1)
},N="Moz Webkit O Ms".split(" "),M=function(f){var d=Q.documentElement.style,j;
if(typeof d[f]=="string"){return f
}f=O(f);
for(var i=0,g=N.length;
i<g;
i++){j=N[i]+f;
if(typeof d[j]=="string"){return j
}}},L=M("transform"),K=M("transitionProperty"),J={csstransforms:function(){return !!L
},csstransforms3d:function(){var b=!!M("perspective");
if(b){var j=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),i="@media ("+j.join("transform-3d),(")+"modernizr)",h=S("<style>"+i+"{#modernizr{height:3px}}</style>").appendTo("head"),g=S('<div id="modernizr" />').appendTo("html");
b=g.height()===3,g.remove(),h.remove()
}return b
},csstransitions:function(){return !!K
}},I;
if(P){for(I in J){P.hasOwnProperty(I)||P.addTest(I,J[I])
}}else{P=T.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};
var H=" ",G;
for(I in J){G=J[I](),P[I]=G,H+=" "+(G?"":"no-")+I
}S("html").addClass(H)
}if(P.csstransforms){var F=P.csstransforms3d?{translate:function(b){return"translate3d("+b[0]+"px, "+b[1]+"px, 0) "
},scale:function(b){return"scale3d("+b+", "+b+", 1) "
}}:{translate:function(b){return"translate("+b[0]+"px, "+b[1]+"px) "
},scale:function(b){return"scale("+b+") "
}},E=function(v,u,t){var s=S.data(v,"isoTransform")||{},r={},q,p={},o;
r[u]=t,S.extend(s,r);
for(q in s){o=s[q],p[q]=F[q](o)
}var n=p.translate||"",i=p.scale||"",b=n+i;
S.data(v,"isoTransform",s),v.style[L]=b
};
S.cssNumber.scale=!0,S.cssHooks.scale={set:function(d,c){E(d,"scale",c)
},get:function(b,f){var e=S.data(b,"isoTransform");
return e&&e.scale?e.scale:1
}},S.fx.step.scale=function(b){S.cssHooks.scale.set(b.elem,b.now+b.unit)
},S.cssNumber.translate=!0,S.cssHooks.translate={set:function(d,c){E(d,"translate",c)
},get:function(b,f){var e=S.data(b,"isoTransform");
return e&&e.translate?e.translate:[0,0]
}}
}var D,C;
P.csstransitions&&(D={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[K],C=M("transitionDuration"));
var B=S.event,A;
B.special.smartresize={setup:function(){S(this).bind("resize",B.special.smartresize.handler)
},teardown:function(){S(this).unbind("resize",B.special.smartresize.handler)
},handler:function(f,e){var h=this,g=arguments;
f.type="smartresize",A&&clearTimeout(A),A=setTimeout(function(){jQuery.event.handle.apply(h,g)
},e==="execAsap"?0:100)
}},S.fn.smartresize=function(b){return b?this.bind("smartresize",b):this.trigger("smartresize",["execAsap"])
},S.Isotope=function(b,f,e){this.element=S(f),this._create(b),this._init(e)
};
var z=["width","height"],y=S(T);
S.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:0.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},S.Isotope.prototype={_create:function(b){this.options=S.extend({},S.Isotope.settings,b),this.styleQueue=[],this.elemCount=0;
var p=this.element[0].style;
this.originalStyle={};
var o=z.slice(0);
for(var n in this.options.containerStyle){o.push(n)
}for(var m=0,l=o.length;
m<l;
m++){n=o[m],this.originalStyle[n]=p[n]||""
}this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();
var k={"original-order":function(d,c){return c.elemCount++,c.elemCount
},random:function(){return Math.random()
}};
this.options.getSortData=S.extend(this.options.getSortData,k),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};
var j=this;
setTimeout(function(){j.element.addClass(j.options.containerClass)
},0),this.options.resizable&&y.bind("smartresize.isotope",function(){j.resize()
}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return !1
})
},_getAtoms:function(f){var e=this.options.itemSelector,h=e?f.filter(e).add(f.find(e)):f,g={position:"absolute"};
return this.usingTransforms&&(g.left=0,g.top=0),h.css(g).addClass(this.options.itemClass),this.updateSortData(h,!0),h
},_init:function(b){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(b)
},option:function(b){if(S.isPlainObject(b)){this.options=S.extend(!0,this.options,b);
var f;
for(var e in b){f="_update"+O(e),this[f]&&this[f]()
}}},_updateAnimationEngine:function(){var d=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),c;
switch(d){case"css":case"none":c=!1;
break;
case"jquery":c=!0;
break;
default:c=!P.csstransitions
}this.isUsingJQueryAnimation=c,this._updateUsingTransforms()
},_updateTransformsEnabled:function(){this._updateUsingTransforms()
},_updateUsingTransforms:function(){var b=this.usingTransforms=this.options.transformsEnabled&&P.csstransforms&&P.csstransitions&&!this.isUsingJQueryAnimation;
b||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=b?this._translate:this._positionAbs
},_filter:function(i){var h=this.options.filter===""?"*":this.options.filter;
if(!h){return i
}var n=this.options.hiddenClass,m="."+n,l=i.filter(m),k=l;
if(h!=="*"){k=l.filter(h);
var j=i.not(m).not(h).addClass(n);
this.styleQueue.push({$el:j,style:this.options.hiddenStyle})
}return this.styleQueue.push({$el:k,style:this.options.visibleStyle}),k.removeClass(n),i.filter(h)
},updateSortData:function(b,l){var k=this,j=this.options.getSortData,i,h;
b.each(function(){i=S(this),h={};
for(var c in j){!l&&c==="original-order"?h[c]=S.data(this,"isotope-sort-data")[c]:h[c]=j[c](i,k)
}S.data(this,"isotope-sort-data",h)
})
},_sort:function(){var f=this.options.sortBy,e=this._getSorter,h=this.options.sortAscending?1:-1,g=function(i,c){var b=e(i,f),a=e(c,f);
return b===a&&f!=="original-order"&&(b=e(i,"original-order"),a=e(c,"original-order")),(b>a?1:b<a?-1:0)*h
};
this.$filteredAtoms.sort(g)
},_getSorter:function(b,d){return S.data(b,"isotope-sort-data")[d]
},_translate:function(d,c){return{translate:[d,c]}
},_positionAbs:function(d,c){return{left:d,top:c}
},_pushPosition:function(f,e,h){e=Math.round(e+this.offset.left),h=Math.round(h+this.offset.top);
var g=this.getPositionStyles(e,h);
this.styleQueue.push({$el:f,style:g}),this.options.itemPositionDataEnabled&&f.data("isotope-item-position",{x:e,y:h})
},layout:function(f,e){var h=this.options.layoutMode;
this["_"+h+"Layout"](f);
if(this.options.resizesContainer){var g=this["_"+h+"GetContainerSize"]();
this.styleQueue.push({$el:this.element,style:g})
}this._processStyleQueue(f,e),this.isLaidOut=!0
},_processStyleQueue:function(ab,aa){var Z=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",Y=this.options.animationOptions,X=this.options.onLayout,W,V,U,w;
V=function(d,c){c.$el[Z](c.style,Y)
};
if(this._isInserting&&this.isUsingJQueryAnimation){V=function(d,c){W=c.$el.hasClass("no-transition")?"css":Z,c.$el[W](c.style,Y)
}
}else{if(aa||X||Y.complete){var v=!1,r=[aa,X,Y.complete],q=this;
U=!0,w=function(){if(v){return
}var a;
for(var g=0,f=r.length;
g<f;
g++){a=r[g],typeof a=="function"&&a.call(q.element,ab,q)
}v=!0
};
if(this.isUsingJQueryAnimation&&Z==="animate"){Y.complete=w,U=!1
}else{if(P.csstransitions){var e=0,b=this.styleQueue[0],ae=b&&b.$el,ad;
while(!ae||!ae.length){ad=this.styleQueue[e++];
if(!ad){return
}ae=ad.$el
}var ac=parseFloat(getComputedStyle(ae[0])[C]);
ac>0&&(V=function(d,c){c.$el[Z](c.style,Y).one(D,w)
},U=!1)
}}}}S.each(this.styleQueue,V),U&&w(),this.styleQueue=[]
},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()
},reLayout:function(b){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,b)
},addItems:function(e,d){var f=this._getAtoms(e);
this.$allAtoms=this.$allAtoms.add(f),d&&d(f)
},insert:function(e,d){this.element.append(e);
var f=this;
this.addItems(e,function(b){var c=f._filter(b);
f._addHideAppended(c),f._sort(),f.reLayout(),f._revealAppended(c,d)
})
},appended:function(e,d){var f=this;
this.addItems(e,function(b){f._addHideAppended(b),f.layout(b),f._revealAppended(b,d)
})
},_addHideAppended:function(b){this.$filteredAtoms=this.$filteredAtoms.add(b),b.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:b,style:this.options.hiddenStyle})
},_revealAppended:function(e,d){var f=this;
setTimeout(function(){e.removeClass("no-transition"),f.styleQueue.push({$el:e,style:f.options.visibleStyle}),f._isInserting=!1,f._processStyleQueue(e,d)
},10)
},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())
},remove:function(f,e){this.$allAtoms=this.$allAtoms.not(f),this.$filteredAtoms=this.$filteredAtoms.not(f);
var h=this,g=function(){f.remove(),e&&e.call(h.element)
};
f.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:f,style:this.options.hiddenStyle}),this._sort(),this.reLayout(g)):g()
},shuffle:function(b){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(b)
},destroy:function(){var f=this.usingTransforms,e=this.options;
this.$allAtoms.removeClass(e.hiddenClass+" "+e.itemClass).each(function(){var a=this.style;
a.position="",a.top="",a.left="",a.opacity="",f&&(a[L]="")
});
var h=this.element[0].style;
for(var g in this.originalStyle){h[g]=this.originalStyle[g]
}this.element.unbind(".isotope").undelegate("."+e.hiddenClass,"click").removeClass(e.containerClass).removeData("isotope"),y.unbind(".isotope")
},_getSegments:function(j){var f=this.options.layoutMode,p=j?"rowHeight":"columnWidth",o=j?"height":"width",n=j?"rows":"cols",m=this.element[o](),l,k=this.options[f]&&this.options[f][p]||this.$filteredAtoms["outer"+O(o)](!0)||m;
l=Math.floor(m/k),l=Math.max(l,1),this[f][n]=l,this[f][p]=k
},_checkIfSegmentsChanged:function(f){var e=this.options.layoutMode,h=f?"rows":"cols",g=this[e][h];
return this._getSegments(f),this[e][h]!==g
},_masonryReset:function(){this.masonry={},this._getSegments();
var b=this.masonry.cols;
this.masonry.colYs=[];
while(b--){this.masonry.colYs.push(0)
}},_masonryLayout:function(b){var f=this,e=f.masonry;
b.each(function(){var c=S(this),m=Math.ceil(c.outerWidth(!0)/e.columnWidth);
m=Math.min(m,e.cols);
if(m===1){f._masonryPlaceBrick(c,e.colYs)
}else{var l=e.cols+1-m,k=[],j,d;
for(d=0;
d<l;
d++){j=e.colYs.slice(d,d+m),k[d]=Math.max.apply(Math,j)
}f._masonryPlaceBrick(c,k)
}})
},_masonryPlaceBrick:function(t,s){var r=Math.min.apply(Math,s),q=0;
for(var p=0,o=s.length;
p<o;
p++){if(s[p]===r){q=p;
break
}}var n=this.masonry.columnWidth*q,m=r;
this._pushPosition(t,n,m);
var l=r+t.outerHeight(!0),k=this.masonry.cols+1-o;
for(p=0;
p<k;
p++){this.masonry.colYs[q+p]=l
}},_masonryGetContainerSize:function(){var b=Math.max.apply(Math,this.masonry.colYs);
return{height:b}
},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()
},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}
},_fitRowsLayout:function(b){var h=this,g=this.element.width(),f=this.fitRows;
b.each(function(){var c=S(this),e=c.outerWidth(!0),d=c.outerHeight(!0);
f.x!==0&&e+f.x>g&&(f.x=0,f.y=f.height),h._pushPosition(c,f.x,f.y),f.height=Math.max(f.y+d,f.height),f.x+=e
})
},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}
},_fitRowsResizeChanged:function(){return !0
},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)
},_cellsByRowLayout:function(b){var f=this,e=this.cellsByRow;
b.each(function(){var c=S(this),k=e.index%e.cols,j=Math.floor(e.index/e.cols),i=(k+0.5)*e.columnWidth-c.outerWidth(!0)/2,d=(j+0.5)*e.rowHeight-c.outerHeight(!0)/2;
f._pushPosition(c,i,d),e.index++
})
},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}
},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()
},_straightDownReset:function(){this.straightDown={y:0}
},_straightDownLayout:function(b){var d=this;
b.each(function(c){var e=S(this);
d._pushPosition(e,0,d.straightDown.y),d.straightDown.y+=e.outerHeight(!0)
})
},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}
},_straightDownResizeChanged:function(){return !0
},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);
var b=this.masonryHorizontal.rows;
this.masonryHorizontal.rowXs=[];
while(b--){this.masonryHorizontal.rowXs.push(0)
}},_masonryHorizontalLayout:function(b){var f=this,e=f.masonryHorizontal;
b.each(function(){var c=S(this),m=Math.ceil(c.outerHeight(!0)/e.rowHeight);
m=Math.min(m,e.rows);
if(m===1){f._masonryHorizontalPlaceBrick(c,e.rowXs)
}else{var l=e.rows+1-m,k=[],j,d;
for(d=0;
d<l;
d++){j=e.rowXs.slice(d,d+m),k[d]=Math.max.apply(Math,j)
}f._masonryHorizontalPlaceBrick(c,k)
}})
},_masonryHorizontalPlaceBrick:function(t,s){var r=Math.min.apply(Math,s),q=0;
for(var p=0,o=s.length;
p<o;
p++){if(s[p]===r){q=p;
break
}}var n=r,m=this.masonryHorizontal.rowHeight*q;
this._pushPosition(t,n,m);
var l=r+t.outerWidth(!0),k=this.masonryHorizontal.rows+1-o;
for(p=0;
p<k;
p++){this.masonryHorizontal.rowXs[q+p]=l
}},_masonryHorizontalGetContainerSize:function(){var b=Math.max.apply(Math,this.masonryHorizontal.rowXs);
return{width:b}
},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)
},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}
},_fitColumnsLayout:function(b){var h=this,g=this.element.height(),f=this.fitColumns;
b.each(function(){var c=S(this),e=c.outerWidth(!0),d=c.outerHeight(!0);
f.y!==0&&d+f.y>g&&(f.x=f.width,f.y=0),h._pushPosition(c,f.x,f.y),f.width=Math.max(f.x+e,f.width),f.y+=d
})
},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}
},_fitColumnsResizeChanged:function(){return !0
},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)
},_cellsByColumnLayout:function(b){var f=this,e=this.cellsByColumn;
b.each(function(){var c=S(this),k=Math.floor(e.index/e.rows),j=e.index%e.rows,i=(k+0.5)*e.columnWidth-c.outerWidth(!0)/2,d=(j+0.5)*e.rowHeight-c.outerHeight(!0)/2;
f._pushPosition(c,i,d),e.index++
})
},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}
},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)
},_straightAcrossReset:function(){this.straightAcross={x:0}
},_straightAcrossLayout:function(b){var d=this;
b.each(function(c){var e=S(this);
d._pushPosition(e,d.straightAcross.x,0),d.straightAcross.x+=e.outerWidth(!0)
})
},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}
},_straightAcrossResizeChanged:function(){return !0
}},S.fn.imagesLoaded=function(b){function k(){b.call(p,o)
}function j(d){var e=d.target;
e.src!==m&&S.inArray(e,l)===-1&&(l.push(e),--n<=0&&(setTimeout(k),o.unbind(".imagesLoaded",j)))
}var p=this,o=p.find("img").add(p.filter("img")),n=o.length,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",l=[];
return n||k(),o.bind("load.imagesLoaded error.imagesLoaded",j).each(function(){var c=this.src;
this.src=m,this.src=c
}),p
};
var x=function(a){T.console&&T.console.error(a)
};
S.fn.isotope=function(b,f){if(typeof b=="string"){var e=Array.prototype.slice.call(arguments,1);
this.each(function(){var a=S.data(this,"isotope");
if(!a){x("cannot call methods on isotope prior to initialization; attempted to call method '"+b+"'");
return
}if(!S.isFunction(a[b])||b.charAt(0)==="_"){x("no such method '"+b+"' for isotope instance");
return
}a[b].apply(a,e)
})
}else{this.each(function(){var a=S.data(this,"isotope");
a?(a.option(b),a._init(f)):S.data(this,"isotope",new S.Isotope(b,this,f))
})
}return this
}
})(window,jQuery);
(function(a){a.fn.thumbnailScroller=function(b){var c={scrollerType:"hoverPrecise",scrollerOrientation:"horizontal",scrollEasing:"easeOutCirc",scrollEasingAmount:800,acceleration:2,scrollSpeed:600,noScrollCenterSpace:0,autoScrolling:0,autoScrollingSpeed:8000,autoScrollingEasing:"easeInOutQuad",autoScrollingDelay:2500};
var b=a.extend(c,b);
return this.each(function(){var i=a(this);
var n=i.children(".jTscrollerContainer");
var d=i.children(".jTscrollerContainer").children(".jTscroller");
var f=i.children(".jTscrollerNextButton");
var l=i.children(".jTscrollerPrevButton");
if(b.scrollerOrientation=="horizontal"){n.css("width",999999);
var e=d.outerWidth(true);
n.css("width",e)
}else{var e=d.outerWidth(true)
}var s=d.outerHeight(true);
if(e>i.width()||s>i.height()){var h;
var g;
var t;
if(b.scrollerType=="hoverAccelerate"){var r;
var q=8;
i.hover(function(){i.mousemove(function(v){h=findPos(this);
g=(v.pageX-h[1]);
t=(v.pageY-h[0])
});
clearInterval(r);
r=setInterval(m,q)
},function(){clearInterval(r);
d.stop()
});
l.add(f).hide()
}else{if(b.scrollerType=="clickButtons"){p()
}else{h=findPos(this);
i.mousemove(function(z){g=(z.pageX-h[1]);
t=(z.pageY-h[0]);
var y=g/i.width();
if(y>1){y=1
}var x=t/i.height();
if(x>1){x=1
}var w=Math.round(-((e-i.width())*(y)));
var v=Math.round(-((s-i.height())*(x)));
d.stop(true,false).animate({left:w,top:v},b.scrollEasingAmount,b.scrollEasing)
});
l.add(f).hide()
}}if(b.autoScrolling>0){o()
}}else{l.add(f).hide()
}var j;
var k;
function m(){if((g<i.width()/2)&&(d.position().left>=0)){d.stop(true,true).css("left",0)
}else{if((g>i.width()/2)&&(d.position().left<=-(e-i.width()))){d.stop(true,true).css("left",-(e-i.width()))
}else{if((g<=(i.width()/2)-b.noScrollCenterSpace)||(g>=(i.width()/2)+b.noScrollCenterSpace)){j=Math.round(Math.cos((g/i.width())*Math.PI)*(q+b.acceleration));
d.stop(true,true).animate({left:"+="+j},q,"linear")
}else{d.stop(true,true)
}}}}var u=0;
function o(){d.delay(b.autoScrollingDelay).animate({left:-(e-i.width()),top:-(s-i.height())},b.autoScrollingSpeed,b.autoScrollingEasing,function(){d.animate({left:0,top:0},b.autoScrollingSpeed,b.autoScrollingEasing,function(){u++;
if(b.autoScrolling>1&&b.autoScrolling!=u){o()
}})
})
}function p(){l.hide();
f.show();
f.click(function(x){x.preventDefault();
var z=d.position().left;
var w=e+(z-i.width());
var y=d.position().top;
var v=s+(y-i.height());
l.stop().show("fast");
if(b.scrollerOrientation=="horizontal"){if(w>=i.width()){d.stop().animate({left:"-="+i.width()},b.scrollSpeed,b.scrollEasing,function(){if(w==i.width()){f.stop().hide("fast")
}})
}else{f.stop().hide("fast");
d.stop().animate({left:i.width()-e},b.scrollSpeed,b.scrollEasing)
}}else{if(v>=i.height()){d.stop().animate({top:"-="+i.height()},b.scrollSpeed,b.scrollEasing,function(){if(v==i.height()){f.stop().hide("fast")
}})
}else{f.stop().hide("fast");
d.stop().animate({top:i.height()-s},b.scrollSpeed,b.scrollEasing)
}}});
l.click(function(x){x.preventDefault();
var z=d.position().left;
var w=e+(z-i.width());
var y=d.position().top;
var v=s+(y-i.height());
f.stop().show("fast");
if(b.scrollerOrientation=="horizontal"){if(z+i.width()<=0){d.stop().animate({left:"+="+i.width()},b.scrollSpeed,b.scrollEasing,function(){if(z+i.width()==0){l.stop().hide("fast")
}})
}else{l.stop().hide("fast");
d.stop().animate({left:0},b.scrollSpeed,b.scrollEasing)
}}else{if(y+i.height()<=0){d.stop().animate({top:"+="+i.height()},b.scrollSpeed,b.scrollEasing,function(){if(y+i.height()==0){l.stop().hide("fast")
}})
}else{l.stop().hide("fast");
d.stop().animate({top:0},b.scrollSpeed,b.scrollEasing)
}}})
}})
}
})(jQuery);
function findPos(a){var b=curtop=0;
if(a.offsetParent){b=a.offsetLeft;
curtop=a.offsetTop;
while(a=a.offsetParent){b+=a.offsetLeft;
curtop+=a.offsetTop
}}return[curtop,b]
};
jQuery(function(a){a.datepicker.regional.hu={closeText:"bezárás",prevText:"&laquo;&nbsp;vissza",nextText:"előre&nbsp;&raquo;",currentText:"ma",monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],monthNamesShort:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],dayNames:["Vasárnap","Hétfö","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesShort:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"Hé",dateFormat:"yy.mm.dd",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.hu)
});
var Photos=(function(){var a=function(d){if(d.files&&d.files[0]){var c=new FileReader();
c.onload=function(f){$("#img_preview").attr("src",f.target.result).width(200).height(150).show()
};
c.readAsDataURL(d.files[0])
}};
var b=function(c){$.each(c,function(d,e){if(!e.inited){e.createdate=$.format.date(e.createdate,"yyyy.MM.dd HH:mm");
e.inited=true
}})
};
return{initMainScoller:function(){$("div.jTscroller").on("click","a",function(){var c=$(this);
ImagePreview.showimage(c.data("url"),c.data("date"),c.data("filename"))
});
$(window).on("load",function(){$("#tS1").thumbnailScroller({scrollerType:"hoverAccelerate",scrollerOrientation:"horizontal",scrollEasing:"easeOutCirc",scrollEasingAmount:600,acceleration:1,noScrollCenterSpace:0})
})
},newPhoto:function(c){c.render("/templates/newphoto.hb").swap(c.$element()).then(function(){c.app.trigger("initCalendar")
}).then(function(){$("#fileInput").on("change",function(){a(this)
})
}).then(function(){$("#inputTheDay").datetimepicker()
})
},addPhoto:function(c){var d=new FormData();
d.append("file",$("#fileInput")[0].files[0]);
d.append("keyword",$("#inputKeyword").val());
d.append("createdate",$("#inputTheDay").val());
d.append("description",$("#description").val());
if($("#halveSize").is(":checked")){d.append("halveSize","true")
}$.ajax({type:"POST",url:"/photos",contentType:false,processData:false,data:d,success:function(e){if(e=="success"){c.app.clearTemplateCache();
c.redirect("#/")
}else{c.app.trigger("uploadError")
}}})
},getAll:function(c){c.load("/photos?cmd=photosmap",c.loadOptions).then(function(d){$.each(d,function(f,e){b(e)
});
c.render("/templates/photos.hb",{items:d}).swap(c.$element()).then(function(){$("#fotorama_container .fotorama").fotorama()
})
})
}}
})();
var Videos=(function(){return{newVideo:function(a){a.render("/templates/newvideo.hb").swap(a.$element()).then(function(){a.app.trigger("initCalendar")
}).then(function(){$("#inputTheDay").val($("#datepicker1").val());
$("#inputStartDate").datetimepicker();
$("#inputDuration").timepicker({})
})
},addVideo:function(a){$.ajax({type:"POST",data:$("form.new").serialize(),url:"/json/videos/form",success:function(d,c,b){if(d.videoId==null){a.app.trigger("uploadError")
}else{a.app.clearTemplateCache();
a.redirect("#/")
}}})
},getAll:function(a){a.load("/json/videos",a.loadOptions).then(function(b){$.each(b,function(c,d){if(!d.inited){d.createDate=$.format.date(d.createDate,"yyyy.MM.dd");
d.inited=true
}});
a.render("/templates/videos.hb",{items:b}).swap(a.$element()).then(function(){$(".fotorama").fotorama()
})
})
}}
})();
var Counts=(function(){return{getCounts:function(){$.ajax({type:"GET",url:"/json/counts",success:function(a){$("#eventCount").html(a.eventCount);
$("#photoCount").html(a.photoCount);
$("#videoCount").html(a.videoCount)
}})
}}
})();
var ImagePreview=(function(){var a;
return{init:function(b){a=b;
a.on("click","img.baba",function(){ImagePreview.click($(this))
});
a.on("click","img.zoom",function(){ImagePreview.zoom($(this))
});
a.on("click","img.cancel",function(){ImagePreview.cancel($(this))
})
},click:function(d){var c=parseInt(d.css("width"),10);
var b=parseInt(d.css("height"),10);
if(d.hasClass("selected")){return
}else{d.attr("width",c*2);
d.attr("height",b*2);
d.attr("src","/photos?cmd=data&filename="+d.data("filename"));
d.siblings("div.buttons").show()
}d.toggleClass("selected");
a.isotope("reLayout")
},zoom:function(c){var b=c.parent().siblings("img.baba");
ImagePreview.showimage("/photos?cmd=data&filename="+b.data("filename"),b.data("createdate"),b.data("filename"))
},cancel:function(c){var d=c.parent().siblings("img.baba");
var e=parseInt(d.css("width"),10);
var b=parseInt(d.css("height"),10);
d.attr("width",e/2);
d.attr("height",b/2);
d.toggleClass("selected");
d.siblings("div.buttons").hide();
a.isotope("reLayout")
},showimage:function(d,c,b){$("#dialog").html('<img src="'+d+'" height="684" width="912" />');
$("#dialog").dialog({modal:true,width:945,height:740,resizable:false,title:c+" - "+b,hide:{effect:"scale",duration:1000},show:{effect:"scale",duration:1000},open:function(e,f){ImagePreview.fixMissingX()
}})
},fixMissingX:function(){$("button.ui-dialog-titlebar-close").html('<span class="ui-icon ui-icon-closethick">close</span>')
}}
})();
var SiteUtils=(function(){return{initScrollToTop:function(){var a=$("a.back-top-link");
$(window).scroll(function(){if($(this).scrollTop()>500){a.fadeIn().css("display","block")
}else{a.fadeOut()
}});
a.on("click",function(){$("body,html").animate({scrollTop:0},800);
return false
})
},addLoading:function(){$("div.control-buttons").addClass("loading")
},removeLoading:function(){$("div.control-buttons").removeClass("loading")
}}
})();
$(function(){Handlebars.registerHelper("ifCond",function(e,d,c){if(e===d){return c.fn(this)
}return c.inverse(this)
});
Handlebars.registerHelper("debug",function(c){console.log("Current Context");
console.log("====================");
console.log(this);
if(c){console.log("Value");
console.log("====================");
console.log(c)
}});
Handlebars.registerHelper("eachObjectKeyReverse",function(g,e){var d="",h=[],j;
for(var c in g){h.push(parseInt(c))
}h.sort().reverse();
for(var f=0;
f<h.length;
f++){if(e.data){j=Handlebars.createFrame(e.data||{});
j.key=h[f]
}d=d+e.fn(g[h[f]],{data:j})
}return d
});
var a={type:"get",dataType:"json"};
var b=$.sammy("#main",function(){this.use("Handlebars","hb");
this.before({},function(e){e.loadOptions=a;
var c=e.app.getLocation();
var d=c.substring(c.indexOf("#"));
$("ul.nav > li").removeClass("active");
$('li > a[href="'+d+'"]').parent().addClass("active");
e.app.trigger("dropDownMenuChanged");
if(e.verb==="post"){SiteUtils.addLoading()
}});
this.get("#/",function(c){Events.getLatests(c)
});
this.get("#/days/:year/:month",function(c){Days.getAll(c,this.params.year,this.params.month)
});
this.get("#/newday",function(c){Days.newDay(c)
});
this.get("#/newevent",function(c){Events.newEvent(c)
});
this.get("#/newvideo",function(c){Videos.newVideo(c)
});
this.get("#/newphoto",function(c){Photos.newPhoto(c)
});
this.get("#/newword",function(c){Events.newWord(c)
});
this.get("#/day/:year/:month/:day",function(c){Days.getDay(c,this.params.year+"/"+this.params.month+"/"+this.params.day)
});
this.get("#/search/:searchTerm",function(c){Events.search(c,this.params.searchTerm)
});
this.get("#/photos",function(c){Photos.getAll(c)
});
this.get("#/videos",function(c){Videos.getAll(c)
});
this.post("#/addday",function(c){Days.addDay(c)
});
this.post("#/addevent",function(c){Events.addEvent(c)
});
this.post("#/addvideo",function(c){Videos.addVideo(c)
});
this.post("#/addphoto",function(c){Photos.addPhoto(c)
});
this.post("#/addword",function(c){Events.addWord(c)
});
this.bind("selectedDayChanged",function(f,d){if(b.getLocation().indexOf("new")<0){var c="/naplo2/#/day/"+d.date.replace(/\./g,"/");
if(c!=b.getLocation()){b.setLocation(c)
}else{setTimeout("Days.updateCalendar()",100)
}}else{$("#inputTheDay").val(d.date)
}});
this.bind("selectedMonthChanged",function(d,c){Days.getDayForAMonth(c.y,c.m)
});
this.bind("newError",function(f,d){SiteUtils.removeLoading();
if(!$("div.alert-error").length){var c=$('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">×</button>Nem sikerült a mentés! Próbáld meg újra!</div>');
$("form.new").before(c)
}});
this.bind("uploadError",function(f,d){SiteUtils.removeLoading();
if(!$("div.alert-error").length){var c=$('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">×</button>Nem sikerült a feltöltés! Próbáld meg újra!</div>');
$("form.new").before(c)
}});
this.bind("dropDownMenuChanged",function(){$(".dropdown.open").removeClass("open");
$("ul.dropdown-menu > li").removeClass("active")
});
this.bind("initCalendar",function(f,d){$.datepicker.setDefaults($.extend({showMonthAfterYear:true},$.datepicker.regional.hu));
$("#datepicker1").datepicker({onSelect:function(g,e){b.trigger("selectedDayChanged",{date:g})
},onChangeMonthYear:function(e,h,g){b.trigger("selectedMonthChanged",{y:e,m:h})
}});
var c=new Date();
b.trigger("selectedMonthChanged",{y:c.getFullYear(),m:c.getMonth()+1})
});
this.bind("removeSelectedFromLatests",function(f,c){var d=$("div#latest-events");
d.find("div.day-box").show();
$.each(c,function(e,g){d.find("div[data-eventid="+g+"]").hide()
})
})
});
b.run("#/");
SiteUtils.initScrollToTop();
Events.initNavbar(b)
});
(function(b,a){(function(c){typeof define=="function"&&define.amd?define(["jquery"],c):b.sammy=a.Sammy=c(b)
})(function(A){var q,g="([^/]+)",x=/:([\w\d]+)/g,G=/\?([^#]*)?$/,k=function(c){return Array.prototype.slice.call(c)
},F=function(c){return Object.prototype.toString.call(c)==="[object Function]"
},D=function(c){return Object.prototype.toString.call(c)==="[object Array]"
},z=function(c){return Object.prototype.toString.call(c)==="[object RegExp]"
},w=function(c){return decodeURIComponent((c||"").replace(/\+/g," "))
},C=encodeURIComponent,y=function(c){return String(c).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
},j=function(c){return function(){return this.route.apply(this,[c].concat(Array.prototype.slice.call(arguments)))
}
},B={},E=!!a.history&&!!history.pushState,t=[];
return q=function(){var d=k(arguments),e,c;
q.apps=q.apps||{};
if(d.length===0||d[0]&&F(d[0])){return q.apply(q,["body"].concat(d))
}if(typeof(c=d.shift())=="string"){return e=q.apps[c]||new q.Application,e.element_selector=c,d.length>0&&A.each(d,function(h,f){e.use(f)
}),e.element_selector!=c&&delete q.apps[c],q.apps[e.element_selector]=e,e
}},q.VERSION="0.7.4",q.addLogger=function(c){t.push(c)
},q.log=function(){var c=k(arguments);
c.unshift("["+Date()+"]"),A.each(t,function(f,d){d.apply(q,c)
})
},typeof a.console!="undefined"?F(a.console.log.apply)?q.addLogger(function(){a.console.log.apply(a.console,arguments)
}):q.addLogger(function(){a.console.log(arguments)
}):typeof console!="undefined"&&q.addLogger(function(){console.log.apply(console,arguments)
}),A.extend(q,{makeArray:k,isFunction:F,isArray:D}),q.Object=function(c){return A.extend(this,c||{})
},A.extend(q.Object.prototype,{escapeHTML:y,h:y,toHash:function(){var c={};
return A.each(this,function(d,f){F(f)||(c[d]=f)
}),c
},toHTML:function(){var c="";
return A.each(this,function(d,f){F(f)||(c+="<strong>"+d+"</strong> "+f+"<br />")
}),c
},keys:function(d){var c=[];
for(var f in this){(!F(this[f])||!d)&&c.push(f)
}return c
},has:function(c){return this[c]&&A.trim(this[c].toString())!==""
},join:function(){var d=k(arguments),c=d.shift();
return d.join(c)
},log:function(){q.log.apply(q,arguments)
},toString:function(c){var d=[];
return A.each(this,function(h,f){(!F(f)||c)&&d.push('"'+h+'": '+f.toString())
}),"Sammy.Object: {"+d.join(",")+"}"
}}),q.targetIsThisWindow=function(d){var c=A(d.target).attr("target");
return !c||c===a.name||c==="_self"?!0:c==="_blank"?!1:c==="top"&&a===a.top?!0:!1
},q.DefaultLocationProxy=function(d,c){this.app=d,this.is_native=!1,this.has_history=E,this._startPolling(c)
},q.DefaultLocationProxy.fullPath=function(d){var c=d.toString().match(/^[^#]*(#.+)$/),f=c?c[1]:"";
return[d.pathname,d.search,f].join("")
},A.extend(q.DefaultLocationProxy.prototype,{bind:function(){var e=this,c=this.app,d=q.DefaultLocationProxy;
A(a).bind("hashchange."+this.app.eventNamespace(),function(f,h){e.is_native===!1&&!h&&(e.is_native=!0,a.clearInterval(d._interval),d._interval=null),c.trigger("location-changed")
}),E&&!c.disable_push_state&&(A(a).bind("popstate."+this.app.eventNamespace(),function(f){c.trigger("location-changed")
}),A(document).delegate("a","click.history-"+this.app.eventNamespace(),function(f){if(f.isDefaultPrevented()||f.metaKey||f.ctrlKey){return
}var h=d.fullPath(this);
if(this.hostname==a.location.hostname&&c.lookupRoute("get",h)&&q.targetIsThisWindow(f)){return f.preventDefault(),e.setLocation(h),!1
}})),d._bindings||(d._bindings=0),d._bindings++
},unbind:function(){A(a).unbind("hashchange."+this.app.eventNamespace()),A(a).unbind("popstate."+this.app.eventNamespace()),A(document).undelegate("a","click.history-"+this.app.eventNamespace()),q.DefaultLocationProxy._bindings--,q.DefaultLocationProxy._bindings<=0&&(a.clearInterval(q.DefaultLocationProxy._interval),q.DefaultLocationProxy._interval=null)
},getLocation:function(){return q.DefaultLocationProxy.fullPath(a.location)
},setLocation:function(c){/^([^#\/]|$)/.test(c)&&(E&&!this.app.disable_push_state?c="/"+c:c="#!/"+c);
if(c!=this.getLocation()){if(!(E&&!this.app.disable_push_state&&/^\//.test(c))){return a.location=c
}history.pushState({path:c},a.title,c),this.app.trigger("location-changed")
}},_startPolling:function(e){var c=this;
if(!q.DefaultLocationProxy._interval){e||(e=10);
var d=function(){var f=c.getLocation();
(typeof q.DefaultLocationProxy._last_location=="undefined"||f!=q.DefaultLocationProxy._last_location)&&a.setTimeout(function(){A(a).trigger("hashchange",[!0])
},0),q.DefaultLocationProxy._last_location=f
};
d(),q.DefaultLocationProxy._interval=a.setInterval(d,e)
}}}),q.Application=function(d){var c=this;
this.routes={},this.listeners=new q.Object({}),this.arounds=[],this.befores=[],this.namespace=(new Date).getTime()+"-"+parseInt(Math.random()*1000,10),this.context_prototype=function(){q.EventContext.apply(this,arguments)
},this.context_prototype.prototype=new q.EventContext,F(d)&&d.apply(this,[this]),this._location_proxy||this.setLocationProxy(new q.DefaultLocationProxy(this,this.run_interval_every)),this.debug&&this.bindToAllEvents(function(f,h){c.log(c.toString(),f.cleaned_type,h||{})
})
},q.Application.prototype=A.extend({},q.Object.prototype,{ROUTE_VERBS:["get","post","put","delete"],APP_EVENTS:["run","unload","lookup-route","run-route","route-found","event-context-before","event-context-after","changed","error","check-form-submission","redirect","location-changed"],_last_route:null,_location_proxy:null,_running:!1,element_selector:"body",debug:!1,raise_errors:!1,run_interval_every:50,disable_push_state:!1,template_engine:null,toString:function(){return"Sammy.Application:"+this.element_selector
},$element:function(c){return c?A(this.element_selector).find(c):A(this.element_selector)
},use:function(){var h=k(arguments),d=h.shift(),f=d||"";
try{h.unshift(this),typeof d=="string"&&(f="Sammy."+d,d=q[d]),d.apply(this,h)
}catch(c){typeof d=="undefined"?this.error("Plugin Error: called use() but plugin ("+f.toString()+") is not defined",c):F(d)?this.error("Plugin Error",c):this.error("Plugin Error: called use() but '"+f.toString()+"' is not a function",c)
}return this
},setLocationProxy:function(d){var c=this._location_proxy;
this._location_proxy=d,this.isRunning()&&(c&&c.unbind(),this._location_proxy.bind())
},log:function(){q.log.apply(q,Array.prototype.concat.apply([this.element_selector],arguments))
},route:function(e,p){var h=this,m=[],d,i,c=Array.prototype.slice.call(arguments,2);
c.length===0&&F(p)&&(p=e,c=[p],e="any"),e=e.toLowerCase();
if(p.constructor==String){x.lastIndex=0;
while((i=x.exec(p))!==null){m.push(i[1])
}p=new RegExp(p.replace(x,g)+"$")
}return A.each(c,function(l,f){typeof f=="string"&&(c[l]=h[f])
}),d=function(l){var f={verb:l,path:p,callback:c,param_names:m};
h.routes[l]=h.routes[l]||[],h.routes[l].push(f)
},e==="any"?A.each(this.ROUTE_VERBS,function(l,f){d(f)
}):d(e),this
},get:j("get"),post:j("post"),put:j("put"),del:j("delete"),any:j("any"),mapRoutes:function(c){var d=this;
return A.each(c,function(h,f){d.route.apply(d,f)
}),this
},eventNamespace:function(){return["sammy-app",this.namespace].join("-")
},bind:function(h,d,l){var f=this;
typeof l=="undefined"&&(l=d);
var c=function(){var o,n,m;
o=arguments[0],m=arguments[1],m&&m.context?(n=m.context,delete m.context):n=new f.context_prototype(f,"bind",o.type,m,o.target),o.cleaned_type=o.type.replace(f.eventNamespace(),""),l.apply(n,[o,m])
};
return this.listeners[h]||(this.listeners[h]=[]),this.listeners[h].push(c),this.isRunning()&&this._listen(h,c),this
},trigger:function(d,c){return this.$element().trigger([d,this.eventNamespace()].join("."),[c]),this
},refresh:function(){return this.last_location=null,this.trigger("location-changed"),this
},before:function(d,c){return F(d)&&(c=d,d={}),this.befores.push([d,c]),this
},after:function(c){return this.bind("event-context-after",c)
},around:function(c){return this.arounds.push(c),this
},onComplete:function(c){return this._onComplete=c,this
},isRunning:function(){return this._running
},helpers:function(c){return A.extend(this.context_prototype.prototype,c),this
},helper:function(d,c){return this.context_prototype.prototype[d]=c,this
},run:function(d){if(this.isRunning()){return !1
}var c=this;
return A.each(this.listeners.toHash(),function(e,f){A.each(f,function(h,i){c._listen(e,i)
})
}),this.trigger("run",{start_url:d}),this._running=!0,this.last_location=null,!/\#(.+)/.test(this.getLocation())&&typeof d!="undefined"&&this.setLocation(d),this._checkLocation(),this._location_proxy.bind(),this.bind("location-changed",function(){c._checkLocation()
}),this.bind("submit",function(e){if(!q.targetIsThisWindow(e)){return !0
}var f=c._checkFormSubmission(A(e.target).closest("form"));
return f===!1?e.preventDefault():!1
}),A(a).bind("unload",function(){c.unload()
}),this.trigger("changed")
},unload:function(){if(!this.isRunning()){return !1
}var c=this;
return this.trigger("unload"),this._location_proxy.unbind(),this.$element().unbind("submit").removeClass(c.eventNamespace()),A.each(this.listeners.toHash(),function(e,d){A.each(d,function(h,f){c._unlisten(e,f)
})
}),this._running=!1,this
},destroy:function(){return this.unload(),delete q.apps[this.element_selector],this
},bindToAllEvents:function(c){var d=this;
return A.each(this.APP_EVENTS,function(h,f){d.bind(f,c)
}),A.each(this.listeners.keys(!0),function(f,e){A.inArray(e,d.APP_EVENTS)==-1&&d.bind(e,c)
}),this
},routablePath:function(c){return c.replace(G,"")
},lookupRoute:function(l,d){var p=this,h=!1,c=0,f,m;
if(typeof this.routes[l]!="undefined"){f=this.routes[l].length;
for(;
c<f;
c++){m=this.routes[l][c];
if(p.routablePath(d).match(m.path)){h=m;
break
}}}return h
},runRoute:function(T,I,e,K){var U=this,H=this.lookupRoute(T,I),S,Q,N,P,L,l,O,R,J;
this.debug&&this.log("runRoute",[T,I].join(" ")),this.trigger("run-route",{verb:T,path:I,params:e}),typeof e=="undefined"&&(e={}),A.extend(e,this._parseQueryString(I));
if(H){this.trigger("route-found",{route:H}),(R=H.path.exec(this.routablePath(I)))!==null&&(R.shift(),A.each(R,function(d,c){H.param_names[d]?e[H.param_names[d]]=w(c):(e.splat||(e.splat=[]),e.splat.push(w(c)))
})),S=new this.context_prototype(this,T,I,e,K),N=this.arounds.slice(0),L=this.befores.slice(0),O=[S],e.splat&&(O=O.concat(e.splat)),Q=function(){var d,c,f;
while(L.length>0){l=L.shift();
if(U.contextMatchesOptions(S,l[0])){d=l[1].apply(S,[S]);
if(d===!1){return !1
}}}return U.last_route=H,S.trigger("event-context-before",{context:S}),typeof H.callback=="function"&&(H.callback=[H.callback]),H.callback&&H.callback.length&&(c=-1,f=function(){c++,H.callback[c]?d=H.callback[c].apply(S,O):U._onComplete&&typeof(U._onComplete==="function")&&U._onComplete(S)
},O.push(f),f()),S.trigger("event-context-after",{context:S}),d
},A.each(N.reverse(),function(d,c){var f=Q;
Q=function(){return c.apply(S,[f])
}
});
try{J=Q()
}catch(M){this.error(["500 Error",T,I].join(" "),M)
}return J
}return this.notFound(T,I)
},contextMatchesOptions:function(L,m,d){var H=m;
if(typeof H=="string"||z(H)){H={path:H}
}typeof d=="undefined"&&(d=!0);
if(A.isEmptyObject(H)){return !0
}if(D(H.path)){var M,f,K,v;
M=[];
for(f=0,v=H.path.length;
f<v;
f+=1){K=A.extend({},H,{path:H.path[f]}),M.push(this.contextMatchesOptions(L,K))
}var J=A.inArray(!0,M)>-1?!0:!1;
return d?J:!J
}if(H.only){return this.contextMatchesOptions(L,H.only,!0)
}if(H.except){return this.contextMatchesOptions(L,H.except,!1)
}var I=!0,e=!0;
return H.path&&(z(H.path)||(H.path=new RegExp(H.path.toString()+"$")),I=H.path.test(L.path)),H.verb&&(typeof H.verb=="string"?e=H.verb===L.verb:e=H.verb.indexOf(L.verb)>-1),d?e&&I:!e||!I
},getLocation:function(){return this._location_proxy.getLocation()
},setLocation:function(c){return this._location_proxy.setLocation(c)
},swap:function(d,c){var f=this.$element().html(d);
return F(c)&&c(d),f
},templateCache:function(d,c){return typeof c!="undefined"?B[d]=c:B[d]
},clearTemplateCache:function(){return B={}
},notFound:function(d,c){var f=this.error(["404 Not Found",d,c].join(" "));
return d==="get"?f:!0
},error:function(d,c){c||(c=new Error),c.message=[d,c.message].join(" "),this.trigger("error",{message:c.message,error:c});
if(this.raise_errors){throw c
}this.log(c.message,c)
},_checkLocation:function(){var d,c;
d=this.getLocation();
if(!this.last_location||this.last_location[0]!="get"||this.last_location[1]!=d){this.last_location=["get",d],c=this.runRoute("get",d)
}return c
},_getFormVerb:function(d){var f=A(d),e,c;
c=f.find('input[name="_method"]'),c.length>0&&(e=c.val()),e||(e=f[0].getAttribute("method"));
if(!e||e===""){e="get"
}return A.trim(e.toString().toLowerCase())
},_checkFormSubmission:function(d){var l,f,c,e,h;
return this.trigger("check-form-submission",{form:d}),l=A(d),f=l.attr("action")||"",c=this._getFormVerb(l),this.debug&&this.log("_checkFormSubmission",l,f,c),c==="get"?(e=this._serializeFormParams(l),e!==""&&(f+="?"+e),this.setLocation(f),h=!1):(e=A.extend({},this._parseFormParams(l)),h=this.runRoute(c,f,e,d.get(0))),typeof h=="undefined"?!1:h
},_serializeFormParams:function(f){var c="",h=f.serializeArray(),d;
if(h.length>0){c=this._encodeFormPair(h[0].name,h[0].value);
for(d=1;
d<h.length;
d++){c=c+"&"+this._encodeFormPair(h[d].name,h[d].value)
}}return c
},_encodeFormPair:function(d,c){return C(d)+"="+C(c)
},_parseFormParams:function(f){var c={},h=f.serializeArray(),d;
for(d=0;
d<h.length;
d++){c=this._parseParamPair(c,h[d].name,h[d].value)
}return c
},_parseQueryString:function(h){var d={},m,f,c,l;
m=h.match(G);
if(m&&m[1]){f=m[1].split("&");
for(l=0;
l<f.length;
l++){c=f[l].split("="),d=this._parseParamPair(d,w(c[0]),w(c[1]||""))
}}return d
},_parseParamPair:function(d,c,f){return typeof d[c]!="undefined"?D(d[c])?d[c].push(f):d[c]=[d[c],f]:d[c]=f,d
},_listen:function(d,c){return this.$element().bind([d,this.eventNamespace()].join("."),c)
},_unlisten:function(d,c){return this.$element().unbind([d,this.eventNamespace()].join("."),c)
}}),q.RenderContext=function(c){this.event_context=c,this.callbacks=[],this.previous_content=null,this.content=null,this.next_engine=!1,this.waiting=!1
},q.RenderContext.prototype=A.extend({},q.Object.prototype,{then:function(d){if(!F(d)){if(!(typeof d=="string"&&d in this.event_context)){return this
}var f=this.event_context[d];
d=function(h){return f.apply(this.event_context,[h])
}
}var c=this;
return this.waiting?this.callbacks.push(d):(this.wait(),a.setTimeout(function(){var e=d.apply(c,[c.content,c.previous_content]);
e!==!1&&c.next(e)
},0)),this
},wait:function(){this.waiting=!0
},next:function(c){this.waiting=!1,typeof c!="undefined"&&(this.previous_content=this.content,this.content=c),this.callbacks.length>0&&this.then(this.callbacks.shift())
},load:function(d,f,e){var c=this;
return this.then(function(){var i,m,h,l;
F(f)?(e=f,f={}):f=A.extend({},f),e&&this.then(e);
if(typeof d=="string"){return h=d.match(/\.json$/)||f.json,i=h?f.cache===!0:f.cache!==!1,c.next_engine=c.event_context.engineFor(d),delete f.cache,delete f.json,f.engine&&(c.next_engine=f.engine,delete f.engine),i&&(m=this.event_context.app.templateCache(d))?m:(this.wait(),A.ajax(A.extend({url:d,data:{},dataType:h?"json":"text",type:"get",success:function(n){i&&c.event_context.app.templateCache(d,n),c.next(n)
}},f)),!1)
}if(d.nodeType){return d.innerHTML
}if(d.selector){return c.next_engine=d.attr("data-engine"),f.clone===!1?d.remove()[0].innerHTML.toString():d[0].innerHTML.toString()
}})
},loadPartials:function(d){var c;
if(d){this.partials=this.partials||{};
for(c in d){(function(e,f){e.load(d[f]).then(function(h){this.partials[f]=h
})
})(this,c)
}}return this
},render:function(f,c,h,d){return F(f)&&!c?this.then(f):(F(c)?(d=h,h=c,c=null):h&&!F(h)&&(d=h,h=null),this.loadPartials(d).load(f).interpolate(c,f).then(h))
},partial:function(f,c,h,d){return F(h)?this.render(f,c,d).swap(h):F(c)?this.render(f,{},h).swap(c):this.render(f,c,h).swap()
},send:function(){var d=this,c=k(arguments),f=c.shift();
return D(c[0])&&(c=c[0]),this.then(function(e){return c.push(function(h){d.next(h)
}),d.wait(),f.apply(f,c),!1
})
},collect:function(d,h,f){var c=this,e=function(){F(d)&&(h=d,d=this.content);
var l=[],i=!1;
return A.each(d,function(n,m){var p=h.apply(c,[n,m]);
return p.jquery&&p.length==1&&(p=p[0],i=!0),l.push(p),p
}),i?l:l.join("")
};
return f?e():this.then(e)
},renderEach:function(d,f,e,c){return D(f)&&(c=e,e=f,f=null),this.load(d).then(function(h){var i=this;
e||(e=D(this.previous_content)?this.previous_content:[]);
if(!c){return this.collect(e,function(n,m){var l={},p=this.next_engine||d;
return f?l[f]=m:l=m,this.event_context.interpolate(h,l,p)
},!0)
}A.each(e,function(o,n){var m={},l=this.next_engine||d;
f?m[f]=n:m=n,c(n,i.event_context.interpolate(h,m,l))
})
})
},interpolate:function(f,c,h){var d=this;
return this.then(function(e,l){!f&&l&&(f=l),this.next_engine&&(c=this.next_engine,this.next_engine=!1);
var m=d.event_context.interpolate(e,f,c,this.partials);
return h?l+m:m
})
},swap:function(c){return this.then(function(d){return this.event_context.swap(d,c),d
}).trigger("changed",{})
},appendTo:function(c){return this.then(function(d){A(c).append(d)
}).trigger("changed",{})
},prependTo:function(c){return this.then(function(d){A(c).prepend(d)
}).trigger("changed",{})
},replace:function(c){return this.then(function(d){A(c).html(d)
}).trigger("changed",{})
},trigger:function(d,c){return this.then(function(e){return typeof c=="undefined"&&(c={content:e}),this.event_context.trigger(d,c),e
})
}}),q.EventContext=function(l,d,h,c,f){this.app=l,this.verb=d,this.path=h,this.params=new q.Object(c),this.target=f
},q.EventContext.prototype=A.extend({},q.Object.prototype,{$element:function(){return this.app.$element(k(arguments).shift())
},engineFor:function(d){var c=this,f;
if(F(d)){return d
}d=(d||c.app.template_engine).toString();
if(f=d.match(/\.([^\.\?\#]+)$/)){d=f[1]
}return d&&F(c[d])?c[d]:c.app.template_engine?this.engineFor(c.app.template_engine):function(i,h){return i
}
},interpolate:function(f,c,h,d){return this.engineFor(h).apply(this,[f,c,d])
},render:function(h,d,f,c){return(new q.RenderContext(this)).render(h,d,f,c)
},renderEach:function(h,d,f,c){return(new q.RenderContext(this)).renderEach(h,d,f,c)
},load:function(f,c,d){return(new q.RenderContext(this)).load(f,c,d)
},loadPartials:function(c){return(new q.RenderContext(this)).loadPartials(c)
},partial:function(h,d,f,c){return(new q.RenderContext(this)).partial(h,d,f,c)
},send:function(){var c=new q.RenderContext(this);
return c.send.apply(c,arguments)
},redirect:function(){var I,e=k(arguments),d=this.app.getLocation(),m=e.length;
if(m>1){var J=0,H=[],v=[],o={},h=!1;
for(;
J<m;
J++){typeof e[J]=="string"?H.push(e[J]):(A.extend(o,e[J]),h=!0)
}I=H.join("/");
if(h){for(var p in o){v.push(this.app._encodeFormPair(p,o[p]))
}I+="?"+v.join("&")
}}else{I=e[0]
}this.trigger("redirect",{to:I}),this.app.last_location=[this.verb,this.path],this.app.setLocation(I),(new RegExp(I)).test(d)&&this.app.trigger("location-changed")
},trigger:function(d,c){return typeof c=="undefined"&&(c={}),c.context||(c.context=this),this.app.trigger(d,c)
},eventNamespace:function(){return this.app.eventNamespace()
},swap:function(d,c){return this.app.swap(d,c)
},notFound:function(){return this.app.notFound(this.verb,this.path)
},json:function(c){return A.parseJSON(c)
},toString:function(){return"Sammy.EventContext: "+[this.verb,this.path,this.params].join(" ")
}}),q
})
})(jQuery,window);
(function(a){typeof define=="function"&&define.amd?define(["jquery","sammy","handlebars"],a):(window.Sammy=window.Sammy||{}).Handlebars=a(window.jQuery,window.Sammy,window.Handlebars)
})(function(b,a,c){return a.Handlebars=function(e,g){var d={},f=function(i,k,j,l){typeof l=="undefined"&&(l=i);
var h=d[l];
return h||(h=d[l]=c.compile(i)),k=b.extend({},this,k),j=b.extend({},k.partials,j),h(k,{partials:j})
};
g||(g="handlebars"),e.helper(g,f)
},a.Handlebars
});
