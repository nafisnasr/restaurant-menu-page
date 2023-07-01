import React, { useState } from 'react'
import "./Categories.css"

export default function Categories({ categories, filteredMenues }) {
  const [mainCategory, setMainCategory] = useState('all')
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          type='button'
          className={category === mainCategory ? 'filter-btn highlight' : 'filter-btn'}
          key={index}
          onClick={() => {
            setMainCategory(category)
            filteredMenues(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
