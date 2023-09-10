import * as React from 'react';
import { FunctionComponent } from 'react';
import { Image } from '@chakra-ui/react';
interface Props {
    menu?: boolean;
}
 
const ProductCard: FunctionComponent<Props> = ({menu = true}) => {
    return ( <Image src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg' maxWidth={"40vw"} rounded="80"/> );
}
 
export default ProductCard;