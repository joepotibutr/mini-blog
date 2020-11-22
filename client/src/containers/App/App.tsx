import React from 'react';
import ArticleCard , { Card } from '../../components/ArticleCard'
import FlexList from '../../components/FlexList'
import { AppWrapper } from './styled'
import axios from 'axios'
import { Modal } from '../../components/Modal'
import BlogForm from '../../components/BlogForm'
import Account from '../Account'
import api from '../../api'

enum BLOG_CARD_ACTIONS {
  CREATE = 'Write a new post',
  EDIT = 'Edit your post'
}

function App() {

  const [blogs, setBlogPosts] = React.useState<Array<Card>>([])
  const [isAuthenticated, setAuthenticate] = React.useState<boolean>(true)
  const [author, setAuthor] = React.useState<null | string>(null)
  const [modalBlog, openBlogModal] = React.useState<BLOG_CARD_ACTIONS | null>(null)
  const [blogDefaultValue, setBlogDefaultValue] = React.useState({
        title: '',
        status: '',
        content : '',
        category: ''
  })

  React.useEffect(() => {

    if (!localStorage.getItem('token') || !localStorage.getItem('author')) {
      setAuthenticate(false)
    } else {
      setAuthor(localStorage.getItem('author'))
    }

    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('/blog')
        setBlogPosts(data || [])
      } catch (err) {
      }
    }
    fetchArticles()


  }, [blogs.length])

  async function login(data: { author: string, password: string }) {
    try {
      const { user } = (await axios.post('/auth',{ credentials : { ...data }})).data
      localStorage.setItem('token',user.token)
      localStorage.setItem('author',user.author)

      alert('Login Successfully !')
      setAuthenticate(true)
    } catch {
      alert('Err !!')
    }
  }

  async function createAuthor(data: { author: string, password: string }) {
    try {
      await axios.post('/user',{ ...data })
      alert('Create author successfully !!')
    } catch {
      alert('Err !!')
    }
  }

  async function createBlog(data: { title: string, content: string, category: string, status:string }) {
    const author = localStorage.getItem('author')
    try {
      const { blog } = (await axios.post('/blog',{ ...data, author })).data
      setBlogPosts(prev => ([...prev, blog]))
      alert('Blog post successfully !!')
      onOpenBlogModal(null)
    } catch {
      alert('Err !!')
    }
  }

   function editBlog(id: string) {
    api.blog.editBlog(id, {})
  }

   function deleteBlog(id : string) {
    console.log(id)
    api.blog.deleteBlog(id)
  }

  function onOpenBlogModal(action: BLOG_CARD_ACTIONS | null, id?: string) {
    if (action === BLOG_CARD_ACTIONS.EDIT) {
      const currentBlog = blogs.find(blog => blog._id === id)
      currentBlog && setBlogDefaultValue(currentBlog)
    }
    openBlogModal(action)
  }


  return (
    <AppWrapper>
      <div className="wrapper">
        <div>
          <div>
            <h1>{author}</h1>
          </div>
          <div><button onClick={() => onOpenBlogModal(BLOG_CARD_ACTIONS.CREATE)}>WRITE A POST</button></div>
          <Modal 
            headerText={modalBlog || ''} 
            isShown={!!modalBlog} 
            hide={() => onOpenBlogModal(null)} 
            modalContent={< BlogForm defaultValues={blogDefaultValue} onSubmit={createBlog}/>} 
          />
        </div>
        {blogs.length ? 
        (<FlexList>
          <React.Fragment>
            {blogs.map(card => (
              <ArticleCard 
                actions={card.author === author} 
                key={card._id} card={card}
                onDeleteBlog={(id) => deleteBlog(id)}
                onEditBlog={(id) => editBlog(id)}
                onOpenBlogModal={(id) => onOpenBlogModal(BLOG_CARD_ACTIONS.EDIT, id)}
              />
            ))}
          </React.Fragment>
        </FlexList>)
         : <h1>There is no blog.</h1>}
      </div>
      <Modal 
        headerText="Account" 
        isShown={!isAuthenticated} 
        hide={() => setAuthenticate(false)} 
        modalContent={<Account create={createAuthor} login={login} />} 
      />
    </AppWrapper>
  );
}

export default App;
