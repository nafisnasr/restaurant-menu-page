import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import menue from './data'
import Categories from './component/Categories/Categories'
import MenuItem from './component/MenuItem/MenuItem'

const allCategories = ['all', ...new Set(menue.map(menu => menu.category))]


export default function App() {

  const [allMenuInfo, setAllMenuInfo] = useState(menue)
  const [categories, setCategories] = useState(allCategories)

  const filteredMenues = (category) => {

    if (category === 'all') {
      setAllMenuInfo(menue)
      return
    }
    let filteredMenu = menue.filter(menu => menu.category === category)
    setAllMenuInfo(filteredMenu)
  }

  return (
    <>
      <div className='header'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filteredMenues={filteredMenues} />
      <MenuItem Menues={allMenuInfo} />
    </>
  )
}
