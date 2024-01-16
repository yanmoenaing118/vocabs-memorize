import React from 'react'

export default function Container({ children }: any) {
  return (
    <div className='max-w-[780px] mx-auto my-5 p-3'>{children}</div>
  )
}
