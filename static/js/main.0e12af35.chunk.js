(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}):1*e.toFixed(2)}var l=a(2),o=a(1),u=a(3),m=function(e){!function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e);var t=e.reduce((function(e,t){return e+t.quantity}),0);return{total:e.reduce((function(e,t){return e+t.C*t.quantity}),0).toFixed(2),itemCount:t}},d=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(o.a)(Object(o.a)({},t.payload),{},{group:t.group,quantity:1})),Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"REMOVE_ITEM":return Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(u.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"UPDATE_ITEM":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity=t.quantity,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});default:return e}},p=Object(n.createContext)([]),E=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],v=Object(o.a)({cartItems:E},m(E)),f=function(e){var t=e.children,a=Object(n.useReducer)(d,v),r=Object(l.a)(a,2),i=r[0],s=r[1],u=Object(o.a)({removeProduct:function(e){s({type:"REMOVE_ITEM",payload:e})},addProduct:function(e,t){s({type:"ADD_ITEM",payload:e,group:t})},increase:function(e){s({type:"INCREASE",payload:e})},decrease:function(e){s({type:"DECREASE",payload:e})},updateProductQuantity:function(e,t){s({type:"UPDATE_ITEM",payload:e,quantity:t})}},i);return c.a.createElement(p.Provider,{value:u},t)},b=function(e,t){switch(t.type){case"PRODUCTS_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,products:t.payload.products,rate:t.payload.rate,priceStatus:t.payload.priceStatus});case"PRODUCTS_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}},O=Object(n.createContext)({}),j={get value(){return Math.floor(60*Math.random()+20)}},y={loading:!1,products:[],rate:1,priceStatus:"",errorMessage:null},N=function(e){var t=e.children,a=Object(n.useReducer)(b,y),r=Object(l.a)(a,2),i=r[0],s=r[1],o=i.loading,u=i.products,m=i.rate,d=i.priceStatus,p=i.errorMessage;function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;fetch("/api/data.json").then((function(e){return e.json()})).then((function(t){if(!Object.keys(u).length&&e&&(u=e),t.Success){Object.keys(u).forEach((function(e){Object.keys(u[e].B).forEach((function(a){u[e].B[a].id=a;var n=t.hasOwnProperty("Value")&&t.Value.hasOwnProperty("Goods")&&t.Value.Goods.find((function(t){return+t.T===+a&&+t.G===+e}));n&&(n.P&&(u[e].B[a].P=n.P),n.C?u[e].B[a].C=n.C:delete u[e].B[a].C)}))}));var a=j.value;s({type:"PRODUCTS_SUCCESS",payload:{products:u,rate:a,priceStatus:1!==m&&m<a?"less":1!==m&&m>a?"large":""}})}t.Error&&s({type:"PRODUCTS_FAILURE",error:t.Error})}))}return Object(n.useEffect)((function(){fetch("/api/names.json").then((function(e){return e.json()})).then((function(e){return E(e)}))}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){E()}),15e3);return function(){return clearInterval(e)}})),c.a.createElement(O.Provider,{value:{loading:o,products:u,rate:m,priceStatus:d,errorMessage:p}},t)},_=(a(14),function(e){var t=e.products,a=e.group,r=Object(n.useContext)(p),i=r.addProduct,l=r.cartItems,o=r.increase,u=Object(n.useContext)(O),m=u.rate,d=u.priceStatus,E=function(e){return!!l.find((function(t){return t.id===e.id}))},v=(t=Object.entries(t).sort((function(e,t){return("P"in t[1])-("P"in e[1])}))).map((function(e){var t=e[1],n=!!t.P;return c.a.createElement("div",{key:e[0],className:"product"+(n?"":" product--empty")},c.a.createElement("div",{className:"product__col"},c.a.createElement("div",{className:"product__info"},c.a.createElement("div",{className:"product__title"},t.N," (",n?t.P:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",")"),E(t)&&t.P&&function(e,t){var a=l.find((function(t){return t.id===e.id}));return!!a&&+a.quantity<+t}(t,t.P)&&c.a.createElement("button",{onClick:function(){return o(t)},className:"btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435"),!E(t)&&t.P&&c.a.createElement("button",{onClick:function(){return i(t,a)},className:"btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("div",{className:"product__col"},t.C?c.a.createElement("div",{className:"product__price"},c.a.createElement("div",{className:"price "+d},s(t.C*m)," ","\u0440\u0443\u0431."," / ","\u0448\u0442."),c.a.createElement("div",{className:"price price--small"},"$"+t.C)):null))}));return c.a.createElement("div",null,v)});a(15);var g=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{className:"accordion"},c.a.createElement("div",{onClick:function(){i(!r)},className:"accordion__title"+(r?" is-toggle":"")},e.title),c.a.createElement("div",{className:"accordion__content"+(r?" is-toggle":"")},e.children))},h=(a(16),function(e){var t=e.product,a=Object(n.useContext)(p),r=a.updateProductQuantity,i=a.removeProduct,o=a.decrease,u=a.increase,m=Object(n.useContext)(O),d=m.rate,E=m.priceStatus,v=Object(n.useRef)(null),f=Object(n.useState)(t.quantity<=1),b=Object(l.a)(f,2),j=b[0],y=b[1],N=Object(n.useState)(t.P<=t.quantity),_=Object(l.a)(N,2),g=_[0],h=_[1];function I(e,t){var a=v.current,n=a.value,c=a.min,r=a.max;switch(t){case"decrease":+n===+c?y(!0):+n-1===+c?(o(e),y(!0)):(o(e),h(!1),y(!1));break;case"increase":+n===+r?h(!0):+n+1===+r?(u(e),h(!0)):(u(e),h(!1),y(!1))}}return Object(n.useEffect)((function(){if(v.current){var e=v.current,t=e.value,a=e.min,n=e.max;h(!1),y(!1),+t<=+a&&y(!0),+t>=+n&&h(!0)}})),c.a.createElement("div",{className:"cart",key:t.id},c.a.createElement("div",{className:"cart-details"},c.a.createElement("div",{className:"cart-cross"},c.a.createElement("button",{onClick:function(){return i(t)},className:"btn-icon"},"\xd7")),c.a.createElement("div",{className:"cart-title"},t.group?t.group+". ":"",t.N)),c.a.createElement("div",{className:"cart-quantity"},c.a.createElement("div",{className:"cart-quantity__top"},c.a.createElement("div",{className:"quantities"},c.a.createElement("div",{onClick:I.bind(void 0,t,"decrease"),className:"quantities__ctrl decrease"+(j?" disabled":"")},c.a.createElement("span",null,"\u2212")),c.a.createElement("div",{className:"quantities__input"},c.a.createElement("input",{ref:v,type:"number",value:t.quantity,min:"1",max:t.P,onChange:function(e,t){var a=t.target,n=a.value,c=a.min,i=a.max;n=Math.max(Number(c),Math.min(Number(i),Number(n))),h(!1),y(!1),+n<=+c&&y(!0),+n>=+i&&h(!0),r(e,n)}.bind(void 0,t)})),c.a.createElement("div",{onClick:I.bind(void 0,t,"increase"),className:"quantities__ctrl increase"+(g?" disabled":"")},c.a.createElement("span",null,"+"))),c.a.createElement("span",{className:"amount"}," ","\u0448\u0442.")),c.a.createElement("div",{className:"cart-quantity__bottom"},t.quantity===t.P?c.a.createElement("span",{className:"noty-msg"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e"):null)),t.C?c.a.createElement("div",{className:"cart-price"},c.a.createElement("div",{className:"price "+E},s(t.C*d)," ","\u0440\u0443\u0431."," / ","\u0448\u0442."),c.a.createElement("div",{className:"price price--small"},"$"+t.C)):null,c.a.createElement("div",{className:"cart-removal"},c.a.createElement("button",{onClick:function(){return i(t)},className:"btn-link"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}),I=(a(17),function(){var e=Object(n.useContext)(p),t=e.cartItems,a=e.total,r=e.itemCount,i=Object(n.useContext)(O).rate;return c.a.createElement("div",null,Object.keys(t).length?c.a.createElement("div",{className:"shopping-cart"},c.a.createElement("div",{className:"shopping-cart__title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"shopping-cart__head"},c.a.createElement("div",{className:"cart-details"},"\u041d\u0430\u0439\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.a.createElement("div",{className:"cart-quantity"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),c.a.createElement("div",{className:"cart-price"},"\u0426\u0435\u043d\u0430"),c.a.createElement("div",{className:"cart-removal"},"\xa0")),c.a.createElement("div",{className:"shopping-cart__list"},Object.keys(t).map((function(e){return c.a.createElement(h,{key:e,product:t[e]})}))),c.a.createElement("div",{className:"totals"},c.a.createElement("div",{className:"totals__item"},c.a.createElement("div",{className:"totals__title"},"\u0412\u0441\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432:"),c.a.createElement("div",{className:"totals__value"},r," ","\u0448\u0442.")),c.a.createElement("div",{className:"totals__item totals__item--bold"},c.a.createElement("div",{className:"totals__title"},"\u0412\u0441\u0435\u0433\u043e \u043a \u043e\u043f\u043b\u0430\u0442\u0435:"),c.a.createElement("div",{className:"totals__value totals__value--orange"},s(a*i)," ","\u0440\u0443\u0431.")))):null)}),C=function(){var e=Object(n.useContext)(O),t=e.loading,a=e.products,r=e.errorMessage,i=e.rate;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement("section",{className:"container"},c.a.createElement("h2",null,"\u041a\u0443\u0440\u0441: $1 = ",i," ","\u0440\u0443\u0431."),c.a.createElement(I,null),c.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),c.a.createElement("div",{className:"product-list"},t||r?r?c.a.createElement("div",{className:"errorMessage"},r):Object.keys(a).map((function(e){return c.a.createElement(g,{key:e,title:a[e].G},Object.keys(a[e].B).length?c.a.createElement(_,{products:a[e].B,group:a[e].G}):null)})):c.a.createElement("span",null,"loading... ")))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null,c.a.createElement(f,null,c.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0e12af35.chunk.js.map