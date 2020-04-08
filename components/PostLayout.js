import Layout from './Layout'

export default ({ children, meta, ...props }) => (
  <Layout title={meta.title} {...props}>
    <div className='wrapper'>
      <article className='post'>
        <h1 className='post-title'>{meta.title}</h1>
        <span className='post-description'>
          {meta.author && <>Written by {meta.author} on </>}
          {new Date(meta.date).toLocaleDateString('en-ca', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <div className='post-content'>{children}</div>
      </article>
    </div>
  </Layout>
)
