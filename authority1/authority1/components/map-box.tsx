"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, X } from 'lucide-react'

interface MapBoxProps {
  title: string
}

export function MapBox({ title }: MapBoxProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${isFullscreen ? 'fixed inset-0 z-50 w-full h-full' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          {isFullscreen ? <X className="h-6 w-6" /> : <Maximize2 className="h-6 w-6" />}
        </Button>
      </CardHeader>
      <CardContent className={`${isFullscreen ? 'h-[calc(100vh-5rem)]' : 'h-[400px]'}`}>
        <div className="bg-muted w-full h-full rounded-lg flex items-center justify-center text-lg font-semibold">
          {title} Placeholder
        </div>
      </CardContent>
    </Card>
  )
}

