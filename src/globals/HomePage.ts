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
        // {
        //   name: 'tabTwo',
        //   label: 'Tab Two Label', // required
        //   interfaceName: 'TabTwo', // optional (`name` must be present)
        //   fields: [
        //     // required
        //     {
        //       name: 'numberField', // accessible via tabTwo.numberField
        //       type: 'number',
        //       required: true,
        //     },
        //   ],
        // },
      ],
    },
  ],
}
