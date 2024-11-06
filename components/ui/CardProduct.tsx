import { IProduct } from "@/Interfaces/IProduct"
import { Card, CardBody, Text, Box, Stack, Heading, Avatar, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"
import Link from "next/link"
import { Image } from "@chakra-ui/react"
const CardProduct = (props: {item: IProduct}) => {
    return (
        <Card>
        <CardBody>      
            <Image
                src={props.item.image_url}
                alt='Green double couch with wooden legs'
                className="rounded-lg"
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.item.nom}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    ${props.item.prix_vente}
                </Text>
                <Box bg={"gray.200"} p={2} display={"flex"} className="rounded-full shadow-inner" alignItems={'center'} gap={4}>
                    <Avatar size={"sm"} bg={"blue.500"} src='https://bit.ly/broken-link' />
                    <Text fontWeight={"bold"}>{props.item.user.nom} {props.item.user.prenom}</Text>
                </Box>
                <Text>
                    {props.item.description}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Box className="w-full col-span-full">
                <ButtonGroup spacing='2'>
                    <Link href={"/admin/produits/" + props.item.id}>
                        <Button size={"sm"} variant='solid' colorScheme='blue'>
                            Details sur le produit
                        </Button>

                    </Link>
                    <Button size={"sm"} variant='solid' colorScheme='red'>
                        Retirer de l&apos;application
                    </Button>
                </ButtonGroup>
                <Text fontSize={"smaller"} textAlign={"right"}>
                    {props.item.user.created_at}
                </Text>
            </Box>
        </CardFooter>
    </Card>
    )
}

export default CardProduct