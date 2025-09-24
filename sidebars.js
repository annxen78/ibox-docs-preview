/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '1. Обзор продукта',
      items: ['overview/product-overview'],
    },
    {
      type: 'category',
      label: '2. Быстрый старт',
      items: ['quick-start/quick-start'],
    },
    {
      type: 'category',
      label: '3. База знаний',
      items: ['knowledge/knowledge'],
    },
    {
      type: 'category',
      label: '4. FAQ',
      items: ['faq/faq'],
    },
    {
      type: 'category',
      label: '5. Партнерам и интеграторам',
      items: ['partners/partners-guide'],
    },
    {
      type: 'category',
      label: '6. Для авторов (вики)',
      items: [
        'editorial-policy',
        'wiki-style',
      ],
    },
  ],
};
