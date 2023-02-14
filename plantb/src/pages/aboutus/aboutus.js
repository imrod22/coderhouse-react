import {
    Container,
    Box
  } from '@chakra-ui/react'

const AboutUs = () => {
    return (
        <Container>
        <Box className='m-5' as="h2"
          size="md"
          color="primary.800"
          opacity="0.5"
          fontWeight="normal"
          border={"1px"}
          borderColor={"grey"}
          p={"2rem"}>
            <h3>
                Somos <strong className='text-primary'>Plant B grow shop</strong>, una tienda online, desde 2018. 
                <br />
            </h3>
            <h4> 
            Las plantas tienen muchos beneficios para la salud ya que purifican el aire, te conectan con la naturaleza e impulsan tu creatividad. En nuestra tienda encontrarás una amplia variedad de Plantas de Interior, Exterior y Arboles frutales.
            Realizamos envios a cualquier parte del mundo y acesoramiento inmediato con expertos 24 horas al dia durante los 365 dias del año.
            </h4>
        </Box>
    </Container>
    
    
    )}

export default AboutUs;