module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'Marina',
      items: [
        'marina/introduction',
        'marina/getting-started',
        'marina/connect',
        'marina/balances',
        'marina/transaction',
        {
          'API Reference': ['marina/api'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Nigiri',
      items: [
        'nigiri/introduction'
      ]
    },
    {
      type: 'category',
      label: 'Taxi',
      items: [
        'taxi/introduction'
      ]
    },
    {
      type: 'category',
      label: 'LDK',
      items: [
        'ldk/introduction'
      ]
    },
  ]
};
