import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'History of Blockchain',
  tagline: 'Documenting the journey of blockchain technology from foundational papers to modern developments',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Replace with your GitHub org/user name.
  projectName: 'history-blockchain', // Replace with your repo name.

  onBrokenLinks: 'throw',

  // Internationalization configuration
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fa'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
        },
        fa: {
          label: 'فارسی',
          direction: 'rtl',
          htmlLang: 'fa-IR',
        },
      },
    },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'archive'
        },
        blog: {
          routeBasePath: 'papers',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
         
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'History of Blockchain',
      logo: {
        alt: 'History of Blockchain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'papersSidebar',
          position: 'left',
          label: 'Archive',
        },
        {to: '/papers', label: 'Papers', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ArmanPayandeh/history-blockchain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Archive',
              to: '/archive',
            },
             {
              label: 'Papers',
              to: '/papers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ArmanPayandeh/history-blockchain',
            },
            {
              label: 'Issues',
              href: 'https://github.com/ArmanPayandeh/history-blockchain/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute',
              href: 'https://github.com/ArmanPayandeh/history-blockchain/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} History of Blockchain. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
