import{g as n,f as a,C as s}from"./common-fa165784.js";const t='{"title":"Getting started","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Basic Using","slug":"basic-using"},{"level":2,"title":"Available Props","slug":"available-props"}],"relativePath":"getting-started.md","lastUpdated":1605984183399.3433}';var p={};const e=s('<h1 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h1><h2 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First step is to install it using <code>yarn</code> or <code>npm</code>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vue3-carousel\n\n<span class="token comment"># or use yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> vue3-carousel\n</code></pre></div><h2 id="basic-using"><a class="header-anchor" href="#basic-using" aria-hidden="true">#</a> Basic Using</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:items-to-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      {{ slide }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vue3-carousel/dist/carousel.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> Slide<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Navigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-carousel&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Carousel<span class="token punctuation">,</span>\n    Slide<span class="token punctuation">,</span>\n    Pagination<span class="token punctuation">,</span>\n    Navigation<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="available-props"><a class="header-anchor" href="#available-props" aria-hidden="true">#</a> Available Props</h2><table><thead><tr><th>Prop</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>itemsToShow</code></td><td>1</td><td>count of items to showed per view (can be a fraction).</td></tr><tr><td><code>initialSlide</code></td><td>0</td><td>index number of the initial slide.</td></tr><tr><td><code>wrapAround</code></td><td>false</td><td>enable infinite scrolling mode.</td></tr><tr><td><code>snapAlign</code></td><td>&#39;center&#39;</td><td>controls the carousel position alignment, can be &#39;start&#39;, &#39;end&#39;, or &#39;center&#39;</td></tr><tr><td><code>transition</code></td><td>300</td><td>sliding transition time in ms.</td></tr><tr><td><code>settings</code></td><td>{ }</td><td>an object to pass all settings.</td></tr><tr><td><code>breakpoints</code></td><td>null</td><td>an object to pass all the breakpoints settings.</td></tr></tbody></table>',8);p.render=function(s,t,p,o,c,l){return a(),n("div",null,[e])};export default p;export{t as __pageData};