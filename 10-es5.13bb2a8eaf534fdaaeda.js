!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FwYg:function(t,i,o){"use strict";o.r(i),o.d(i,"AuthModule",(function(){return J}));var r,s,c,a,u,d=o("ofXK"),l=o("tyNb"),h=function(e){return e[e.Email=1]="Email",e[e.PhoneNumber=2]="PhoneNumber",e}({}),f=function(){var t=function(){function t(n,i){e(this,t),this.username=n,this.password=i,this.grant_type="password",this.client_id="IDA",this.client_secret="secret96",this.logintype="email",this.scope="Identity.Admin FuelBrand.Admin profile openid offline_access"}return n(t,[{key:"setLoginType",value:function(e){e===h.Email?this.logintype="email":e===h.PhoneNumber&&(this.logintype="Phone")}}]),t}();return t.LoginTypesItems=[{key:h.Email,value:"\u0627\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644"},{key:h.PhoneNumber,value:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"}],t}(),b=o("3Pt+"),g=o("fXoL"),p=o("Jo4g"),m=((r=function(){function t(n){e(this,t),this.authService=n}return n(t,[{key:"login",value:function(e){return this.authService.signIn(e)}}]),t}()).\u0275fac=function(e){return new(e||r)(g.Sb(p.a))},r.\u0275prov=g.Fb({token:r,factory:r.\u0275fac}),r),v=o("TEn/"),y=new g.q("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(g.U)(d.c)}}),k=((u=function(){function t(n){if(e(this,t),this.value="ltr",this.change=new g.n,n){var i=n.documentElement?n.documentElement.dir:null,o=(n.body?n.body.dir:null)||i;this.value="ltr"===o||"rtl"===o?o:"ltr"}}return n(t,[{key:"ngOnDestroy",value:function(){this.change.complete()}}]),t}()).\u0275fac=function(e){return new(e||u)(g.Sb(y,8))},u.\u0275prov=Object(g.Fb)({factory:function(){return new u(Object(g.Sb)(y,8))},token:u,providedIn:"root"}),u),w=((a=function(){function t(){e(this,t),this._dir="ltr",this._isInitialized=!1,this.change=new g.n}return n(t,[{key:"ngAfterContentInit",value:function(){this._isInitialized=!0}},{key:"ngOnDestroy",value:function(){this.change.complete()}},{key:"dir",get:function(){return this._dir},set:function(e){var t=this._dir,n=e?e.toLowerCase():e;this._rawDir=e,this._dir="ltr"===n||"rtl"===n?n:"ltr",t!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}},{key:"value",get:function(){return this.dir}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275dir=g.Eb({type:a,selectors:[["","dir",""]],hostVars:1,hostBindings:function(e,t){2&e&&g.Ab("dir",t._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[g.yb([{provide:k,useExisting:a}])]}),a),_=((c=function t(){e(this,t)}).\u0275mod=g.Hb({type:c}),c.\u0275inj=g.Gb({factory:function(e){return new(e||c)}}),c),O=((s=function(){function t(n,i,o){e(this,t),this.router=n,this.loginService=i,this.formBuilder=o,this.loginForm=this.formBuilder.group({username:[""],password:["",b.j.required]})}return n(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var e=this;if(this.loginForm.valid){var t=this.loginForm.value,n=new f(t.username=t.username,t.password);n.setLoginType(1),this.loginService.login(n).subscribe((function(){e.router.navigate(["/tabs/tab2"])}),(function(e){}))}}}]),t}()).\u0275fac=function(e){return new(e||s)(g.Jb(l.g),g.Jb(m),g.Jb(b.a))},s.\u0275cmp=g.Db({type:s,selectors:[["app-login-page"]],decls:31,vars:2,consts:[["dir","rtl",3,"fullscreen"],[1,"d-flex-culomn","fullscreen","base-screen"],[1,"d-flex-culomn","h-100","inner-screen"],[1,"header-region","fullscreen","d-f-c-c"],[1,"d-f-c-c","w-100"],[1,"w-40","logo-region"],["src","./assets/img/logos/logo.png",1,"logo-img","fullscreen"],[1,"d-flex-culomn","f-1"],[1,"content-region","mx-16"],["name","loginForm","novalidate","",3,"formGroup"],["formControlName","username","placeholder","\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647",1,"ion-input"],[1,"my-20"],["formControlName","password","type","password","placeholder","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",1,"ion-input"],[1,"my-8"],["color","primary",1,"w-100",3,"click"],[1,"content-region-2","mx-16"],[1,"font-14","center-text"],[1,"d-f-c-c"],[1,"register-btn"],[1,"register-color"],[1,"footer-region"]],template:function(e,t){1&e&&(g.Ob(0,"ion-content",0),g.Ob(1,"div",1),g.Ob(2,"div",2),g.Ob(3,"div",3),g.Ob(4,"div",4),g.Ob(5,"div",5),g.Kb(6,"img",6),g.Nb(),g.Nb(),g.Nb(),g.Ob(7,"div",7),g.Ob(8,"div",8),g.Ob(9,"form",9),g.Ob(10,"div"),g.Kb(11,"ion-input",10),g.Nb(),g.Ob(12,"div",11),g.Kb(13,"ion-input",12),g.Nb(),g.Nb(),g.Ob(14,"div",13),g.Ob(15,"ion-item"),g.Kb(16,"ion-checkbox"),g.Ob(17,"ion-label"),g.jc(18,"\u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f"),g.Nb(),g.Nb(),g.Nb(),g.Ob(19,"div",11),g.Ob(20,"ion-button",14),g.Wb("click",(function(){return t.login()})),g.jc(21,"\u0648\u0631\u0648\u062f"),g.Nb(),g.Nb(),g.Nb(),g.Ob(22,"div",15),g.Ob(23,"div",16),g.Ob(24,"span"),g.jc(25,"\u0627\u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f\u061f"),g.Nb(),g.Nb(),g.Ob(26,"div",17),g.Ob(27,"ion-button",18),g.Ob(28,"span",19),g.jc(29," \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc "),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Kb(30,"div",20),g.Nb(),g.Nb(),g.Nb(),g.Nb()),2&e&&(g.bc("fullscreen",!0),g.zb(9),g.bc("formGroup",t.loginForm))},directives:[v.g,w,b.k,b.h,b.c,v.k,v.B,b.g,b.b,v.l,v.e,v.a,v.m,v.c],styles:[".header-region[_ngcontent-%COMP%]{background-color:#b52e34;border-bottom:1px solid #0d0d4a;border-bottom-left-radius:16px;border-bottom-right-radius:16px;margin-bottom:100px;height:85px;position:relative}.logo-region[_ngcontent-%COMP%]{position:absolute;background-color:#fff;padding:4px;border-radius:50%;border:1px solid grey;top:7px}.logo-img[_ngcontent-%COMP%]{height:116px}.content-region[_ngcontent-%COMP%]{flex:2;flex-direction:column;display:flex;justify-content:center}.content-region-2[_ngcontent-%COMP%]{flex:1}.base-screen[_ngcontent-%COMP%]{padding:16px;background-color:#0d0d4a;border-radius:0}.inner-screen[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px}.register-btn[_ngcontent-%COMP%]{--border-radius:14px;--background:#fff!important}.register-color[_ngcontent-%COMP%]{color:#015c69}.ion-input[_ngcontent-%COMP%]{border:1px solid #00bcd4;border-radius:4px}.footer-row[_ngcontent-%COMP%]{height:30px;margin-top:8px;background-image:linear-gradient(#00ccbc,#006faf)}"]}),s),C=o("qtYk");o("HDdC"),o("XNiG"),o("7o/Q"),o("D0XW");var I,N,x,E=((x=function(){function t(){e(this,t)}return n(t,[{key:"create",value:function(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}]),t}()).\u0275fac=function(e){return new(e||x)},x.\u0275prov=Object(g.Fb)({factory:function(){return new x},token:x,providedIn:"root"}),x),D=((N=function t(){e(this,t)}).\u0275mod=g.Hb({type:N}),N.\u0275inj=g.Gb({factory:function(e){return new(e||N)},providers:[E]}),N);try{I="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(V){I=!1}var j,S=((j=function t(n){e(this,t),this._platformId=n,this.isBrowser=this._platformId?Object(d.n)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!I)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}).\u0275fac=function(e){return new(e||j)(g.Sb(g.B))},j.\u0275prov=Object(g.Fb)({factory:function(){return new j(Object(g.Sb)(g.B))},token:j,providedIn:"root"}),j);o("quSY"),o("LRne"),o("vkgz"),o("pLZG"),o("lJxs"),o("IzEk"),"undefined"!=typeof Element&&Element;var A,M=((A=function(){function t(n,i){e(this,t),this._platform=n,this._document=i}return n(t,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);var t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(e),i){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var e=this._document.body.classList;e.remove("cdk-high-contrast-active"),e.remove("cdk-high-contrast-black-on-white"),e.remove("cdk-high-contrast-white-on-black");var t=this.getHighContrastMode();1===t?(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-black-on-white")):2===t&&(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-white-on-black"))}}}]),t}()).\u0275fac=function(e){return new(e||A)(g.Sb(S),g.Sb(d.c))},A.\u0275prov=Object(g.Fb)({factory:function(){return new A(Object(g.Sb)(S),Object(g.Sb)(d.c))},token:A,providedIn:"root"}),A),B=new g.O("10.2.3");o("JX91"),o("R1ws");var P,T=new g.O("10.2.3"),F=new g.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),G=((P=function(){function t(n,i,o){e(this,t),this._hasDoneGlobalChecks=!1,this._document=o,n._applyBodyHighContrastModeCssClasses(),this._sanityChecks=i,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return n(t,[{key:"_getDocument",value:function(){var e=this._document||document;return"object"==typeof e&&e?e:null}},{key:"_getWindow",value:function(){var e=this._getDocument(),t=(null==e?void 0:e.defaultView)||window;return"object"==typeof t&&t?t:null}},{key:"_checksAreEnabled",value:function(){return Object(g.V)()&&!this._isTestEnv()}},{key:"_isTestEnv",value:function(){var e=this._getWindow();return e&&(e.__karma__||e.jasmine)}},{key:"_checkDoctypeIsDefined",value:function(){var e=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),t=this._getDocument();e&&t&&!t.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}},{key:"_checkThemeIsPresent",value:function(){var e=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,t=this._getDocument();if(!e&&t&&t.body&&"function"==typeof getComputedStyle){var n=t.createElement("div");n.classList.add("mat-theme-loaded-marker"),t.body.appendChild(n);var i=getComputedStyle(n);i&&"none"!==i.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),t.body.removeChild(n)}}},{key:"_checkCdkVersionMatch",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&T.full!==B.full&&console.warn("The Angular Material version ("+T.full+") does not match the Angular CDK version ("+B.full+").\nPlease ensure the versions of these two packages exactly match.")}}]),t}()).\u0275mod=g.Hb({type:P}),P.\u0275inj=g.Gb({factory:function(e){return new(e||P)(g.Sb(M),g.Sb(F,8),g.Sb(d.c,8))},imports:[[_],_]}),P);try{"undefined"!=typeof Intl}catch(V){!1}o("VRyK"),o("xgIS"),o("l7GE"),o("ZUHj"),o("R0Ic");var K,H,L=((K=function t(){e(this,t)}).\u0275mod=g.Hb({type:K}),K.\u0275inj=g.Gb({factory:function(e){return new(e||K)},imports:[[d.b,G,D],G]}),K),R=[{path:"",component:O}],J=((H=function t(){e(this,t)}).\u0275mod=g.Hb({type:H}),H.\u0275inj=g.Gb({factory:function(e){return new(e||H)},providers:[m],imports:[[d.b,l.i.forChild(R),v.x,d.b,b.d,L,C.a,b.i]]}),H)}}])}();