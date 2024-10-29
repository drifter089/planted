import { Block } from 'payload'

export const AboutCardType: Block = {
  slug: 'aboutcard',
  interfaceName: 'AboutCard',
  fields: [
    {
      name: 'cardImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'cardText',
      type: 'textarea',
      label: 'add text with image',
      required: true,
    },
    {
      name: 'reverse',
      type: 'checkbox',
      label: 'Reverse Order',
      required: true,
    },
  ],
}
