import React, { ReactElement } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'

interface Props {
}

export default function Account({  } : Props): ReactElement {

 
    const [isCreatingAccount, setCreatingAccount] = React.useState(false)

    return isCreatingAccount ? 
      <CreateAccount setCreatingAccount={setCreatingAccount} />: 
      <Login setCreatingAccount={setCreatingAccount}/>
}
