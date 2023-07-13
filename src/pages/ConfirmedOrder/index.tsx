import { About } from './components/About'
import { OrderContainer } from './styles'

import ImagemDoEntregador from '../../assets/Entregador.svg'
import { HouseLine } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function ConfirmedOrder() {
  return (
    <OrderContainer>
      <NavLink to="/" title="início">
        <HouseLine size={16} color="#8047F8" />
        Início
      </NavLink>
      <header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <section>
        <About />
        <img src={ImagemDoEntregador} alt="Imagem do entregador" />
      </section>
    </OrderContainer>
  )
}
