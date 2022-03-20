import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig(


    {
        "/guide/":[
            {
                text: "SQL",
                icon: "write",
                prefix: "2021/",
                children: ["mysql"],
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
