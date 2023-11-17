import { Modal, ModalOverlay, ModalContent, ModalBody, Button, Input, Image, Text } from '@chakra-ui/react'
import React, { SetStateAction, useState } from 'react'
import { useCart } from 'react-use-cart';
import validator from 'validator';
type Props = {
    isOpen: boolean,
    onClose: ()=> void,
    setName: (value: SetStateAction<string>) => void,
    name: string
}

export default function StartupModal({isOpen, onClose, setName, name}: Props) {
    const {metadata, setCartMetadata} = useCart();
    const [phone, setPhone] = useState<string>('');
    const [validation, setValidation] = useState<string[]>([])
    function Close(){
        setValidation([]);
        const val = [...(validator.isMobilePhone(phone)||phone===''? [] : ["Please enter a valid number"])];
        setValidation(val)
        
        if(val.length===0){
            setCartMetadata({...metadata, "Phone":phone})
            onClose()
        } 
    }
  return (
    <Modal size='6xl' isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay/>
            <ModalContent>
            <ModalBody backgroundImage='Rectangle.png' className='flex flex-col w-full items-center bg-cover bg-center justify-evenly grow-0'>
                <Image src='zen.png' className=' h-80 w-80'/>
                <Text className='font-sans'>Please enter your name:</Text>
                <Input onChange={(e)=> {setName(e.target.value)}} focusBorderColor='orange.300' onKeyDown={(e)=> {if(e.key ==="Enter") Close()}} fontFamily='sans-serif'/>
                <Text className='font-sans'>{"Optional: Enter your phone number for loyalty points"}</Text>
                <Input onChange={(e)=> {setPhone(e.target.value)}} focusBorderColor='orange.300' onKeyDown={(e)=> {if(e.key ==="Enter") Close()}} fontFamily='sans-serif'/>
                {validation.map(message => <Text className='font-sans text-red-500'>{message}</Text>)}
                <Button className='my-2' onClick={Close} isDisabled={name===''} variant='outline' colorScheme='orange'>Enter</Button>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}