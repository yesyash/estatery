import React from 'react'

import { Button } from '@/ui/button'
import { Label } from '@/ui/label'
import { Select } from '@/ui/select'
import { useStore } from '../homepage.store'
import {
    defaultFilterValue,
    Locations,
    PropertyPricing,
    PropertyTypes,
} from '../homepage.const'
import { IFilterChange } from '../homepage.types'
import { filterData, handleFilterChange } from '../homepage.utils'

export const FilterSection = () => {
    const { properties, setFilteredData } = useStore((store) => store)

    const [filterValue, setFilterValue] = React.useState({
        location: '',
        date: 0,
        price: 0,
        propertyType: '',
    })

    const handleChange = (data: IFilterChange) => {
        handleFilterChange(data, setFilterValue)
    }

    const handleSearchClick = () => {
        if (filterValue.date === 0) {
            window.alert('Please Select a date')
        } else {
            let data = filterData(properties, filterValue)
            setFilteredData(data)
        }
    }

    React.useEffect(() => {
        setFilterValue(defaultFilterValue)

        //reset the date incase of multiple re-renders
        let dateInput = document.getElementById(
            'move-in-date'
        ) as HTMLInputElement
        dateInput.value = ''
    }, [])

    React.useEffect(() => {
        console.log(filterValue)
    }, [filterValue])

    return (
        <div className="flex items-center px-4 py-4 mx-auto mb-8 bg-white border rounded-md max-w-7xl border-violet-100 drop-shadow-sm">
            <div className="flex-grow pl-4 pr-8 border-r border-gray-300">
                <Select
                    value={filterValue.location}
                    label="Location"
                    options={Locations}
                    onChange={(e) =>
                        handleChange({
                            type: 'location',
                            value: e.currentTarget.value,
                        })
                    }
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Label htmlFor="move-in-date">When</Label>

                <input
                    type="date"
                    id="move-in-date"
                    className="font-semibold bg-transparent"
                    onChange={(e) => {
                        handleChange({
                            type: 'date',
                            value: new Date(e.currentTarget.value).getTime(),
                        })
                    }}
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Select
                    label="Price"
                    value={filterValue.price}
                    options={PropertyPricing}
                    onChange={(e) => {
                        handleChange({
                            type: 'price',
                            value: Number(e.currentTarget.value),
                        })
                    }}
                />
            </div>

            <div className="flex-grow px-8 border-r border-gray-300">
                <Select
                    label="Property Type"
                    value={filterValue.propertyType}
                    options={PropertyTypes}
                    onChange={(e) =>
                        handleChange({
                            type: 'propertyType',
                            value: e.currentTarget.value,
                        })
                    }
                />
            </div>

            <div className="flex-shrink pl-8 pr-4">
                <Button onClick={handleSearchClick}>Search</Button>
            </div>
        </div>
    )
}
