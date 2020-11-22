import React from 'react'
import api from '../../api'

interface Props {
    defaultValues: {
        title: string,
        status: string,
        content : string,
        category: string
    }
    onSubmit: (data: {
        title: string,
        status: string,
        content : string,
        category: string
    }) => void
}

export default (props: Props) => {

    const [formValues, setFormValues] = React.useState(props.defaultValues)

    function submit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        props.onSubmit(formValues)
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.currentTarget
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form onSubmit={submit}>
            <h4>Title</h4>
            <input name="title" onChange={onChange} value={formValues.title} type="text" />
            <h4>Status</h4>
            <input name="status" onChange={onChange} value={formValues.status} type="text" />
            <h4>Content</h4>
            <input name="content" onChange={onChange} value={formValues.content} type="text" />
            <h4>Category</h4>
            <input name="category" onChange={onChange} value={formValues.category} type="text" />
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}
