"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, LogOut, Search, AlertTriangle, Home } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md p-4 flex items-center justify-between z-20 border-b border-gray-800">
      <h1 className="text-3xl font-bold text-cyan-400 flex-grow text-center">
        System Health
      </h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" className="text-red-400 border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-200">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Report Admin
        </Button>
        <Button variant="outline" size="sm" className="text-gray-300 border-gray-800 hover:bg-cyan-700 hover:text-white transition-colors duration-200">
          <Home className="h-4 w-4 mr-2" />
          Main Dashboard
        </Button>
        <Button variant="outline" size="icon" className="text-gray-300 border-gray-800 hover:bg-cyan-700 hover:text-white transition-colors duration-200">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="text-gray-300 border-gray-800 hover:bg-red-700 hover:text-white transition-colors duration-200">
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}

