import React, { ReactElement } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'

interface Props {
    login: (data: { author: string, password: string }) => void
    create: (data: { author: string, password: string }) => void
}

export default function Account({ login, create }: Props): ReactElement {

 
    const [isCreatingAccount, setCreatingAccount] = React.useState(false)

    return isCreatingAccount ? 
      <CreateAccount setCreatingAccount={setCreatingAccount} create={create} />: 
      <Login setCreatingAccount={setCreatingAccount} login={login} />
}
