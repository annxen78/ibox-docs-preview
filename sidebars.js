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
        'knowledge/goods/pricelist-edit',
        'knowledge/goods/pricelist-delete',
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
        'knowledge/purchase/supplier-return',

      ],
    },
    {
      type: 'category',
      label: 'Клиенты и заказы',
      items: [            
        'knowledge/clients/clients-orders',
        'knowledge/clients/order-add',
        'knowledge/clients/item-reserve',
        'knowledge/clients/shipment-add',
        'knowledge/clients/routes',
        'knowledge/clients/orders-shipments',
        'knowledge/clients/return',
        'knowledge/clients/telegram',
        'knowledge/clients/order-status',

      ],
    },
    {
      type: 'category',
      label: 'Склад',
      items: [
        'knowledge/warehouse/inventory',
        'knowledge/warehouse/stock-adjustment',
        'knowledge/warehouse/stock-transfer',
        'knowledge/warehouse/new-transfer',

      ],
    },
    {
      type: 'category',
      label: 'Финансы',
      items: [
        'knowledge/finance/cash-register',
        'knowledge/finance/payment-add',
        'knowledge/finance/salary-payroll',
        'knowledge/finance/balance-adjustment',
      ],
    },
    {
      type: 'category',
      label: 'Отчеты',
      items: [
        'knowledge/reports/dashboard',
        'knowledge/reports/sales-reports',
        'knowledge/reports/goods-profit',
        'knowledge/reports/stock-analysis',
      ],
    },
    {
      type: 'category',
      label: 'Основные настройки в iBOX',
      items: [
        'knowledge/settings/default-settings',
        'knowledge/settings/functional',
        'knowledge/settings/organizations',
      ],
    },
  ],
},
    {
      type: 'category',
      label: '4. FAQ',
      items: [
        'faq/faq',
        'faq/start',
        'faq/access-control',
      ],
    },
    //{
      //type: 'category',
      //label: '5. Партнерам и интеграторам',
      //items: ['partners/partners-guide'],
    //},
    {
      type: 'category',
      label: '5. Для авторов',
      items: [
        'editorial-policy',
        'wiki-style',
      ],
    },
  ],
};
