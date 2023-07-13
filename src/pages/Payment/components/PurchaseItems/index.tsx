import { useContext } from 'react'
import { ControlAmount, PurchaseItemsContainer } from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface PurchaseItemsProps {
  image: string
  amount: number
  totalPrice: number
  name: string
  id: string
}

export function PurchaseItems({
  id,
  name,
  image,
  totalPrice,
  amount,
}: PurchaseItemsProps) {
  const { coffeeCart, setCoffeeCart } = useContext(CoffeeContext)

  function handleRemoveAmount(id: string) {
    setCoffeeCart((state) => {
      return state.map((coffee) => {
        if (coffee.id === id && coffee.amount <= 1) {
          alert('Mínimo de uma unidade por pedido.')
          return coffee
        }
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount - 1,
          }
        }
        return coffee
      })
    })
  }

  function handleAddAmount(id: string) {
    setCoffeeCart((state) => {
      return state.map((coffee) => {
        if (coffee.id === id && coffee.amount >= 10) {
          alert('Máximo de dez unidades por pedido.')
          return coffee
        }
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount + 1,
          }
        }
        return coffee
      })
    })
  }

  function handleRemoveCoffee(id: string) {
    const newCoffeeCart = coffeeCart.filter((coffee) => coffee.id !== id)
    setCoffeeCart(newCoffeeCart)
    return alert('Item removido com sucesso.')
  }

  return (
    <PurchaseItemsContainer>
      <img src={image} alt="" />
      <section>
        <strong>{name}</strong>
        <ControlAmount>
          <div>
            <button onClick={() => handleRemoveAmount(id)}>
              <Minus size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={() => handleAddAmount(id)}>
              <Plus size={14} />
            </button>
          </div>
          <button onClick={() => handleRemoveCoffee(id)}>
            <Trash size={16} color="#4B2995" />
            REMOVER
          </button>
        </ControlAmount>
      </section>
      <span>{`R$ ${totalPrice}`}</span>
    </PurchaseItemsContainer>
  )
}
