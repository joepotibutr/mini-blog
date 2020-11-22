import React, { ReactElement } from 'react'
import api from '../../../api'

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
        <div>
        <button onClick={() => setCreatingAccount(false)}>Back</button>
        <form onSubmit={(e) => {
            e.preventDefault() 
            createAuthor({ author, password })
            setCreatingAccount(false)
        }}>
            <input id="author" onChange={(e) => setAuthor(e.currentTarget.value)} value={author} />
            <input id="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
            <button>Create</button>
        </form>
        </div>
    )
}
