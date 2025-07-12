import{d as n,e as v,f as g,c as b,a as l,b as d,j as a,F as c,r as p,t as f,o as i}from"./index-CuQZz92J.js";import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";const x={class:"container mx-auto py-8 px-4 max-w-6xl"},u={class:"mb-12 bg-white rounded-lg shadow-md p-6"},h={class:"space-y-6"},y={class:"bg-gray-50 p-4 rounded-lg"},w={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},q={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2"},k=n({__name:"Test5",setup(S){const e=v("未检测"),o=()=>{const s=window.innerWidth;s<640?e.value="默认 (< 640px)":s<768?e.value="sm (≥ 640px)":s<1024?e.value="md (≥ 768px)":s<1280?e.value="lg (≥ 1024px)":s<1536?e.value="xl (≥ 1280px)":e.value="2xl (≥ 1536px)"};return g(()=>{o(),window.addEventListener("resize",o)}),(s,t)=>(i(),b("div",x,[t[7]||(t[7]=l(`<h1 class="text-3xl font-bold mb-8 text-center text-indigo-700" data-v-7b0d0f26>Tailwind CSS 4.0 响应式设计</h1><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-7b0d0f26><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-7b0d0f26>响应式设计基础</h2><div class="space-y-6" data-v-7b0d0f26><p class="text-gray-700" data-v-7b0d0f26>Tailwind CSS 提供了强大的响应式设计工具，使用简单的前缀可以为不同屏幕尺寸应用不同样式。</p><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>1. 默认响应式断点</h3><p class="mb-4" data-v-7b0d0f26>Tailwind CSS 4.0 包含以下默认断点:</p><div class="overflow-x-auto" data-v-7b0d0f26><table class="min-w-full bg-white border border-gray-300" data-v-7b0d0f26><thead data-v-7b0d0f26><tr data-v-7b0d0f26><th class="py-2 px-4 border-b border-gray-300 text-left" data-v-7b0d0f26>断点前缀</th><th class="py-2 px-4 border-b border-gray-300 text-left" data-v-7b0d0f26>最小宽度</th><th class="py-2 px-4 border-b border-gray-300 text-left" data-v-7b0d0f26>CSS</th></tr></thead><tbody data-v-7b0d0f26><tr data-v-7b0d0f26><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>sm</code></td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26>640px</td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>@media (min-width: 640px) { ... }</code></td></tr><tr data-v-7b0d0f26><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>md</code></td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26>768px</td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>@media (min-width: 768px) { ... }</code></td></tr><tr data-v-7b0d0f26><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>lg</code></td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26>1024px</td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>@media (min-width: 1024px) { ... }</code></td></tr><tr data-v-7b0d0f26><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>xl</code></td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26>1280px</td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>@media (min-width: 1280px) { ... }</code></td></tr><tr data-v-7b0d0f26><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>2xl</code></td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26>1536px</td><td class="py-2 px-4 border-b border-gray-300" data-v-7b0d0f26><code data-v-7b0d0f26>@media (min-width: 1536px) { ... }</code></td></tr></tbody></table></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>2. 响应式前缀使用</h3><p class="mb-4" data-v-7b0d0f26>在类名前添加断点前缀（如 <code data-v-7b0d0f26>md:</code>），只有在该断点及以上屏幕尺寸才会应用样式。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>响应式示例：</h4><div class="bg-blue-100 p-4 rounded" data-v-7b0d0f26><div class="bg-white p-4 rounded shadow-sm text-center font-medium text-red-500 sm:text-blue-500 md:text-green-500 lg:text-purple-500 xl:text-orange-500 2xl:text-teal-500" data-v-7b0d0f26> 调整浏览器大小查看变化 </div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 默认: 红色 <br data-v-7b0d0f26> sm (≥640px): 蓝色 <br data-v-7b0d0f26> md (≥768px): 绿色 <br data-v-7b0d0f26> lg (≥1024px): 紫色 <br data-v-7b0d0f26> xl (≥1280px): 橙色 <br data-v-7b0d0f26> 2xl (≥1536px): 蓝绿色 </p></div></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;text-red-500 sm:text-blue-500 md:text-green-500 
            lg:text-purple-500 xl:text-orange-500 
            2xl:text-teal-500&quot;&gt;
  调整浏览器大小查看变化
&lt;/div&gt;</pre></div></div></div></div></section>`,2)),d("section",u,[t[6]||(t[6]=d("h2",{class:"text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2"},"响应式布局案例",-1)),d("div",h,[d("div",y,[t[3]||(t[3]=d("h3",{class:"text-lg font-medium mb-3 text-indigo-500"},"1. 响应式网格布局",-1)),t[4]||(t[4]=d("p",{class:"mb-4"},[a("使用 "),d("code",null,"grid-cols-{n}"),a(" 结合响应式前缀创建适应不同屏幕的网格布局。")],-1)),d("div",w,[d("div",null,[t[0]||(t[0]=d("h4",{class:"font-medium mb-2"},"效果示例：",-1)),d("div",q,[(i(),b(c,null,p(12,r=>d("div",{key:r,class:"bg-indigo-500 h-12 rounded-md flex items-center justify-center text-white font-bold"},f(r),1)),64))]),t[1]||(t[1]=d("p",{class:"mt-2 text-sm text-gray-600"},[a(" 默认: 1列 "),d("br"),a(" sm: 2列 "),d("br"),a(" md: 3列 "),d("br"),a(" lg: 4列 "),d("br"),a(" xl: 6列 ")],-1))]),t[2]||(t[2]=d("div",null,[d("h4",{class:"font-medium mb-2"},"代码示例："),d("pre",{class:"bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto"},`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 xl:grid-cols-6 gap-2">
  <div v-for="i in 12" :key="i" 
      class="bg-indigo-500 h-12 rounded-md flex 
             items-center justify-center text-white font-bold">
   
  </div>
</div>`)],-1))])]),t[5]||(t[5]=l(`<div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>2. 响应式 Flex 方向</h3><p class="mb-4" data-v-7b0d0f26>结合 <code data-v-7b0d0f26>flex-{direction}</code> 和响应式前缀实现在不同屏幕上改变 flex 方向。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>效果示例：</h4><div class="flex flex-col md:flex-row gap-2 bg-gray-100 p-2 rounded" data-v-7b0d0f26><div class="bg-blue-500 p-4 rounded text-white font-bold" data-v-7b0d0f26>项目 1</div><div class="bg-blue-500 p-4 rounded text-white font-bold" data-v-7b0d0f26>项目 2</div><div class="bg-blue-500 p-4 rounded text-white font-bold" data-v-7b0d0f26>项目 3</div></div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 默认 (窄屏): 纵向排列 <br data-v-7b0d0f26> md 及以上: 横向排列 </p></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;flex flex-col md:flex-row gap-2&quot;&gt;
  &lt;div class=&quot;bg-blue-500 p-4 rounded text-white font-bold&quot;&gt;
    项目 1
  &lt;/div&gt;
  &lt;div class=&quot;bg-blue-500 p-4 rounded text-white font-bold&quot;&gt;
    项目 2
  &lt;/div&gt;
  &lt;div class=&quot;bg-blue-500 p-4 rounded text-white font-bold&quot;&gt;
    项目 3
  &lt;/div&gt;
&lt;/div&gt;</pre></div></div></div>`,1))])]),t[8]||(t[8]=l(`<section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-7b0d0f26><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-7b0d0f26>高级响应式功能</h2><div class="space-y-6" data-v-7b0d0f26><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>1. 响应式显示/隐藏元素</h3><p class="mb-4" data-v-7b0d0f26>使用 <code data-v-7b0d0f26>hidden</code> 和 <code data-v-7b0d0f26>block</code> 等类结合响应式前缀控制元素可见性。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>效果示例：</h4><div class="bg-gray-100 p-4 rounded" data-v-7b0d0f26><div class="hidden sm:block md:hidden lg:block bg-green-200 p-2 mb-2 rounded" data-v-7b0d0f26> 在 sm 和 lg 以上显示，在 md 隐藏 </div><div class="block sm:hidden md:block lg:hidden bg-red-200 p-2 rounded" data-v-7b0d0f26> 在默认和 md 显示，在 sm 和 lg 以上隐藏 </div></div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 调整浏览器大小查看元素的显示和隐藏 </p></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;hidden sm:block md:hidden lg:block 
            bg-green-200 p-2 mb-2 rounded&quot;&gt;
  在 sm 和 lg 以上显示，在 md 隐藏
&lt;/div&gt;

&lt;div class=&quot;block sm:hidden md:block lg:hidden 
            bg-red-200 p-2 rounded&quot;&gt;
  在默认和 md 显示，在 sm 和 lg 以上隐藏
&lt;/div&gt;</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>2. 自定义响应式断点</h3><p class="mb-4" data-v-7b0d0f26>Tailwind CSS 4.0 允许在配置文件中定制自己的断点。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      &#39;xs&#39;: &#39;480px&#39;,
      &#39;sm&#39;: &#39;640px&#39;,
      &#39;md&#39;: &#39;768px&#39;,
      &#39;lg&#39;: &#39;1024px&#39;,
      &#39;xl&#39;: &#39;1280px&#39;,
      &#39;2xl&#39;: &#39;1536px&#39;,
      &#39;tablet&#39;: &#39;992px&#39;,
      &#39;desktop&#39;: &#39;1200px&#39;,
      &#39;wide&#39;: &#39;1440px&#39;,
    }
  }
}</pre></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>使用示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;text-sm xs:text-base tablet:text-lg desktop:text-xl 
            wide:text-2xl&quot;&gt;
  使用自定义断点调整文本大小
&lt;/div&gt;

&lt;div class=&quot;grid grid-cols-1 tablet:grid-cols-2 
            desktop:grid-cols-3 wide:grid-cols-4&quot;&gt;
  使用自定义断点的网格布局
&lt;/div&gt;</pre></div></div></div></div></section><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-7b0d0f26><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-7b0d0f26>高级媒体查询</h2><div class="space-y-6" data-v-7b0d0f26><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>1. 暗黑模式响应</h3><p class="mb-4" data-v-7b0d0f26>使用 <code data-v-7b0d0f26>dark:</code> 变体根据用户系统偏好应用暗黑模式样式。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>效果示例：</h4><div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" data-v-7b0d0f26><h5 class="text-gray-900 dark:text-white font-medium" data-v-7b0d0f26>支持暗黑模式的卡片</h5><p class="text-gray-700 dark:text-gray-300 mt-2" data-v-7b0d0f26> 此元素根据系统偏好自动切换明暗模式。 </p></div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 注意：需要在系统设置中切换暗黑模式查看效果 </p></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;p-4 bg-white dark:bg-gray-800 rounded-lg 
            border border-gray-200 dark:border-gray-700&quot;&gt;
  &lt;h5 class=&quot;text-gray-900 dark:text-white font-medium&quot;&gt;
    支持暗黑模式的卡片
  &lt;/h5&gt;
  &lt;p class=&quot;text-gray-700 dark:text-gray-300 mt-2&quot;&gt;
    此元素根据系统偏好自动切换明暗模式。
  &lt;/p&gt;
&lt;/div&gt;</pre><p class="mt-2 text-sm" data-v-7b0d0f26>配置暗黑模式:</p><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto mt-2" data-v-7b0d0f26>// tailwind.config.js
module.exports = {
  darkMode: &#39;media&#39;, // 使用操作系统偏好
  // 或者
  darkMode: &#39;class&#39;, // 使用类名手动控制
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>2. 方向响应设计</h3><p class="mb-4" data-v-7b0d0f26>使用 <code data-v-7b0d0f26>portrait:</code> 和 <code data-v-7b0d0f26>landscape:</code> 变体响应设备方向。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>效果示例：</h4><div class="bg-gray-100 p-4 rounded" data-v-7b0d0f26><div class="bg-blue-200 portrait:bg-green-200 landscape:bg-purple-200 p-4 rounded" data-v-7b0d0f26><p class="portrait:block landscape:hidden" data-v-7b0d0f26>当前是竖屏模式</p><p class="portrait:hidden landscape:block" data-v-7b0d0f26>当前是横屏模式</p></div></div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 旋转设备查看效果（在移动设备上更明显） </p></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;bg-blue-200 portrait:bg-green-200 
            landscape:bg-purple-200 p-4 rounded&quot;&gt;
  &lt;p class=&quot;portrait:block landscape:hidden&quot;&gt;
    当前是竖屏模式
  &lt;/p&gt;
  &lt;p class=&quot;portrait:hidden landscape:block&quot;&gt;
    当前是横屏模式
  &lt;/p&gt;
&lt;/div&gt;</pre><p class="mt-2 text-sm" data-v-7b0d0f26>配置方向变体:</p><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto mt-2" data-v-7b0d0f26>// tailwind.config.js
module.exports = {
  plugins: [
    require(&#39;@tailwindcss/orientation&#39;)
  ]
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>3. 打印媒体查询</h3><p class="mb-4" data-v-7b0d0f26>使用 <code data-v-7b0d0f26>print:</code> 变体控制打印时的样式。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>效果示例：</h4><div class="bg-blue-100 p-4 print:bg-white print:p-0 rounded print:rounded-none border border-blue-200 print:border-0" data-v-7b0d0f26><h5 class="text-xl font-bold print:text-black" data-v-7b0d0f26>打印优化标题</h5><p class="mt-2 print:text-black" data-v-7b0d0f26>这段文本在打印时会使用黑色，没有背景色。</p><button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded print:hidden" data-v-7b0d0f26> 打印时隐藏的按钮 </button><div class="hidden print:block mt-4 text-gray-800" data-v-7b0d0f26> 仅在打印时显示的页脚信息 </div></div><p class="mt-2 text-sm text-gray-600" data-v-7b0d0f26> 尝试打印此页面（或使用打印预览）查看效果 </p></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;bg-blue-100 p-4 print:bg-white print:p-0 
            rounded print:rounded-none 
            border border-blue-200 print:border-0&quot;&gt;
  &lt;h5 class=&quot;text-xl font-bold print:text-black&quot;&gt;
    打印优化标题
  &lt;/h5&gt;
  &lt;p class=&quot;mt-2 print:text-black&quot;&gt;
    这段文本在打印时会使用黑色，没有背景色。
  &lt;/p&gt;
  &lt;button class=&quot;mt-4 bg-blue-500 text-white px-4 py-2 
                 rounded print:hidden&quot;&gt;
    打印时隐藏的按钮
  &lt;/button&gt;
  &lt;div class=&quot;hidden print:block mt-4 text-gray-800&quot;&gt;
    仅在打印时显示的页脚信息
  &lt;/div&gt;
&lt;/div&gt;</pre></div></div></div></div></section><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-7b0d0f26><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-7b0d0f26>响应式模式策略</h2><div class="space-y-6" data-v-7b0d0f26><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>1. 移动优先设计</h3><p class="mb-4" data-v-7b0d0f26>Tailwind 采用移动优先设计模式，默认样式针对小屏幕，使用断点前缀为大屏幕设置样式。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>良好实践示例：</h4><div class="bg-white p-4 rounded shadow-sm" data-v-7b0d0f26><div class="flex flex-col md:flex-row gap-4" data-v-7b0d0f26><div class="w-full md:w-1/3 bg-gray-100 p-4 rounded" data-v-7b0d0f26> 侧边栏（移动端为全宽） </div><div class="w-full md:w-2/3 bg-gray-100 p-4 rounded" data-v-7b0d0f26> 主要内容（移动端为全宽） </div></div></div></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>&lt;div class=&quot;flex flex-col md:flex-row gap-4&quot;&gt;
  &lt;div class=&quot;w-full md:w-1/3 bg-gray-100 p-4 rounded&quot;&gt;
    侧边栏（移动端为全宽）
  &lt;/div&gt;
  &lt;div class=&quot;w-full md:w-2/3 bg-gray-100 p-4 rounded&quot;&gt;
    主要内容（移动端为全宽）
  &lt;/div&gt;
&lt;/div&gt;</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-7b0d0f26><h3 class="text-lg font-medium mb-3 text-indigo-500" data-v-7b0d0f26>2. 响应式容器</h3><p class="mb-4" data-v-7b0d0f26>Tailwind 的 <code data-v-7b0d0f26>container</code> 类可以配合响应式断点使用。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b0d0f26><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>示例:</h4><div class="bg-blue-50 p-4 rounded" data-v-7b0d0f26><div class="container mx-auto px-4 py-2 bg-blue-100 rounded text-center" data-v-7b0d0f26> 容器宽度会根据屏幕尺寸变化 </div></div></div><div data-v-7b0d0f26><h4 class="font-medium mb-2" data-v-7b0d0f26>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-7b0d0f26>// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: &#39;1rem&#39;,
        sm: &#39;2rem&#39;,
        lg: &#39;4rem&#39;,
        xl: &#39;5rem&#39;,
        &#39;2xl&#39;: &#39;6rem&#39;,
      },
    },
  },
}</pre><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto mt-2" data-v-7b0d0f26>&lt;div class=&quot;container mx-auto&quot;&gt;
  容器内容
&lt;/div&gt;</pre></div></div></div></div></section>`,3))]))}}),_=m(k,[["__scopeId","data-v-7b0d0f26"]]);export{_ as default};
