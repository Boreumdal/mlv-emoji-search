import { useContext, useRef } from 'react';
import { DataContext } from '../App';
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const { setQoo } = useContext(DataContext)
  const searchValue = useRef(null)

  const handlesSubmit = e => {
    e.preventDefault();
    setQoo(searchValue.current.value)
  }

  return (
      <form onSubmit={handlesSubmit} className='my-3 flex flex-row items-center justify-between gap-[2px]'>
        <input type="text" placeholder='Enter name then press search...' ref={searchValue} className='border-transparent bg-gray-50 outline-none text-sm px-2 py-1 w-full' />
        <button type='submit' className='flex justify-center items-center p-1 text-lg rounded-full'><FaSearch /></button>
      </form>
  )
}

export default SearchInput