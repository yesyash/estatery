import type { NextApiRequest, NextApiResponse } from 'next'
import { data as propertiesData } from '@/static/properties-data'
import { IProperty } from '@/types/property'

type Data = {
    data: IProperty[]
    properties_count: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({
            data: propertiesData,
            properties_count: propertiesData.length,
        })
    } else {
        res.status(400).json({ data: [], properties_count: 0 })
    }
}
