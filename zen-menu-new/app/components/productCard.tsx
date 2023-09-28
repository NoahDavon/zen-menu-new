'use client'
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, Card, Flex, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react';
import ProductDetails from './productDetails';
import { Item } from './menu';
import { Offer } from './bestSellers';
interface Props {
    menu?: boolean;
    item: Offer;
}
 
const ProductCard: FunctionComponent<Props> = ({menu = false, item}) => {
    const {onOpen, onClose, isOpen} = useDisclosure();
    return (<> 
        {!menu?<Card onClick={onOpen} className=" mx-4 my-4 rounded-2xl justify-end flex-shrink-0 w-60 h-80 bg-cover bg-center" backgroundImage={`/ProductImages/${item.Name}.jpg`}>
            <Card className="text-black bg-white font-sans items-center rounded-2xl m-2 p-2">
                <Flex color={"#BC5F00"} className="pt-2 text-base font-normal w-[100%]">
                        <Text fontSize='smaller'>{item.Name}</Text>
                        <Spacer/>
                        <Text fontSize='smaller' textDecor='line-through' color='gray.500' className='mx-1'>{item.Previous}</Text>
                        <Text fontSize='smaller'>{item.Price} LE</Text>
                </Flex>
                <Text noOfLines={2} size='sm' className='text-xs mx-2 text-left'>{item.description??''}</Text>           
            </Card>
        </Card> :
        <Card onClick={onOpen} flexDirection='row' className='rounded-2xl aspect-[4/1] w-full my-3 h-28'>
            <Image src={`/ProductImages/${item.Name}.jpg`} className='w-3/12 object-cover rounded-md shrink-0'/>
            <Stack spacing='0.1rem' className='p-2'>
                <Text color={"#BC5F00"} className="text-sm font-normal font-sans ">{item.Name}</Text>
                <Text noOfLines={2} size='sm' className=' text-xs font-sans'>{item.description??''}</Text>
                <Spacer/>
                <Flex className=' items-center'>
                    <Text color={"#BC5F00"} className="text-sm font-normal font-sans ">{item.Price} L.E.</Text>         
                </Flex>
            </Stack>
        </Card>}
        <ProductDetails onOpen={onOpen} onClose={onClose} isOpen={isOpen} Item={item}/>
        </>
        );
}
 
export default ProductCard;