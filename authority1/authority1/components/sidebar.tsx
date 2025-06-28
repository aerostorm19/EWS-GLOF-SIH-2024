"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight, Map, BarChart2, Clock, Image, Database } from 'lucide-react'

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`bg-background border-r border-border transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-lg font-semibold">Men</h2>}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="space-y-2 p-2">
          <SidebarItem icon={Map} label="System Overview" isCollapsed={isCollapsed} />
          <SidebarItem icon={Map} label="Flood Zone" isCollapsed={isCollapsed} />
          <SidebarItem icon={BarChart2} label="Zone Mapping" isCollapsed={isCollapsed} />
          <SidebarItem icon={Clock} label="Historical vs Current" isCollapsed={isCollapsed} />
          <SidebarItem icon={Image} label="Satellite Image Analysis" isCollapsed={isCollapsed} />
        </div>
      </ScrollArea>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, isCollapsed }: { icon: any, label: string, isCollapsed: boolean }) {
  return (
    <Button 
      variant="ghost" 
      className="w-full justify-start transition-all duration-300 hover:bg-blue-500 hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4 mr-2" />
      {!isCollapsed && <span>{label}</span>}
    </Button>
  )
}

