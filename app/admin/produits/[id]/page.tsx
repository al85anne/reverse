"use client";

import { Box, Image, Text, List, ListItem, ButtonGroup, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Button, Editable, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

import React, { useEffect, useState } from "react";
import { DataProductList } from "../DataProduct";
import { UnlockIcon, LockIcon, ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IProduct } from "@/Interfaces/IProduct";
import Link from "next/link";
import ProductIcon from "@/public/icones/icons8-product-48.png";
import CardStatSimple from "@/components/ui/CardStatSimple";
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
                        <Text fontSize={"x-large"}  fontWeight={"bold"} my={4}>Produit ({data.reference})</Text>
                        <Box className="flex justify-start gap-8" >
                            <Box bg={"white"} className="rounded-xl"  padding={4} w={"fit-content"}>
                                <Image src={data.image_url} w={500}></Image>
                                <TableContainer  >
                                    <Table  size={"sm"} variant='simple'>
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
                                                <Td fontWeight={"bold"}>Description du produit</Td>
                                                <Td isTruncated>{data.description}</Td>
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
                            </Box>
                            <Box>
                                <CardStatSimple image={ProductIcon.src} title={"Nombre de commande concernant ce produit"} stat={data.ligneCmd.length} ></CardStatSimple>
                            </Box>
                        </Box>
                    </>
                ) : null
            }
        </>
    )
}