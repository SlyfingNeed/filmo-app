"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const History = () => {
    const router = useRouter()
  return (
    
    <div>Post: {router.push.prototype}</div>
  )
}

export default History