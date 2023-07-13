import { useContext } from 'react'
import { About } from './components/About'
import { CardsContainer, HomeContainer, MainContainer } from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeCard } from './components/CoffeeCard'

interface CoffeeProps {
  id: string
  name: string
  description: string
  image: string
  amount: number
  ingredients: string[]
  price: number
}

export function Home() {
  const { arrayAllCoffees, arrayCoffee, setArrayCoffee, setCoffeeCart } =
    useContext(CoffeeContext)

  function handleAddNewCoffeeInCart(coffee: CoffeeProps) {
    setCoffeeCart((state) => {
      return [...state, coffee]
    })
    setArrayCoffee(arrayAllCoffees)
  }

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
                  onClick={() => handleAddNewCoffeeInCart(item)}
                />
              )
            })}
          </ul>
        </CardsContainer>
      </MainContainer>
    </HomeContainer>
  )
}
