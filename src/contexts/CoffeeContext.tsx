import { ReactNode, createContext, useState } from 'react'

import Tradicional from '../assets/Expresso.svg'
import Americano from '../assets/Americano.svg'
import Cremoso from '../assets/Expresso-Cremoso.svg'
import ComLeite from '../assets/Café-com-Leite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Mocaccino from '../assets/Mochaccino.svg'
import ChocolateQuente from '../assets/Chocolate-Quente.svg'
import Cubano from '../assets/Cubano.svg'
import Arabe from '../assets/Árabe.svg'
import Irlandes from '../assets/Irlandês.svg'

interface CoffeeProps {
  id: string
  name: string
  description: string
  ingredients: string[]
  price: number
  amount: number
  image: string
}

interface ContextProps {
  coffeeCart: CoffeeProps[]
  setCoffeeCart: React.Dispatch<React.SetStateAction<CoffeeProps[]>>
  arrayCoffee: CoffeeProps[]
  handleIncreaseAmount: (id: string) => void
  handleDecreaseAmount: (id: string) => void
}

export const CoffeeContext = createContext({} as ContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const arrayAllCoffees: CoffeeProps[] = [
    {
      id: '1',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      amount: 1,
      image: Tradicional,
      ingredients: ['tradicional'],
      price: 9.95,
    },
    {
      id: '2',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      amount: 1,
      image: Americano,
      ingredients: ['tradicional'],
      price: 11.99,
    },
    {
      id: '3',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      amount: 1,
      image: Cremoso,
      ingredients: ['tradicional'],
      price: 11.25,
    },
    {
      id: '4',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      amount: 1,
      image: ComLeite,
      ingredients: ['tradicional', 'com leite'],
      price: 10.49,
    },
    {
      id: '5',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      amount: 1,
      image: Latte,
      ingredients: ['tradicional', 'com leite'],
      price: 11.55,
    },
    {
      id: '6',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      amount: 1,
      image: Capuccino,
      ingredients: ['tradicional', 'com leite'],
      price: 10.79,
    },
    {
      id: '7',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      amount: 1,
      image: Mocaccino,
      ingredients: ['tradicional', 'com leite'],
      price: 10.99,
    },
    {
      id: '8',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      amount: 1,
      image: ChocolateQuente,
      ingredients: ['especial', 'com leite'],
      price: 11.99,
    },
    {
      id: '9',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      amount: 1,
      image: Cubano,
      ingredients: ['especial', 'alcoólico', 'gelado'],
      price: 12.99,
    },
    {
      id: '10',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      amount: 1,
      image: Arabe,
      ingredients: ['especial'],
      price: 11.99,
    },
    {
      id: '11',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      amount: 1,
      image: Irlandes,
      ingredients: ['especial', 'alcoólico'],
      price: 11.99,
    },
  ]
  const [coffeeCart, setCoffeeCart] = useState<CoffeeProps[]>([])
  const [arrayCoffee, setArrayCoffee] = useState<CoffeeProps[]>(arrayAllCoffees)

  function handleIncreaseAmount(id: string) {
    setArrayCoffee((arrayAllCoffees) => {
      return arrayAllCoffees.map((coffee) => {
        if (coffee.id === id && coffee.amount >= 10) {
          alert('Valor máximo de dez itens por pedido.')
          return {
            ...coffee,
          }
        } else if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount + 1,
          }
        }
        return coffee
      })
    })
  }

  function handleDecreaseAmount(id: string) {
    setArrayCoffee((arrayAllCoffees) => {
      return arrayAllCoffees.map((coffee) => {
        if (coffee.id === id && coffee.amount <= 1) {
          alert('Valor mínimo de um item por pedido.')
          return {
            ...coffee,
          }
        } else if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount - 1,
          }
        }
        return coffee
      })
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeCart,
        setCoffeeCart,
        arrayCoffee,
        handleIncreaseAmount,
        handleDecreaseAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
