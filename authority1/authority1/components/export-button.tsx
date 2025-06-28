import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export function ExportButton() {
  return (
    <Button className="transition-all duration-300 hover:scale-105">
      <Download className="mr-2 h-4 w-4" />
      Export Data
    </Button>
  )
}

