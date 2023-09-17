import { Heading, Textarea } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function AdditionalNotes({}: Props) {
  return (
    <div>
        <Textarea placeholder='Any additional notes/requests?'/>
    </div>
  )
}