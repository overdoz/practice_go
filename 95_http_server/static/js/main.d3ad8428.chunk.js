(this.webpackJsonpairprinter=this.webpackJsonpairprinter||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},3:function(e,t,n){e.exports=n.p+"static/media/white-construction-paper-texture.41991707.jpg"},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),c=(n(24),n(14)),l=n(15),s=n(17),W=n(16),u=n(18),p=(n(25),n(2)),d=n.n(p),f=n(3),h=n.n(f),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(W.a)(t).call(this,e))).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]})},n.onClickHandler=function(){if(""!==n.state.text&&null===n.state.selectedFile)console.log("sent text"),d()({method:"post",url:"/",data:{Text:n.state.text},headers:{"Content-Type":"application/json"},params:{type:"text"}}).then((function(e){console.log(e.statusText)})),n.setState({text:""});else if(""===n.state.text&&null!==n.state.selectedFile){console.log("sent pic");var e=new FormData;e.append("file",n.state.selectedFile),d.a.post("/",e,{headers:{"Content-Type":"multipart/form-data"},params:{type:"files"}}).then((function(e){console.log(e.statusText)})),n.setState({selectedFile:null})}else n.setState({text:""}),n.setState({selectedFile:null}),console.log("Couldn't send shit...")},n.state={selectedFile:null,text:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App container"},o.a.createElement("section",{className:"child text-page"},o.a.createElement("img",{src:h.a,alt:"papier"}),o.a.createElement("form",{method:"POST",action:"/"},o.a.createElement("textarea",{name:"text",wrap:"hard",cols:"29",className:"textField",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},placeholder:"Leave us a note... \n\n             W \n            WWW\n            WWW\n           WWWWW\n     W     WWWWW     W\n     WWW   WWWWW   WWW\n      WWW  WWWWW  WWW\n       WWW  WWW  WWW\n        WWW WWW WWW\n          WWWWWWW\n       WWWW  |  WWWW\n             |\n             |\n\n \u250f(-_-)\u251b\u2517(-_-\ufeff )\u2513\u2517(-_-)\u251b\n\n  be creative :) \n    or die tryin \n\n "}))),o.a.createElement("section",{className:"child pic-page"},o.a.createElement("img",{src:h.a,alt:"papier"}),o.a.createElement("h2",null,"Print your uploaded photo"),o.a.createElement("form",{method:"POST",action:"",encType:"multipart/form-data"},o.a.createElement("input",{className:"upload",uwfileinput:!0,type:"file",accept:".jpeg,.jpg,.png,.gif",capture:"camera",name:"file",onChange:this.onChangeHandler}))),o.a.createElement("input",{className:"inputButton",type:"submit",value:"print",onClick:this.onClickHandler}))}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");g?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. AAAA is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.d3ad8428.chunk.js.map