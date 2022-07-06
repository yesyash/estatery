import React from 'react'

import { Button } from '@/ui/button'
import { Label } from '@/ui/label'
import { Select } from '@/ui/select'

export const FilterSection = () => {
    return (
        <div className="flex items-center px-4 py-4 mx-auto mb-8 bg-white border rounded-md max-w-7xl border-violet-100 drop-shadow-sm">
            <div className="flex-grow pl-4 pr-8 border-r border-gray-300">
                <Select
                    label="Location"
                    options={['New York, USA', 'sabb', 'mercedes', 'audi']}
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Label htmlFor="move-in-date">When</Label>

                <input
                    type="date"
                    id="move-in-date"
                    className="font-semibold bg-transparent"
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Select
                    label="Price"
                    options={['New York, USA', 'sabb', 'mercedes', 'audi']}
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Select
                    label="Property Type"
                    options={['New York, USA', 'sabb', 'mercedes', 'audi']}
                />
            </div>

            <div className="flex-shrink pl-8 pr-4">
                <Button>Search</Button>
            </div>
        </div>
    )
}
