import { Link } from 'react-router-dom'

const index = () => {
  return (
    <nav className="fixed inset-0 h-14 z-50">
      <div></div>
      <div className="w-auto mx-auto px-3.5 md:px-8 h-14  flex justify-between items-center bg-white border-b-2">
        <Link
          to={'/'}
          className="flex flex-row items-center justify-center text-xl font-semibold text-red-900 "
        >
          <img
            className="h-14"
            src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F051da1ed-7e17-4ab0-9645-3510a8958a7a_1000x1000.png"
            alt=""
          />
          Crypto Warriors
        </Link>
        <div className="h-full pt-4 flex justify-between items-center gap-12 ">
          <Link
            to={'/modules'}
            className="px-2 h-full md:block hidden hover:border-b-[3px] border-red-900 "
          >
            Modules
          </Link>
          <Link
            to={'/demos'}
            className="px-2 h-full md:block hidden hover:border-b-[3px] border-red-900 "
          >
            Demos
          </Link>
          <Link
            to={'/'}
            className="px-2 h-full md:block hidden hover:border-b-[3px] border-red-900 "
          >
            Q&A
          </Link>
          <Link
            to={'/dashboard'}
            className="px-2 h-full md:block hidden hover:border-b-[3px] border-red-900 "
          >
            Dashboard
          </Link>
        </div>

        <Link
          to={'/'}
          className="py-2 px-4 rounded bg-red-900 hover:bg-red-950 text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}
export default index
