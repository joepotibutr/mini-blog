import React from 'react';
import ArticleCard , { Card } from '../../components/ArticleCard'
import { AppWrapper } from './styled'
import { Modal } from '../../components/Modal'
import BlogForm from '../../components/BlogForm'
import Account from '../Account'
import api from '../../api'
import { formDefaultValue, IBLOG_FORM_VALUES } from '../../constant/constant'

enum ENUM_BLOG_CARD_ACTIONS {
  CREATE = 'Write a new post',
  EDIT = 'Edit your post'
}

function App() {

  const [blogs, setBlogPosts] = React.useState<Array<Card>>([])
  const [isAuthenticated, setAuthenticate] = React.useState<boolean>(true)
  const [author, setAuthor] = React.useState<null | string>(null)
  const [modalBlog, openBlogModal] = React.useState<ENUM_BLOG_CARD_ACTIONS | null>(null)
  const [blogDefaultValue, setBlogDefaultValue] = React.useState(formDefaultValue)

  React.useEffect(() => {

    if (!localStorage.getItem('token') || !localStorage.getItem('author')) {
      setAuthenticate(false)
    } else {
      setAuthor(localStorage.getItem('author'))
    }

    const fetchBlogs = async () => {
      try {
        const data = await api.blog.getBlogs()
        setBlogPosts(data || [])
      } catch (error) {
        alert(error.response.data.errors.global)
      }
    }
    fetchBlogs()


  }, [])


  async function createBlog(data: IBLOG_FORM_VALUES) {
    const author = localStorage.getItem('author')
    try {
      const blog = author && await api.blog.createBlog(data, author)
      setBlogPosts(prev => ([...prev, blog]))
      alert('Blog post successfully !!')
      onOpenBlogModal(null)
    } catch(error) {
      alert(error.response.data.errors.blog)
    }
  }

   async function editBlog(data: IBLOG_FORM_VALUES) {
     try {
      blogDefaultValue._id && await api.blog.editBlog(blogDefaultValue._id, data)
      onOpenBlogModal(null)
      const idx = blogs.findIndex(blog => blog._id === blogDefaultValue._id)

      setBlogPosts(prev => ([
        ...prev.slice(0, idx),
          {
            ...prev[idx], ...data
          },
        ...prev.slice(idx + 1)
      ]))

     } catch(error) {
      alert(error.response.data.errors.blog)
    }
      
  }

   async function deleteBlog(id : string) {
     try {
      await api.blog.deleteBlog(id)
      setBlogPosts(prev => (prev.filter(blog => blog._id !== id)))
     } catch(error) {
      alert(error.response.data.errors)
     }
  }

  function onOpenBlogModal(action: ENUM_BLOG_CARD_ACTIONS | null, id?: string) {
    if (action === ENUM_BLOG_CARD_ACTIONS.EDIT) {
      const currentBlog = blogs.find(blog => blog._id === id)
      currentBlog && setBlogDefaultValue(currentBlog)
    } else {
      setBlogDefaultValue(formDefaultValue)
    }
    openBlogModal(action)
  }

  const submit = modalBlog === ENUM_BLOG_CARD_ACTIONS.CREATE ? createBlog : editBlog

  return (
    <AppWrapper>
      <div className="wrapper">
        <div className="header">
          <div className="author-name">
            <h1>{author}</h1>
          </div>
          <div className="button-wrapper"><button className="create-blog-btn" onClick={() => onOpenBlogModal(ENUM_BLOG_CARD_ACTIONS.CREATE)}>WRITE A POST</button></div>
          <Modal 
            headerText={modalBlog || ''} 
            isShown={!!modalBlog} 
            hide={() => onOpenBlogModal(null)} 
            modalContent={< BlogForm defaultValues={blogDefaultValue} onSubmit={submit}/>} 
          />
        </div>
        {blogs.length ? 
        (<ul className="blog-list">
          <React.Fragment>
            {blogs.map(card => (
              <ArticleCard 
                actions={card.author === author} 
                key={card._id} card={card}
                onDeleteBlog={(id) => deleteBlog(id)}
                onOpenBlogModal={(id) => onOpenBlogModal(ENUM_BLOG_CARD_ACTIONS.EDIT, id)}
              />
            ))}
          </React.Fragment>
        </ul>)
         : <h1>There is no blog.</h1>}
      </div>
      <Modal 
        headerText="Account" 
        isShown={!isAuthenticated} 
        hide={() => setAuthenticate(false)} 
        modalContent={<Account setAuthenticate={() => setAuthenticate(true)} />} 
      />
    </AppWrapper>
  );
}

export default App;
