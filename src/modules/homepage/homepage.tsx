import type { NextPage } from 'next'

import { Header } from '@/components/header'
import { SearchSection } from './sections/search'
import { CardsSection } from './sections/cards'
import { FilterSection } from './sections/filter'

const HomePage: NextPage = () => {
    return (
        <main className="min-w-full min-h-screen bg-[#F2F3FE]">
            <Header />

            <section className="py-8 mx-auto max-w-7xl ">
                <SearchSection />
                <FilterSection />
                <CardsSection />
            </section>
        </main>
    )
}

export default HomePage
