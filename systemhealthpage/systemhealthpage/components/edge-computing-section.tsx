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

const devices = Array.from({ length: 21 }, (_, i) => ({
  name: `Beagle Bone Black-${i + 1}`,
  model: `BBB-${1234 + i}`,
  hardwareHealth: Math.random() > 0.9 ? "Faulty" : "Good",
  networkHealth: Math.random() > 0.9 ? "Unstable" : "Stable",
  softwareHealth: Math.random() > 0.9 ? "Outdated" : "Updated",
  security: Math.random() > 0.9 ? "Vulnerable" : "Secure",
  uptime: `${(95 + Math.random() * 5).toFixed(1)}%`,
  overallHealth: Math.random() > 0.9 ? "Poor" : "Excellent",
  lastUpdated: `2024-03-${(7 + i % 3).toString().padStart(2, '0')} ${(14 + Math.floor(i / 60)).toString().padStart(2, '0')}:${(30 + i % 60).toString().padStart(2, '0')}:00`,
}))

export function EdgeComputingSection() {
  return (
    <section className="mb-8">
      <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-cyan-400">Edge Computing Device Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-800">
                  <TableHead className="text-gray-300">Device Name</TableHead>
                  <TableHead className="text-gray-300">Model Number</TableHead>
                  <TableHead className="text-gray-300">Hardware Health</TableHead>
                  <TableHead className="text-gray-300">Network Health</TableHead>
                  <TableHead className="text-gray-300">Software Health</TableHead>
                  <TableHead className="text-gray-300">Security</TableHead>
                  <TableHead className="text-gray-300">Uptime</TableHead>
                  <TableHead className="text-gray-300">Overall Health</TableHead>
                  <TableHead className="text-gray-300">Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.name} className="hover:bg-gray-750 transition-colors duration-200">
                    <TableCell className="text-gray-300">{device.name}</TableCell>
                    <TableCell className="text-gray-300">{device.model}</TableCell>
                    <TableCell className={device.hardwareHealth === "Good" ? "text-green-400" : "text-red-400"}>{device.hardwareHealth}</TableCell>
                    <TableCell className={device.networkHealth === "Stable" ? "text-green-400" : "text-yellow-400"}>{device.networkHealth}</TableCell>
                    <TableCell className={device.softwareHealth === "Updated" ? "text-green-400" : "text-yellow-400"}>{device.softwareHealth}</TableCell>
                    <TableCell className={device.security === "Secure" ? "text-green-400" : "text-red-400"}>{device.security}</TableCell>
                    <TableCell className="text-gray-300">{device.uptime}</TableCell>
                    <TableCell className={device.overallHealth === "Excellent" ? "text-green-400" : "text-red-400"}>{device.overallHealth}</TableCell>
                    <TableCell className="text-gray-300">{device.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

