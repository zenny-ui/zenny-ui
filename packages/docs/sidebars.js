const SIDEBAR_COMPONENTS = require('./sidebar-components.json');

module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Styles',
      items: ['styles/utility-style-props', 'styles/variants'],
    },
    {
      type: 'category',
      label: 'Components',
      items: [...SIDEBAR_COMPONENTS],
    },
  ],
};
