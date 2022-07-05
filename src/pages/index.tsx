import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Dropdown } from '@/components/dropdown'
import { Searchbar } from '@/components/searchbar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="p-8 bg-[#F2F3FE]">
            <div className="flex items-center gap-4">
                <div>
                    <Button
                        type="secondary"
                        onClick={() => console.log('button clicked')}
                    >
                        Login
                    </Button>
                </div>

                <div>
                    <Button onClick={() => console.log('button clicked')}>
                        Sign Up
                    </Button>
                </div>
            </div>

            <div className="mt-4 max-w-max">
                <Dropdown heading="Dropdown link" />
            </div>

            <div className="mt-4 max-w-max">
                <Searchbar
                    value="house"
                    onChange={(e) => console.log(e.currentTarget.value)}
                    placeholder="Search house by name"
                />
            </div>

            <div className="mt-4 max-w-max">
                <input
                    type="date"
                    onChange={(e) =>
                        console.log(
                            new Date(`${e.currentTarget.value}`).getTime()
                        )
                    }
                />
            </div>

            <div className="mt-4">
                <Card />
            </div>
        </div>
    )
}

export default Home
