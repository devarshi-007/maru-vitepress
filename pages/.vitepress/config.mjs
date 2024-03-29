import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'


export default defineConfig({
    lang: "en",

    // common meta(head) tags
    head: [
        // reform
        ['link', { rel: 'icon', href: '/logo.png' }],

        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'Improwised Technologies Pvt. Ltd.' }],
        ['meta', { name: 'keywords', content: 'ERPNext-Projects-Plus, Improwised Technologies Pvt. Ltd., ERP, ERPNext, Frappe, GitHub' }],
        ['meta', { name: 'robots', content: 'index, follow' }],
        ['meta', { name: 'copyright', content: 'Copyright © 2024, Improwised Technologies Pvt. Ltd.' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:url', content: 'https://www.improwised.com/' }],
    ],


    // index page meta(head) tags
    title: "ERPNext-Projects-Plus",
    description: "Documentation and User Guide for ERPNext-Projects-Plus App",
    og_title: "ERPNext-Projects-Plus",
    og_url: "github_pages_url",// reform

    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: "without-subfolders",

    // for specific page  meta(head) tags
    transformPageData(pageData) {
        pageData.frontmatter.head = []
        pageData.frontmatter.head.push(
            ['meta',
                {
                    name: 'og:title',
                    content: `${pageData?.frontmatter?.og_title ? pageData.frontmatter.og_title : "ERPNext-Projects-Plus"}`
                }
            ],
            ['meta',
                {
                    name: 'og:description',
                    content: `${pageData?.description ? pageData.description : "Documentation and User Guide for ERPNext-Projects-Plus App"}`
                }
            ],
            ['meta',
                {
                    name: 'og:url',
                    content: `${pageData?.frontmatter?.og_url ? pageData.frontmatter.og_url : "github_pages_url"}`// reform
                }
            ]
        )
    },

    themeConfig: {
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
              dateStyle: 'medium',
              timeStyle: 'short'
            }
        },

        editLink: {
            pattern:
                "https://github.com/Improwised/ERPNext-projects-plus/edit/documentation/pages/:path", // reform
            text: "Edit this page on GitHub",
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Improwised/ERPNext-projects-plus",
            },
        ],

        footer: {
            message: "<a href=https://www.improwised.com/> Powered by Improwised Technologies Pvt. Ltd. <a> ",
            copyright: "Copyright © 2024",
        },

        nav: nav(),

        sidebar: {
            "/docs/v0.2.x/": sidebarDocsv02x(),
            "/docs/v14.0.x/": sidebarDocsv140x(),
        },

        blog: {
            title: 'ERPNext-Projects-Plus Blog',
            description: 'Smart integration of ERPNext projects with Github',
        },

        search: {
            provider: "local",
        }

    },

    vite: {
        plugins: [
            Unocss({
                configFile: '../../unocss.config.ts',
            }),
        ],
        build: {
            ssr: false,
        },
    },

})

// reform
function nav() {
    return [
        {
            text: "Docs",
            link: "/docs/v14.0.x/getting-started/introduction",
            activeMatch: "/docs/",
        },
        {
            text: 'Version',
            items: [
                { text: 'v14.0.x', link: '/docs/v14.0.x/getting-started/introduction' },
                { text: 'v0.2.x', link: '/docs/v0.2.x/index' }
            ]
        },
        { text: "Blog", link: "blog/index", activeMatch: "/blog/" }
    ];
}

function sidebarDocsv140x() {
    return [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/docs/v14.0.x/getting-started/introduction" },
                { text: "Authorization", link: "/docs/v14.0.x/getting-started/github_credential" },
                { text: "Projects and Tasks", link: "/docs/v14.0.x/getting-started/project_and_task" },
                { text: "Commit", link: "/docs/v14.0.x/getting-started/commit" },
                { text: "Pull Request", link: "/docs/v14.0.x/getting-started/pull_request" }

            ]
        },
        {
            text: "Github Credential",
            collapsible: true,
            items: [
                { text: "Create Github App", link: "/docs/v14.0.x/github-credential/create_app" },
            ]
        },
        {
            text: "Extras",
            collapsible: true,
            items: [
                { text: "Custom Task Closing Configuration", link: "/docs/v14.0.x/commit/custom_closing_config" },
                { text: "Github User", link: "/docs/v14.0.x/commit/github_user" },
                { text: "Permission", link: "/docs/v14.0.x/permission/permission" },
                { text: "Server Down Scenario", link: "/docs/v14.0.x/server-down/server-down" }
            ]
        },
    ];
}

function sidebarDocsv02x() {
    return [

    ];
}