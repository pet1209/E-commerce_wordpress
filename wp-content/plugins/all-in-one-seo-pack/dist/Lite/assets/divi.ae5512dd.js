import{n as h,V as l}from"./js/_plugin-vue2_normalizer.d86aa1f3.js";import"./js/index.5dd9aaae.js";import{T as $}from"./js/index.a952769c.js";import{s as c}from"./js/index.8eedf1b9.js";import{f as d,S as E}from"./js/Caret.2b15c7cb.js";import{j as B,m as L}from"./js/attachments.540ad25c.js";import{b as C}from"./js/_baseSet.ea8ad201.js";import{i as D}from"./js/isEqual.90be431f.js";import{A as M}from"./js/App.ae62bc30.js";import{i as k}from"./js/portal-vue.esm.c4534d19.js";import{P as x}from"./js/App.e8764334.js";import"./js/client.1a03de11.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.b7a6f669.js";import"./js/default-i18n.31663a66.js";import"./js/helpers.a2b0759e.js";import"./js/constants.a33ff6d4.js";import"./js/isArrayLikeObject.5268a676.js";import"./js/vuex.esm.19624049.js";import"./js/cleanForSlug.d330f33d.js";import"./js/html.bcbe747e.js";import"./js/_baseIsEqual.4e44c7e9.js";import"./js/_getTag.e79f4b6e.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/WpTable.68e67998.js";import"./js/Index.c4701ef0.js";import"./js/JsonValues.08065e69.js";import"./js/SaveChanges.68e73792.js";import"./js/SettingsRow.12bb257d.js";import"./js/Row.67f2b082.js";import"./js/Checkbox.eb948ddb.js";import"./js/Checkmark.57e6a235.js";import"./js/LicenseKeyBar.0e10c35c.js";import"./js/LogoGear.e2de68dd.js";import"./js/Tabs.7e75fbc5.js";import"./js/TruSeoScore.98a47fd6.js";import"./js/Information.1adeabd0.js";import"./js/Slide.fe1da4fd.js";import"./js/Portal.18dad338.js";import"./js/MaxCounts.5a7ca2fd.js";import"./js/RadioToggle.980c8ff8.js";import"./js/GoogleSearchPreview.eed33a70.js";import"./js/HtmlTagsEditor.d6900a4d.js";import"./js/Editor.6c63930c.js";import"./js/UnfilteredHtml.dac94963.js";import"./js/Tooltip.e966c16d.js";import"./js/Plus.e2e13f40.js";import"./js/popup.25df8419.js";import"./js/Blur.ce0e3f00.js";import"./js/Index.4d840078.js";import"./js/Table.28e3c562.js";import"./js/InternalOutbound.88729746.js";import"./js/RequiredPlans.14d47bd8.js";import"./js/Image.cdb0a2bf.js";import"./js/Img.e81d8dfc.js";import"./js/FacebookPreview.a5059d52.js";import"./js/Profile.df12425d.js";import"./js/TwitterPreview.93aa406c.js";import"./js/Book.6f107e9b.js";import"./js/Settings.1efb0c2b.js";import"./js/Build.3089a56c.js";import"./js/Redirects.843d2415.js";import"./js/Index.9d561265.js";import"./js/ProBadge.7aea483a.js";import"./js/External.d2f08f8f.js";import"./js/Exclamation.b2dd0993.js";import"./js/Gear.c30cbc7e.js";import"./js/Card.b5f85ba0.js";import"./js/Eye.82da6b1c.js";function b(t,e,o){return t==null?t:C(t,e,o)}const v=t=>t.parentElement.removeChild(t),y=()=>{const t=f();document.body.classList.toggle("aioseo-settings-bar-is-active",t),document.body.classList.toggle("aioseo-settings-bar-is-inactive",!t)},P=()=>{const t=u();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),g(t)},q=()=>{p.addEventListener("change",()=>{S(),g(u())}),U.observe(document.querySelector(".et-fb-page-settings-bar"),{attributeFilter:["class"]}),document.body.addEventListener("click",T),s.addEventListener("click",()=>{const t=new Event("aioseo-divi-toggle-modal");document.dispatchEvent(t)})},A=()=>{const t=u();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),y(),S(),F()||g(t)},S=()=>{!w()||(s=v(s))},g=t=>{if(w())return;const e=document.querySelector(".et-fb-page-settings-bar"),o=e.querySelector(".et-fb-page-settings-bar__toggle-button"),i=e.querySelectorAll(".et-fb-page-settings-bar__column");if(O(t),f())if(p.matches){const n=[...i].filter(m=>m.classList.contains("et-fb-page-settings-bar__column--main"));n.length&&n[0].appendChild(s)}else{const n=[...i].filter(m=>m.classList.contains("et-fb-page-settings-bar__column--left"));n.length&&n[0].insertBefore(s)}else o.insertAdjacentElement("afterend",s)},O=t=>{r(s,"aioseo-settings-bar-root"),s.classList.add(`aioseo-settings-bar-root-${t}`),r(s,"aioseo-settings-bar-root-is-mobile"),["aioseo-settings-bar-root-is-mobile",`aioseo-settings-bar-root-is-mobile-${t}`].forEach(i=>{s.classList.toggle(i,!p.matches)}),r(s,"aioseo-settings-bar-root-is-desktop"),["aioseo-settings-bar-root-is-desktop",`aioseo-settings-bar-root-is-desktop-${t}`].forEach(i=>{s.classList.toggle(i,p.matches)})},r=(t,e)=>{const o=[`${e}-left`,`${e}-right`,`${e}-top`,`${e}-top-left`,`${e}-top-right`,`${e}-bottom`,`${e}-bottom-left`,`${e}-bottom-right`];t.classList.remove(...o)},u=()=>{const t=document.querySelector(".et-fb-page-settings-bar").classList;return t.contains("et-fb-page-settings-bar--horizontal")&&!t.contains("et-fb-page-settings-bar--top")?"bottom":t.contains("et-fb-page-settings-bar--top")&&!t.contains("et-fb-page-settings-bar--corner")?"top":t.contains("et-fb-page-settings-bar--bottom-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"bottom-left":"bottom-right":t.contains("et-fb-page-settings-bar--top-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"top-left":"top-right":t.contains("et-fb-page-settings-bar--vertical--right")?"right":t.contains("et-fb-page-settings-bar--vertical--left")?"left":""},T=t=>{if(!R())return;const e=t.target,o=".aioseo-modal",i=".aioseo-app.post-settings-modal";if(!e.closest(o)&&!e.closest(i)&&!(e!==document.querySelector(o)&&e.contains(document.querySelector(o)))&&e!==s){const n=new Event("aioseo-divi-toggle-modal",{open:!1});document.dispatchEvent(n)}},R=()=>!document.querySelector(".aioseo-modal").classList.contains("aioseo-modal-is-closed"),w=()=>document.documentElement!==s&&document.documentElement.contains(s),f=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--active"),F=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--dragged")&&!f(),p=window.matchMedia("(min-width: 768px)"),U=new MutationObserver(A),N="#aioseo-settings";let s=document.querySelector(N);s=v(s);const X=()=>{y(),P(),q()};let _={};const a=()=>{const t={..._},e=B();D(t,e)||(_=e,L())},Y=()=>{c.dispatch("saveCurrentPost",c.state.currentPost)},z=()=>{a(),window.addEventListener("message",t=>{t.data.eventType==="et_fb_section_content_change"&&d(a,1e3)}),window.wp&&window.wp.hooks.addFilter("et.builder.store.setting.update","aioseo",(t,e)=>{if(t)switch(e){case"et_pb_post_settings_title":b(ETBuilderBackendDynamic,"postTitle",t),d(a,1e3);break;case"et_pb_post_settings_excerpt":b(ETBuilderBackendDynamic,"postMeta.post_excerpt",t),d(a,1e3);break}return t}),document.querySelector(".et-fb-button--save-draft, .et-fb-button--publish").addEventListener("click",Y)};const V={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(t){t=t||window.event,t.preventDefault(),this.position3=t.clientX,this.position4=t.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(t){t=t||window.event,t.preventDefault(),this.position1=this.position3-t.clientX,this.position2=this.position4-t.clientY,this.position3=t.clientX,this.position4=t.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}};var Q=function(){var e=this,o=e._self._c;return o("div",{staticClass:"aioseo-draggable"},[e.completelyDraggable?o("div",{on:{dragMouseDown:e.dragMouseDown}},[e._t("default")],2):e._e(),e.completelyDraggable?e._e():o("div",[e._t("default")],2)])},W=[],j=h(V,Q,W,!1,null,null,null,null);const G=j.exports,H={components:{PostSettings:M,SvgClose:E,UtilDraggable:G},data(){return{isOpen:!1,strings:{header:this.$t.sprintf(this.$t.__("%1$s settings",this.$td),"All in One SEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}},beforeUnmount(){document.removeEventListener("aioseo-divi-toggle-modal",this.toggleModal)},mounted(){this.$nextTick(function(){document.addEventListener("aioseo-divi-toggle-modal",this.toggleModal)})}};var I=function(){var e=this,o=e._self._c;return o("util-draggable",{ref:"modal-container",attrs:{completelyDraggable:!1}},[o("div",{staticClass:"aioseo-modal",class:{"aioseo-modal-is-closed":!e.isOpen}},[o("div",{staticClass:"aioseo-modal-header",on:{mousedown:function(i){return i.preventDefault(),(n=>e.$refs["modal-container"].dragMouseDown(n)).apply(null,arguments)}}},[o("div",{staticClass:"aioseo-modal-header-title"},[e._v(e._s(e.strings.header))]),o("div",{staticClass:"aioseo-modal-header-close",on:{click:function(i){e.isOpen=!1}}},[o("svg-close")],1)]),o("div",{staticClass:"aioseo-modal-body edit-post-sidebar"},[o("PostSettings")],1)])])},J=[],K=h(H,I,J,!1,null,null,null,null);const Z=K.exports;l.prototype.$truSeo=new $;const tt=()=>{new l({store:c,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:t=>t(Z)}).$mount("#aioseo-app-modal > div")},et=()=>{l.use(k),document.querySelector("#aioseo-modal-portal")&&new l({store:c,render:e=>e(x)}).$mount("#aioseo-modal-portal")},ot=()=>{X(),tt(),et(),z()};window.addEventListener("message",function(t){t.data.eventType==="et_builder_api_ready"&&ot()});