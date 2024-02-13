import { useContext, useEffect, useState } from "react";
import "./App.scss";

import {
  createNewBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  updateBlogPost,
} from "./services/blog-post-services";
import BlogPostList from "./containers/BlogPostList/BlogPostList";
import BlogsDataContextProvider, {
  BlogsDataContext,
} from "./context/BlogsDataContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";

function App() {
  const { blogsData, setBlogsData } = useContext(BlogsDataContext);

  return (
    <main>
      <BrowserRouter>
        {/* Header "Blog Posts" */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPostPage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </main>
  );
}

export default App;
