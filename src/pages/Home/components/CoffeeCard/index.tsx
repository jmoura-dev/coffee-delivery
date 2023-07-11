import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AmountContainer, CoffeeContainer, FooterCard } from './styles'

import CoffeeTradicional from '../../../../assets/Expresso.svg'
import { NavLink } from 'react-router-dom'

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={CoffeeTradicional} alt="" className="imageCoffee" />
      <span>Tradicional</span>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <FooterCard>
        <div>
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <div>
          <AmountContainer>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
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
