"use client"
import { Box, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, HStack, Input, InputGroup, InputRightElement, Select, Stack, Tag, TagLabel, Text, Avatar } from "@chakra-ui/react"
import AlertComponent from "@/components/ui/AlertComponent"
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { CategorieList } from "./DataCategorie"
import { ModalCreateCategorie } from "@/components/ui/ModalsComponent"
export default function Page() {
    // const [openAlert, setOpenAlert] = useState<boolean>(false)
    // const [messageAlert, setMessageAlert] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [firstDataList, setFirstDataList] = useState<{ nom: string, description: string }[]>(CategorieList)
    // const [statusAlert, setStatusAlert] = useState<"info" | "warning" | "success" | "error" | "loading" | undefined>()
    // const onShowAlert = (message: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined) => {
    //     setMessageAlert(message);
    //     setStatusAlert(status);
    //     setOpenAlert(true);
    //     setTimeout(() => {
    //         setOpenAlert(false)
    //     }, 50000);
    // }
    return (
        <>
            <title>Reserve - Produits</title>
            <Breadcrumb separator='-' fontSize={"small"}>
                <BreadcrumbItem>

                    <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/produits'>produits</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/* {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            } */}
            <Stack spacing={8}>
                <Box>
                    <Text fontSize={"x-large"} fontWeight={"bold"} >Liste de produits</Text>
                </Box>
                <Box p={4} display={"flex"} gap={8} >

                    <Box display={"flex"} w={"full"} justifyContent={"space-between"} gap={8}>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher "></Input>
                        </InputGroup>

                    </Box>
                    <Button mb={4} onClick={() => { setOpen(true) }} className="rounded-full" bg={"black"} px={8} colorScheme="blue">Créer un produit</Button>
                </Box>
                <Box>
                    <HStack>
                        <Select fontSize={"small"} w={200} bg={"blue.500"} color={"white"} placeholder='Select option'>
                            {
                                firstDataList.map((item, index) => (
                                    <option key={index} className="text-black" value={index}>{item.nom}</option>
                                ))}
                        </Select>
                        <HStack w={"full"} spacing={2}>
                            {firstDataList.map((item, index) => (
                                <Tag
                                    size="md"
                                    key={index}
                                    className="cursor-pointer"
                                    borderRadius='full'
                                    variant='solid'
                                    bg={"white"}
                                    color={"black"}
                                >
                                    <TagLabel>{item.nom}</TagLabel>

                                </Tag>
                            ))}
                        </HStack>
                    </HStack>
                    <Box mt={8} className="grid gap-4 grid-cols-4">
                        {
                            ['1', '2', '3', '4', '5', '6', '7'].map((item, index) => (
                                <Card key={index} >
                                    <CardBody>
                                        <Image
                                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                            alt='Green double couch with wooden legs'
                                            className="rounded-lg"

                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Living room Sofa</Heading>
                                            <Text color='blue.600' fontSize='2xl'>
                                                $450
                                            </Text>
                                            <Box bg={"gray.200"} p={2} display={"flex"} className="rounded-full shadow-inner" alignItems={'center'} gap={4}>
                                                <Avatar size={"sm"} bg={"blue.500"} src='https://bit.ly/broken-link' />
                                                <Text fontWeight={"bold"}>Karole SARL</Text>
                                            </Box>
                                            <Text>
                                                This sofa is perfect for modern tropical spaces, baroque inspired
                                                spaces, earthy toned spaces and for people who love a chic design with a
                                                sprinkle of vintage design.
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <Box className="col-span-full w-full">
                                            <ButtonGroup spacing='2'>
                                                <Button variant='solid' colorScheme='blue'>
                                                    Details sur le produit
                                                </Button>

                                            </ButtonGroup>
                                            <Text fontSize={"smaller"} textAlign={"right"}>
                                                12/02/2024 19:30
                                            </Text>
                                        </Box>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </Box>
                </Box>
            </Stack>
            <ModalCreateCategorie onClose={setOpen} open={open} onSubmit={() => { }}></ModalCreateCategorie>
        </>
    )
}