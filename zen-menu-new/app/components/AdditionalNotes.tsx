import { Heading, Textarea } from '@chakra-ui/react'
import React from 'react'

type Props = {
  handleNotes: (e: any) => void
}

export default function AdditionalNotes({handleNotes}: Props) {
  return (
    <div>
        <Textarea onChange={handleNotes} placeholder='Any additional notes/requests?'/>
    </div>
  )
}