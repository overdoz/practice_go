(this.webpackJsonpairprinter=this.webpackJsonpairprinter||[]).push([[0],{2:function(e,n,t){e.exports=t.p+"static/media/white-construction-paper-texture.41991707.jpg"},21:function(e,n,t){e.exports=t(44)},26:function(e,n,t){},4:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(13),r=t.n(i),c=(t(26),t(18)),l=(t(4),t(2)),s=t.n(l),W=t(14),u=t(15),p=t(19),d=t(16),f=t(20),h=t(17),m=t.n(h),g=function(e){function n(e){var t;return Object(W.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).onChangeHandler=function(e){t.setState({selectedFile:e.target.files[0],loaded:0})},t.onClickHandler=function(){var e=new FormData;e.append("file",t.state.selectedFile),m.a.post("http://localhost:8000/upload",e,{}).then((function(e){console.log(e.statusText)}))},t.state={selectedFile:null},t}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"child pic-page"},o.a.createElement("img",{src:s.a,alt:"papier"}),o.a.createElement("h2",null,"Print your uploaded photo"),o.a.createElement("form",{method:"POST",action:"http://localhost:8000/upload",encType:"multipart/form-data"},o.a.createElement("input",{className:"upload",type:"file",accept:"image/*",capture:"camera",name:"file",onChange:this.onChangeHandler}),o.a.createElement("input",{className:"inputButton",type:"submit",value:"print",onClick:this.onClickHandler})))}}]),n}(a.Component);var v=function(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=n[0],i=n[1];return o.a.createElement("div",{className:"App container"},o.a.createElement("section",{className:"child text-page"},o.a.createElement("img",{src:s.a,alt:"papier"}),o.a.createElement("form",{method:"POST",action:"/"},o.a.createElement("textarea",{name:"text",wrap:"hard",cols:"30",className:"textField",value:t,onChange:function(e){return i(e.target.value)},placeholder:"Leave us a note... \n\n             W \n            WWW\n            WWW\n           WWWWW\n     W     WWWWW     W\n     WWW   WWWWW   WWW\n      WWW  WWWWW  WWW\n       WWW  WWW  WWW\n        WWW WWW WWW\n          WWWWWWW\n       WWWW  |  WWWW\n             |\n             |\n\n \u250f(-_-)\u251b\u2517(-_-\ufeff )\u2513\u2517(-_-)\u251b\n\n  be creative :) \n    or die tryin \n\n "}),o.a.createElement("input",{className:"inputButton",type:"submit",value:"print"}))),o.a.createElement(g,null))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");w?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.936a70c6.chunk.js.map