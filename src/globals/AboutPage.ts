import { AboutCardType } from '@/blocks/AboutCard/config'
import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'aboutpage',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'About',
          description: 'This is the about section',
          fields: [
            {
              name: 'mainHeading',
              label: 'Main Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'aboutImage',
              type: 'upload',
              label: 'About Image',
              admin: {
                position: 'sidebar',
              },
              relationTo: 'media',
              required: true,
            },
            {
              name: 'subHeading',
              label: 'Sub Heading',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'About Card',
          description: 'This is the about card section',
          fields: [
            {
              name: 'aboutCard',
              type: 'blocks',
              label: 'About Card',
              blocks: [AboutCardType],
            },
          ],
        },
        {
          label: 'green text banner',
          description: 'This is the green text banner section',
          fields: [
            {
              name: 'greenTextBanner',
              type: 'text',
              label: 'Green Text Banner',
              required: true,
            },
          ],
        },
        {
          label: 'overveiw wiget section',
          description: 'This is the overview widget section',
          fields: [
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
                },
                {
                  name: 'achivement',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'basic card banner',
          description: 'This is the green text banner section',
          fields: [
            {
              name: 'subgreenText',
              type: 'text',
              label: 'Green Text Banner',
              required: true,
            },
            {
              name: 'mainBannerText',
              type: 'text',
              label: 'Green Text Banner',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
