import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sensorTypes = ["Water Level", "Temperature", "Seismic Shift"]

const generateSensorData = (type: string) => {
  return Array.from({ length: 20 }, (_, i) => ({
    lake: `Lake-${i + 1}`,
    status: Math.random() > 0.7 ? 'Normal' : Math.random() > 0.4 ? 'Warning' : 'Alert'
  }))
}

export function SensorDataSection() {
  return (
    <section className="mb-8">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-cyan-400">Sensor Data Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {sensorTypes.map((type) => (
            <Card key={type} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-cyan-400">{type} Sensors</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-gray-800">
                      <TableHead className="text-gray-300">Lake</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {generateSensorData(type).map((sensor, index) => (
                      <TableRow key={index} className="hover:bg-gray-700 transition-colors duration-200">
                        <TableCell className="text-gray-300">{sensor.lake}</TableCell>
                        <TableCell className={
                          sensor.status === 'Normal' ? 'text-green-400' :
                          sensor.status === 'Warning' ? 'text-yellow-400' : 'text-red-400'
                        }>{sensor.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      <div className="space-x-4 mt-4">
        <Button className="bg-cyan-700 hover:bg-cyan-600 text-white transition-colors duration-200">Restart All Sensors</Button>
        <Button variant="outline" className="text-cyan-400 border-cyan-700 hover:bg-cyan-700 hover:text-white transition-colors duration-200">Sensor Manual Diagnosis</Button>
      </div>
    </section>
  )
}

