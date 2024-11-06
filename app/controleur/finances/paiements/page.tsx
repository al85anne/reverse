"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"
import { Box, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import FinanceIcon from "@/public/icones/icons8-bitcoin-accepted-48.png"
import { SearchIcon } from "@chakra-ui/icons"
import CardPaiement from "@/components/ui/CardPaiement"


export default function Page() {


    return (
        <>
            <title>Reserve - Paiements</title>
            <div className="my-4">
                <Input bg="white" w={"fit-content"} color={"blue.500"} type="month"></Input>
            </div>
            <Box className="grid grid-cols-2 gap-10">
                <Box >
                    <Box>
                        <div className="grid grid-cols-3 gap-8">
                            <CardStatSimple title={"Paiement ce mois"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                            <CardStatSimple title={"Paiement en cours"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                        </div>
                    </Box>
                    <Box mt={4} bg={"white"} className="p-4 overflow-x-hidden overflow-y-auto rounded-2xl">
                        <CardPaiement></CardPaiement>
                    </Box>
                </Box>
                <Box bg={"white"}  className="overflow-hidden rounded-2xl">
                    <Box p={4} className="bg-stone-900">
                        <Text my={4} color={"white"} fontWeight={"bold"}>Historique des transactions d&apos;un utilisateur</Text>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" >
                                <SearchIcon></SearchIcon>
                            </InputRightElement>
                            <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                        </InputGroup>
                    </Box>
                </Box>
            </Box>
        </>
    )
}