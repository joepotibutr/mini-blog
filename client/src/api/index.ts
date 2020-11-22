import axios from 'axios'

export default {
    account: {
        login: async (data: any) => {
            const { user } = (await axios.post('/auth',{ credentials : { ...data }})).data
            return user
        },
        create: async (data: any) => {
            const { result } =  (await axios.post('/user', { user : data })).data
            console.log(result)
        }
    },
    blog: {
        getBlogs: async () => {
            const { data } = await axios.get('/blogs')
            return data
        },
        createBlog: async (data: any, author: string) => {
            const { blog } = (await axios.post('/blogs',{ ...data, author })).data
            return blog
        },
        editBlog : async (id: string , data: any) => {
            await axios.put('/blogs/edit',{ id, data })
        },
        deleteBlog: async (id: string) => {
            await axios.delete('/blogs/del', { data: { id }})
        }
    }
}