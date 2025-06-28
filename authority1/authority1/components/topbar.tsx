import { Button } from "@/components/ui/button"
import { Bell, Activity, Settings, LogOut } from 'lucide-react'

export function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <h1 className="text-2xl font-bold">GLOF Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notify Authorities</span>
        </Button>
        <Button variant="outline" size="icon">
          <Activity className="h-4 w-4" />
          <span className="sr-only">System Health</span>
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="outline" size="icon">
          <LogOut className="h-4 w-4" />
          <span className="sr-only">Logout</span>
        </Button>
      </div>
    </div>
  )
}

