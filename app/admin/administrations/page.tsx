"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"
import UserIcon from "@/public/icones/icons8-users-94.png"
// import { DrawerCreateUser } from "@/components/ui/DrawerCreate"
import {
    Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Select,
    Stack,
    Box,
    Input,
    InputGroup,
    Button,
    InputRightElement,
    Td,
    FormControl,
    FormHelperText,
    FormLabel,

} from "@chakra-ui/react"
import {  SearchIcon} from "@chakra-ui/icons"
import { useState } from "react"
import { DrawerCreateUser, DrawerUpdateUser } from "@/components/ui/DrawerCreate"
import { IUtilisateur } from "@/Interfaces/UserInterface"
// import { UserList } from "./DataUtilisateur"
import AlertComponent from "@/components/ui/AlertComponent"
export default function Page() {
    const [open, setOpen] = useState<boolean>(false)
    const [openAlert, setOpenAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>("")
    const [statusAlert, setStatusAlert] = useState<"info" | "warning" | "success" | "error" | "loading" | undefined>()
    const [openEdit, setOpenEdit] = useState<boolean>(false)
    // const month = 'Octobre';
    const [dataList, setDataList] = useState<IUtilisateur[]>([])
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
            <title>Reserve - Administrations</title>
            <Breadcrumb separator='-' fontSize={"small"}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/administrations'>Administrations</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {
                openAlert ? <AlertComponent message={messageAlert} status={statusAlert} /> : null
            }
            <Box className="grid grid-cols-3 gap-10">
                <Stack spacing={8} className="col-span-2">
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        <CardStatSimple icon={undefined} image={UserIcon.src} title={"Nombre d'administrateurs"} stat={dataList.length} ></CardStatSimple>
                        <CardStatSimple icon={undefined} image={UserIcon.src} title={"Nombre de superviseurs"} stat={1} ></CardStatSimple>
                        <CardStatSimple icon={undefined} image={UserIcon.src} title={"Nombre de contrôleurs financiers"} stat={0} ></CardStatSimple>
                    </div>

                    <Box bg={"white"} p={4} className="rounded-xl">

                        <Box display={"flex"} justifyContent={"space-between"} gap={8}>
                            <InputGroup>
                                <InputRightElement pointerEvents="none" >
                                    <SearchIcon></SearchIcon>
                                </InputRightElement>
                                <Input type="search" bg="gray.200" fontSize={"medium"} color={"dark"} placeholder="Rechercher par nom, prénom ou téléphone"></Input>
                            </InputGroup>

                        </Box>
                        <TableContainer >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>N°</Th>
                                        <Th>nom</Th>
                                        <Th>email</Th>
                                        <Th>role</Th>

                                        {/* <Th>Action</Th> */}
                                    </Tr>
                                </Thead>
                                <Tbody >
                                    {
                                        dataList.map((item, index) => (
                                            <Tr key={index}>
                                                <Td>{index + 1}</Td>
                                                <Td>{item.nom}</Td>
                                                <Td>{item.email}</Td>
                                                <Td>{item.role}</Td>

                                                {/* <Td>
                                                <ButtonGroup>
                                                  
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
                                            </Td> */}
                                            </Tr>
                                        ))
                                    }

                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
                <Box className="col-span-1">
                    <Text fontSize={"x-large"} > Nouveau administrateur</Text>
                    <Box mt={4} className="p-4 text-white bg-stone-900 rounded-2xl ">
                        <Stack spacing={4}>
                            <FormControl isRequired>
                                <FormLabel>Nom complet</FormLabel>
                                <Input color={"GrayText"} bg="white" type='text' />

                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input color={"GrayText"} bg="white" type='email' />
                                <FormHelperText>Champ obligatoire</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Téléphone</FormLabel>
                                <Input color={"GrayText"} bg="white" type='tel' />
                                <FormHelperText>Champ obligatoire</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Mot de passe</FormLabel>
                                <Input color={"GrayText"} bg="white" type='password' />
                                <FormHelperText>Champ obligatoire</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Confirmer le mot de passe</FormLabel>
                                <Input color={"GrayText"} bg="white" type='password' />
                                <FormHelperText>Champ obligatoire</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Rôle</FormLabel>
                                <Select color={"GrayText"} bg="white" placeholder='Selectionner le role'>
                                    <option>Superviseur</option>
                                    <option value={"nigeria"}>Super Administrateur</option>
                                    <option value={"nigeria"}>Contrôleur financier</option>
                                </Select>
                                <FormHelperText>Champ obligatoire</FormHelperText>
                            </FormControl>
                            <Button colorScheme="blue">Enregistrer</Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <DrawerCreateUser open={open} onClose={setOpen} onSubmit={createData} ></DrawerCreateUser>
            <DrawerUpdateUser open={openEdit} item={dataItem} onClose={setOpenEdit} onSubmit={function (value: IUtilisateur): void {
                throw new Error("Function not implemented.")
            }} ></DrawerUpdateUser>
        </>
    )
}