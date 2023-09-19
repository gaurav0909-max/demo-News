import React from 'react'

function Title({params}) {
  console.log('params', params)

  const decodedString = decodeURIComponent(params?.title.replace(/%20/g, ' '));
  console.log('decodedString', decodedString)
  return (
    <div>
     
    </div>
  )
}

export default Title
