'use client'
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, Card, Flex, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react';
import ProductDetails from './productDetails';
interface Props {
    menu?: boolean;
}
 
const ProductCard: FunctionComponent<Props> = ({menu = false}) => {
    const {onOpen, onClose, isOpen} = useDisclosure();
    return (<> 
        {!menu?<Card className=" mx-4 my-4 rounded-2xl justify-end flex-shrink-0 w-52 h-80 bg-cover bg-center" backgroundImage='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg'>
            <Card className="text-black bg-white font-sans items-center rounded-2xl">
                <Flex color={"#BC5F00"} className="px-2 pt-2 text-base font-normal w-[100%]">
                        <Text>Cappuccino</Text>
                        <Spacer/>
                        <Text>60 LE</Text>
                </Flex>
                <Text noOfLines={2} size='sm' className='text-xs mx-2 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti beatae ipsam minima placeat, fugiat illo magnam nesciunt saepe nam dolorem odio temporibus tempore aliquid maxime ullam omnis minus harum vitae! </Text>
                <button className='bg-[#663300] text-white rounded-lg p-2 shadow-lg m-1 text-sm font-bold'>Add To Cart</button>           
            </Card>
        </Card> :
        <Card flexDirection='row' className='rounded-2xl aspect-[4/1] w-full my-3 max-h-32'>
            <Image src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg' className='w-3/12 object-cover rounded-md shrink-0'/>
            <Spacer/>
            <Stack spacing='0.1rem'>
                <Text color={"#BC5F00"} className="px-1 text-sm font-normal font-sans ">Cappuccino</Text>
                <Text noOfLines={1} size='sm' className=' text-xs mx-2 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus perspiciatis laudantium. Cum, impedit alias. Aperiam id, fugit explicabo totam deserunt quaerat expedita accusantium dignissimos minus, impedit vero nam ab. </Text>
                <Spacer/>
                <Flex className=' items-center'>
                    <Text color={"#BC5F00"} className="px-1 text-sm font-normal font-sans ">50 L.E.</Text>
                    <Spacer/>
                    <button className=' mx-3 bg-[#663300] text-white rounded p-1 shadow-lg m-1 text-xs font-semibold font-sans'>Add To Cart</button>           
                </Flex>
            </Stack>
        </Card>}
        <ProductDetails onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
        </>
        );
}
 
export default ProductCard;