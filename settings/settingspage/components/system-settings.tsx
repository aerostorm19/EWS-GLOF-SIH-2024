'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const initialSensors = [
  { id: 1, name: 'Temperature Sensor', type: 'Temperature', status: true },
  { id: 2, name: 'Pressure Sensor', type: 'Pressure', status: true },
  { id: 3, name: 'Water Level Sensor', type: 'Water Level', status: false },
]

export default function SystemSettings() {
  const [sensors, setSensors] = useState(initialSensors)
  const [activeModel, setActiveModel] = useState('model1')
  const [predictionThreshold, setPredictionThreshold] = useState('0.75')
  const [updateFrequency, setUpdateFrequency] = useState('hourly')

  const toggleSensorStatus = (sensorId: number) => {
    setSensors(sensors.map(sensor =>
      sensor.id === sensorId ? { ...sensor, status: !sensor.status } : sensor
    ))
  }

  return (
    <Card className="bg-gray-900 border-gray-700 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
      <CardHeader className="bg-gray-800 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-400">System Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Sensor Configuration</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-800 transition-colors duration-300">
                  <TableHead className="text-gray-300">Sensor Name</TableHead>
                  <TableHead className="text-gray-300">Type</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sensors.map((sensor) => (
                  <TableRow key={sensor.id} className="hover:bg-gray-800 transition-colors duration-300">
                    <TableCell className="text-white">{sensor.name}</TableCell>
                    <TableCell className="text-white">{sensor.type}</TableCell>
                    <TableCell>
                      <Switch
                        checked={sensor.status}
                        onCheckedChange={() => toggleSensorStatus(sensor.id)}
                        className="data-[state=checked]:bg-blue-500"
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="hover:bg-gray-700 transition-colors duration-300">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Model Configuration</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="active-model" className="text-gray-300">Active Model</Label>
              <Select value={activeModel} onValueChange={setActiveModel}>
                <SelectTrigger id="active-model" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 transition-colors duration-300">
                  <SelectValue placeholder="Select active model" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="model1">GLOF Prediction Model v1</SelectItem>
                  <SelectItem value="model2">GLOF Prediction Model v2</SelectItem>
                  <SelectItem value="model3">GLOF Prediction Model v3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="prediction-threshold" className="text-gray-300">Prediction Threshold</Label>
              <Input
                id="prediction-threshold"
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={predictionThreshold}
                onChange={(e) => setPredictionThreshold(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 transition-colors duration-300"
              />
            </div>
            <div>
              <Label htmlFor="update-frequency" className="text-gray-300">Update Frequency</Label>
              <Select value={updateFrequency} onValueChange={setUpdateFrequency}>
                <SelectTrigger id="update-frequency" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 transition-colors duration-300">
                  <SelectValue placeholder="Select update frequency" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

