import React, { ReactElement } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'

interface Props {
    setAuthenticate: () => void
}

export default function Account({ setAuthenticate } : Props): ReactElement {

 
    const [isCreatingAccount, setCreatingAccount] = React.useState(false)

    return isCreatingAccount ? 
      <CreateAccount setCreatingAccount={setCreatingAccount} />: 
      <Login setAuthenticate={setAuthenticate} setCreatingAccount={setCreatingAccount}/>
}
