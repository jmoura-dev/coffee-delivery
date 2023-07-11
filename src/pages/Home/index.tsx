import { useContext } from 'react'
import { About } from './components/About'
import { CardsContainer, HomeContainer, MainContainer } from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeCard, CoffeeProps } from './components/CoffeeCard'

export function Home() {
  const arrayCoffee: CoffeeProps[] = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <About />
      <MainContainer>
        <h1>Nossos cafés</h1>
        <CardsContainer>
          <ul>
            {arrayCoffee.map((item) => {
              return (
                <CoffeeCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  amount={item.amount}
                  ingredients={item.ingredients}
                  price={item.price}
                  id={item.id}
                />
              )
            })}
          </ul>
        </CardsContainer>
      </MainContainer>
    </HomeContainer>
  )
}
