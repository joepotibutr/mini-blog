import React, { ReactElement } from 'react'
import api from '../../../api'
import { AccountFormStyled } from '../styled'

interface Props {
    setCreatingAccount:  (val: boolean) => void
}

export default function CreateAccount({ setCreatingAccount }: Props): ReactElement {

    async function createAuthor(data: { author: string, password: string }) {
        try {
          await api.account.create(data)
          alert('Create author successfully !!')
        } catch(error) {
          alert(error.response.data.errors.author)
        }
      }

    const [author, setAuthor] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <AccountFormStyled>
           <div className="button-wrapper">
              <button onClick={() => setCreatingAccount(false)}>
                <span>Back</span>
              </button>
           </div>
        <form onSubmit={(e) => {
            e.preventDefault() 
            createAuthor({ author, password })
            setCreatingAccount(false)
        }}>
          <h4>Author</h4>
            <input type="text" id="author" onChange={(e) => setAuthor(e.currentTarget.value)} value={author} />
            <h4>Password</h4>
            <input type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
            <div className="button-wrapper">
              <button><span>Create</span></button>
            </div>
        </form>
        </AccountFormStyled>
    )
}
