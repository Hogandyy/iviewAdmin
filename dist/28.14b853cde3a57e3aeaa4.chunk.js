webpackJsonp([28],{250:function(t,e,i){i(819);var n=i(1)(i(821),i(822),null,null);t.exports=n.exports},819:function(t,e,i){var n=i(820);"string"==typeof n&&(n=[[t.i,n,""]]);i(17)(n,{});n.locals&&(t.exports=n.locals)},820:function(t,e,i){e=t.exports=i(16)(),e.push([t.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.advanced-router{height:240px!important}.advanced-router-tip-p{padding:10px 0}",""])},821:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"shopping-info",data:function(){return{showInfo:!1,shopping_col:[{title:"购买物品名称",key:"name",align:"center"},{title:"购买时间",key:"time",align:"center"},{title:"价格",key:"price",align:"center"}],shopping_data:[]}},methods:{init:function(){var t="",e="",i="";switch(this.$route.query.shopping_id.toString()){case"100001":t="《vue.js实战》",e="2017年11月12日 13：33：24",i="79";break;case"100002":t="面包",e="2017年11月5日 19：13：24",i="10";break;case"100003":t="咖啡",e="2017年11月8日 10：39：24",i="57";break;case"100004":t="超级豪华土豪金牙签",e="2017年11月9日 11：45：24",i="200"}var n={name:t,time:e,price:i};this.shopping_data=[n]}},mounted:function(){this.init()},watch:{$route:function(){this.init()}}}},822:function(t,e,i){"use strict";t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Row",[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"compose"}}),t._v("\n                订单详情\n            ")],1),t._v(" "),i("Table",{attrs:{columns:t.shopping_col,data:t.shopping_data}})],1)],1)],1)},staticRenderFns:[]}}});