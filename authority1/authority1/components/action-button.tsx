import { Button } from "@/components/ui/button"

interface ActionButtonProps {
  label: string
  icon: React.ReactNode
  color: string
}

export function ActionButton({ label, icon, color }: ActionButtonProps) {
  return (
    <Button 
      className={`transition-all duration-300 hover:scale-105 ${color}`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  )
}

