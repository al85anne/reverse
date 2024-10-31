import { Avatar, Box, Text, IconButton } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <header className='fixed z-30  top-0 left-0 w-full '>
      <Box bg={"white"} p={4} py={5} gap={4} display={"flex"} justifyContent={"end"}>
        {/* <BellIcon></BellIcon> */}
        <IconButton
          aria-label='Notifications'
          icon={<BellIcon />}
        />
        <Box gap={2} display={"flex"} alignItems={"center"}>
          <Text fontWeight={"medium"}>
            Superviseur
          </Text>
          <Avatar size={"sm"}></Avatar>
        </Box>
      </Box>
    </header>
  )
}
