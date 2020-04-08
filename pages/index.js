import Layout from '../components/Layout'

export const meta = {
  title: 'Home',
}

export default ({ posts }) => (
  <Layout title={meta.title}>
    <div className='wrapper'>
      <h1>{meta.title}</h1>
    </div>
  </Layout>
)
