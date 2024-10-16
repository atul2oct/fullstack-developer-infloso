import React from 'react'

const CardHomePage = ({title,description}) => {
  return (
    <div className="bg-richblack-5 text-richblack-900 hover:bg-richblack-900 hover:text-richblack-5 hover:border p-6 rounded-lg shadow-md text-center hover:scale-90 md:hover:scale-110 duration-300">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default CardHomePage