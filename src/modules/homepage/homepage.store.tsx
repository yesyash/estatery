/**
 * Global store for homepage.
 */

import create from 'zustand'
import { IProperty } from '@/types/property'

type AppStates = 'loading' | 'error' | 'ready'

export interface IStore {
    filteredData: IProperty[]
    appState: AppStates
    properties: IProperty[]
    setInitialData: (data: IProperty[]) => void
    setAppState: (newState: AppStates) => void
    setFilteredData: (newData: IProperty[]) => void
}

export const useStore = create<IStore>((set) => ({
    properties: [],
    filteredData: [],
    appState: 'loading',
    setAppState: (newState: AppStates) =>
        set((state) => ({ ...state, appState: newState })),
    setInitialData: (data: IProperty[]) =>
        set((state) => ({ ...state, properties: data, filteredData: data })),
    setFilteredData: (newData: IProperty[]) =>
        set((state) => ({ ...state, filteredData: newData })),
}))
