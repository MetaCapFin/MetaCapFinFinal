import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`lg:container mx-auto px-4 lg:px-16 ${className}`}>{children}</div>
  )
}

export default Container