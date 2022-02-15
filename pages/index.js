import pages from '../pages.json'
import Link from 'next/link'
export default function Index() {
  return (
    <>
      <h1>React Table Examples</h1>
      {
        pages.map((page) => {
          return (
            <>
              <p>{page.name}</p>
              <Link href={page.path}>
                <a>Link</a>
              </Link>
            </>
          )
        })
      }
    </>
  )
}