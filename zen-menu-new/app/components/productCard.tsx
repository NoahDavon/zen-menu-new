import * as React from 'react';
import { FunctionComponent } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Spacer, Stack, Switch, Text } from '@chakra-ui/react';
interface Props {
    menu?: boolean;
}
 
const ProductCard: FunctionComponent<Props> = ({menu = false}) => {
    return ( 
        !menu?<Card className="rounded-2xl justify-end w-52 h-80 bg-cover bg-center" backgroundImage='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg'>
            <Card className="text-black bg-white font-sans items-center rounded-2xl">
                <Flex color={"#BC5F00"} className="px-2 pt-2 text-base font-normal w-[100%]">
                        <Text>Cappuccino</Text>
                        <Spacer/>
                        <Text>60 LE</Text>
                </Flex>
                <Text size='sm' className='text-xs mx-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </Text>
                <Button variant="cardButton" className='bg-[#663300] text-white rounded-lg p-2 shadow-lg m-1 text-sm font-bold'>Add To Cart</Button>           
            </Card>
        </Card> :
        <Card flexDirection='row' className='rounded-2xl aspect-[4/1] w-full'>
            <Image src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg' className='w-5/12 object-cover rounded-md'/>
            <Stack spacing='0.1rem'>
                <Text color={"#BC5F00"} className="px-1 text-sm font-normal ">Cappuccino</Text>
                <Text size='sm' className=' text-xs mx-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </Text>
                <Flex className=' items-center'>
                    <Text color={"#BC5F00"} className="px-1 text-sm font-normal ">50 L.E.</Text>
                    <Spacer/>
                    <Text variant="cardButton" className='bg-[#663300] text-white rounded p-1 shadow-lg m-1 text-xs font-semibold'>Add To Cart</Text>           
                </Flex>
            </Stack>
        </Card>
        );
}
 
export default ProductCard;