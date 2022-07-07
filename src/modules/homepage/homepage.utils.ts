import { IStore, useStore } from './homepage.store'

import { getProperties } from '@/utils'
import { getLocalItem } from '@/utils/get-local-item'
import { setLocalItem } from '@/utils/set-local-item'
import { IProperty } from '@/types/property'
import { IFilterChange, IFilterValue } from './homepage.types'

export const initializePropertyData = async (
    setAppState: IStore['setAppState'],
    setInitialData: IStore['setInitialData']
) => {
    const PROPERTIES = 'properties'

    setAppState('loading')
    let localItem = getLocalItem<IProperty[]>(PROPERTIES)

    if (localItem === null) {
        let res = await getProperties()
        if (res.status === 200) {
            setInitialData(res.data)
            setLocalItem({ key: PROPERTIES, value: res.data })
        } else {
            setAppState('error')
        }
    } else {
        setInitialData(localItem.value)
    }

    setAppState('ready')
}

export const handleFilterChange = (
    data: IFilterChange,
    setFilterValue: React.Dispatch<React.SetStateAction<IFilterValue>>
) => {
    switch (data.type) {
        case 'location':
            setFilterValue((prev) => ({ ...prev, location: data.value }))
            return

        case 'date':
            setFilterValue((prev) => ({ ...prev, date: data.value }))
            return

        case 'price':
            setFilterValue((prev) => ({ ...prev, price: data.value }))
            return

        case 'propertyType':
            let value = data.value
            setFilterValue((prev) => ({ ...prev, propertyType: data.value }))
            return

        default:
            return
    }
}

export const filterData = (
    originalValue: IProperty[],
    filterValue: IFilterValue
): IProperty[] => {
    const log = console.log
    console.clear()

    log(
        'originalValuelen: ',
        originalValue.length,
        ' filterValue: ',
        filterValue
    )

    let filteredLocation = originalValue.filter(
        (i) => i.location === filterValue.location
    )

    log('filteredLocation: ', filteredLocation)

    let filteredDate = filteredLocation.filter(
        (i) => i.dateAvailableFrom <= filterValue.date
    )

    log('filterdDate: ', filteredDate)

    let filteredByPrice = filteredDate.filter(
        (i) => i.rent.monthly > filterValue.price
    )

    log('filteredByPrice: ', filteredByPrice)

    let finalFilter = filteredByPrice.filter(
        (i) => i.propertyType === filterValue.propertyType
    )

    console.log(finalFilter)

    return finalFilter
}
