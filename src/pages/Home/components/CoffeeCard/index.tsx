import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AmountContainer, CoffeeContainer, FooterCard } from './styles'

import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  price: number
  ingredients: string[]
  amount: number
  image: string
  onClick: () => void
}

export function CoffeeCard({
  id,
  name,
  description,
  price,
  amount,
  image,
  ingredients,
  onClick,
}: CoffeeProps) {
  const { handleIncreaseAmount, handleDecreaseAmount } =
    useContext(CoffeeContext)

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
            <button onClick={() => handleDecreaseAmount(id)}>
              <Minus size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={() => handleIncreaseAmount(id)}>
              <Plus size={14} />
            </button>
          </AmountContainer>

          <button onClick={onClick}>
            <ShoppingCart size={18} color="white" weight="fill" />
          </button>
        </div>
      </FooterCard>
    </CoffeeContainer>
  )
}
