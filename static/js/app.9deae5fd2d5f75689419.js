webpackJsonp([1],[,,function(t,n,e){"use strict";var o=e(12);n.a={name:"app",components:{Counter:o.a}}},function(t,n,e){"use strict";n.a={name:"counter",data:function(){return{yesCount:0,noCount:0}},methods:{incrementYesCounter:function(){this.yesCount++},incrementNoCounter:function(){this.noCount++},decrementYesCounter:function(){this.yesCount>0&&this.yesCount--},decrementNoCounter:function(){this.noCount>0&&this.noCount--},reset:function(){this.yesCount=0,this.noCount=0}},computed:{total:function(){return this.yesCount+this.noCount},yesPercentage:function(){return this.yesCount+this.noCount>0?Math.round(100*this.yesCount/(this.yesCount+this.noCount)):0},noPercentage:function(){return this.yesCount+this.noCount>0?Math.round(100*this.noCount/(this.yesCount+this.noCount)).toFixed(0):0}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(5),s=e(9);e(16);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:s.a}})},,,,,function(t,n,e){"use strict";function o(t){e(10)}var s=e(2),i=e(15),c=e(1),r=o,u=c(s.a,i.a,!1,r,null,null);n.a=u.exports},function(t,n){},,function(t,n,e){"use strict";function o(t){e(13)}var s=e(3),i=e(14),c=e(1),r=o,u=c(s.a,i.a,!1,r,null,null);n.a=u.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"counter"},[e("div",{staticClass:"counts"},[e("div",{staticClass:"yes-count",on:{click:function(n){return n.preventDefault(),t.incrementYesCounter()}}},[e("div",{staticClass:"name"},[t._v("Oui")]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"count"},[t._v(t._s(t.yesCount))]),t._v(" "),e("div",{staticClass:"percentage"},[t._v("("+t._s(t.yesPercentage)+"%)")])])]),t._v(" "),e("div",{staticClass:"no-count",on:{click:function(n){return n.preventDefault(),t.incrementNoCounter()}}},[e("div",{staticClass:"name"},[t._v("Non")]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"count"},[t._v(t._s(t.noCount))]),t._v(" "),e("div",{staticClass:"percentage"},[t._v("("+t._s(t.noPercentage)+"%)")])])])]),t._v(" "),e("div",{staticClass:"total"},[t._v(t._s(t.total))]),t._v(" "),e("div",{staticClass:"decrement-yes",on:{click:function(n){return n.preventDefault(),t.decrementYesCounter()}}},[t._v("-1")]),t._v(" "),e("div",{staticClass:"decrement-no",on:{click:function(n){return n.preventDefault(),t.decrementNoCounter()}}},[t._v("-1")]),t._v(" "),e("div",{staticClass:"reset",on:{click:function(n){return n.preventDefault(),t.reset()}}},[t._v("Reset")])])},s=[],i={render:o,staticRenderFns:s};n.a=i},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("main",[e("counter")],1)])},s=[],i={render:o,staticRenderFns:s};n.a=i},function(t,n,e){"use strict";var o=e(17);Object(o.a)(Object({NODE_ENV:"production"}).BASE_URL+"service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})}],[4]);
//# sourceMappingURL=app.9deae5fd2d5f75689419.js.map