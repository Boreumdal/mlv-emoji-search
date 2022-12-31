import Title from './components/Title'
import SearchInput from './components/SearchInput'
import ResultTable from './components/ResultTable'
import { useState, useEffect, createContext } from 'react'

export const DataContext = createContext(null)

const App = () => {
  const [data, setData] = useState([])
  const [res, setRes] = useState([])
  const [qoo, setQoo] = useState('')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    fetch('https://emoji-api.com/emojis?access_key=d861994e480b0483880d66a24b9d19b76aa798f6')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    setRes(data.filter(emoji => emoji.slug.includes(qoo.toLowerCase())))
  }, [qoo])

  return (
    <div className={(dark && 'dark-theme text-white') + ' duration-200 w-full h-screen flex items-center justify-center'}>
      <div className={(dark && 'darker-theme text-white') + ' bg-white rounded-md shadow-md border-red-500 w-1/3 md:w-1/4 py-5 px-7'}>
        <DataContext.Provider value={{ data, res, qoo, setQoo, dark, setDark }}>
            <Title />
            <SearchInput />
            <ResultTable />
        </DataContext.Provider>
      </div>
    </div>
  )
}

export default App
