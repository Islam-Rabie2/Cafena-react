import React from 'react'

const Category = ({fillterByCategory}) => {

  const onFilltere = (cat) => {
    fillterByCategory(cat)
  }
  return (
    <div className="shop-links">
            <div>
                <h2>products</h2>
            </div>
            <div className="links">
                <li onClick={()=> onFilltere('all')}>all</li>
                <li onClick={()=> onFilltere('coffee')}>coffee</li>
                <li onClick={()=> onFilltere('machines')}>machines</li>
                <li onClick={()=> onFilltere('sweets')}>sweets</li>
            </div>
    </div>
  )
}

export default Category