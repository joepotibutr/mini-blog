import React, { ReactElement } from 'react'

interface Props {
    create: (data: { author: string, password: string }) => void
    setCreatingAccount:  (val: boolean) => void
}

export default function CreateAccount({ create,setCreatingAccount }: Props): ReactElement {

    const [author, setAuthor] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div>
        <button onClick={() => setCreatingAccount(false)}>Back</button>
        <form onSubmit={(e) => {
            e.preventDefault() 
            create({ author, password })
            setCreatingAccount(false)
        }}>
            <input id="author" onChange={(e) => setAuthor(e.currentTarget.value)} value={author} />
            <input id="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
            <button>Create</button>
        </form>
        </div>
    )
}
