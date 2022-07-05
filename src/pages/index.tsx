import { Button } from '@/components/button'
import { Dropdown } from '@/components/dropdown'
import { Searchbar } from '@/components/searchbar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="m-8">
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
        </div>
    )
}

export default Home
