module.exports = {
  title: "摩托卡的公考笔记",
  description: "记录公务员考试学习过程的各大小知识点",
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
    sidebar: [
        {
          title: '资料分析',   // 必要的
          path: '/ziliaofenxi/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
                title: '速算技巧',   // 必要的
                path: '/ziliaofenxi/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
          ]
        },
      ]
  }
};
