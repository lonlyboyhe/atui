webpackJsonp([58,194],{479:function(n,s){"use strict";n.exports={content:{"zh-CN":[["p","\u8981\u663e\u793a\u7684\u65f6\u5019show\u5fc5\u987b\u4f20\uff0c\u5426\u5219\u662f\u4e0d\u663e\u793a\u72b6\u6001"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Spin/demo/basic.md",id:"src-components-Spin-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spin</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spin</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>\n<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"show = !show"</span><span class="token operator">></span>\u70b9\u6211<span class="token punctuation">{</span><span class="token punctuation">{</span>show <span class="token operator">?</span> <span class="token string">\'\u9690\u85cf\'</span> <span class="token punctuation">:</span> <span class="token string">\'\u663e\u793a\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>'}],preview:"<spin :show=\"show\"></spin>\n<br/>\n<button @click=\"show = !show\">\u70b9\u6211{{show ? '\u9690\u85cf' : '\u663e\u793a'}}</button>",vueScript:"new Vue({\n  el: 'body',\n  components: {\n    spin: atui.Spin\n  },\n  data () {\n    return { show: false }\n  }\n})"}}});