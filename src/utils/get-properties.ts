import { IPropertiesApi, IProperty } from '@/types/property'

interface fetchResponse {
    data: IProperty[]
    status: number
    error: null | string
}

export const getProperties = async (): Promise<fetchResponse> => {
    try {
        let response = await fetch('/api/properties')
        let result: IPropertiesApi = await response.json()

        return {
            data: result.data,
            status: 200,
            error: null,
        }
    } catch (error) {
        return {
            data: [],
            status: 400,
            error: JSON.stringify(error),
        }
    }
}
