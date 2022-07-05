import { ChevronDown } from 'react-feather'

interface Props {
    heading: string
}

export const Dropdown: React.FC<Props> = ({ heading }) => {
    return (
        <div className="relative group">
            <div className="flex items-center gap-2 px-4 py-2 cursor-default">
                <span>{heading}</span>
                <ChevronDown className="transition duration-500 group-hover:rotate-180" />
            </div>

            <ul className="absolute top-full rounded-lg overflow-hidden border transition duration-500 bg-white transform translate-y-2 border-gray-200 w-52 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                <li className="px-4 py-2 transition hover:bg-gray-100">
                    link 1
                </li>
                <li className="px-4 py-2 transition hover:bg-gray-100">
                    link 2
                </li>
            </ul>
        </div>
    )
}
