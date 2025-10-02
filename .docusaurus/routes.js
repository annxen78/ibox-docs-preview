import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/index.backup',
    component: ComponentCreator('/index.backup', 'c9c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ec3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '384'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bdf'),
            routes: [
              {
                path: '/docs/editorial-policy',
                component: ComponentCreator('/docs/editorial-policy', 'd77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faq/',
                component: ComponentCreator('/docs/faq/', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/knowledge/',
                component: ComponentCreator('/docs/knowledge/', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/',
                component: ComponentCreator('/docs/knowledge/access/', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-change',
                component: ComponentCreator('/docs/knowledge/access/access-change', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-role',
                component: ComponentCreator('/docs/knowledge/access/access-role', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-team',
                component: ComponentCreator('/docs/knowledge/access/access-team', '5c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-workplace',
                component: ComponentCreator('/docs/knowledge/access/access-workplace', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/data/data-access',
                component: ComponentCreator('/docs/knowledge/data/data-access', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/data/data-security',
                component: ComponentCreator('/docs/knowledge/data/data-security', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/',
                component: ComponentCreator('/docs/knowledge/goods/', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/barcode',
                component: ComponentCreator('/docs/knowledge/goods/barcode', '244'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/barcode-print',
                component: ComponentCreator('/docs/knowledge/goods/barcode-print', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/batch-set',
                component: ComponentCreator('/docs/knowledge/goods/batch-set', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/batch-tracking',
                component: ComponentCreator('/docs/knowledge/goods/batch-tracking', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/goods-add',
                component: ComponentCreator('/docs/knowledge/goods/goods-add', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/pricelist-add',
                component: ComponentCreator('/docs/knowledge/goods/pricelist-add', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/purchase-price',
                component: ComponentCreator('/docs/knowledge/goods/purchase-price', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/',
                component: ComponentCreator('/docs/knowledge/purchase/', '38d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/order-add',
                component: ComponentCreator('/docs/knowledge/purchase/order-add', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/order-purchase',
                component: ComponentCreator('/docs/knowledge/purchase/order-purchase', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/purchase-add',
                component: ComponentCreator('/docs/knowledge/purchase/purchase-add', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/purchase-price',
                component: ComponentCreator('/docs/knowledge/purchase/purchase-price', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/supplier-add',
                component: ComponentCreator('/docs/knowledge/purchase/supplier-add', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/product-overview',
                component: ComponentCreator('/docs/overview/product-overview', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/partners/partners-guide',
                component: ComponentCreator('/docs/partners/partners-guide', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/',
                component: ComponentCreator('/docs/quick-start/', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part1-registration',
                component: ComponentCreator('/docs/quick-start/part1-registration', 'b35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part2-setup',
                component: ComponentCreator('/docs/quick-start/part2-setup', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part3-finance',
                component: ComponentCreator('/docs/quick-start/part3-finance', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/wiki-style',
                component: ComponentCreator('/docs/wiki-style', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
