"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

function AudienceIndexCard() {
  const data = [
    { score: 122, label: "Affluence" },
    { score: 113, label: "Professionals" },
    { score: 72, label: "Age 36–45" },
    { score: 41, label: "Health & Well-being" },
    { score: 38, label: "Students" }
  ]

  const maxScore = data.length > 0 ? Math.max(...data.map(item => item.score)) : 1

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg text-[#1E1E1E]">Top Audiences</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <button>
                <Info className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity text-[#1E1E1E]" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" align="start" className="text-sm max-w-[240px]">
              Indexed audience scores reflect demographic reach relative to local averages.
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {data.map(({ score, label }) => (
          <div key={label} className="flex items-center gap-4 py-0.5">
            <div className="w-[160px]">
              <Progress
                value={(score / maxScore) * 100}
                className="h-3.5 bg-muted rounded-full [&>div]:bg-[#1E1E1E] transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="w-12 text-base text-right font-bold text-[#1E1E1E]">
              {score}
            </div>
            <Badge
              variant="outline"
              className="text-xs px-3 py-1 rounded-full border-[1.5px] border-[#1E1E1E] text-[#1E1E1E]"
            >
              {label}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default AudienceIndexCard
