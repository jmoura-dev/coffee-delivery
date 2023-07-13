import { ReactNode, createContext, useState } from 'react'

interface FormUserProps {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
  paymentType: string
}

interface UserPurchaseProps {
  newUserPurchase: FormUserProps
  userPurchase: FormUserProps
  setUserPurchase: React.Dispatch<React.SetStateAction<FormUserProps>>
}

interface FormContextProps {
  children: ReactNode
}

export const FormContext = createContext({} as UserPurchaseProps)

export function FormContextProvider({ children }: FormContextProps) {
  const newUserPurchase: FormUserProps = {
    cep: '',
    city: '',
    neighborhood: '',
    number: '',
    street: '',
    uf: '',
    complement: '',
    paymentType: '',
  }

  const [userPurchase, setUserPurchase] =
    useState<FormUserProps>(newUserPurchase)

  return (
    <FormContext.Provider
      value={{ newUserPurchase, setUserPurchase, userPurchase }}
    >
      {children}
    </FormContext.Provider>
  )
}
