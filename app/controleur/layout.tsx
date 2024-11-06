"use client"

import Sidebar from "@/components/ui/Sidebar"
import { navLink } from "./navlinks"
import { Box } from "@chakra-ui/react"
import Header from "@/components/ui/header"

export default function SessionProviderClientComponent({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <div>
            <Sidebar links={navLink}></Sidebar>
            <Header></Header>
            <div className="px-4 bg-stone-200 sm:ml-64">
                <Box className="container min-h-screen py-28">
                
                    {children}
                </Box>
            </div>
        </div>
    )
}