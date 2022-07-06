import type { NextApiRequest, NextApiResponse } from 'next'
import { data as propertiesData } from '@/static/properties-data'
import { IProperty, IPropertiesApi } from '@/types/property'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPropertiesApi>
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
