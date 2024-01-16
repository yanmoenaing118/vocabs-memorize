import React from 'react'

export default function Container({ children }: any) {
  return (
    <div className='max-w-[880px] mx-auto my-5 p-3'>{children}</div>
  )
}
