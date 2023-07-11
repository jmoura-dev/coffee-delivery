import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AmountContainer, CoffeeContainer, FooterCard } from './styles'

// import CoffeeTradicional from '../../../../assets/Expresso.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  price: number
  ingredients: string[]
  amount: number
  image: string
}

export function CoffeeCard({
  name,
  description,
  price,
  image,
  ingredients,
}: CoffeeProps) {
  const [itemPrice, setItemPrice] = useState(1)

  function handleIncreaseAmount() {
    if (itemPrice >= 9) {
      return alert('O valor máximo são de nove cafés por pedido.')
    }
    setItemPrice((state) => {
      return state + 1
    })
  }

  function handleDecreaseAmount() {
    if (itemPrice <= 1) {
      return alert('O valor mínimo é de um café por pedido.')
    }
    setItemPrice((state) => {
      return state - 1
    })
  }

  return (
    <CoffeeContainer>
      <img src={image} alt="" className="imageCoffee" />
      <section>
        {ingredients.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </section>

      <h2>{name}</h2>
      <p>{description}</p>

      <FooterCard>
        <div>
          <span>R$</span>
          <strong>{price}</strong>
        </div>

        <div>
          <AmountContainer>
            <button onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>
            <span>{itemPrice}</span>
            <button onClick={handleIncreaseAmount}>
              <Plus size={14} />
            </button>
          </AmountContainer>

          <NavLink to="/payment">
            <ShoppingCart size={18} color="white" weight="fill" />
          </NavLink>
        </div>
      </FooterCard>
    </CoffeeContainer>
  )
}
