"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {useState, useEffect} from "react"

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

    return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button>กดสิจ๊ะ</Button>
       <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
    </div>
  )
}
