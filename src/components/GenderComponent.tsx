"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { gender: "Male", value: 54, fill: "var(--color-male)" },
    { gender: "Female", value: 46, fill: "var(--color-female)" },
  ]

const chartConfig = {
    Male: {
    label: "Male",
    color: "var(--color-male)",
    },
    Female: {
    label: "Female",
    color: "var(--color-female)",
    },
    } satisfies ChartConfig
  
export function GenderComponent() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Demographics</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
      <div className="mx-auto h-[180px] w-full max-w-[220px]">
        <PieChart width={200} height={200}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="gender"
            innerRadius={45}
            outerRadius={80}
            labelLine={false}
          />
        </PieChart>
      </div>
      </CardContent>
        <CardContent className="flex justify-center gap-6 pt-4 pb-2 text-sm">
            {chartData.map((entry) => (
            <div key={entry.gender} className="flex items-center gap-2">
                <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: `var(--color-${entry.gender.toLowerCase()})` }}
                />
                <span>{entry.gender}</span>
            </div>
            ))}
        </CardContent>      
    </Card>
  )
}

export default GenderComponent