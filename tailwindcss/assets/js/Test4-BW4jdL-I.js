import{d,c as t,a as b,o as s}from"./index-Dj7dwSaO.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";const c={class:"container mx-auto py-8 px-4 max-w-6xl"},i=d({__name:"Test4",setup(n){return(l,a)=>(s(),t("div",c,a[0]||(a[0]=[b(`<h1 class="text-3xl font-bold mb-8 text-center text-indigo-700" data-v-436ca7bb>Tailwind CSS 4.0 进阶特性</h1><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-436ca7bb><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-436ca7bb>样式复用</h2><div class="space-y-4" data-v-436ca7bb><p class="text-gray-700" data-v-436ca7bb>Tailwind CSS 提供多种方式来复用样式，避免重复编写相同的类名组合。</p><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>1. 使用 @apply 指令</h3><p class="mb-2" data-v-436ca7bb>通过 @apply 指令，可以在 CSS 中复用 Tailwind 类。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>实际效果：</h4><button class="btn-primary" data-v-436ca7bb>主要按钮</button><button class="btn-secondary ml-2" data-v-436ca7bb>次要按钮</button></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white 
         font-bold py-2 px-4 rounded;
}

.btn-secondary {
  @apply bg-gray-300 hover:bg-gray-400 text-gray-800 
         font-bold py-2 px-4 rounded;
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>2. 提取组件</h3><p class="mb-2" data-v-436ca7bb>创建可复用的 Vue 组件，封装常用的 UI 元素。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>实际效果：</h4><div class="card" data-v-436ca7bb><h3 class="card-title" data-v-436ca7bb>卡片标题</h3><p class="card-body" data-v-436ca7bb>这是卡片内容，展示了组件的复用方式。</p></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>代码示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>&lt;!-- Card.vue --&gt;
&lt;template&gt;
  &lt;div class=&quot;bg-white rounded-lg shadow-md p-4&quot;&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- 使用方式 --&gt;
&lt;Card&gt;
  &lt;h3 class=&quot;text-xl font-medium&quot;&gt;卡片标题&lt;/h3&gt;
  &lt;p class=&quot;mt-2&quot;&gt;卡片内容&lt;/p&gt;
&lt;/Card&gt;</pre></div></div></div></div></section><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-436ca7bb><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-436ca7bb>自定义指令</h2><div class="space-y-4" data-v-436ca7bb><p class="text-gray-700" data-v-436ca7bb>Tailwind CSS 允许自定义指令，扩展原有功能或创建新功能。</p><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>1. 自定义变体</h3><p class="mb-2" data-v-436ca7bb>可以创建自定义状态变体，如 <code data-v-436ca7bb>custom-hover:</code>, <code data-v-436ca7bb>parent-active:</code> 等。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>实际效果：</h4><div class="group p-4 border border-gray-300 rounded" data-v-436ca7bb><p data-v-436ca7bb>鼠标悬停在此区域</p><span class="text-gray-500 group-hover:text-green-500" data-v-436ca7bb>使用 group-hover 变体</span></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundColor: [&#39;active&#39;],
      textColor: [&#39;visited&#39;, &#39;group-hover&#39;],
    }
  }
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>2. 添加新指令</h3><p class="mb-2" data-v-436ca7bb>通过插件系统添加全新的实用指令。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>自定义阴影效果：</h4><div class="p-4 bg-white custom-shadow rounded" data-v-436ca7bb> 具有自定义阴影效果的元素 </div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>插件示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// 添加自定义阴影插件
const plugin = require(&#39;tailwindcss/plugin&#39;)

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        &#39;.custom-shadow&#39;: {
          boxShadow: &#39;0 0 15px rgba(0, 0, 255, 0.2)&#39;
        }
      }
      addUtilities(newUtilities)
    })
  ]
}</pre></div></div></div></div></section><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-436ca7bb><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-436ca7bb>自定义函数</h2><div class="space-y-4" data-v-436ca7bb><p class="text-gray-700" data-v-436ca7bb>在 Tailwind 配置中，可以使用 JavaScript 函数动态生成样式。</p><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>1. 动态生成颜色变体</h3><p class="mb-2" data-v-436ca7bb>使用函数根据基础颜色生成色阶。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>颜色示例：</h4><div class="flex space-x-2" data-v-436ca7bb><div class="w-12 h-12 rounded bg-brand" data-v-436ca7bb></div><div class="w-12 h-12 rounded bg-brand-light" data-v-436ca7bb></div><div class="w-12 h-12 rounded bg-brand-dark" data-v-436ca7bb></div></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
const Color = require(&#39;color&#39;)

module.exports = {
  theme: {
    extend: {
      colors: {
        &#39;brand&#39;: &#39;#3366FF&#39;,
        &#39;brand-light&#39;: Color(&#39;#3366FF&#39;).lighten(0.2).hex(),
        &#39;brand-dark&#39;: Color(&#39;#3366FF&#39;).darken(0.2).hex(),
      }
    }
  }
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>2. 动态间距缩放</h3><p class="mb-2" data-v-436ca7bb>创建自定义间距比例函数。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>示例间距：</h4><div class="space-y-2" data-v-436ca7bb><div class="p-scale-1 bg-blue-100 text-center" data-v-436ca7bb>p-scale-1</div><div class="p-scale-2 bg-blue-200 text-center" data-v-436ca7bb>p-scale-2</div><div class="p-scale-3 bg-blue-300 text-center" data-v-436ca7bb>p-scale-3</div></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      padding: {
        // 使用函数生成按比例缩放的间距
        &#39;scale-1&#39;: &#39;0.5rem&#39;,
        &#39;scale-2&#39;: &#39;1rem&#39;,
        &#39;scale-3&#39;: &#39;2rem&#39;,
        // 也可以动态计算: i =&gt; \`\${i * 0.5}rem\`
      }
    }
  }
}</pre></div></div></div></div></section><section class="mb-12 bg-white rounded-lg shadow-md p-6" data-v-436ca7bb><h2 class="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2" data-v-436ca7bb>自定义样式</h2><div class="space-y-4" data-v-436ca7bb><p class="text-gray-700" data-v-436ca7bb>通过扩展 Tailwind 配置，可以添加自己的自定义样式。</p><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>1. 自定义主题颜色</h3><p class="mb-2" data-v-436ca7bb>扩展 Tailwind 主题颜色。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>颜色示例：</h4><div class="flex flex-wrap gap-2" data-v-436ca7bb><div class="w-12 h-12 rounded bg-primary" data-v-436ca7bb></div><div class="w-12 h-12 rounded bg-secondary" data-v-436ca7bb></div><div class="w-12 h-12 rounded bg-accent" data-v-436ca7bb></div></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        &#39;primary&#39;: &#39;#3366FF&#39;,
        &#39;secondary&#39;: &#39;#FF6633&#39;,
        &#39;accent&#39;: &#39;#33FF66&#39;,
      }
    }
  }
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>2. 自定义响应式断点</h3><p class="mb-2" data-v-436ca7bb>定制自己的断点尺寸。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>响应示例：</h4><div class="w-full bg-blue-100 p-2" data-v-436ca7bb><p class="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" data-v-436ca7bb> 响应式文本大小 </p></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      &#39;xs&#39;: &#39;480px&#39;,
      &#39;sm&#39;: &#39;640px&#39;,
      &#39;md&#39;: &#39;768px&#39;,
      &#39;lg&#39;: &#39;1024px&#39;,
      &#39;xl&#39;: &#39;1280px&#39;,
      &#39;2xl&#39;: &#39;1536px&#39;,
    }
  }
}</pre></div></div></div><div class="bg-gray-50 p-4 rounded-lg" data-v-436ca7bb><h3 class="text-lg font-medium mb-2 text-indigo-500" data-v-436ca7bb>3. 自定义字体</h3><p class="mb-2" data-v-436ca7bb>添加自定义字体家族和字体大小。</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-436ca7bb><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>字体示例：</h4><div class="space-y-2" data-v-436ca7bb><p class="font-main text-xl" data-v-436ca7bb>自定义主要字体</p><p class="font-special text-xl" data-v-436ca7bb>特殊显示字体</p></div></div><div data-v-436ca7bb><h4 class="font-medium mb-2" data-v-436ca7bb>配置示例：</h4><pre class="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto" data-v-436ca7bb>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        &#39;main&#39;: [&#39;Roboto&#39;, &#39;sans-serif&#39;],
        &#39;special&#39;: [&#39;Playfair Display&#39;, &#39;serif&#39;],
      },
      fontSize: {
        &#39;tiny&#39;: &#39;0.625rem&#39;,
        &#39;huge&#39;: &#39;4rem&#39;,
      }
    }
  }
}</pre></div></div></div></div></section><div class="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded" data-v-436ca7bb><p class="text-yellow-700" data-v-436ca7bb><strong data-v-436ca7bb>提示：</strong> 所有这些自定义配置需要在 <code data-v-436ca7bb>tailwind.config.js</code> 文件中进行， 然后运行构建过程使更改生效。确保你的项目正确配置了 PostCSS 和 Tailwind CSS。 </p></div>`,6)])))}}),r=e(i,[["__scopeId","data-v-436ca7bb"]]);export{r as default};
