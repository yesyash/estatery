import React from 'react'

import { Card } from '@/ui/card'
import { useStore } from '../homepage.store'

export const CardsSection = () => {
    const { filteredData } = useStore((state) => state)

    return (
        <div className="grid grid-cols-3 py-8 mx-auto my-4 gap-14">
            {filteredData.map((p) => (
                <div key={p.address + p.name}>
                    <Card
                        address={p.address}
                        area={p.area}
                        bathrooms={p.bathrooms}
                        beds={p.beds}
                        img={p.img}
                        name={p.name}
                        price={p.rent.monthly}
                    />
                </div>
            ))}
        </div>
    )
}
