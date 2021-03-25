const SIDEBAR_COMPONENTS = require('./sidebar-components.json');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Docusaurus Tutorial',
      items: [
        'getting-started',
        'create-a-page',
        'create-a-document',
        'create-a-blog-post',
        'markdown-features',
        'thank-you',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [...SIDEBAR_COMPONENTS],
    },
  ],
};
