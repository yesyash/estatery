/**
 * Constants that will be exclusively be used by homepage.tsx (or)
 * elements present in this directory.
 */

import { IFilterValue } from './homepage.types'

export const Locations = [
    { value: 'newyork', text: 'Newyork, USA' },
    { value: 'florida', text: 'Florida, USA' },
    { value: 'indiana', text: 'Indiana, USA' },
    { value: 'texas', text: 'Texas, USA' },
]

export const PropertyTypes = [
    { value: 'house', text: 'hosuing' },
    { value: 'office', text: 'office' },
]

export const PropertyPricing = [
    { value: 3000, text: '$500-$3,000' },
    { value: 5000, text: '$3,000-$5000' },
    { value: '10000', text: '$5,000-$10,000' },
]

export const defaultFilterValue: IFilterValue = {
    date: 0,
    propertyType: PropertyTypes[0].value,
    location: Locations[0].value,
    price: Number(PropertyPricing[0].value),
}
