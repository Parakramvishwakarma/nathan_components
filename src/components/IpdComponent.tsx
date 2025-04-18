"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { day: "Mon", impressions: 186 },
  { day: "Tue", impressions: 340 },
  { day: "Wed", impressions: 237 },
  { day: "Thu", impressions: 73 },
  { day: "Fri", impressions: 209 },
  { day: "Sat", impressions: 214 },
  { day: "Sun", impressions: 211 },
]

const chartConfig = {
  impressions: {
    label: "impressions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function IpdComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impressions by Day of Week</CardTitle>
        <CardDescription>Daily Average</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} style={{ height: 280, width: 400}}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
                hide
                domain={['auto', (max: number) => Math.ceil(max * 1.1)]}
            />
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="impressions" fill="var(--color-impressions)" radius={8} barSize={36}>
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default IpdComponent;