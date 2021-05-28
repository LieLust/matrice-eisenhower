import React, { useEffect, useState } from 'react'
import './App2.css'

import DragNDrop from './components/DragNDrop'

const category = [
  {
    style: {
      backgroundColor: 'rgb(255,179,186)',
      border: '2px solid #FF1930',
    },
    cat: 'important/urgent',
  },
  {
    style: { backgroundColor: 'rgb(186,255,201)', border: '2px solid #19FF4B' },
    cat: 'important/pas urgent',
  },
  {
    style: {
      backgroundColor: 'rgb(255,223,186)',
      border: '2px solid #FF9419',
    },
    cat: 'pas important/urgent',
  },
  {
    style: { backgroundColor: 'rgb(186,225,255)', border: '2px solid #199CFF' },
    cat: 'pas important/pas urgent',
  },
]

function App() {
  const [data, setData] = useState()
  const defaultData = () => {
    const arr = []
    for (let i = 0; i < 17; i++) {
      arr.push({ items: [] })
    }
    return arr
  }
  useEffect(() => {
    if (localStorage.getItem('List')) {
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className='App'>
      <header className='App-header'>
        <DragNDrop data={data} category={category} />
      </header>
    </div>
  )
}

export default App
