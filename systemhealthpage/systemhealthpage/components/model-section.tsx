import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

interface ModelSectionProps {
  title: string
}

export function ModelSection({ title }: ModelSectionProps) {
  return (
    <section className="mb-8">
      <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-cyan-400">{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-cyan-400">Model Data Health</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-400" />
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-cyan-400">Model Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Prediction Accuracy:</span>
                  <span className="font-semibold text-green-400">98.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span className="font-semibold text-yellow-400">200ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Rates:</span>
                  <span className="font-semibold text-red-400">2.1%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-cyan-400">Resource Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-semibold">2.1.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Memory Usage:</span>
                  <span className="font-semibold">2.5GB/8GB</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: '31.25%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <Button className="bg-cyan-700 hover:bg-cyan-600 text-white transition-colors duration-200 mt-4">
        Run Manual Diagnostic
      </Button>
    </section>
  )
}

