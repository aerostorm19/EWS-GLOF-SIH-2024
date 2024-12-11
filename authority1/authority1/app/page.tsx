import { GridBox } from "@/components/grid-box"
import { MapBox } from "@/components/map-box"
import { AnalysisBox } from "@/components/analysis-box"
import { ActionButton } from "@/components/action-button"
import { Footer } from "@/components/footer"
import { AlertTriangle, Bell } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GridBox title="Active Sensors" value="85%" description="Percentage of active sensors" color="text-green-500" />
        <GridBox title="GLOF Occurrence" value="12%" description="Percentage of GLOF occurrences" color="text-yellow-500" />
        <GridBox title="Location" value="Lake 127" description="Current monitoring site" color="text-blue-500" />
        <GridBox title="Flood Area" value="250 km²" description="Extent of potential flood area" color="text-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MapBox title="Flood Path Map" />
        <MapBox title="Zone Mapping" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalysisBox title="Historical vs. Current GLOF Trends">
          <div className="bg-muted h-full min-h-[12rem] rounded-lg flex items-center justify-center">
            Graph Placeholder
          </div>
        </AnalysisBox>
        <AnalysisBox title="Satellite Image Analysis">
          <div className="bg-muted h-full min-h-[12rem] rounded-lg flex items-center justify-center">
            Satellite Image Placeholder
          </div>
        </AnalysisBox>
      </div>

      <div className="flex justify-center space-x-4">
        <ActionButton 
          label="Forward to Rescue Teams" 
          icon={<AlertTriangle className="h-4 w-4" />} 
          color="bg-green-600 hover:bg-green-700 text-white"
        />
        <ActionButton 
          label="Notify Geology Department" 
          icon={<Bell className="h-4 w-4" />} 
          color="bg-blue-600 hover:bg-blue-700 text-white"
        />
      </div>

      <Footer />
    </div>
  )
}

