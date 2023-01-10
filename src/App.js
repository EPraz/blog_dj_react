import React from 'react'
import Error404 from 'containers/errors/Error404'
import Home from 'containers/pages/Home'
import store from 'store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Blog from 'containers/pages/blog/Blog'
import BlogPost from 'containers/pages/blog/BlogPost'
import BlogCategory from 'containers/pages/blog/category/BlogCategory'
import Search from 'containers/pages/Search'
import Contact from 'containers/pages/Contact'
import Login from 'containers/pages/Login'

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
          <Route path="/blog/categories/:category_id" element={<BlogCategory />} />
          
          <Route path="/blog/contact" element={<Contact />} />
          <Route path="/blog/login" element={<Login />} />

          <Route path="/search/:term" element={<Search />} />
          
        </Routes>
      </Router>
    </Provider>
  )}

export default App