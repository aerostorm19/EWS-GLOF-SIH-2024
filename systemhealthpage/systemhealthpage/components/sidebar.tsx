"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight, Activity, BarChart2, Database, Cpu, Home, Settings } from 'lucide-react'

const navItems = [
  { name: "GLOF Prediction Model-1", icon: BarChart2, href: "#glof-prediction-model" },
  { name: "Flood Path & Zone Mapping", icon: BarChart2, href: "#flood-path-model" },
  { name: "Sensor Data Overview", icon: Database, href: "#sensor-data-overview" },
  { name: "Edge Computing Devices", icon: Cpu, href: "#edge-computing-overview" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "fixed left-0 top-[64px] bottom-0 z-10 transition-all duration-300 ease-in-out bg-gray-900 border-r border-gray-800",
        isCollapsed ? "w-[60px]" : "w-[240px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-cyan-700 hover:text-white transition-colors duration-200"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-all",
                isCollapsed ? "rotate-0" : "rotate-180"
              )}
            />
            {!isCollapsed && <span className="ml-2">Collapse</span>}
          </Button>
        </div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-300 hover:bg-cyan-700 hover:text-white transition-colors duration-200",
                "focus:bg-cyan-700 focus:text-white"
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {!isCollapsed && <span>{item.name}</span>}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}

