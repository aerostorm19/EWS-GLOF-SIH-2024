'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function AdvancedSettings() {
  const [apiKey, setApiKey] = useState('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  const [automatedBackups, setAutomatedBackups] = useState(true)
  const [lastBackup, setLastBackup] = useState('2023-04-01 10:00 AM')

  const regenerateApiKey = () => {
    // In a real application, this would call an API to generate a new key
    setApiKey('yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy')
  }

  const manualBackup = () => {
    // In a real application, this would trigger a manual backup
    setLastBackup(new Date().toLocaleString())
  }

  return (
    <Card className="bg-gray-900 border-gray-700 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
      <CardHeader className="bg-gray-800 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-400">Advanced Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">API Integration</h3>
          <div className="flex items-center space-x-2">
            <Input value={apiKey} readOnly className="flex-grow bg-gray-800 border-gray-700 text-white" />
            <Button onClick={regenerateApiKey} className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Regenerate</Button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Export/Import</h3>
          <div className="space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Export Data</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Import Configuration</Button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">System Diagnostics</h3>
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Run Diagnostics</Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Backup Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-md transition-colors duration-300">
              <Label htmlFor="automated-backups" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Automated Backups</Label>
              <Switch
                id="automated-backups"
                checked={automatedBackups}
                onCheckedChange={setAutomatedBackups}
                className="data-[state=checked]:bg-blue-500"
              />
            </div>
            <p className="text-gray-300">Last Backup: {lastBackup}</p>
            <Button onClick={manualBackup} className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Manual Backup</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

