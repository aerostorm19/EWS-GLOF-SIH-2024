import { Button } from "@/components/ui/button"
import { Bell, Activity, Settings, LogOut } from 'lucide-react'

export function Topbar() {
  return (
<div className="flex items-center justify-between p-4 bg-gray border-b">
  {/* Logo and Title on the Left */}
  <div className="flex items-center space-x-3">
    <img
      src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg"
      alt="Earth Logo"
      className="h-10 w-10 object-cover rounded"
    />
    <h1 className="text-2xl font-bold">Geology Department of India</h1>
  </div>

  {/* Buttons on the Right */}
  <div className="flex items-center space-x-2">
    <Button variant="outline" size="sm" className="hover:bg-red-500">
      Notify Authorities
    </Button>
    <Button variant="outline" size="sm" className="hover:bg-red-500">
      <Activity className="h-4 w-4 mr-2" />
      System Health
    </Button>
    <Button variant="outline" size="sm" className="hover:bg-red-500">
      <Settings className="h-4 w-4 mr-2" />
      Settings
    </Button>
    <Button variant="outline" size="sm" className="hover:bg-red-500">
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  </div>
</div>



  )
}

