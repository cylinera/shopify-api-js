import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: ReferenceEntityTemplateSchema = {
  // The title of the page.
  name: 'buildEmbeddedAppURL',
  // Optional. A description of the reference entity. Can include Markdown.
  description:
    'Constructs the redirection URL for [getEmbeddedAppUrl](/docs/api/shopify-api-js/auth/getembeddedappurl) based on the given `host`.\n\nThis utility relies on the host query param being a Base 64 encoded string. All requests from Shopify should include this param in the correct format.',
  // Optional. What category the entity is: component, hook, utility, etc.
  type: '',
  // Boolean that determines if the entity is a visual component.
  isVisualComponent: false,
  // Optional. The example that appears in the right hand column at the top of the page. Represents the primary use case.
  defaultExample: {
    // The data for the codeblock.
    codeblock: {
      // Tabs that appear at the top of the codeblock.
      tabs: [
        {
          // The relative file path to the code file. Content will be automatically extracted from that file.
          code: './examples/build-embedded-app-url.example.ts',
          // Optional. The name of the language of the code.
          language: 'js',
        },
      ],
      // The title of the codeblock.
      title: 'buildEmbeddedAppURL',
    },
  },
  // This determines where in the sidebar the entity will appear.
  category: 'auth',
  // Optional. Further determines where in the sidebar category an entity will appear.
  thumbnail: '',
  // Optional. A section for examples. Examples may be grouped or ungrouped.
  // A section that displays related entities in a grid of cards.
  related: [],
};

export default data;
