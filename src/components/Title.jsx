import { useContext } from 'react'
import { DataContext } from '../App'
import { FaMoon, FaSun } from 'react-icons/fa'

const Title = () => {
  const { dark, setDark } = useContext(DataContext)

  return (
    <div className='border-b flex flex-row justify-between items-center'>
        <h1 className='font-bold text-xl py-2'>Search for Emoji</h1>
        <button onClick={() => setDark(!dark)} className='hover:brightness-50 duration-150 mr-3 text-lg'>{dark ? <FaSun /> : <FaMoon />}</button>
    </div>
  )
}

export default Title