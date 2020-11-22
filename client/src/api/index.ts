import axios from 'axios'
import { IBLOG_FORM_VALUES } from '../constant/constant'

export default {
    account: {
        login: async (data: { author: string, password: string }) => {
            const { user } = (await axios.post('/auth',{ credentials : { ...data }})).data
            return user
        },
        create: async (data: { author: string, password: string }) => {
            const { result } =  (await axios.post('/user', { user : data })).data
            console.log(result)
        }
    },
    blog: {
        getBlogs: async () => {
            const { data } = await axios.get('/blogs')
            return data
        },
        createBlog: async (data: IBLOG_FORM_VALUES, author: string) => {
            const { blog } = (await axios.post('/blogs',{ ...data, author })).data
            return blog
        },
        editBlog : async (id: string , data: IBLOG_FORM_VALUES) => {
            await axios.put('/blogs/edit',{ id, data })
        },
        deleteBlog: async (id: string) => {
            await axios.delete('/blogs/del', { data: { id }})
        }
    }
}