"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Map, BarChart2, History, Satellite, Database, ChevronLeft, ChevronRight } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'System Overview', href: '#overview' },
  { icon: Map, label: 'Maps', href: '#maps' },
  { icon: BarChart2, label: 'GLOF Analysis', href: '#glof-analysis' },
  { icon: History, label: 'Historical vs. Current', href: '#historical-current' },
  { icon: Satellite, label: 'Satellite Image Analysis', href: '#satellite-analysis' },
  { icon: Database, label: 'Access to Historical Data', href: '#historical-data' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col h-full bg-white-100 border-r transition-all duration-300 ease-in-out",
      collapsed ? "w-16" : "w-64"
    )}>

      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-lg font-semibold">Menu</h2>}
        
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center py-2 px-4 text-sm text-white-700 hover:bg-blue-500 transition-colors",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  )
}

