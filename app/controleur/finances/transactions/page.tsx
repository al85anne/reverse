"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"
import { Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Button } from "@chakra-ui/react"
import FinanceIcon from "@/public/icones/icons8-bitcoin-accepted-48.png"
import { SearchIcon } from "@chakra-ui/icons"


export default function Page() {


    return (
        <>
            <title>Reserve - Transactions</title>
            <div className="my-4">
                <Input bg="white" w={"fit-content"} color={"blue.500"} type="month"></Input>
            </div>
            <Box className="grid grid-cols-5 gap-10">

                <Box className="col-span-3">
                    <Box>
                        <div className="grid grid-cols-3 gap-8">
                            <CardStatSimple title={"Nombre total de transactions effectuées"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                            <CardStatSimple title={"Nombre total de transactions en cours"} stat={0} image={FinanceIcon.src}></CardStatSimple>

                        </div>
                    </Box>
                    <Box mt={4}>
                        <Box bg={"blue.500"} className="overflow-hidden rounded-2xl">
                            <Box p={4}>
                                <Text color={"white"} fontWeight={"medium"} fontSize={"x-large"}>Liste des transactions des pays</Text>
                                <InputGroup>
                                    <InputRightElement pointerEvents="none" >
                                        <SearchIcon></SearchIcon>
                                    </InputRightElement>
                                    <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                                </InputGroup>
                            </Box>
                            <TableContainer >
                                <Table variant='simple'>
                                    <Thead bg={"blue.500"}>
                                        <Tr>
                                            <Th color={"white"}>Pays</Th>
                                            <Th color={"white"}>Limite</Th>
                                            <Th color={"white"}>Transactions</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody bg="white">
                                        <Tr>
                                            <Td>France</Td>
                                            <Td>800 000</Td>
                                            <Td>800 000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Allemangne</Td>
                                            <Td>800 000</Td>
                                            <Td>800 000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Polande</Td>
                                            <Td>800 000</Td>
                                            <Td>800 000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Itali</Td>
                                            <Td>800 000</Td>
                                            <Td>800 000</Td>
                                        </Tr>
                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
                <Box bg={"white"} p={4} className="col-span-2 rounded-2xl">
                    <Text my={4} fontWeight={"bold"}>Ajouter un pays</Text>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Pays</FormLabel>
                            <Select bg="gray.100" placeholder='Selectionner le pays'>
                                <option>Allemagne</option>
                                <option value={"nigeria"}>France</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Devise</FormLabel>
                            <Select bg="gray.100" placeholder='Selectionner le devise'>
                                <option>Euro</option>
                                <option value={"nigeria"}>Dollar</option>
                                <option value={"nigeria"}>Yen</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Limite de transaction</FormLabel>
                            <Input  bg="gray.100" type='password' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <Button colorScheme="blue">Enregistrer</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}