import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Header } from '@/components/header'
import { Searchbar } from '@/components/searchbar'
import { cn } from '@/utils/classname'
import type { NextPage } from 'next'

interface Props {
    label: string
    options: string[]
}

interface LabelProps {
    className?: string
    children: React.ReactNode
    htmlFor?: string
}

const Label: React.FC<LabelProps> = ({ className, children, htmlFor }) => {
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

const Select: React.FC<Props> = ({ label, options }) => {
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

const Home: NextPage = () => {
    return (
        <main className="min-w-full min-h-screen bg-[#F2F3FE]">
            <Header />

            <section className="py-8 mx-auto max-w-7xl ">
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

                <div className="flex items-center px-4 py-4 mx-auto mb-8 bg-white border rounded-md max-w-7xl border-violet-100 drop-shadow-sm">
                    <div className="flex-grow pl-4 pr-8 border-r border-gray-300">
                        <Select
                            label="Location"
                            options={[
                                'New York, USA',
                                'sabb',
                                'mercedes',
                                'audi',
                            ]}
                        />
                    </div>

                    <div className="flex-grow px-8 border-r border-gray-300">
                        <Label htmlFor="move-in-date">When</Label>

                        <input
                            type="date"
                            id="move-in-date"
                            className="font-semibold bg-transparent"
                        />
                    </div>

                    <div className="flex-grow px-8 border-r border-gray-300">
                        <Select
                            label="Price"
                            options={[
                                'New York, USA',
                                'sabb',
                                'mercedes',
                                'audi',
                            ]}
                        />
                    </div>

                    <div className="flex-grow px-8 border-r border-gray-300">
                        <Select
                            label="Property Type"
                            options={[
                                'New York, USA',
                                'sabb',
                                'mercedes',
                                'audi',
                            ]}
                        />
                    </div>

                    <div className="flex-shrink pl-8 pr-4">
                        <Button>Search</Button>
                    </div>
                </div>

                <div className="grid grid-cols-3 py-8 mx-auto my-4 gap-14">
                    <div>
                        <Card />
                    </div>

                    <div>
                        <Card />
                    </div>

                    <div>
                        <Card />
                    </div>

                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
