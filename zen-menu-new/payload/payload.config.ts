import path from 'path';
import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { CollectionConfig } from 'payload/types';

const Categories : CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "Name"
  },
  fields:[{
    name: "Name",
    type: "text",
    required: true
  }]
}
const Additions : CollectionConfig = {
  slug: "additions",
  admin: {
    useAsTitle: "Name"
  },
  fields:[{
    name: "Name",
    type: "text",
    required: true
  },
  {
    name: "Price",
    type: "number",
    required: true
  }
]
}
const Media : CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [
    {
      name: "alt",
      type: "text"
    }
  ]
}
const Items : CollectionConfig = {
  slug: "items",
  admin: {
    useAsTitle: "Name"
  },
  fields: [
    {
      name: "isAvailable",
      type: "checkbox",
      defaultValue: true
    },
    {
      name: "Category",
      type: "relationship",
      relationTo: "categories",
      required: true
    },
    {
      name: "Name",
      type: "text",
      required: true 
    },
    {
      name: "Price",
      type: 'number',
      required: true
    },
    {
      name: "Description",
      type: 'textarea'
    },
    {
      name: "Picture",
      type: 'upload',
      relationTo: 'media',
      required: false
    },
    {
      name: 'Additions',
      type: "array",
      fields: [
        {
          name: "Name",
          type: 'text',
          required: true
        },
        {
          name: "isOption",
          type: "checkbox"
        },
        {
          name: "Options",
          type: "array",
          fields: [
            {
              name: "Name",
              type: "relationship",
              relationTo: 'additions',
              required: true
            },
          ]
        }
      ]
    },
    {
      name: "Promo",
      type: "checkbox"
    }, 
    {
      name: "PromoPrice",
      type: "number"
    }
  ],

}
export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [
    Categories,
    Additions,
    Media,
    Items
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
