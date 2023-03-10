import { useState } from "react";
import {
    Flex,
    Box,
    Heading,
    Button
    } from '@chakra-ui/react';
import CopyToClipboard from "react-copy-to-clipboard";
import * as IconFeather from 'feather-icons';
import { useNavigate } from 'react-router-dom';

const SuccessfulPurchase = ({orderNumber}) => {
    const navigate = useNavigate();  
    const [copy, setCopy] = useState(false);

    const handlerGoCatalog = () => {
        navigate('/plants')
      };

    return (
        <Flex width="full" align="center" justifyContent="center" m="2%">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
              <Box textAlign="center">
                <Heading>Thanks! Our Order Number is <strong className="me-2">{orderNumber}</strong></Heading>
              </Box>
              {/* {
                copy ?
                <Button variant="success">Copied </Button> :

                <CopyToClipboard text={orderNumber} onCopy={() => setCopy(true)}>
                    <Button variant="secondary" title="copy to clipboard"><IconFeather.Clipboard/></Button>
                </CopyToClipboard>
              } */}
            <Button onClick={handlerGoCatalog} colorScheme="green"  width="full" variant="outline" mt={4}>
                Go to Catalog
            </Button> 

            </Box>            
        </Flex>

    );
};

export default SuccessfulPurchase;