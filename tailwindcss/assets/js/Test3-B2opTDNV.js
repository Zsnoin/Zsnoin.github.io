import{d as e,c as i,a as s,o as a}from"./index-CuQZz92J.js";const n={class:"container mx-auto px-4 py-8"},d=e({__name:"Test3",setup(l){return(r,t)=>(a(),i("div",n,t[0]||(t[0]=[s(`<h1 class="text-3xl font-bold mb-8 text-center text-purple-600 border-b pb-3">Tailwind CSS 形变、过渡与动画</h1><section class="mb-12"><h2 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-purple-500 pl-3">形变 (Transform)</h2><p class="mb-4 text-gray-600">Tailwind CSS 提供了丰富的形变类，让你能够轻松实现平移、旋转、缩放和倾斜效果。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"><div><h3 class="text-xl font-medium mb-3 text-purple-700">基本形变</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-10 flex flex-col items-center"><div class="flex space-x-4 mb-2"><label class="inline-flex items-center"><input type="checkbox" class="toggle-transform form-checkbox" checked><span class="ml-2">启用形变</span></label></div><div class="transform-example"><div class="bg-blue-500 hover:bg-blue-600 w-24 h-24 flex items-center justify-center text-white font-bold transform hover:translate-x-4 hover:translate-y-4 transition duration-300"> 平移 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:translate-x-4 hover:translate-y-4</p></div><div class="transform-example"><div class="bg-green-500 hover:bg-green-600 w-24 h-24 flex items-center justify-center text-white font-bold transform hover:rotate-45 transition duration-300"> 旋转 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:rotate-45</p></div><div class="transform-example"><div class="bg-red-500 hover:bg-red-600 w-24 h-24 flex items-center justify-center text-white font-bold transform hover:scale-125 transition duration-300"> 缩放 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:scale-125</p></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">组合形变</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-10 flex flex-col items-center"><div class="transform-example"><div class="bg-yellow-500 hover:bg-yellow-600 w-24 h-24 flex items-center justify-center text-white font-bold transform hover:skew-x-12 transition duration-300"> 倾斜 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:skew-x-12</p></div><div class="transform-example"><div class="bg-purple-500 hover:bg-purple-600 w-24 h-24 flex items-center justify-center text-white font-bold transform hover:translate-x-2 hover:rotate-12 hover:scale-110 transition duration-300"> 组合 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:translate-x-2 hover:rotate-12 hover:scale-110</p></div><div class="transform-example"><div class="bg-indigo-500 hover:bg-indigo-600 w-24 h-24 flex items-center justify-center text-white font-bold transform origin-top-left hover:rotate-45 transition duration-300"> 原点 </div><p class="text-sm text-gray-600 mt-2 text-center">origin-top-left hover:rotate-45</p></div></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">3D 形变</h3><div class="bg-gray-100 p-6 rounded-lg mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"><div class="transform-example"><div class="bg-teal-500 hover:bg-teal-600 w-32 h-32 flex items-center justify-center text-white font-bold transform hover:rotate-x-180 transition duration-700 perspective-500"> X轴旋转 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:rotate-x-180</p></div><div class="transform-example"><div class="bg-pink-500 hover:bg-pink-600 w-32 h-32 flex items-center justify-center text-white font-bold transform hover:rotate-y-180 transition duration-700 perspective-500"> Y轴旋转 </div><p class="text-sm text-gray-600 mt-2 text-center">hover:rotate-y-180</p></div></div></div></div><div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"><h4 class="font-medium mb-2">形变代码示例:</h4><pre class="bg-gray-800 text-green-300 p-3 rounded overflow-x-auto"><code>&lt;!-- 基本平移 --&gt;
&lt;div class=&quot;transform translate-x-4 translate-y-4&quot;&gt;向右下平移&lt;/div&gt;

&lt;!-- 旋转 --&gt;
&lt;div class=&quot;transform rotate-45&quot;&gt;旋转45度&lt;/div&gt;
&lt;div class=&quot;transform -rotate-45&quot;&gt;逆时针旋转45度&lt;/div&gt;

&lt;!-- 缩放 --&gt;
&lt;div class=&quot;transform scale-150&quot;&gt;放大1.5倍&lt;/div&gt;
&lt;div class=&quot;transform scale-75&quot;&gt;缩小到0.75倍&lt;/div&gt;
&lt;div class=&quot;transform scale-x-110 scale-y-90&quot;&gt;水平拉伸，垂直压缩&lt;/div&gt;

&lt;!-- 倾斜 --&gt;
&lt;div class=&quot;transform skew-x-12&quot;&gt;水平倾斜12度&lt;/div&gt;
&lt;div class=&quot;transform -skew-y-12&quot;&gt;垂直反向倾斜12度&lt;/div&gt;

&lt;!-- 组合形变 --&gt;
&lt;div class=&quot;transform translate-x-4 rotate-6 scale-110&quot;&gt;组合变换&lt;/div&gt;

&lt;!-- 设置形变原点 --&gt;
&lt;div class=&quot;transform origin-top-left rotate-45&quot;&gt;左上角为原点旋转&lt;/div&gt;</code></pre></div></section><section class="mb-12"><h2 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-purple-500 pl-3">过渡 (Transition)</h2><p class="mb-4 text-gray-600">通过过渡效果，可以让元素的变化变得平滑自然，增强用户体验。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"><div><h3 class="text-xl font-medium mb-3 text-purple-700">过渡时长</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-8"><div><div class="bg-blue-500 hover:bg-green-500 w-full h-12 flex items-center justify-center text-white font-bold transition duration-150"> duration-150 (快速) </div></div><div><div class="bg-blue-500 hover:bg-green-500 w-full h-12 flex items-center justify-center text-white font-bold transition duration-300"> duration-300 (中等) </div></div><div><div class="bg-blue-500 hover:bg-green-500 w-full h-12 flex items-center justify-center text-white font-bold transition duration-700"> duration-700 (慢速) </div></div><div><div class="bg-blue-500 hover:bg-green-500 w-full h-12 flex items-center justify-center text-white font-bold transition duration-1000"> duration-1000 (超慢) </div></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">过渡时序函数</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-8"><div><div class="bg-purple-500 hover:translate-x-32 transform w-16 h-12 flex items-center justify-center text-white font-bold transition duration-700 ease-linear"> 线性 </div><p class="text-sm text-gray-600 mt-1">ease-linear</p></div><div><div class="bg-purple-500 hover:translate-x-32 transform w-16 h-12 flex items-center justify-center text-white font-bold transition duration-700 ease-in"> 渐入 </div><p class="text-sm text-gray-600 mt-1">ease-in</p></div><div><div class="bg-purple-500 hover:translate-x-32 transform w-16 h-12 flex items-center justify-center text-white font-bold transition duration-700 ease-out"> 渐出 </div><p class="text-sm text-gray-600 mt-1">ease-out</p></div><div><div class="bg-purple-500 hover:translate-x-32 transform w-16 h-12 flex items-center justify-center text-white font-bold transition duration-700 ease-in-out"> 渐入渐出 </div><p class="text-sm text-gray-600 mt-1">ease-in-out</p></div></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">过渡属性</h3><div class="bg-gray-100 p-6 rounded-lg mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white p-4 rounded shadow-sm hover:shadow-xl hover:scale-105 transform transition-all duration-300"><div class="font-bold mb-2">transition-all</div><p class="text-sm text-gray-600">所有属性都会过渡</p></div><div class="bg-white p-4 rounded border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-300"><div class="font-bold mb-2">transition-colors</div><p class="text-sm text-gray-600">只有颜色相关属性会过渡</p></div><div class="bg-white p-4 rounded opacity-70 hover:opacity-100 transition-opacity duration-300"><div class="font-bold mb-2">transition-opacity</div><p class="text-sm text-gray-600">只有透明度会过渡</p></div><div class="bg-white p-4 rounded shadow-sm hover:shadow-xl transition-shadow duration-300"><div class="font-bold mb-2">transition-shadow</div><p class="text-sm text-gray-600">只有阴影会过渡</p></div></div></div></div><div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"><h4 class="font-medium mb-2">延迟过渡:</h4><div class="flex flex-wrap gap-4 mb-4"><div class="bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white transition duration-300 delay-150"> delay-150 </div><div class="bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white transition duration-300 delay-300"> delay-300 </div><div class="bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white transition duration-300 delay-500"> delay-500 </div><div class="bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white transition duration-300 delay-700"> delay-700 </div></div><h4 class="font-medium mb-2">过渡代码示例:</h4><pre class="bg-gray-800 text-green-300 p-3 rounded overflow-x-auto"><code>&lt;!-- 基本过渡 --&gt;
&lt;div class=&quot;transition duration-300&quot;&gt;基本过渡，持续300ms&lt;/div&gt;

&lt;!-- 不同时长 --&gt;
&lt;div class=&quot;transition duration-150&quot;&gt;快速过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-300&quot;&gt;中等过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-700&quot;&gt;慢速过渡&lt;/div&gt;

&lt;!-- 时序函数 --&gt;
&lt;div class=&quot;transition duration-300 ease-linear&quot;&gt;线性过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-300 ease-in&quot;&gt;渐入过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-300 ease-out&quot;&gt;渐出过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-300 ease-in-out&quot;&gt;渐入渐出过渡&lt;/div&gt;

&lt;!-- 指定过渡属性 --&gt;
&lt;div class=&quot;transition-all duration-300&quot;&gt;所有属性过渡&lt;/div&gt;
&lt;div class=&quot;transition-colors duration-300&quot;&gt;只过渡颜色&lt;/div&gt;
&lt;div class=&quot;transition-opacity duration-300&quot;&gt;只过渡透明度&lt;/div&gt;
&lt;div class=&quot;transition-shadow duration-300&quot;&gt;只过渡阴影&lt;/div&gt;
&lt;div class=&quot;transition-transform duration-300&quot;&gt;只过渡变换&lt;/div&gt;

&lt;!-- 延迟过渡 --&gt;
&lt;div class=&quot;transition duration-300 delay-150&quot;&gt;延迟150ms后过渡&lt;/div&gt;
&lt;div class=&quot;transition duration-300 delay-500&quot;&gt;延迟500ms后过渡&lt;/div&gt;</code></pre></div></section><section class="mb-12"><h2 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-purple-500 pl-3">动画 (Animation)</h2><p class="mb-4 text-gray-600">Tailwind CSS 提供了一系列预设动画，可以让元素更加生动。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"><div><h3 class="text-xl font-medium mb-3 text-purple-700">基础动画</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-10 flex flex-col items-center"><div class="text-center"><div class="animate-spin inline-block w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div><p class="text-sm text-gray-600 mt-2">animate-spin</p></div><div class="text-center"><div class="animate-pulse inline-block w-12 h-12 bg-red-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">animate-pulse</p></div><div class="text-center"><div class="animate-bounce inline-block w-12 h-12 bg-green-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">animate-bounce</p></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">自定义动画</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-10 flex flex-col items-center"><div class="text-center"><div class="animate-wiggle inline-block w-12 h-12 bg-blue-500 rounded"></div><p class="text-sm text-gray-600 mt-2">animate-wiggle (自定义)</p></div><div class="text-center"><div class="animate-slideIn w-32 h-12 bg-yellow-500 rounded flex items-center justify-center text-white"> 滑入 </div><p class="text-sm text-gray-600 mt-2">animate-slideIn (自定义)</p></div><div class="text-center"><div class="animate-blink inline-block w-12 h-12 bg-pink-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">animate-blink (自定义)</p></div></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">动画控制</h3><div class="bg-gray-100 p-6 rounded-lg mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"><div class="text-center"><div class="animate-bounce inline-block w-12 h-12 bg-indigo-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">默认无限循环</p></div><div class="text-center"><div class="animate-bounce animation-iteration-3 inline-block w-12 h-12 bg-teal-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">animation-iteration-3 (播放3次)</p></div><div class="text-center"><div class="animate-bounce animation-delay-1000 inline-block w-12 h-12 bg-amber-500 rounded-full"></div><p class="text-sm text-gray-600 mt-2">animation-delay-1000</p></div><div class="text-center"><div class="animate-slideIn animation-fill-forwards w-32 h-12 bg-emerald-500 rounded flex items-center justify-center text-white"> 保持最终状态 </div><p class="text-sm text-gray-600 mt-2">animation-fill-forwards</p></div><div class="text-center"><div class="animate-spin hover:animation-paused inline-block w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full"></div><p class="text-sm text-gray-600 mt-2">hover:animation-paused (悬停暂停)</p></div><div class="text-center"><div class="animate-slideIn animation-reverse w-32 h-12 bg-rose-500 rounded flex items-center justify-center text-white"> 反向动画 </div><p class="text-sm text-gray-600 mt-2">animation-reverse</p></div></div></div></div><div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"><h4 class="font-medium mb-2">加载动画示例:</h4><div class="flex items-center gap-6 mb-6"><div class="flex items-center gap-3"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div><span>加载中...</span></div><div class="flex gap-1"><div class="w-2 h-6 bg-indigo-500 animate-[bounce_1s_infinite_0.1s]"></div><div class="w-2 h-6 bg-indigo-500 animate-[bounce_1s_infinite_0.2s]"></div><div class="w-2 h-6 bg-indigo-500 animate-[bounce_1s_infinite_0.3s]"></div><div class="w-2 h-6 bg-indigo-500 animate-[bounce_1s_infinite_0.4s]"></div><div class="w-2 h-6 bg-indigo-500 animate-[bounce_1s_infinite_0.5s]"></div></div><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"><span class="animate-pulse">点击提交</span></button></div><h4 class="font-medium mb-2">动画代码示例:</h4><pre class="bg-gray-800 text-green-300 p-3 rounded overflow-x-auto"><code>&lt;!-- 内置基础动画 --&gt;
&lt;div class=&quot;animate-spin&quot;&gt;旋转动画&lt;/div&gt;
&lt;div class=&quot;animate-pulse&quot;&gt;脉动动画&lt;/div&gt;
&lt;div class=&quot;animate-bounce&quot;&gt;弹跳动画&lt;/div&gt;

&lt;!-- 自定义动画 (需要在tailwind.config.js中定义) --&gt;
extend: {
  keyframes: {
    wiggle: {
      &#39;0%, 100%&#39;: { transform: &#39;rotate(-3deg)&#39; },
      &#39;50%&#39;: { transform: &#39;rotate(3deg)&#39; },
    },
    slideIn: {
      &#39;0%&#39;: { transform: &#39;translateX(-100%)&#39; },
      &#39;100%&#39;: { transform: &#39;translateX(0)&#39; },
    },
    blink: {
      &#39;0%, 100%&#39;: { opacity: 1 },
      &#39;50%&#39;: { opacity: 0 },
    },
  },
  animation: {
    wiggle: &#39;wiggle 1s ease-in-out infinite&#39;,
    slideIn: &#39;slideIn 0.5s ease-out&#39;,
    blink: &#39;blink 1s step-end infinite&#39;,
  },
},

&lt;!-- 使用自定义动画 --&gt;
&lt;div class=&quot;animate-wiggle&quot;&gt;摇晃效果&lt;/div&gt;
&lt;div class=&quot;animate-slideIn&quot;&gt;滑入效果&lt;/div&gt;
&lt;div class=&quot;animate-blink&quot;&gt;闪烁效果&lt;/div&gt;

&lt;!-- 高级动画控制 --&gt;
&lt;div class=&quot;animate-bounce animation-iteration-3&quot;&gt;只弹跳3次&lt;/div&gt;
&lt;div class=&quot;animate-spin animation-delay-1000&quot;&gt;延迟1秒开始旋转&lt;/div&gt;
&lt;div class=&quot;animate-pulse animation-fill-forwards&quot;&gt;保持最终状态&lt;/div&gt;
&lt;div class=&quot;animate-spin hover:animation-paused&quot;&gt;悬停时暂停旋转&lt;/div&gt;</code></pre></div></section><section class="mb-12"><h2 class="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-purple-500 pl-3">实际应用案例</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"><div><h3 class="text-xl font-medium mb-3 text-purple-700">悬浮卡片效果</h3><div class="p-2"><div class="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"><div class="aspect-video bg-gray-200 rounded-t-lg"></div><div class="p-4"><h4 class="font-bold text-lg mb-2">卡片标题</h4><p class="text-gray-600">卡片内容描述，悬停时卡片会轻微上浮并增加阴影。</p><button class="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"> 了解更多 </button></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">按钮动效</h3><div class="bg-gray-100 p-6 rounded-lg"><div class="space-y-6"><button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300 relative"><span class="z-10 relative">主要按钮</span><span class="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30"></span></button><button class="bg-teal-500 hover:bg-teal-600 hover:scale-110 transform text-white px-6 py-3 rounded font-medium shadow-md transition-all duration-300 block w-full"> 放大按钮 </button><button class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded font-medium shadow-md transition-all duration-300 group block w-full"><span class="flex items-center justify-center"> 前往下一步 <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span></button></div></div></div></div><div><h3 class="text-xl font-medium mb-3 text-purple-700">导航菜单交互</h3><div class="bg-white p-4 rounded-lg shadow mb-6"><nav><ul class="flex space-x-1"><li><a href="#" class="group px-4 py-2 flex items-center relative overflow-hidden"><span class="relative z-10 text-gray-800 group-hover:text-purple-600 transition-colors">首页</span><span class="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li><li><a href="#" class="group px-4 py-2 flex items-center relative overflow-hidden"><span class="relative z-10 text-gray-800 group-hover:text-purple-600 transition-colors">产品</span><span class="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li><li><a href="#" class="group px-4 py-2 flex items-center relative overflow-hidden"><span class="relative z-10 text-gray-800 group-hover:text-purple-600 transition-colors">服务</span><span class="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li><li><a href="#" class="group px-4 py-2 flex items-center relative overflow-hidden"><span class="relative z-10 text-gray-800 group-hover:text-purple-600 transition-colors">联系我们</span><span class="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></a></li></ul></nav></div><div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500"><h4 class="font-medium mb-2">Tailwind.config.js 自定义动画配置:</h4><pre class="bg-gray-800 text-green-300 p-3 rounded overflow-x-auto"><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          &#39;0%, 100%&#39;: { transform: &#39;rotate(-3deg)&#39; },
          &#39;50%&#39;: { transform: &#39;rotate(3deg)&#39; },
        },
        slideIn: {
          &#39;0%&#39;: { transform: &#39;translateX(-100%)&#39; },
          &#39;100%&#39;: { transform: &#39;translateX(0)&#39; },
        },
        blink: {
          &#39;0%, 100%&#39;: { opacity: 1 },
          &#39;50%&#39;: { opacity: 0 },
        },
      },
      animation: {
        wiggle: &#39;wiggle 1s ease-in-out infinite&#39;,
        slideIn: &#39;slideIn 0.5s ease-out&#39;,
        blink: &#39;blink 1s step-end infinite&#39;,
      },
    },
  },
  variants: {
    extend: {
      animation: [&#39;hover&#39;, &#39;focus&#39;, &#39;group-hover&#39;],
    },
  },
}</code></pre></div></div></section><div class="text-center text-gray-500 mt-12 mb-6"><p>Tailwind CSS 让形变、过渡和动画的实现变得简单直观。</p><p class="mt-2">查看 <a href="https://tailwindcss.com/docs/animation" target="_blank" class="text-purple-600 hover:underline">官方文档</a> 了解更多详情。</p></div>`,6)])))}});export{d as default};
