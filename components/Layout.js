import Head from 'next/head'

export default ({ children, title, ...props }) => (
  <>
    <Head>
      <title>{title} - Next.js MDX Blog</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <>
      <Header {...props} />
      {children}
      <Footer {...props} />
    </>
  </>
)

const Header = () => (
  <header>
    <a href='/'>Home</a>
    <a href='/blog'>Blog</a>
  </header>
)

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Josiah Wiebe</p>
  </footer>
)
