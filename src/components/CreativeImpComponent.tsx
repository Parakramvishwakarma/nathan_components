"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "May 7", impressions: 186 },
  { date: "May 14", impressions: 210 },
  { date: "May 21", impressions: 237 },
  { date: "May 28", impressions: 250 },
]

const chartConfig = {
  impressions: {
    label: "impressions",
    color: "#e1e1e",
    icon: TrendingUp,
  },
} satisfies ChartConfig

export function CreativeImpComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impressions</CardTitle>
        <CardDescription>
          Total impressions attributed to creative
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
        config={chartConfig}
        className="w-[400px] h-[150px] max-h-[300px]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={0}
            padding={{ left: 16, right: 16 }}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
            />
            import { YAxis } from "recharts"
            <YAxis
              hide={true}
              domain={['dataMin - 50', 'dataMax + 50']} // Adjust padding as needed
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="impressions"
              type="natural"
              fill="none"
              stroke="#1E1E1E" // or any other color you want
              strokeWidth={2}  // adjust this for thickness
              dot={{
                stroke: "none",         // no border
                fill: "#1E1E1E",         // solid color
                r: 4                    // radius/size
              }}
              activeDot={{
                stroke: "#1E1E1E",       // optional hover styling
                strokeWidth: 2,
                fill: "#1E1E1E",
                r: 4
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default CreativeImpComponent