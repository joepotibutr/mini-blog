import React, { ReactElement } from 'react'
import api from '../../../api'
import { AccountFormStyled } from '../styled'

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
        <AccountFormStyled>
        <form onSubmit={(e) => {
            e.preventDefault() 
            login({ author, password})
        }}> 
            <h4>Author</h4>
            <input type="text" id="author" onChange={(e) => setAuthor(e.currentTarget.value)} value={author} />
            <h4>Password</h4>
            <input type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
            <div className="button-wrapper">
              <button><span>Login</span></button>
            </div>
        </form>
        <div className="button-wrapper">
          <button onClick={() => setCreatingAccount(true)}>Create an author</button>
        </div>
        </AccountFormStyled>
    )
}
