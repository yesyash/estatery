import React from 'react'
import { Search } from 'react-feather'

interface Props {
    value: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Searchbar: React.FC<Props> = ({
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center gap-4 px-4 py-2 duration-300 bg-white border-2 border-gray-200 rounded-md group stroke-gray-400 focus-within:stroke-violet-500 focus-within:border-violet-500">
            <Search width={18} height={18} className="stroke-inherit" />
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="transition "
            />
        </div>
    )
}
