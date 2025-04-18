"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", impressions: 150 },
  { date: "2024-04-02", impressions: 180 },
  { date: "2024-04-03", impressions: 120 },
  { date: "2024-04-04", impressions: 260 },
  { date: "2024-04-05", impressions: 290 },
  { date: "2024-04-06", impressions: 340 },
  { date: "2024-04-07", impressions: 180 },
  { date: "2024-04-08", impressions: 320 },
  { date: "2024-04-09", impressions: 110 },
  { date: "2024-04-10", impressions: 190 },
  { date: "2024-04-11", impressions: 350 },
  { date: "2024-04-12", impressions: 210 },
  { date: "2024-04-13", impressions: 380 },
  { date: "2024-04-14", impressions: 220 },
  { date: "2024-04-15", impressions: 170 },
  { date: "2024-04-16", impressions: 190 },
  { date: "2024-04-17", impressions: 360 },
  { date: "2024-04-18", impressions: 410 },
  { date: "2024-04-19", impressions: 180 },
  { date: "2024-04-20", impressions: 150 },
  { date: "2024-04-21", impressions: 200 },
  { date: "2024-04-22", impressions: 170 },
  { date: "2024-04-23", impressions: 230 },
  { date: "2024-04-24", impressions: 290 },
  { date: "2024-04-25", impressions: 250 },
  { date: "2024-04-26", impressions: 130 },
  { date: "2024-04-27", impressions: 420 },
  { date: "2024-04-28", impressions: 180 },
  { date: "2024-04-29", impressions: 240 },
  { date: "2024-04-30", impressions: 380 },
  { date: "2024-05-01", impressions: 220 },
  { date: "2024-05-02", impressions: 310 },
  { date: "2024-05-03", impressions: 190 },
  { date: "2024-05-04", impressions: 420 },
  { date: "2024-05-05", impressions: 390 },
  { date: "2024-05-06", impressions: 520 },
  { date: "2024-05-07", impressions: 300 },
  { date: "2024-05-08", impressions: 210 },
  { date: "2024-05-09", impressions: 180 },
  { date: "2024-05-10", impressions: 330 },
  { date: "2024-05-11", impressions: 270 },
  { date: "2024-05-12", impressions: 240 },
  { date: "2024-05-13", impressions: 160 },
  { date: "2024-05-14", impressions: 490 },
  { date: "2024-05-15", impressions: 380 },
  { date: "2024-05-16", impressions: 400 },
  { date: "2024-05-17", impressions: 420 },
  { date: "2024-05-18", impressions: 350 },
  { date: "2024-05-19", impressions: 180 },
  { date: "2024-05-20", impressions: 230 },
  { date: "2024-05-21", impressions: 140 },
  { date: "2024-05-22", impressions: 120 },
  { date: "2024-05-23", impressions: 290 },
  { date: "2024-05-24", impressions: 220 },
  { date: "2024-05-25", impressions: 250 },
  { date: "2024-05-26", impressions: 170 },
  { date: "2024-05-27", impressions: 460 },
  { date: "2024-05-28", impressions: 190 },
  { date: "2024-05-29", impressions: 130 },
  { date: "2024-05-30", impressions: 280 },
  { date: "2024-05-31", impressions: 230 },
  { date: "2024-06-01", impressions: 200 },
  { date: "2024-06-02", impressions: 410 },
  { date: "2024-06-03", impressions: 160 },
  { date: "2024-06-04", impressions: 380 },
  { date: "2024-06-05", impressions: 140 },
  { date: "2024-06-06", impressions: 250 },
  { date: "2024-06-07", impressions: 370 },
  { date: "2024-06-08", impressions: 320 },
  { date: "2024-06-09", impressions: 480 },
  { date: "2024-06-10", impressions: 200 },
  { date: "2024-06-11", impressions: 150 },
  { date: "2024-06-12", impressions: 420 },
  { date: "2024-06-13", impressions: 130 },
  { date: "2024-06-14", impressions: 380 },
  { date: "2024-06-15", impressions: 350 },
  { date: "2024-06-16", impressions: 310 },
  { date: "2024-06-17", impressions: 520 },
  { date: "2024-06-18", impressions: 170 },
  { date: "2024-06-19", impressions: 290 },
  { date: "2024-06-20", impressions: 450 },
  { date: "2024-06-21", impressions: 210 },
  { date: "2024-06-22", impressions: 270 },
  { date: "2024-06-23", impressions: 530 },
  { date: "2024-06-24", impressions: 180 },
  { date: "2024-06-25", impressions: 190 },
  { date: "2024-06-26", impressions: 380 },
  { date: "2024-06-27", impressions: 490 },
  { date: "2024-06-28", impressions: 200 },
  { date: "2024-06-29", impressions: 160 },
  { date: "2024-06-30", impressions: 400 },
]

const chartConfig = {
  impressions: {
    label: "Impressions",
    color: "#E1E1E",
  },
} satisfies ChartConfig

export function ImpComponent() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 py-2 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Impressions</CardTitle>
          <CardDescription>
            Showing total impressions your campaign has collected
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-6 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="w-[1000px] h-[250px] max-h-[300px]"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillimpressions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="100%"
                  stopColor="#46c4ed"
                  stopOpacity={0.6}
                />
                <stop
                  offset="100%"
                  stopColor="#46c4ed"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="impressions"
              type="natural"
              fill="url(#fillimpressions)"
              stroke="#46c4ed"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ImpComponent