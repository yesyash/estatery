import { cn } from '@/utils/classname'
import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?: () => void
    type?: 'primary' | 'secondary'
}

export const Button: React.FC<Props> = ({
    children,
    onClick,
    type = 'primary',
}) => {
    return (
        <button
            className={cn(
                'px-4 py-2 font-medium rounded-md transition ease-in-out duration-300 transform hover:translate-y-[1px]',
                type === 'primary'
                    ? 'bg-violet-600 text-white hover:bg-violet-800'
                    : 'border-2 border-gray-300 text-violet-700 hover:border-violet-800 focus:'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
