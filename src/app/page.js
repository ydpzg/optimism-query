'use client'
import { Button } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    console.log('useEffect')
  })
  const [ count, setCount ] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
      <div className="flex flex-col items-center">
        <div className="mb-3">{count}</div>
        <Button onClick={() => {
          setCount(count + 1)
        }}>Start</Button>
      </div>
    </main>
  )
}

export default Home
