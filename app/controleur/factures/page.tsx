"use client"
import { Box, Breadcrumb, ListItem, List, BreadcrumbItem, BreadcrumbLink,  HStack, Input, InputGroup, InputRightElement,  Stack, Tag, TagLabel, Text } from "@chakra-ui/react"
// import AlertComponent from "@/components/ui/AlertComponent"
import { useState } from "react"
import CardStatSimple from "@/components/ui/CardStatSimple";
import { SearchIcon } from "@chakra-ui/icons"
// import { CategorieList } from "./DataCategorie"
import { ModalCreateCategorie } from "@/components/ui/ModalsComponent";
import InvoiceIcon from "@/public/icones/icons8-invoice-48.png";
import CardInvoice from "@/components/ui/CardInvoice";
import Image from "next/image";
interface ICagnotte {
    titre: string,
    create_at: string,
    status: boolean,
    nom: string,
    prenom: string
}
export default function Page() {
    // const [openAlert, setOpenAlert] = useState<boolean>(false)
    // const [messageAlert, setMessageAlert] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    // const [firstDataList, setFirstDataList] = useState<{ nom: string, description: string }[]>([])
    // const [dataList, setDataList] = useState<ICagnotte[]>([])
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
            <title>Reserve - Utilisateurs</title>
            <Breadcrumb separator='-' fontSize={"small"}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/controleur/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/controleur/factures'>Factures</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/* {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            } */}
            <Box mt={8} className="grid grid-cols-2 gap-16">
                <Stack spacing={8}>
                    <Box className="grid grid-cols-2 gap-4">
                        <CardStatSimple title="Nombre total de factures générées" icon={undefined} stat={0} image={InvoiceIcon.src}></CardStatSimple>
                        <CardStatSimple title="Nombre de categories" icon={undefined} stat={0} image={InvoiceIcon.src}></CardStatSimple>
                    </Box>
                    <Box>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                        </InputGroup>
                        <HStack bg={"gray.100"} mt={2} padding={2} className="shadow-inner rounded-xl" w={"full"} spacing={2}>
                            <Tag
                                className="cursor-pointer"
                                size={"md"}
                                variant='solid'
                                bg={"yellow.500"}
                                color={"white"}
                            >
                                <TagLabel>Tous</TagLabel>
                            </Tag>
                            {['Virement', 'Participation'].map((item, index) => (
                                <Tag
                                    key={index}
                                    className="cursor-pointer"
                                    size={"md"}
                                    variant='solid'
                                    bg={"white"}
                                    color={"black"}
                                >
                                    <TagLabel>{item}</TagLabel>
                                </Tag>
                            ))}
                        </HStack>
                    </Box>
                    <Box>
                        <CardInvoice></CardInvoice>
                    </Box>
                </Stack>
                <Box>
                    <Text fontSize={"x-large"} >Facture d&apos;aujourd&apos;hui</Text>
                    <Box bg={"white"} mt={2} p={4} className="rounded-xl">
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                        </InputGroup>
                        <Box mt={4} display={"flex"} alignItems={"start"} gap={2}>
                            <Image src={InvoiceIcon.src} width={30} height={30} alt="Invoice png"></Image>
                            <Box>
                                <Text fontWeight={"bold"}>Machine à vapeur</Text>
                                <Text>ID: 1575200558</Text>
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <Tag colorScheme="blue">Achat</Tag>
                            <List mt={4}>
                                <ListItem display={"flex"} gap={2}> <Text  color={"GrayText"} fontWeight={"bold"}>Acheteur: </Text> <Text>Nom de l&apos;entreprise </Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text  color={"GrayText"} fontWeight={"bold"}>Id: </Text> <Text>255998556</Text></ListItem>
                                <ListItem display={"flex"} gap={2} mt={2}> <Text  color={"GrayText"} fontWeight={"bold"}>Vendeur: </Text> <Text>Nom de l&apos;entreprise </Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text  color={"GrayText"} fontWeight={"bold"}>Id: </Text> <Text>558999999</Text></ListItem>
                                <ListItem display={"flex"} gap={2} mt={2}> <Text  color={"GrayText"} fontWeight={"bold"}>Prix: </Text> <Text>250 000 FCFA</Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Quantité: </Text> <Text>4</Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Frais: </Text> <Text>Méthode</Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Méthode de paiement: </Text> <Text>France</Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Date: </Text> <Text>2024-03-05</Text></ListItem>
                                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Heure: </Text> <Text>18:05</Text></ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ModalCreateCategorie onClose={setOpen} open={open} onSubmit={() => { }}></ModalCreateCategorie>
        </>
    )
}