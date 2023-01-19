import { Link } from "react-router-dom"

const Header = ({label, btnLabel}) => {
  return (
    <div className='bg-white p-4 my-2 flex justify-between'>
        <div className='font-semibold flex justify-center items-center'>{label}</div>
        <Link to={'/rockets'} className='bg-slate-300 p-2 px-4 text-center text-gray-900 font-semibold rounded-full'>{btnLabel}</Link>
    </div>
  )
}

export default Header