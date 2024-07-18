import{n as e,V as r}from"./js/_plugin-vue2_normalizer.d86aa1f3.js";import"./js/index.5dd9aaae.js";import{e as l}from"./js/elemLoaded.b1f6e29c.js";import{u}from"./js/url.f2cad11f.js";import{c,a as d,m}from"./js/vuex.esm.19624049.js";import{S as p}from"./js/Information.1adeabd0.js";import{S as k}from"./js/Caret.2b15c7cb.js";import{s as f}from"./js/index.8eedf1b9.js";import"./js/client.1a03de11.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.b7a6f669.js";import"./js/default-i18n.31663a66.js";import"./js/helpers.a2b0759e.js";import"./js/constants.a33ff6d4.js";import"./js/isArrayLikeObject.5268a676.js";import"./js/portal-vue.esm.c4534d19.js";const _={components:{SvgCircleInformation:p,SvgClose:k},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:this.$t.sprintf(this.$t.__("Did you know you can automatically add internal links using Link Assistant? %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,this.$aioseo.urls.aio.linkAssistant,!0))}}},computed:{...c(["isUnlicensed"]),...d(["currentPost"]),canShowUpsell(){const n=this.$addons.getAddon("aioseo-link-assistant"),{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,s=t.linkFormat.linkAssistantDismissed;return(this.isUnlicensed||!n||!n.isActive||n.requiresUpgrade)&&2<i&&!s&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{...m(["incrementInternalLinkCount","disableLinkAssistantEducation"]),async linkAdded(n){var o;await this.$nextTick();const{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,s=t.linkFormat.linkAssistantDismissed;2<i||s||this.isInternalLink(n.url||((o=n.suggestion)==null?void 0:o.url)||null)&&this.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const n=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(n==null?void 0:n.value)&&(this.linkFormatValue=JSON.parse(n.value))},isInternalLink(n){const t=u.parse(n,!1,!0);return n.indexOf("//")===-1&&n.indexOf("/")===0?!0:n.indexOf("#")===0?!1:t.host?t.host===this.$aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:n,hasAction:t}=window.wp.hooks;t("aioseo-link-format-link-added","aioseo")||n("aioseo-link-format-link-added","aioseo",this.linkAdded)}};var h=function(){var t=this,i=t._self._c;return t.canShowUpsell?i("div",{staticClass:"aioseo-link-assistant-did-you-know"},[i("svg-circle-information"),i("span",{domProps:{innerHTML:t._s(t.strings.upsell)},on:{click:function(s){s.stopPropagation(),t.disabled=!0}}}),i("svg-close",{nativeOn:{click:function(s){return s.stopPropagation(),t.disableLinkAssistantEducation.apply(null,arguments)}}})],1):t._e()},L=[],g=e(_,h,L,!1,null,null,null,null);const A=g.exports,a=()=>{new r({store:f,render:n=>n(A)}).$mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?a():(l("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoLaDidYouKnow"&&a()},{passive:!0})));
