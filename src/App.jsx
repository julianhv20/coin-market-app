import React,{ useState, useEffect } from 'react'
import { TableCoins } from './components/TableCoins'
import { getData } from './helpers/getData'

import './App.css'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData(setCoins)
  }, [])

  return (
    <div className="container">
      <div className='container'>
        <div className='row'>
          <h1 className='text-center'>Coin Market</h1> 
          <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center mx-auto"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
          />
          <TableCoins coins={coins} search={search}/>
        </div>
      </div >
    </div>
  )
}

export default App
