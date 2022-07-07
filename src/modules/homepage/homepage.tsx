import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import { Header } from '@/components/header'
import { SearchSection } from './sections/search'
import { CardsSection } from './sections/cards'
import { FilterSection } from './sections/filter'

import { useStore } from './homepage.store'
import { initializePropertyData } from './homepage.utils'

const HomePage: NextPage = () => {
    const { appState, setAppState, setInitialData } = useStore((state) => state)

    React.useEffect(() => {
        initializePropertyData(setAppState, setInitialData)
    }, [])

    return (
        <>
            <Head>
                <title>Estatery</title>
            </Head>

            <div className="bg-[#F2F3FE] min-h-screen">
                <Header />

                <main className="py-8 mx-auto max-w-7xl">
                    <SearchSection />
                    <FilterSection />

                    {appState !== 'ready' ? (
                        <div className="grid capitalize lg:h-40 lg:text-xl place-content-center">
                            {appState}...
                        </div>
                    ) : (
                        <CardsSection />
                    )}
                </main>
            </div>
        </>
    )
}

export default HomePage
