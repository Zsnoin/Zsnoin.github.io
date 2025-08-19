// 项目卡片数据
const projectsData = [
    {
        id: 1,
        title: "React基础学习",
        description: "从零开始学习React，掌握组件化开发思想，构建现代化交互式用户界面。",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        alt: "React项目预览",
        category: "前端框架",
        categoryColor: "primary",
        tags: ["组件", "状态管理", "Hooks", "JSX"],
        icon: "fa-code",
        iconColor: "primary",
        type: "前端开发",
        link: "https://zsnoin.github.io/react",
        buttonText: "访问",
        isPopular: true
    },
    {
        id: 2,
        title: "Tailwind CSS",
        description: "一个功能类优先的CSS框架，让你直接在HTML中使用各种工具类来快速构建和定制界面。",
        image: "https://picsum.photos/seed/tailwind/800/600",
        alt: "Tailwind CSS项目预览",
        category: "CSS框架",
        categoryColor: "primary",
        tags: ["css", "样式",'UI库'],
        icon: "fa-code",
        iconColor: "primary",
        type: "前端开发",
        link: "https://zsnoin.github.io/tailwindcss/#/",
        buttonText: "访问"
    },
    {
        id: 3,
        title: "波奇壁纸",
        description: "收集了 N+ 壁纸源，提供了丰富的壁纸资源，为你的设备带来不一样的视觉体验。",
        image: "https://picsum.photos/seed/bocchi/800/600",
        alt: "波奇壁纸项目预览",
        category: "壁纸集合",
        categoryColor: "secondary",
        tags: ['波奇壁纸','开源','官网'],
        icon: "fa-picture-o",
        iconColor: "secondary",
        type: "设计资源",
        link: "https://zsnoin.github.io/bocchi_wallpaper",
        buttonText: "访问"
    }
];

// 渲染项目卡片
function renderProjects() {
    const container = document.getElementById('projectsContainer');

    // 添加项目卡片
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden card-hover';

        // 构建标签HTML
        const tagsHTML = project.tags.length > 0
            ? `<div class="flex flex-wrap gap-2 mb-4">
                  ${project.tags.map(tag => `<span class="px-2 py-1 bg-${project.categoryColor}/10 text-${project.categoryColor} text-xs rounded">${tag}</span>`).join('')}
               </div>`
            : '';

        // 构建卡片HTML
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${project.image}" alt="${project.alt}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div class="p-6">
                        <span class="px-3 py-1 bg-${project.categoryColor}/90 text-white text-xs rounded-full">${project.category}</span>
                    </div>
                </div>
                ${project.isPopular ? '<div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full"><span class="text-primary font-bold">热门</span></div>' : ''}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-dark/70 mb-4">${project.description}</p>
                ${tagsHTML}
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <i class="fa fa-${project.icon} text-${project.iconColor}"></i>
                        <span class="text-sm text-dark/60">${project.type}</span>
                    </div>
                    <a href="${project.link}" target="_blank"
                       class="px-4 py-2 bg-${project.iconColor} hover:bg-${project.iconColor}/90 text-white rounded-lg transition-colors flex items-center space-x-1 shadow-md">
                        <span>${project.buttonText}</span>
                        <i class="fa fa-external-link"></i>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // 添加占位卡片
    const placeholderCard = document.createElement('div');
    placeholderCard.className = 'bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 h-full';
    placeholderCard.innerHTML = `
        <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <i class="fa fa-plus text-gray-400 text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-400 mb-2">更多项目</h3>
        <p class="text-center text-gray-400">更多精彩项目正在开发中，敬请期待</p>
    `;
    container.appendChild(placeholderCard);
}

// 页面加载完成后渲染项目
document.addEventListener('DOMContentLoaded', renderProjects);
