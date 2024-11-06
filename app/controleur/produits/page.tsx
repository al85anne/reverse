"use client"
import { Box, Image, Link, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, HStack, Input, InputGroup, InputRightElement, Stack, Tag, TagLabel, Text, Avatar } from "@chakra-ui/react"
// import AlertComponent from "@/components/ui/AlertComponent"
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"
import CategorieList from "./DataCategorie"
import { ModalCreateCategorie, ModalCreateSousCategorie } from "@/components/ui/ModalsComponent"
import { ICategorie } from "@/Interfaces/ICategorie"
// import { IProduct } from "@/Interfaces/IProduct"
import { DataProductList } from "./DataProduct"
import { DrawerCreateProduct } from "@/components/ui/DrawerCreate"
export default function Page() {
    // const [openAlert, setOpenAlert] = useState<boolean>(false)
    // const [messageAlert, setMessageAlert] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [openSousCategorie, setOpenSousCategorie] = useState<boolean>(false)
    const [openCreateProduct, setOpenCreateProduct] = useState<boolean>(false)
    const [firstDataList, setFirstDataList] = useState<ICategorie[]>(CategorieList)
    // const [dataList] = useState<IProduct[]>(DataProductList)
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
                <Box p={4} display={"flex"} alignItems={"center"} gap={8} >

                    <Box display={"flex"} w={"full"} justifyContent={"space-between"} gap={8}>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher "></Input>
                        </InputGroup>
                    </Box>
                    <Button size={"sm"} onClick={() => { setOpenCreateProduct(true) }} className="rounded-full" bg={"black"} px={8} colorScheme="blue">Créer un produit</Button>
                </Box>
                <Box>

                    <HStack>
                        <Button size={"sm"} onClick={() => { setOpen(true) }} className="rounded-full" px={8} colorScheme="blue">Créer une catégorie</Button>

                        <HStack bg={"gray.200"} padding={2} className="shadow-inner rounded-xl" w={"full"} spacing={2}>
                        <Tag
                                className="cursor-pointer"
                                size={"md"}
                                variant='solid'
                                bg={"black"}
                                color={"white"}
                            >
                                <TagLabel>Tous</TagLabel>
                            </Tag>
                            {firstDataList.map((item, index) => (
                                <Tag

                                    key={index}
                                    className="cursor-pointer"
                                    size={"md"}
                                    variant='solid'
                                    bg={"white"}
                                    color={"black"}
                                >
                                    <TagLabel>{item.label}</TagLabel>
                                </Tag>
                            ))}
                            
                        </HStack>

                    </HStack>
                    <HStack mt={2}>
                        <Button size={"sm"} onClick={() => { setOpenSousCategorie(true) }} className="rounded-full" px={8} colorScheme="yellow">Créer une sous catégorie</Button>
                        <HStack bg={"yellow.100"} padding={2} className="shadow-inner rounded-xl" w={"full"} spacing={2}>
                            <Tag
                                className="cursor-pointer"
                                size={"md"}
                                variant='solid'
                                bg={"yellow.500"}
                                color={"white"}
                            >
                                <TagLabel>Tous</TagLabel>
                            </Tag>
                            {firstDataList.map((item, index) => (
                                <Tag
                                    key={index}
                                    className="cursor-pointer"
                                    size={"md"}
                                    variant='solid'
                                    bg={"white"}
                                    color={"black"}
                                >
                                    <TagLabel>{item.label}</TagLabel>
                                </Tag>
                            ))}
                        </HStack>
                    </HStack>
                    <Box mt={8} className="grid grid-cols-4 gap-4">
                        {
                            DataProductList.map((item, index) => (
                                <Card key={index} >
                                    <CardBody>
                                        <Image
                                            src={item.image_url}
                                            alt='Green double couch with wooden legs'
                                            className="rounded-lg"
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{item.nom}</Heading>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${item.prix_vente}
                                            </Text>
                                            <Box bg={"gray.200"} p={2} display={"flex"} className="rounded-full shadow-inner" alignItems={'center'} gap={4}>
                                                <Avatar size={"sm"} bg={"blue.500"} src='https://bit.ly/broken-link' />
                                                <Text fontWeight={"bold"}>{item.user.nom} {item.user.prenom}</Text>
                                            </Box>
                                            <Text>
                                                {item.description}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <Box className="w-full col-span-full">
                                            <ButtonGroup spacing='2'>
                                                <Link href={"/admin/produits/" + item.id}>
                                                    <Button size={"sm"} variant='solid' colorScheme='blue'>
                                                        Details sur le produit
                                                    </Button>

                                                </Link>
                                                <Button size={"sm"} variant='solid' colorScheme='red'>
                                                    Retirer de l&apos;application
                                                </Button>
                                            </ButtonGroup>
                                            <Text fontSize={"smaller"} textAlign={"right"}>
                                                {item.user.created_at}
                                            </Text>
                                        </Box>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </Box>
                </Box>
            </Stack>
            <ModalCreateCategorie onClose={setOpen} open={open} onSubmit={(e) => { setFirstDataList([...firstDataList, e]); setOpen(false) }}></ModalCreateCategorie>
            <DrawerCreateProduct onClose={setOpenCreateProduct} open={openCreateProduct} onSubmit={(e) => {}} ></DrawerCreateProduct>
            <ModalCreateSousCategorie categories={firstDataList} onClose={setOpenSousCategorie} open={openSousCategorie} onSubmit={(e) => { setFirstDataList([...firstDataList, e]); setOpen(false) }}></ModalCreateSousCategorie>
        </>
    )
}