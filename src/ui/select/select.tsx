import {Label} from '../label'

interface Props {
    label: string
    options: string[]
}

export const Select: React.FC<Props> = ({ label, options }) => {
    return (
        <div>
            <Label htmlFor={label.toLowerCase()}>{label}</Label>

            <select
                id={label.toLowerCase()}
                className="text-lg font-semibold capitalize bg-transparent w-max"
            >
                {options.map((value, i) => (
                    <option key={i} value={value.toLowerCase()}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}
