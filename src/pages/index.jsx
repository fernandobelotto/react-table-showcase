import pages from '../../pages.json'
import Link from 'next/link'
export default function Index() {
  return (
    <>
    <div className="p-10">

      <h1 className='text-4xl mb-10'>React Table Examples</h1>
      <div className="grid grid-cols-5 gap-4">

      {
        pages.map((page, index) => {
          return (
            <div className='rounded-lg shadow-sm p-3 border border-gray-200' key={`${index}-key`}>
              <p>{page.name}</p>
              <Link href={page.path}>
                <a  className='text-blue-500'>Demo</a>
              </Link>
            </div>
          )
        })
      }
      </div>
      </div>
    </>
  )
}