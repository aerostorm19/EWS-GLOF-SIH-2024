"use client"

import { Button } from "@/components/ui/button"
import { Bell, Activity, Settings, LogOut } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-border sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-primary">GLOF Dashboard</h1>
      <div className="flex items-center space-x-4">
        <NavButton icon={Bell} label="Public Alert" hoverColor="hover:bg-red-500" />
        <NavButton icon={Activity} label="System Health" hoverColor="hover:bg-green-500" />
        <NavButton icon={Settings} label="Settings" hoverColor="hover:bg-blue-500" />
        <NavButton icon={LogOut} label="Logout" hoverColor="hover:bg-purple-500" />
      </div>
    </nav>
  )
}

function NavButton({ icon: Icon, label, hoverColor }: { icon: any, label: string, hoverColor: string }) {
  return (
    <Button 
      variant="outline" 
      size="sm"
      className={`transition-all duration-300 hover:text-primary-foreground hover:scale-105 bg-secondary text-secondary-foreground ${hoverColor}`}
    >
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </Button>
  )
}

