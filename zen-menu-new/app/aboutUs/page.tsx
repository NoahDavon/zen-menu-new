import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <Box>
        <Heading>About us</Heading>
        <Text> Zen Specialty Coffee is the first and finest specialty coffee roastery and café in Zahraa Elmaadi. We're committed to making sure that every cup is an exquisite and unique experience</Text>
        <Heading>Privacy Policy</Heading>
        <Text>We're committed to never sharing your personal information with any third parties. Your privacy is important to us!</Text>
        <Heading>Contact Us</Heading>
        <Text>01147762266 / MohammedE.Fahmy@outlook.com</Text>
        <Text>Developed by MTStudios - Contact at hipnerd90@gmail.com</Text>
    </Box>
  )
}