/**
 * Utility functions that will be exclusively be used by homepage.tsx (or)
 * elements present in this directory.
 */

import { IStore } from './homepage.store'

import { getProperties } from '@/utils'
import { getLocalItem } from '@/utils/get-local-item'
import { setLocalItem } from '@/utils/set-local-item'
import { IProperty } from '@/types/property'
import { IFilterChange, IFilterValue } from './homepage.types'

/**
 * Function to fetch data from the api
 * and set it to the global store.
 *
 * @param SetAppState : setter functoin to change the current app state.
 * @param  setInitialData : setter function taken from the global store to set the results from api.
 */
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

/**
 * Function to set the selected value for individual filter type.
 */
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

/**
 * Filters the given data depending on the filter params passed.
 *
 * @param originalValue : value we want to filter from.
 * @param filterParms : the different paramater values to be used while filtering.
 * @retuns filteredData
 */
export const filterData = (
    originalValue: IProperty[],
    filterParams: IFilterValue
): IProperty[] => {
    let fp = filterParams

    let filteredData = originalValue.filter(
        (i) =>
            i.location === fp.location &&
            i.dateAvailableFrom <= fp.date &&
            i.rent.monthly > fp.price &&
            i.propertyType === fp.propertyType
    )

    return filteredData
}
