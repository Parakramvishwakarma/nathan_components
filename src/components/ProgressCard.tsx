"use client"

import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const title = "Campaign Progress"
const impressionsDelivered = 5200
const impressionsTarget = 10000

const progressPercentage = Math.round((impressionsDelivered / impressionsTarget) * 100)

export function ProgressCard() {
  return (
    <Card className="w-full max-w-80">
      <CardHeader className="pb- px-6">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt- pb- px-6">
        <div className="flex items-center justify-between gap-2">
            <Progress value={progressPercentage} className="h-3 rounded-full flex-1" />
            <span className="text-sm font-medium text-muted-foreground pl-2">
            {progressPercentage}%
            </span>
        </div>
        <CardDescription className="text-sm text-muted-foreground mt-1 text-left">
            of {impressionsTarget.toLocaleString()} impressions target
        </CardDescription>
      </CardContent>    </Card>
  )
}

export default ProgressCard
