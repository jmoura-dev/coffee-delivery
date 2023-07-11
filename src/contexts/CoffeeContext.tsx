import { ReactNode, createContext, useState } from 'react'

// interface CoffeeProps {
//   id: string
//   name: string
//   ingredients: string[]
//   price: number
//   amount: number
// }

export const CoffeeContext = createContext({})

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<[]>([])

  return (
    <CoffeeContext.Provider value={{ coffeeCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
