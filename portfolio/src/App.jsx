import React from 'react'
import DessertsList from './components/DessertsList'
import data from './constant/data'

const App = () => {
  return (
    <div>
      <DessertsList data={data.desserts} />
    </div>
  )
}

export default App
