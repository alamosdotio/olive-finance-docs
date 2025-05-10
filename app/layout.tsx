import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "./globals.css";
 
export const metadata = {
  title: "Olive Finance Documentation"
}
 
const banner = <Banner storageKey="some-key">Olive Finance 1.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Olive Finance</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © Olive Finance.</Footer>
 
export default async function RootLayout({ children } : {
  children: React.ReactNode
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          editLink={null}
          feedback={{content: null}}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}