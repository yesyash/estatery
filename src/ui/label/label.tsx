import {cn} from '@/utils/classname'

interface LabelProps {
    className?: string
    children: React.ReactNode
    htmlFor?: string
}

export const Label: React.FC<LabelProps> = ({ className, children, htmlFor }) => {
    return (
        <label
            className={cn(
                'block mb-0.5 text-sm text-gray-500',
                className ? className : ''
            )}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}
