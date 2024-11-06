"use client";

import { Box, Image, Text, List, ListItem, ButtonGroup, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Button, Editable, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Avatar } from "@chakra-ui/react"

import React, { useEffect, useState } from "react";
import { DataProductList } from "../DataProduct";
import { UnlockIcon, LockIcon, ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IProduct } from "@/Interfaces/IProduct";
import Link from "next/link";
import ProductIcon from "@/public/icones/icons8-product-48.png";
import CardStatSimple from "@/components/ui/CardStatSimple";

import CardProduct from "@/components/ui/CardProduct";
interface IPrams {
    id?: string
}

export default function Page({ params }: { params: IPrams }) {
    const [data, setData] = useState<IProduct | undefined>()
    useEffect(() => {
        setData(DataProductList.filter(e => e.id == params.id)[0])
    })
    return (
        <>

            {
                data ? (
                    <>
                        <title>Reserve - Produits</title>
                        <Breadcrumb separator='-' fontSize={"small"}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/admin/produits'>produits</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={'/admin/produits/' + data.id}>{data.nom}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Text fontSize={"x-large"} fontWeight={"bold"} my={4}>Produit ({data.reference})</Text>
                        <Box className="flex justify-start gap-8" >
                            <Box bg={"white"} className="max-w-2xl rounded-xl" padding={4} w={"fit-content"}>
                                <Image src={data.image_url} w={500}></Image>
                                <p className="px-4 my-2 text-sm text-gray-600" >{data.description}</p>

                                <TableContainer  >
                                    <Table size={"sm"} variant='simple'>
                                        <TableCaption>Détail du produit</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Libellé</Th>
                                                <Th></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Nom du produit</Td>
                                                <Td isNumeric>{data.nom}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Reférence du produit</Td>
                                                <Td isNumeric>{data.reference}</Td>
                                            </Tr>

                                            <Tr>
                                                <Td fontWeight={"bold"}>Prix d&apos;achat</Td>
                                                <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.prix_achat}</Td>
                                            </Tr>
                                            {
                                                data.promotion ? (
                                                    <Tr>
                                                        <Td fontWeight={"bold"}>Prix promotionnel</Td>
                                                        <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.prix_promotion}</Td>
                                                    </Tr>
                                                ) : (
                                                    <Tr>
                                                        <Td colSpan={2}>
                                                            <Button size={"sm"} colorScheme="green">Mettre en promotion</Button>
                                                        </Td>
                                                    </Tr>
                                                )
                                            }
                                            <Tr>
                                                <Td fontWeight={"bold"}>Prix de vente</Td>
                                                <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.prix_vente}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Lien de l&apos;image</Td>
                                                <Td isNumeric><Editable value={data.image_url}></Editable></Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Fournisseur</Td>
                                                <Td isNumeric>{data.fournisseur == 1 ? "Aucun" : data.fournisseur}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Quantité d&apos;alert</Td>
                                                <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.quantite_alert}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Quantité acheté</Td>
                                                <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.quantite_achete}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Quantité perdue</Td>
                                                <Td color={"blue"} fontWeight={"medium"} isNumeric>{data.quantite_perdue}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Unite</Td>
                                                <Td isNumeric></Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Proprietaire</Td>
                                                <Td title="Cliquer pour aller vers le profile du proprietaire" isNumeric color={"green"}><Link href={"/admin/utilisateurs/" + data.id}>{data.user.nom} {data.user.prenom}</Link></Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Categorie</Td>
                                                <Td isNumeric title="Cliquer pour voir les détails sur la catégorie" color={"green"}><Button variant={"ghost"} size={"sm"} colorScheme="green">{data.categorie.label}</Button> </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Code barre</Td>
                                                <Td isNumeric color={"green"}>{data.code_barre}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Peremption</Td>
                                                <Td isNumeric >{data.peremption}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Pertes</Td>
                                                <Td isNumeric >{data.pertes}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight={"bold"}>Crée le</Td>
                                                <Td isNumeric >{data.created_at}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                                <ButtonGroup px={4} size={"sm"}>
                                    <Button colorScheme="red">Supprimer</Button>
                                    <Button colorScheme="orange" bg="black" color="white" >Bloquer</Button>
                                </ButtonGroup>
                            </Box>
                            <Box>
                                <CardStatSimple image={ProductIcon.src} title={"Nombre de commande concernant ce produit"} stat={data.ligneCmd.length} ></CardStatSimple>
                                <Box p={4} bg={"white"} className="rounded-xl" mt={4}>
                                    <Avatar size={"sm"}></Avatar>
                                    <Text>{data.user.nom} {data.user.prenom}</Text>
                                    <Text>Loggin: 87556985588</Text>
                                    <Link href={"#"} className="text-sm font-bold text-blue-400 hover:underline">Voir tous ces produits</Link>
                                </Box>
                                <Box p={4} bg={"white"} className="rounded-xl" mt={4}>
                                    {
                                        DataProductList.map((item, index) => (
                                            <Box  display="flex" gap={2}>
                                                <Box key={index} className="max-w-sm">
                                                    <Image src={item.image_url} w={200}></Image>
                                                </Box>
                                                <Box>
                                                    <List>
                                                    <ListItem display="flex" gap={2}><Text fontWeight={"medium"} color={"gray.400"}>Montant :</Text> <Text fontWeight={"medium"}>{item.prix_vente}</Text></ListItem>
                                                    <ListItem display="flex" gap={2}><Text fontWeight={"medium"} color={"gray.400"}>Produit :</Text> <Text fontWeight={"medium"}>{item.nom}</Text></ListItem>
                                                    <ListItem display="flex" gap={2}><Text fontWeight={"medium"} color={"gray.400"}>Categorie :</Text> <Text fontWeight={"medium"}>{item.categorie.label}</Text></ListItem>
                                                    <ListItem display="flex" gap={2}><Text fontWeight={"medium"} color={"gray.400"}>Date :</Text> <Text fontWeight={"medium"}>2024-02-22</Text></ListItem>
                                                    <ListItem display="flex" gap={2}><Text fontWeight={"medium"} color={"gray.400"}>Status :</Text> <Text fontWeight={"medium"} color="green">En vente</Text></ListItem>
                                                    </List>
                                                </Box>
                                            </Box>
                                        ))
                                    }

                                </Box>

                            </Box>
                        </Box>
                    </>
                ) : null
            }
        </>
    )
}