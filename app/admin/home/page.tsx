"use client"
import Sidebar from "@/components/ui/Sidebar"
import Logo from "@/public/images/944c7b5c9bf8f87a73bc50d145569640.png"
import CustomerImage from "@/public/icones/icons8-users-94.png"
import ProductImage from "@/public/icones/icons8-product-48.png"
import TransactionImage from "@/public/icones/icons8-invoice-48.png"
import Image from "next/image"
import { ListItem, Text, Box, List, Button, ButtonGroup, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import CardStatSpecial from "@/components/ui/CardStatSpecial"
import CardChartLine from "@/components/ui/CardChartLine"
import { UnlockIcon, LockIcon, ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { UserList } from "../utilisateurs/DataUtilisateur"
export default function Page() {

    return (
        <>
            <title>Reserve - Tableau de bord</title>
            <div className="grid items-start grid-cols-4 gap-8">
                <section className="col-span-3 ">
                    <div className="relative grid items-start grid-cols-3 gap-8">
                        <CardStatSpecial title={"Utilisateurs"} stat={UserList.length} image={CustomerImage.src} ></CardStatSpecial>
                        <CardStatSpecial title={"Produits"} stat={0} image={ProductImage.src} ></CardStatSpecial>
                        <CardStatSpecial title={"Transactions"} stat={0} image={TransactionImage.src} ></CardStatSpecial>

                        <div className="col-span-3">
                            <Box bg={"white"} padding={4} className="rounded-2xl">
                                <CardChartLine labels={["Jan", "Fev", "Mars", "Avr", "Mai", "Jun", "Jul", "Aut", "Sep", "Oct", "Nov", "Dec"]} height={0} subTitle={"Statistique sur le revenue sur l'année"} maxWidth={""} data={[10, 20, 30, 40, 0, 59, 0, 6]}></CardChartLine>
                            </Box>
                            <Box bg={"white"} padding={4} className="rounded-2xl" mt={8}>
                                <Text my={4}>Nouveau utilisateur (Cette semaine)</Text>
                                <TableContainer >
                                    <Table size={"sm"} variant='simple'>

                                        <Thead>
                                            <Tr>
                                                <Th>N°</Th>
                                                <Th>nom & prenom</Th>
                                                <Th>entreprise</Th>
                                                <Th>role</Th>
                                                <Th>pays</Th>
                                                <Th>email</Th>
                                               
                                                <Th>status</Th>
                                                
                                            </Tr>
                                        </Thead>
                                        <Tbody >
                                            {
                                                UserList.map((item, index) => (
                                                    <Tr key={index}>
                                                        <Td>{index + 1}</Td>
                                                        <Td>{item.nom} {item.prenom}</Td>
                                                        <Td>{item.entreprise ? item.entreprise : "Aucune entreprise"}</Td>
                                                        <Td>{item.role}</Td>
                                                        <Td>{item.pays}</Td>
                                                        <Td>{item.email}</Td>

                                                        <Td>{item.status ? "Compte vérifié" : "Compte non vérifié"}</Td>

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
                        </div>
                    </div>
                </section>
                <div className="p-4 bg-white shadow-xl rounded-2xl">
                    <Text fontWeight={"medium"} mb={4} fontSize={"large"}>Activités des transactions</Text>
                    <Box>
                        <List className="space-y-4">
                            <ListItem bg={"gray.100"} px={4} py={1} className="items-start rounded-2xl" justifyContent={"space-between"} display={"flex"} gap={6}>
                                <div className="my-auto">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full">

                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-yellow-600">En cours de validation</div>
                                    <div className="text-sm font-semibold">Virement de Paul à Joel</div>
                                </div>
                            </ListItem>
                            <ListItem bg={"gray.100"} px={4} py={1} className="items-start rounded-2xl" justifyContent={"space-between"} display={"flex"} gap={6}>
                                <div className="my-auto">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full">

                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-yellow-600">En cours de validation</div>
                                    <div className="text-sm font-semibold">Participation de Jean à la cagnotte "Nouveau projet"</div>
                                </div>
                            </ListItem>
                            <ListItem bg={"gray.100"} px={4} py={1} className="items-start rounded-2xl" justifyContent={"space-between"} display={"flex"} gap={6}>
                                <div className="my-auto">
                                    <div className="w-3 h-3 bg-green-500 rounded-full">

                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-green-600">Success</div>
                                    <div className="text-sm font-semibold">Participation de Jean à la cagnotte "Nouveau projet"</div>
                                </div>
                            </ListItem>
                            <ListItem bg={"gray.100"} px={4} py={1} className="items-start rounded-2xl" justifyContent={"space-between"} display={"flex"} gap={6}>
                                <div className="my-auto">
                                    <div className="w-3 h-3 bg-red-500 rounded-full">

                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-red-600">Rejeter</div>
                                    <div className="text-sm font-semibold">Participation de Jean à la cagnotte "Nouveau projet"</div>
                                </div>
                            </ListItem>

                        </List>
                        <Button variant={"ghost"} colorScheme="blue" size={"sm"} mt={4}>Consulter tous les activités</Button>
                    </Box>
                </div>
            </div>

        </>
    )
}