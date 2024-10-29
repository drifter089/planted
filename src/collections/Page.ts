import { BlogParaType } from '@/blocks/BlogPara/config'
import { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'blogpages',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'mainHeading',
              label: 'Main Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subHeading',
              label: 'Sub Heading',
              type: 'textarea',
              required: true,
            },
            {
              name: 'heroImage',
              type: 'upload',
              label: 'Hero Image',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'textPara',
          fields: [
            {
              name: 'layout',
              label: 'Layout',
              type: 'blocks',
              blocks: [BlogParaType],
              //   required: true,
            },
          ],
        },
      ],
    },
  ],
}
