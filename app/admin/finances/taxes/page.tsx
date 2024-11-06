"use client"

// import CardStatSimple from "@/components/ui/CardStatSimple"
import { Box, FormControl, ListItem, List, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, Select, Stack,  Text, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
// import FinanceIcon from "@/public/icones/icons8-bitcoin-accepted-48.png"
import { SearchIcon } from "@chakra-ui/icons"


export default function Page() {


    return (
        <>
            <title>Reserve - Taxes</title>
            <div className="my-4">
                <Input bg="white" w={"fit-content"} color={"blue.500"} type="month"></Input>
            </div>
            <Box className="grid grid-cols-5 gap-10">
                <Box className="col-span-3">
                    <Box mt={4}>
                        <Box bg={"blue.500"} className="overflow-hidden rounded-2xl">
                            <Box p={4}>
                                <Text color={"white"} fontWeight={"medium"} fontSize={"x-large"}>Taxes des pays</Text>
                                <InputGroup>
                                    <InputRightElement pointerEvents="none" >
                                        <SearchIcon></SearchIcon>
                                    </InputRightElement>
                                    <Input type="search" bg="white" fontSize={"medium"} color={"dark"} placeholder="Rechercher"></Input>
                                </InputGroup>
                            </Box>
                            <Accordion bg={"white"}>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex={1} textAlign={"left"}>
                                                Paris
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                       
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List bg={"gray.100"} p={2} className="rounded-md">
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex={1} textAlign={"left"}>
                                                Bretagne
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                       
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List bg={"gray.100"} p={2} className="rounded-md">
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                            <ListItem display={"flex"} justifyContent={"space-between"}><Text>Taxe 1</Text> <Text>11 500</Text></ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>
                </Box>
                <Box bg={"white"} p={4} className="col-span-2 rounded-2xl">
                    <Text my={4} fontWeight={"bold"}>Ajouter la taxe d&apos;ville</Text>
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
                            <FormLabel>Ville</FormLabel>
                            <Select bg="gray.100" placeholder='Selectionner le pays'>
                                <option>Allemagne</option>
                                <option value={"nigeria"}>France</option>
                            </Select>
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Nom</FormLabel>
                            <Input bg="gray.100" type='text' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Taxe</FormLabel>
                            <Input bg="gray.100" type='number' />
                            <FormHelperText>Champ obligatoire</FormHelperText>
                        </FormControl>
                        <Button colorScheme="blue">Enregistrer</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}