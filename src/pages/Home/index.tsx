import { About } from './components/About'
import { CardsContainer, HomeContainer, MainContainer } from './styles'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <About />
      <MainContainer>
        <h1>Nossos cafés</h1>
        <CardsContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CardsContainer>
      </MainContainer>
    </HomeContainer>
  )
}
