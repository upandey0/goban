import Header from "../components/Header"
import Post from "../components/Posts"

const PostPage = () => {
  return (
    <div className="flex w-screen flex-grow justify-center flex-col">
        <Header/>
        <Post/>
    </div>
  )
}

export default PostPage
