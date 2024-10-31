"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack,
    Text
} from "@chakra-ui/react"


import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({
    children
}: {
    children: React.ReactNode,
}) {

    const pathname = usePathname()
    const regexPath = (str: string) => {
        if (str == '/admin/') {
            return false
        } else {
            return pathname.includes(str)
        }
    }
    return (
        <div>
            <Breadcrumb separator='-' fontSize={"small"}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/home'>Tableau de bord</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/admin/finances'>Finances</BreadcrumbLink>
                </BreadcrumbItem>
                {
                    regexPath('/admin/finances/transactions') ? (
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/admin/finances/transactions'>Transactions</BreadcrumbLink>
                        </BreadcrumbItem>
                    ) : null
                }
                 {
                    regexPath('/admin/finances/taxes') ? (
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/admin/finances/taxes'>Taxes</BreadcrumbLink>
                        </BreadcrumbItem>
                    ) : null
                }
            </Breadcrumb>
            <HStack gap={4} mt={4} className="border-b-4 border-stone-200">
                <Link href={"/admin/finances/transactions"}><Text _hover={{ color: "blue.500" }} className={regexPath('/admin/finances/transactions') ? "border-b-4 border-blue-400 text-blue-500" : ""} fontSize={"x-large"}>Transactions</Text></Link>
                <Link href={"/admin/finances/taxes"} ><Text _hover={{ color: "blue.500" }} className={regexPath('/admin/finances/taxes') ? "border-b-4 border-blue-400 text-blue-500" : ""} fontSize={"x-large"}>Taxes</Text></Link>
            </HStack>
            {children}
        </div>
    )
}