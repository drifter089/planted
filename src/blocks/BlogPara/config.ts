import { Block } from 'payload'

export const BlogParaType: Block = {
  slug: 'blogpara',
  interfaceName: 'BlogPara',
  fields: [
    {
      name: 'paraHeading',
      label: 'Para Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'paraText',
      type: 'textarea',
      label: 'Paragraph Text',
    },
  ],
}
