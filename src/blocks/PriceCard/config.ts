import type { Block } from 'payload'

export const PriceCard: Block = {
  slug: 'pricecard',
  interfaceName: 'PriceCard',
  fields: [
    { name: 'quantityOne', type: 'number', required: true },
    { name: 'productOne', type: 'text', required: true },
    { name: 'quantityTwo', type: 'number', required: true },
    { name: 'productTwo', type: 'text', required: true },
    { name: 'priceMain', type: 'number', required: true },
    { name: 'priceSuper', type: 'number', required: true },
    { name: 'duration', type: 'text', required: true },
  ],
}
