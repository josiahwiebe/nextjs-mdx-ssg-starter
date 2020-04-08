import Layout from '../../components/Layout'
import { getCollection } from '../../utils/getCollection'

export const meta = {
  title: 'Blog',
}

export default ({ posts }) => (
  <Layout title={meta.title}>
    <div className='wrapper'>
      {posts
        .filter((post) => post.published === true)
        .map((post, index) => (
          <article key={index} id={`post-${index}`}>
            <h2>
              <a href={post.url}>{post.title}</a>
            </h2>
            <div className='post-description'>
              Posted on{' '}
              <a href={post.url}>
                {new Date(post.date).toLocaleDateString('en-ca', { year: 'numeric', month: 'long', day: 'numeric' })}
              </a>{' '}
              {post.author && <>by {post.author}</>}
            </div>
            <div className='post-preview'>{post.excerpt}</div>
          </article>
        ))}
    </div>
  </Layout>
)

export async function getStaticProps() {
  const posts = await getCollection('blog')
  return {
    props: { posts },
  }
}
