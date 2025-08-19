// 清理项目卡片
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projectsContainer');
    if (container) {
        // 保留容器，删除所有子元素
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // 添加注释
        const comment = document.createComment(' 卡片将通过JavaScript动态生成 ');
        container.appendChild(comment);
    }
});
