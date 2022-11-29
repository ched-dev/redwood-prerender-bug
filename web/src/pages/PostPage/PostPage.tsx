import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PostPage = ({ id }) => {
  return (
    <>
      <MetaTags title={`Post ${id}`} description={`Description ${id}`} />

      <h1>Posts Page {id}</h1>
    </>
  )
}

export default PostPage
