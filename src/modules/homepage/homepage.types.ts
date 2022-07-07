export interface IFilterValue {
    location: string
    date: number
    price: number
    propertyType: string
}

export type IFilterChange =
    | { type: 'location'; value: IFilterValue['location'] }
    | { type: 'date'; value: IFilterValue['date'] }
    | { type: 'price'; value: IFilterValue['price'] }
    | { type: 'propertyType'; value: IFilterValue['propertyType'] }
