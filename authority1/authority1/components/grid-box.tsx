import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GridBoxProps {
  title: string
  value: string
  description: string
  color: string
}

export function GridBox({ title, value, description, color }: GridBoxProps) {
  return (
    <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`hover:scale-105 transition-transform duration-300 text-4xl font-bold ${color}`}>{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

