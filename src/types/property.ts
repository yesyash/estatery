export interface IProperty {
    name: string
    location: string
    address: string
    img: string
    beds: number
    bathrooms: number
    propertyType: 'house' | 'office'
    availableForRent: boolean
    dateAvailableFrom: number
    area: {
        length: number
        width: number
    }
    rent: {
        monthly: number
        semiAnnual: number
        annual: number
    }
}
