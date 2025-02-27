import React, { FC } from 'react'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '../ui'
import { TooltipContent } from '@radix-ui/react-tooltip'

export interface HintProps {
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
        <TooltipTrigger asChild>
          {children}
          {/* <div className={`relative ${align === 'center'? 'justify-center': align ==='start'? 'justify-start': 'justify-end'} ${side === 'top'? 'flex-row-reverse': side === 'left'? 'flex-row-reverse': side === 'right'? 'flex-row': 'flex-col'} ${alignOffset? `ml-${alignOffset} mr-${alignOffset} mt-${alignOffset} mb-${alignOffset}`: ''}`}>
            {children}
            <Tooltip.Content side={side} sideOffset={sideOffset}>
              {label}
            </Tooltip.Content>
          </div> */}
        </TooltipTrigger>
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
