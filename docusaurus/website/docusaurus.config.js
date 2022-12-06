// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remark = require('remark');
const stripHTML = require('remark-strip-html');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grafana Plugin Tools',
  tagline: 'Setup a Grafana plugin by running one command',
  url: 'https://grafana.github.io/',
  baseUrl: 'plugin-tools/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grafana', // Usually your GitHub org/user name.
  projectName: 'plugin-tools', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-remote-content',
      {
        // options here
        name: 'grafana-content', // used by CLI, must be path safe
        sourceBaseUrl: 'https://raw.githubusercontent.com/grafana/grafana/main/docs/sources/developers/plugins/', // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: '../docs', // the base directory to output to.
        documents: ['sign-a-plugin.md'], // the file names to download
        modifyContent(filename, content) {
          // strip the HTML as docusaurus doesn't like non self-closing tags e.g. <br>
          remark()
            .use(stripHTML)
            .process(content, (err, file) => {
              if (err) {
                throw err;
              }

              content = String(file);
            });
          // clean up metadata, relref and remove heading
          content = content
            .replace(/\*\*\*((.|\n)*)\*\*\*/, '')
            .replace(/\\\[(.+)\]\\(\({{.+}}\))/g, '$1')
            .replace(/# Sign a plugin\n\n/, '');
          return {
            filename: 'signing-your-plugin.md',
            content: `---
id: signing-your-plugin
title: Signing Your Plugin
---

<head>
  <meta name="robots" content="noindex" />
</head>

<!-- Do NOT edit this file directly. It is pulled from github.com/grafana/grafana via docusaurus-plugin-remote-content -->
${content}
            `,
          };
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/grafana/plugin-tools/edit/main/docusaurus/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Grafana Plugin Tools',
        logo: {
          alt: 'Grafana Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'right',
            label: 'Docs',
          },
          { href: 'https://community.grafana.com/c/plugin-development/30', label: 'Help', position: 'right' },
          {
            href: 'https://www.github.com/grafana/plugin-tools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/grafana',
              },
              {
                label: 'Github Discussions',
                href: 'https://www.github.com/grafana/plugin-tools/discussions',
              },
              {
                label: 'Grafana Community Forums',
                href: 'https://community.grafana.com/c/plugin-development/30',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://www.github.com/grafana/plugin-tools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grafana Labs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
