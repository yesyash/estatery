import { Label } from '../label'

interface Props {
    label: string
    value?: string | number
    options: {
        value: string | number
        text: string
    }[]
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<Props> = ({
    value,
    label,
    options,
    onChange,
}) => {
    return (
        <div>
            <Label htmlFor={label.toLowerCase()}>{label}</Label>

            <select
                value={value}
                id={label.toLowerCase()}
                onChange={onChange}
                className="text-lg font-semibold capitalize bg-transparent w-max"
            >
                {options.map((data, i) => (
                    <option key={i} value={data.value}>
                        {data.text}
                    </option>
                ))}
            </select>
        </div>
    )
}
