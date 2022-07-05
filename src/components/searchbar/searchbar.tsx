import React from 'react'

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
        <div>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="px-4 py-2 border-2 border-gray-200 rounded-md focus:border-purple-500 transition duration-300"
            />
        </div>
    )
}
