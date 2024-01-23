import React from 'react'

export default function Container({ children }: any) {
  return (
    <div className='max-w-[1280px] mx-auto md:my-5 p-3'>{children}</div>
  )
}
