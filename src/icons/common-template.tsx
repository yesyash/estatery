import React from 'react'
import { cn } from '@/utils/classname'

interface Props {
    children: React.ReactNode
    small: boolean
}

export const CommonTemplate: React.FC<Props> = ({ children, small }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className={cn(
                'block fill-current stroke-inherit',
                small ? 'w-[18px] h-[18px]' : 'w-6 h-6'
            )}
        >
            {children}
        </svg>
    )
}
