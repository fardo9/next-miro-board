import React, { FC } from 'react'
import { TooltipContent } from '@radix-ui/react-tooltip'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '../shadcn/tooltip'

interface HintProps {
  children: React.ReactNode
  label: string
  side?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'center' | 'start' | 'end'
  sideOffset?: number
  alignOffset?: number
}

const Hint: FC<HintProps> = ({
  label,
  side,
  align,
  sideOffset,
  alignOffset,
  children,
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white border-black bg-black rounded-md p-2"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <p className="text-sm capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Hint
