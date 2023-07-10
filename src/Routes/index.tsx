import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Payment } from '../pages/Payment'
import { ConfirmedOrder } from '../pages/ConfirmedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Payment />} />
        <Route path="/" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
