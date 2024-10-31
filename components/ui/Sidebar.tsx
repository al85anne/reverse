"use client"

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Box, Stack, Text } from '@chakra-ui/react'
import LogoImage from "@/public/images/logo (1).png"

export default function Sidebar(props: { links: { label: string, link: string, icon: string }[] }) {
    const pathname = usePathname()
    const regexPath = (str: string) => {
        if (str == '/admin/') {
           return false
        }else{
            return pathname.includes(str)
        }
    }
    // const logoutUser = async () => {
    //     await signOut({
    //         redirect: true,
    //         callbackUrl: `/`,
    //     });

    // }
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <Box>
                    <Stack px={4} spacing={2}>
                        <Box>
                            <Image src={LogoImage.src} width={100} height={100} alt='Logo' />
                            {/* <Text color={"blue.500"} padding={4} fontSize={"xx-large"}>REVERSE</Text> */}
                        </Box>
                        {
                            props.links.map((elt, index) => (
                                <Link href={elt.link} key={index} className={`${regexPath(elt.link) ? "text-white bg-blue-500 " : "text-stone-600"} p-2 flex items-center hover:bg-blue-500 hover:text-white rounded-xl `}>
                                    <Image src={elt.icon} width={30} height={30} alt='Icons8' ></Image>
                                    <Text className="ms-3">{elt.label}</Text>
                                </Link>
                            ))
                        }
                    </Stack>
                </Box>

            </aside>
        </>
    )
}
