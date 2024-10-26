import { BasicCard } from '@/blocks/BasicCard/config'
import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          description: 'This is the hero section',

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
              name: 'overveiwWidget',
              type: 'array',
              label: 'Overview Widget',
              minRows: 3,
              maxRows: 3,
              interfaceName: 'overveiwWidget',
              fields: [
                {
                  name: 'value',
                  type: 'number',
                  //   admin: {
                  //     // width: '30%',
                  //     // disableListColumn: true,
                  //     position: 'sidebar',
                  //   },
                },
                {
                  name: 'achivement',
                  type: 'text',
                  //   admin: {
                  //     width: '30%',
                  //   },
                },
              ],
            },
            {
              name: 'heroImage',
              type: 'upload',
              label: 'Hero Image',
              admin: {
                position: 'sidebar',
              },
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'Basic Cards Section',
          description: 'This is the basic cards section',
          fields: [
            {
              name: 'basicCardSection',
              label: 'Basic Cards', // required
              type: 'blocks',
              blocks: [BasicCard],
            },
          ],
        },
        // {
        //   label: 'Price Card Section',
        //   description: 'This is the price card section',

        // }
      ],
    },
  ],
}
