webpackJsonp([37,194],{500:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u5982\u679c\u9700\u8981\u52a8\u6001\u589e\u52a0\u6216\u5220\u9664tab\u7684\u8bdd\u9700\u8981\u5728\u6700\u5916\u5c42\u7684tabs\u7ec4\u4ef6\u989d\u5916\u7ed1\u5b9aheaders\u5c5e\u6027"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u52a8\u6001\u7ed1\u5b9a","en-US":"dynamic"},filename:"src/components/Tabs/demo/dynamic.md",id:"src-components-Tabs-demo-dynamic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-tabs</span> <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>apps<span class="token punctuation">"</span></span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onTabChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-tab</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app</span> <span class="token attr-name">in</span> <span class="token attr-name">apps"</span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app.appname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">{</span>app<span class="token punctuation">.</span>appname<span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-tab</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-tabs</span><span class="token punctuation">></span></span>\n<span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"deleteTab"</span> <span class="token punctuation">:</span>style<span class="token operator">=</span><span class="token string">"{marginTop:\'20px\'}"</span><span class="token operator">></span>\u5220\u9664\u7b2c\u4e8c\u4e2atab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n<span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"changeTab"</span> <span class="token punctuation">:</span>style<span class="token operator">=</span><span class="token string">"{marginTop:\'20px\'}"</span><span class="token operator">></span>\u6fc0\u6d3b\u7b2c\u4e09\u4e2atab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>'}],preview:'<v-tabs :headers="apps" :active="active" @change="onTabChange">\n  <v-tab v-for="app in apps" :header="app.appname">\n    <p>\n      {{app.appname}}\n    </p>\n  </v-tab>\n</v-tabs>\n<v-button @click.native="deleteTab" :style="{marginTop:\'20px\'}">\u5220\u9664\u7b2c\u4e8c\u4e2atab</v-button>\n<v-button @click.native="changeTab" :style="{marginTop:\'20px\'}">\u6fc0\u6d3b\u7b2c\u4e09\u4e2atab</v-button>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vButton: atui.Button,\n    vTabs: atui.Tabset,\n    vTab: atui.Tabset.Tab\n  },\n  data() {\n    return {\n      active: 0,\n      apps: [\n        {\n          appname: '\u5927\u4e8e'\n        },\n        {\n          appname: '\u76f4\u5145'\n        },\n        {\n          appname: '\u7f51\u5385'\n        }\n      ]\n    }\n  },\n  methods: {\n    deleteTab() {\n      this.apps.splice(1,1)\n    },\n    changeTab() {\n      this.active = 2\n    },\n    onTabChange(currIndex) {\n      console.log(currIndex)\n    }\n  }\n})"}}});