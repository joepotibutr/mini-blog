import React, { ReactElement } from 'react'

interface Props {
    login: (data: {author: string, password: string}) => void
    setCreatingAccount:  (val: boolean) => void
}

export default function Login({ login, setCreatingAccount }: Props): ReactElement {
    const [author, setAuthor] = React.useState('')
    const [password, setPassword] = React.useState('')
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
