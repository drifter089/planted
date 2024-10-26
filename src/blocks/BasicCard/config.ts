import type { Block } from 'payload'

export const BasicCard: Block = {
  slug: 'basiccard',
  interfaceName: 'BasicCard',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text', required: true },
    {
      name: 'cardImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'reverse',
      type: 'checkbox',
      label: 'Reverse Image and Text',
    },
  ],
}
