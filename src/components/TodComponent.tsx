"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ResponsiveContainer } from "recharts"

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
  { hour: "12AM", impressions: 200 },
  { hour: "2AM", impressions: 160 },
  { hour: "4AM", impressions: 200 },
  { hour: "6AM", impressions: 400 },
  { hour: "8AM", impressions: 800  },
  { hour: "10AM", impressions: 1000 },
  { hour: "12PM", impressions: 900 },
  { hour: "2PM", impressions: 1100 },
  { hour: "4PM", impressions: 1050 },
  { hour: "6PM", impressions: 1300 },
  { hour: "8PM", impressions: 1050  },
  { hour: "10PM", impressions: 750 },
]

const chartConfig = {
  impressions: {
    label: "impressions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function TodComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impressions by Hour of Day</CardTitle>
        <CardDescription>Hourly Average</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} style={{ height: 280, width: 600 }}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            data={chartData}
            margin={{ left: 16, right: 16 }}
            >
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="hour"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                interval={0}
            />
            <YAxis
                hide
                domain={['auto', (max: number) => Math.ceil(max * 1.1)]}
            />
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
            />
            <Line
                dataKey="impressions"
                type="natural"
                stroke="#1E1E1E"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
            />
            </LineChart>
        </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TodComponent;