import { useContext }from 'react'
import { DataContext } from '../App'
import { FaRegCopy } from 'react-icons/fa'

const ResultTable = () => {
  const { res, dark } = useContext(DataContext)

  return (
    <div className='flex py-1 flex-col gap-2 w-full max-h-[400px] overflow-y-auto'>
      {
        res.length > 0 ? res.map((d, index) => (
          <div key={index} className='shadow-sm rounded-sm border-l-2 border-gray-500 p-2 w-full text-md flex flex-row justify-between items-center'>
            <div>
              <p className='text-md'>{d.character}</p>
              <p className='text-xs text-gray-400 font-bold'>{ d.codePoint }</p>
            </div>
            <button className={(dark ? 'hover:brightness-50 ' : 'hover:text-gray-700' ) + ' duration-150 text-xl'} onClick={() => navigator.clipboard.writeText(d.character)}><FaRegCopy /></button>
          </div>
        )) : (
          <p className='text-sm'>Nothing here...</p>
        )
      }
      
    </div>
  )
}

export default ResultTable