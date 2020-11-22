import{g as n,f as a,C as s}from"./common-fa165784.js";const t='{"title":"Examples","frontmatter":{},"headers":[{"level":2,"title":"Basic Example","slug":"basic-example"},{"level":2,"title":"Breakpoints","slug":"breakpoints"}],"relativePath":"examples.md","lastUpdated":1605984200336.115}';var p={};const o=s('<h1 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h1><h2 id="basic-example"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic Example</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:items-to-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:wrap-around</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ slide }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token string">&#39;vue3-carousel/dist/carousel.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Navigation<span class="token punctuation">,</span> Slide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-carousel&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Carousel<span class="token punctuation">,</span>\n    Slide<span class="token punctuation">,</span>\n    Pagination<span class="token punctuation">,</span>\n    Navigation<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="breakpoints"><a class="header-anchor" href="#breakpoints" aria-hidden="true">#</a> Breakpoints</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:settings</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>settings<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:breakpoints</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breakpoints<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ slide }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token string">&#39;vue3-carousel/dist/carousel.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Navigation<span class="token punctuation">,</span> Slide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-carousel&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Carousel<span class="token punctuation">,</span>\n    Slide<span class="token punctuation">,</span>\n    Pagination<span class="token punctuation">,</span>\n    Navigation<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// carousel settings</span>\n    settings<span class="token operator">:</span> <span class="token punctuation">{</span>\n      itemsToShow<span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span>\n      wrapAround<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      snapAlign<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// breakpoints are mobile first</span>\n    <span class="token comment">// any settings not specified will fallback to the carousel settings</span>\n    breakpoints<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 700px and up</span>\n      <span class="token number">700</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        itemsToShow<span class="token operator">:</span> <span class="token number">3.5</span><span class="token punctuation">,</span>\n        snapAlign<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 1024 and up</span>\n      <span class="token number">1024</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        itemsToShow<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        wrapAround<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        snapAlign<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',5);p.render=function(s,t,p,e,c,l){return a(),n("div",null,[o])};export default p;export{t as __pageData};