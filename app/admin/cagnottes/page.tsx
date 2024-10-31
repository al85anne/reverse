"use client"
import { Box, Breadcrumb, TableContainer, Thead, Tfoot, Table, Tbody, IconButton, Th, Tr, Td, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, HStack, Input, InputGroup, InputRightElement, Select, Stack, Tag, TagLabel, Text, Avatar } from "@chakra-ui/react"
// import AlertComponent from "@/components/ui/AlertComponent"
import { useState } from "react"
import CardStatSimple from "@/components/ui/CardStatSimple";
import { DeleteIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons"
// import { CategorieList } from "./DataCategorie"
import { ModalCreateCategorie } from "@/components/ui/ModalsComponent";
import CagnotteIcon from "@/public/icones/icons8-piggy-bank-94.png";
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
    const [firstDataList, setFirstDataList] = useState<{ nom: string, description: string }[]>([])
    const [dataList, setDataList] = useState<ICagnotte[]>([])
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

                    <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/utilisateurs'>Cagnottes</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/* {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            } */}
            <Box mt={8}  className="grid grid-cols-2 gap-4">
                <Stack spacing={8}>
                    <Box className="grid grid-cols-2 gap-4">
                      <CardStatSimple title="Nombre total de cagnotte créee" icon={undefined} stat={0} image={CagnotteIcon.src}></CardStatSimple>
                      <CardStatSimple title="Nombre de transaction depuis L'afrique" icon={undefined} stat={0} image={CagnotteIcon.src}></CardStatSimple>
                    </Box>
                    <Box>
                        <Heading  fontSize={"x-large"} >Liste des cagnottes en cours</Heading>
                        <Box bg={"white"} p={4} className="rounded-xl">

                            <InputGroup>
                                <InputRightElement pointerEvents="none" >
                                    <SearchIcon></SearchIcon>
                                </InputRightElement>
                                <Input type="search" bg="gray.200" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                            </InputGroup>

                            <TableContainer >
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>N°</Th>
                                            <Th>Créer par</Th>
                                            <Th>Libellé</Th>
                                            <Th>Créer le</Th>
                                            <Th>Status</Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >
                                        {
                                            dataList.map((item, index) => (
                                                <Tr key={index}>
                                                    <Td>{index + 1}</Td>
                                                    <Td>{item.nom} {item.prenom}</Td>
                                                    <Td>{item.titre}</Td>
                                                    <Td>{item.create_at}</Td>
                                                    <Td>{item.status ? "Fin" : "En cours"}</Td>
                                                    <Td>
                                                        <ButtonGroup>

                                                            <IconButton
                                                                size={"sm"}
                                                                colorScheme="blue"
                                                                aria-label='Détails'
                                                                icon={<ViewIcon />}
                                                            />

                                                            <IconButton
                                                                size={"sm"}
                                                                colorScheme="red"
                                                                aria-label='Supprimer'
                                                                icon={<DeleteIcon />}
                                                            />
                                                        </ButtonGroup>
                                                    </Td>
                                                </Tr>
                                            ))
                                        }

                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th colSpan={7}>Page</Th>
                                            <Th isNumeric>1</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Stack>
                <Box>
                    <Heading  fontSize={"x-large"} >Liste des cagnottes passé</Heading>
                    <Box bg={"white"} p={4} className="rounded-xl">

                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="gray.200" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                        </InputGroup>

                        <TableContainer >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>N°</Th>
                                        <Th>Créer par</Th>
                                        <Th>Libellé</Th>
                                        <Th>Créer le</Th>
                                        <Th>Status</Th>

                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody >
                                    {
                                        dataList.map((item, index) => (
                                            <Tr key={index}>
                                                <Td>{index + 1}</Td>
                                                <Td>{item.nom} {item.prenom}</Td>
                                                <Td>{item.titre}</Td>
                                                <Td>{item.create_at}</Td>
                                                <Td>{item.status ? "Fin" : "En cours"}</Td>
                                                <Td>
                                                    <ButtonGroup>

                                                        <IconButton
                                                            size={"sm"}
                                                            colorScheme="blue"
                                                            aria-label='Détails'
                                                            icon={<ViewIcon />}
                                                        />

                                                        <IconButton
                                                            size={"sm"}
                                                            colorScheme="red"
                                                            aria-label='Supprimer'
                                                            icon={<DeleteIcon />}
                                                        />
                                                    </ButtonGroup>
                                                </Td>
                                            </Tr>
                                        ))
                                    }

                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th colSpan={7}>Page</Th>
                                        <Th isNumeric>1</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
            {/* <ModalCreateCategorie onClose={setOpen} open={open} onSubmit={(e) => {setDataList([...dataList, e]) }}></ModalCreateCategorie> */}
        </>
    )
}