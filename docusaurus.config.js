// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nazarbayev University RF Research Team',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NU RF team', // Usually your GitHub org/user name.
  projectName: 'NU RF team website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [          
          {            
            to: '/team',            
            label: 'Team',
            position: 'left',
          },
          {
            type: 'doc',
            docId: '2023',
            label: 'Publications',
            position: 'left'
          },          
          {
            to: '/research-projects',
            label: 'Research Projects',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'News',
            position: 'left'
          },
          {
            to: '/project-demos',
            label: 'Project Demos',
            position: 'left'
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {            
            items: [
              {
                label: 'Nazarbayev University',
                href: 'https://nu.edu.kz',
              },
            ],
          },
          {            
            items: [              
              {
                label: 'School of Engineering and Digital Sciences',
                href: 'https://seds.nu.edu.kz',
              },
            ],
          },
          {            
            items: [
              {
                label: 'Research',
                href: 'https://research.nu.edu.kz/en/organisations/school-of-engineering-and-digital-sciences',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Talgat Manglayev, Inc. Built with JavaScript React Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;