import { About } from './components/About'
import { HomeContainer, MainContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <About />
      <MainContainer>
        <h1>Nossos cafés</h1>
      </MainContainer>
    </HomeContainer>
  )
}
