!function(a){a.jCarouselLite={version:"1.2.0-alpha"},a.fn.jCarouselLite=function(b){return b=a.extend({},a.fn.jCarouselLite.options,b||{}),this.each(function(){function c(a){return o||(clearTimeout(B),A=a,b.beforeStart&&b.beforeStart.call(this,i()),b.circular?j(a):k(a),n({start:function(){o=!0},done:function(){b.afterEnd&&b.afterEnd.call(this,i()),b.auto&&h(),o=!1}}),m(),b.circular||l()),!1}function d(){if(o=!1,p=b.vertical?"top":"left",q=b.vertical?"height":"width",r=C.find(">ul"),s=r.find(">li"),y=s.size(),x=y<b.visible?y:b.visible,b.circular){var c=s.slice(y-x).clone(),d=s.slice(0,x).clone();r.prepend(c).append(d),b.start+=x}t=a("li",r),z=t.size(),A=b.start}function e(){C.css("visibility","visible"),t.css({overflow:"hidden","float":b.vertical?"none":"left"}),r.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"}),C.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"}),!b.circular&&b.btnPrev&&0==b.start&&a(b.btnPrev).addClass("disabled"),A=b.start,m()}function f(){u=b.vertical?t.outerHeight(!0):t.outerWidth(!0),v=u*z,w=u*x,t.css({width:t.width(),height:t.height()}),r.css(q,v+"px").css(p,-(A*u)),C.css(q,w+"px")}function g(){b.btnPrev&&a(b.btnPrev).click(function(){return c(A-b.scroll)}),b.btnNext&&a(b.btnNext).click(function(){return c(A+b.scroll)}),b.btnGo&&a.each(b.btnGo,function(d,e){a(e).click(function(){return c(b.circular?x+d:d)})}),b.mouseWheel&&C.mousewheel&&C.mousewheel(function(a,d){return c(d>0?A-b.scroll:A+b.scroll)}),b.auto&&h()}function h(){B=setTimeout(function(){c(A+b.scroll)},b.auto)}function i(){return t.slice(A).slice(0,x)}function j(a){var c;a<=b.start-x-1?(c=a+y+b.scroll,r.css(p,-(c*u)+"px"),A=c-b.scroll):a>=z-x+1&&(c=a-y-b.scroll,r.css(p,-(c*u)+"px"),A=c+b.scroll)}function k(a){0>a?A=0:a>z-x&&(A=z-x)}function l(){a(b.btnPrev+","+b.btnNext).removeClass(b.disabledClass),a(A-b.scroll<0&&b.btnPrev||A+b.scroll>z-x&&b.btnNext||[]).addClass(b.disabledClass)}function m(){if(b.btnGo){var c=A;a(b.btnGo.join(", ")).removeClass(b.highlightClass),b.circular&&(x>A?c=A+y:A>=y+x&&(c=A-y),c-=x),a(b.btnGo[c]).addClass(b.highlightClass)}}function n(c){o=!0,r.animate("left"==p?{left:-(A*u)}:{top:-(A*u)},a.extend({duration:b.speed,easing:b.easing},c))}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C=a(this);d(),e(),f(),g()})},a.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,disabledClass:"disabled",highlightClass:"highlight",beforeStart:null,afterEnd:null}}(jQuery);