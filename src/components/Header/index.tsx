import { HeaderContainer, LocationContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeeCart } = useContext(CoffeeContext)

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
          {coffeeCart.length > 0 && <span>{coffeeCart.length}</span>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
