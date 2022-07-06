import { cn } from '@/utils/classname'
import { ChevronDown } from 'react-feather'

interface Props {
    heading: string
    className?: string
}

export const Dropdown: React.FC<Props> = ({ heading, className }) => {
    return (
        <div className="relative group">
            <div
                className={cn(
                    'flex items-center gap-2 cursor-default',
                    className ? className : ''
                )}
            >
                <span>{heading}</span>
                <ChevronDown className="transition duration-500 group-hover:rotate-180" />
            </div>

            <ul className="absolute z-10 overflow-hidden transition duration-500 transform translate-y-2 bg-white border border-gray-200 rounded-lg opacity-0 pointer-events-none top-full w-52 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                <li className="px-4 py-2 text-black transition hover:bg-gray-100">
                    link 1
                </li>
                <li className="px-4 py-2 text-black transition hover:bg-gray-100">
                    link 2
                </li>
            </ul>
        </div>
    )
}
