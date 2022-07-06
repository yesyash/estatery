import { Searchbar } from '@/ui/searchbar'
import React from 'react'

export const SearchSection = () => {
    return (
        <div className="flex items-center justify-between py-6 mb-2">
            <h2 className="text-3xl font-semibold">
                Search properties to rent
            </h2>

            <Searchbar
                placeholder="Search by location"
                value=""
                onChange={(e) => console.log(e.currentTarget.value)}
            />
        </div>
    )
}
