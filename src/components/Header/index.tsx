import { HeaderContainer, LocationContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <LocationContainer>
          <MapPin size={20} weight="fill" />
          <span>Maceió, AL</span>
        </LocationContainer>

        <NavLink to="/payment" className="test" title="Finalizar compras">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
