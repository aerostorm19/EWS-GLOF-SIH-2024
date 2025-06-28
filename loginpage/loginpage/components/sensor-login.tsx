'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function SensorLogin() {
  const [sensorValues, setSensorValues] = useState({
    waterLevel: 0,
    sesmicSensor: 0,
    PressureSensor: 0,
    Inclinometer: 0,
    TempratureSensor: 0,
  })

  const [loginForm, setLoginForm] = useState({
    role: '',
    username: '',
    password: '',
  })

  const handleSensorChange = (sensor: keyof typeof sensorValues, value: number[]) => {
    setSensorValues(prev => ({ ...prev, [sensor]: value[0] }))
  }

  const handleLoginChange = (field: keyof typeof loginForm, value: string) => {
    setLoginForm(prev => ({ ...prev, [field]: value }))
  }

  const submitSensorData = () => {
    console.log('Submitting sensor data:', sensorValues)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', loginForm)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[17.3px] border-b-black border-r-[10px] border-r-transparent" />
          </div>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">EWS of GLOF</h1>
          <p className="text-sm text-gray-400">
            Early Warning System for Glacial Lake Outburst Flood
          </p>
        </div>

        {/* Sensor Section */}
        <div className="border border-white-800 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Sensor Data Input</h2>
          {Object.entries(sensorValues).map(([sensor, value]) => (
            <div key={sensor} className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label htmlFor={sensor} className="text-white-400 capitalize">
                  {sensor.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <span className="text-gray-400">{value}</span>
              </div>
              <Slider
                id={sensor}
                min={0}
                max={100}
                step={1}
                value={[value]}
                onValueChange={(newValue) => handleSensorChange(sensor as keyof typeof sensorValues, newValue)}
                className="w-full"
              />
            </div>
          ))}
          <Button 
            onClick={submitSensorData} 
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            Submit Sensor Data
          </Button>
        </div>

        {/* Login Section */}
        <div className="border border-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm text-white-800">
                  Role
                </Label>
                <Select onValueChange={(value) => handleLoginChange('role', value)}>
                  <SelectTrigger 
                    id="role" 
                    className="w-full bg-transparent border border-gray-800 text-white focus:ring-0 focus:border-gray-700"
                  >
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-800">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="rescue">Authority</SelectItem>
                    <SelectItem value="geology">Geology Department</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm text-gray-400">
                  Username/Email
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => handleLoginChange('username', e.target.value)}
                  className="bg-transparent border border-gray-800 text-white focus:ring-0 focus:border-gray-700"
                  placeholder="Enter your username or email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => handleLoginChange('password', e.target.value)}
                  className="bg-transparent border border-gray-800 text-white focus:ring-0 focus:border-gray-700"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Login
            </Button>
          </form>
        </div>

        <div className="text-center">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Forgot Password?
          </a>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            This system provides real-time monitoring and alerts for potential glacial lake outburst floods. 
            Your role is crucial in managing and responding to these critical environmental events.
          </p>
        </div>
      </div>
    </div>
  )
}

