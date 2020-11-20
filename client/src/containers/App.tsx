import React from 'react';
import ArticleCard from '../components/ArticleCard'
import axios from 'axios'

function App() {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('/blog')
        setArticles(data || [])
      } catch (err) {
      }
    }
    fetchArticles()
  }, [])


  return (
    <div>
      <h1>mini Blog
        {articles.length ? articles.map(card => (
          <ArticleCard />
        )) : null}
      </h1>
    </div>
  );
}

export default App;
