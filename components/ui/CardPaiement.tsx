import { Box, Avatar,List, ListItem, Text } from "@chakra-ui/react"
const CardPaiement = () => {
    return (
        <Box p={4} bg={"white"} className="border-b-4" >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                    <Avatar size={"sm"} bg={"blue.500"}></Avatar>
                    <Box>
                        <Text fontWeight={"medium"}>Nom entreprise</Text>
                        <Text>ID: 64548103132</Text>
                    </Box>
                </Box>
                <Text fontSize={"small"}>Transfert</Text>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                    <Avatar size={"sm"} bg={"blue.500"}></Avatar>
                    <Box>
                        <Text fontWeight={"medium"}>Nom entreprise</Text>
                        <Text>ID: 64548103132</Text>
                    </Box>
                </Box>
            </Box>
            <List fontSize={"small"} p={4}>
                <ListItem display={"flex"} gap={2} mt={2}> <Text color={"GrayText"} fontWeight={"bold"}>Prix: </Text> <Text>250 000 FCFA</Text></ListItem>
                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Quantité: </Text> <Text>4</Text></ListItem>
                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Frais: </Text> <Text>Méthode</Text></ListItem>
                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Méthode de paiement: </Text> <Text>France</Text></ListItem>
                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Date: </Text> <Text>2024-03-05</Text></ListItem>
                <ListItem display={"flex"} gap={2}> <Text color={"GrayText"} fontWeight={"bold"}>Heure: </Text> <Text>18:05</Text></ListItem>
            </List>
        </Box>
    )
}

export default CardPaiement