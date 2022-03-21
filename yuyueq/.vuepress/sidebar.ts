import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig(


    {
        "/guide/":[
            {
                text: "开始吧",
                icon: "strong",
                prefix: "",
                // collapsable: true,
                children: [""],
            },
            {
                text: "Java",
                icon: "java",
                prefix: "2021/",
                collapsable: true,
                children: ["mysqlshizhan","centosanzhuangmysql"],
            },
            {
                text: "SQL",
                icon: "mysql",
                prefix: "2021/",
                collapsable: true,
                children: ["mysqlshizhan","centosanzhuangmysql"],
            },
            {
                text: "资源",
                icon: "workingDirectory",
                prefix: "2021/",
                collapsable: true,
                children: ["kaifaziyuan","changyongziyuan"],
            },
        ],


        "/posts/":[
            {
                text: "个人经历",
                icon: "people",
                prefix: "article/",
                // collapsable: true,
                children: [""],
            },
        ]
    }
);
