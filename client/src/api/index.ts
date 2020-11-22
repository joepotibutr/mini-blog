import axios from 'axios'

export default {
    account: {
        login: async (data: any) => {
            const { user } = (await axios.post('/auth',{ credentials : { ...data }})).data
            return user
        },
        createAuthor: async (data: any) => {
            await axios.post('/user',{ ...data })
        }
    },
    blog: {
        createBlog: async (data: any) => {
            await axios.post('/blog',{ ...data })
        },
        editBlog : async (id: string , data: any) => {
            await axios.post('/blog/edit',{ id, data })
        },
        deleteBlog: async (id: string) => {
            await axios.post('/blog/del', id)
        }
    }
}