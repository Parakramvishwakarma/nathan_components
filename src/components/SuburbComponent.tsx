"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
  { suburb: "Perth CBD", impressions: 340 },
  { suburb: "Airport", impressions: 305 },
  { suburb: "Fremantle", impressions: 237 },
  { suburb: "Cottesloe", impressions: 210 },
  { suburb: "Joondalup", impressions: 150 },
  { suburb: "Willetton", impressions: 120 },
]

const chartConfig = {
  impressions: {
    label: "impressions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const topSuburbImpressions = chartData.reduce((total, suburb) => total + suburb.impressions, 0)


export function SuburbComponent() {
  return (
    <Card className="space-y-2">
      <CardHeader>
        <CardTitle>Top Suburbs Reached</CardTitle>
        <CardDescription>Total impressions collected per suburb</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
        config={chartConfig}
        className="w-[1000px] h-[250px] max-h-[300px]">

          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="impressions" hide />
            <YAxis
                dataKey="suburb"
                type="category"
                tickLine={false}
                tickMargin={12}
                axisLine={false}
                width={100}
            />      
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
            dataKey="impressions"
            fill="var(--color-impressions)"
            radius={5}
            barSize={28}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        Your top suburbs have generated {topSuburbImpressions.toLocaleString()} impressions
        <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total impressions for the top 6 suburbs
        </div>
      </CardFooter>
    </Card>
  )
}

export default SuburbComponent