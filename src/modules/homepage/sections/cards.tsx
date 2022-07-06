import React from 'react'

import { Card } from '@/ui/card'

export const CardsSection = () => {
    return (
        <div className="grid grid-cols-3 py-8 mx-auto my-4 gap-14">
            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}
