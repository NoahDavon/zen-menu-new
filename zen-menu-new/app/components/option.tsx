import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {}

export default function Option({}: Props) {
    const [options, setOptions] = useState(null);
  return (
    <>
    <Heading size='md'>Option Name</Heading>
    <Flex className=' flex-wrap '></Flex>
    </>
  )
}