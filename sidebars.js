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
      items: [
        'quick-start/quick-start',
        'quick-start/part1-registration',
        'quick-start/part2-setup',
        'quick-start/part3-finance',
      ],
    },
    {
  type: 'category',
  label: '3. База знаний',
  items: [
    'knowledge/knowledge',
    {
      type: 'category',
      label: 'Данные и безопасность',
      items: [
        'knowledge/data/data-security',
        'knowledge/data/data-access',
      ],
    },
    {
      type: 'category',
      label: 'Настройки доступа',
      items: [
        'knowledge/access/access',
        'knowledge/access/access-team',
        'knowledge/access/access-role',
        'knowledge/access/access-workplace',
        'knowledge/access/access-change',

      ],
    },
    {
      type: 'category',
      label: 'Товары и цены',
      items: [            
        'knowledge/goods/goods',
        'knowledge/goods/goods-add',
        'knowledge/goods/purchase-price',
        'knowledge/goods/batch-tracking',
        'knowledge/goods/batch-set',
        'knowledge/goods/pricelist-add',
        'knowledge/goods/barcode',
        'knowledge/goods/barcode-print',
      ],
    },
    {
      type: 'category',
      label: 'Закупки и поставщики',
      items: [            
        'knowledge/purchase/purchase',
        'knowledge/purchase/supplier-add',
        'knowledge/purchase/purchase-price',
        'knowledge/purchase/order-purchase',
        'knowledge/purchase/order-add',
        'knowledge/purchase/purchase-add',

      ],
    },
  ],
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
      label: '6. Для авторов',
      items: [
        'editorial-policy',
        'wiki-style',
      ],
    },
  ],
};
