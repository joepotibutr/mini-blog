import React, { ReactElement } from 'react'
import api from '../../../api'

interface Props {
    setCreatingAccount:  (val: boolean) => void
}

export default function Login({ setCreatingAccount }: Props): ReactElement {
    const [author, setAuthor] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function login(data: { author: string, password: string }) {
        try {
          const user  =  await api.account.login(data)
    
          localStorage.setItem('token',user.token)
          localStorage.setItem('author',user.author)
    
          alert('Login Successfully !')
          window.location.reload()
        } catch(error) {
          alert(error.response.data.errors.global)
        }
      }


    return (
        <div>
        <form onSubmit={(e) => {
            e.preventDefault() 
            login({ author, password})
        }}>
            <input id="author" onChange={(e) => setAuthor(e.currentTarget.value)} value={author} />
            <input id="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
            <button>Login</button>
        </form>
        <button onClick={() => setCreatingAccount(true)}>Create an author</button>
        </div>
    )
}
