"use client"
import { Box, Breadcrumb, TableContainer, Thead, Tfoot, Table, Tbody, IconButton, Th, Tr, Td, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, HStack, Input, InputGroup, InputRightElement, Select, Stack, Tag, TagLabel, Text, Avatar } from "@chakra-ui/react"
// import AlertComponent from "@/components/ui/AlertComponent"
import { useState } from "react"
import CardStatSimple from "@/components/ui/CardStatSimple";
import { DeleteIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons"
// import { CategorieList } from "./DataCategorie"
import { ModalCreateCategorie } from "@/components/ui/ModalsComponent";
import CagnotteIcon from "@/public/icones/icons8-piggy-bank-94.png";
import { DataCagnotte } from "./DataCagnotte";
import { ICagnotte } from "@/Interfaces/ICagnotte";
import { useRouter } from "next/navigation";

export default function Layout({
    children
}: {
    children: React.ReactNode,
}) {
    // const [openAlert, setOpenAlert] = useState<boolean>(false)
    // const [messageAlert, setMessageAlert] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter();
    const [firstDataList, setFirstDataList] = useState<{ nom: string, description: string }[]>([])
    const [dataList, setDataList] = useState<ICagnotte[]>(DataCagnotte)
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
                    <BreadcrumbLink href='/admin/cagnottes'>Cagnottes</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/* {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            } */}
            <Box mt={8} className="grid grid-cols-3 gap-4">
                <Stack spacing={8} className="col-span-2">
                    <Box className="grid grid-cols-2 gap-4">
                        <CardStatSimple title="Nombre total de cagnottes" icon={undefined} stat={0} image={CagnotteIcon.src}></CardStatSimple>
                        <CardStatSimple title="Mes cagnottes" icon={undefined} stat={0} image={CagnotteIcon.src}></CardStatSimple>
                    </Box>
                    <Box>
                        <ButtonGroup size="sm">
                            <Button colorScheme="blue">Créer une cagnotte</Button>
                        </ButtonGroup>
                    </Box>
                    <Box>
                        <Heading fontSize={"x-large"} >Liste des cagnottes en cours</Heading>
                        <ButtonGroup mt={4} size="sm" >
                            <Button colorScheme="blue" variant={"outline"}>En cours</Button>
                            <Button colorScheme="blue" variant={"solid"}>Terminer</Button>
                        </ButtonGroup>
                        <Box bg={"white"} mt={4} p={4} className="rounded-xl">
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
                                            <Th>Suspendue</Th>
                                            <Th isNumeric>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >
                                        {
                                            dataList.map((item, index) => (
                                                <Tr key={index}>
                                                    <Td fontSize={"small"}>{index + 1}</Td>
                                                    <Td fontSize={"small"}>{item.initiateur.nom} {item.initiateur.prenom}</Td>
                                                    <Td fontSize={"small"}>{item.titre}</Td>
                                                    <Td fontSize={"small"}>{item.created_at}</Td>
                                                    <Td isNumeric fontWeight={"bold"} fontSize={"small"}>{item.status ? (<Text color={"green"}>Fin</Text>) : (<Text color={"gray"}>En cours</Text>)}</Td>
                                                    <Td isNumeric fontWeight={"bold"} fontSize={"small"}>{item.isLock ? (<Text color={"gray"}>Non</Text>) : (<Text color={"orange"}>Oui</Text>)}</Td>
                                                    <Td>
                                                        <ButtonGroup>
                                                            <Button size={"sm"} colorScheme={"red"} title="Suspendre la cagnotte" variant={"ghost"}> Suspendre</Button>
                                                           
                                                            <IconButton
                                                                onClick={() => router.push("/admin/cagnottes/" + item.id) }
                                                                size={"sm"}
                                                                colorScheme="blue"
                                                                aria-label='Détails'
                                                                icon={<ViewIcon />}
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
                <Box className="w-full col-span-1">
                    {
                        children
                    }
                </Box>
            </Box>
            {/* <ModalCreateCategorie onClose={setOpen} open={open} onSubmit={(e) => {setDataList([...dataList, e]) }}></ModalCreateCategorie> */}
        </>
    )
}