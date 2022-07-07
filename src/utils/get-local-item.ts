import { LocalItem } from '@/types/localitem'

type LocalData<T> = Omit<LocalItem<T>, 'key'>

/**
 * Checks if a item is existing in the localstate and is not expired.
 * --------
 * @param key : string
 * @returns parsedData | null
 */
export const getLocalItem = <T>(key: string): LocalData<T> | null => {
    let data = localStorage.getItem(key)

    if (data) {
        let parsedData: LocalData<T> = JSON.parse(data)

        if (parsedData.expiry <= new Date().getTime()) {
            return null
        }

        return parsedData
    } else {
        return null
    }
}
