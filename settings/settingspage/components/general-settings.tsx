'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export default function GeneralSettings() {
  const [timeZone, setTimeZone] = useState('auto')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <Card className="bg-gray-900 border-gray-700 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
      <CardHeader className="bg-gray-800 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-400">General Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="timezone" className="text-gray-300">Time Zone</Label>
          <Select value={timeZone} onValueChange={setTimeZone}>
            <SelectTrigger id="timezone" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 transition-colors duration-300">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="auto">Auto-detect</SelectItem>
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="est">Eastern Time</SelectItem>
              <SelectItem value="pst">Pacific Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <Label className="text-gray-300">Notification Preferences</Label>
          <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-md transition-colors duration-300">
            <Label htmlFor="email-notifications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-md transition-colors duration-300">
            <Label htmlFor="sms-alerts" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">SMS Alerts</Label>
            <Switch
              id="sms-alerts"
              checked={smsAlerts}
              onCheckedChange={setSmsAlerts}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-md transition-colors duration-300">
            <Label htmlFor="push-notifications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Push Notifications</Label>
            <Switch
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

