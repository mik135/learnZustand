import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set({firstName: firstName}),
    updateLastName: (lastName) => set({lastName: lastName})
}))

export {useStore, usePersonStore}