"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, X } from 'lucide-react'

interface AnalysisBoxProps {
  title: string
  children: React.ReactNode
}

export function AnalysisBox({ title, children }: AnalysisBoxProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${isFullscreen ? 'fixed inset-0 z-50 overflow-auto' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          {isFullscreen ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </CardHeader>
      <CardContent className={isFullscreen ? 'h-[calc(100vh-4rem)]' : ''}>
        {children}
      </CardContent>
    </Card>
  )
}

