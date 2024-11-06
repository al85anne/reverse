import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import InvoiceIcon from "@/public/icones/icons8-invoice-48.png";

const CardInvoice = () => {
    return (
        <Box p={4} className="rounded-2xl" bg={"white"}>
            <Box display={"flex"} alignItems={"start"} gap={2}>
                <Image src={InvoiceIcon.src} width={30} height={30} alt="Invoice png"></Image>
                <Box>
                    <Text fontWeight={"bold"}>Machine à vapeur</Text>
                    <Text>ID: 1575200558</Text>
                </Box>
            </Box>
            <Box>
                <Box mt={4} className="grid grid-cols-7">
                    <List className="col-span-3">
                        <ListItem display={"flex"}  gap={2}> <Text fontWeight={"bold"}>Acheteur: </Text> <Text>Nom de l&apos;entreprise </Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Id: </Text> <Text>255998556</Text></ListItem>
                        <ListItem display={"flex"} gap={2} mt={2}> <Text fontWeight={"bold"}>Vendeur: </Text> <Text>Nom de l&apos;entreprise </Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Id: </Text> <Text>558999999</Text></ListItem>
                    </List>
                    <div className="flex items-start justify-center">
                        <div className="h-full w-0.5 bg-slate-500"></div>
                    </div>
                    <List className="col-span-3">
                        <ListItem display={"flex"}  gap={2}> <Text fontWeight={"bold"}>Prix: </Text> <Text>250 000 FCFA</Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Quantité: </Text> <Text>4</Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Frais: </Text> <Text>Méthode</Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Méthode de paiement: </Text> <Text>France</Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Date: </Text> <Text>2024-03-05</Text></ListItem>
                        <ListItem display={"flex"} gap={2}> <Text fontWeight={"bold"}>Heure: </Text> <Text>18:05</Text></ListItem>
                    </List>
                </Box>
               
            </Box>
        </Box>
    )
}

export default CardInvoice