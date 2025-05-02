import React from 'react'

const BuggyComponent = () => {
    throw new Error ("Opps! I crashed.")
  return <div>This will not render</div>
}

export default BuggyComponent
