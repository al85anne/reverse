"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"
import UserIcon from "@/public/icones/icons8-users-94.png"
// import { DrawerCreateUser } from "@/components/ui/DrawerCreate"
import {
    Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Stack,
    Box,
    Input,
    InputGroup,
    Button,
    InputRightElement,
    Td,
    IconButton,
    ButtonGroup,

} from "@chakra-ui/react"
import { ArrowDownIcon, DeleteIcon, EditIcon, LockIcon, SearchIcon, UnlockIcon, ViewIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { DrawerCreateUser, DrawerUpdateUser } from "@/components/ui/DrawerCreate"
import { IUtilisateur } from "@/Interfaces/UserInterface"
import { UserList } from "./DataUtilisateur"
import AlertComponent from "@/components/ui/AlertComponent"
export default function Page() {
    const [open, setOpen] = useState<boolean>(false)
    const [openAlert, setOpenAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>("")
    const [statusAlert, setStatusAlert] = useState<"info" | "warning" | "success" | "error" | "loading" | undefined>()
    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const month = 'Octobre';
    const [dataList, setDataList] = useState<IUtilisateur[]>(UserList)
    const [dataItem, setDataItem] = useState<IUtilisateur>(
        {
            id: "",
            nom: "",
            prenom: "",
            email: "",
            superviseurId: null,
            loggin: "",
            role: "",
            telephone: "",
            online: false,
            status: true,
            pays: "",
            entreprise: "",
            motDePasse: "",
            image_profile_url: "",
            created_at: "",
            isLock: false,
            updated_at: "",
            access_statistic: true,
            access_fournisseur: true,
            access_inventaire: true,
            access_remboursement: true,
            access_article_depense: false,
            access_portefeuille_mobile: false,
            access_reserve: false,
        }
    )
    const createData = (item: IUtilisateur) => {
        setDataList([...dataList, item])
        onShowAlert("Utilisateur ajouté", "success")
    }

    const onShowAlert = (message: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined) => {
        setMessageAlert(message);
        setStatusAlert(status);
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false)
        }, 50000);
    }

    const lockUser = (item: IUtilisateur) => {
        const tab: IUtilisateur[] = []
        dataList.map(elm => {
            if (item.id == elm.id) {
                item.isLock = !elm.isLock;
            }
            tab.push(elm)
        })
        setDataList(tab)
        onShowAlert("Utilisateur " + item.loggin + " bloqué", "info")
    }

    return (
        <>
            <title>Reserve - Utilisateurs</title>
            <Breadcrumb separator='-' fontSize={"small"}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/abonnements'>Utilisateurs</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            }
            <Stack spacing={8}>
                <div className="grid grid-cols-5 gap-8 mt-4">
                    <CardStatSimple icon={undefined} image={UserIcon.src} title={"Nombre d'utilisateur adonnés"} stat={dataList.length} ></CardStatSimple>
                </div>
                <Box>
                    <Text fontSize={"x-large"} fontWeight={"bold"} >Liste des utilisateurs abonnés</Text>
                </Box>
                <Box bg={"white"} p={4} className="rounded-xl">
                    <Button mb={4} onClick={() => setOpen(true)} colorScheme="blue">Ajouter un utilisateur</Button>
                    <Box display={"flex"} justifyContent={"space-between"} gap={8}>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="gray.200" fontSize={"medium"} color={"dark"} placeholder="Rechercher par nom, prénom ou téléphone"></Input>
                        </InputGroup>
                        <Button display={"flex"} gap={2} alignItems={"center"}>
                            <Text>Trier</Text>
                            <ArrowDownIcon></ArrowDownIcon>
                        </Button>
                    </Box>
                    <TableContainer >
                        <Table variant='simple'>
                            <TableCaption>Liste des utilisateurs abonnés le mois de &apos;&apos;{month}&apos;&apos;</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>N°</Th>
                                    <Th>nom & prenom</Th>
                                    <Th>entreprise</Th>
                                    <Th>role</Th>
                                    <Th>pays</Th>
                                    <Th>email</Th>
                                    <Th>téléphone</Th>
                                    <Th>status</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody >
                                {
                                    dataList.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{item.nom} {item.prenom}</Td>
                                            <Td>{item.entreprise ? item.entreprise : "Aucune entreprise"}</Td>
                                            <Td>{item.role}</Td>
                                            <Td>{item.pays}</Td>
                                            <Td>{item.email}</Td>
                                            <Td>{item.telephone}</Td>
                                            <Td>{item.status ? "Compte vérifié" : "Compte non vérifié"}</Td>
                                            <Td>
                                                <ButtonGroup>
                                                    {
                                                        item.isLock ? (
                                                            <IconButton
                                                                onClick={() => lockUser(item)}
                                                                size={"sm"}
                                                                aria-label='whiteAlpha'
                                                                icon={<UnlockIcon />}
                                                            />
                                                        ) : (
                                                            <IconButton
                                                                onClick={() => lockUser(item)}
                                                                size={"sm"}
                                                                aria-label='blackAlpha'
                                                                icon={<LockIcon />}
                                                            />
                                                        )
                                                    }
                                                    <IconButton
                                                        size={"sm"}
                                                        colorScheme="blue"
                                                        aria-label='Détails'
                                                        icon={<ViewIcon />}
                                                    />
                                                    <IconButton
                                                        size={"sm"}
                                                        colorScheme="yellow"
                                                        color={"white"}
                                                        onClick={() => { setDataItem(item); setOpenEdit(true) }}
                                                        aria-label='Editer'
                                                        icon={<EditIcon />}
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
            </Stack>
            <DrawerCreateUser open={open} onClose={setOpen} onSubmit={createData} ></DrawerCreateUser>
            <DrawerUpdateUser open={openEdit} item={dataItem} onClose={setOpenEdit} onSubmit={function (value: IUtilisateur): void {
                throw new Error("Function not implemented.")
            }} ></DrawerUpdateUser>
        </>
    )
}