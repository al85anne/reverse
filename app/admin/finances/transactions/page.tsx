"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"
import { Box, Input, Select, Text } from "@chakra-ui/react"


export default function Page() {


    return (
        <>
            <title>Reserve - Transactions</title>
            <div>
                <Input type="month"></Input>
            </div>
            <Box>
                <Box>
                    <div className="grid grid-cols-5 gap-8">
                        <CardStatSimple title={"Nombre total de transactions effectuées"} stat={0} image={""}></CardStatSimple>
                        {/* <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple> */}
                    </div>
                </Box>
                <Box>
                    <Box>
                        <Text>Ajouter une devise</Text>
                        <Select>
                            <option selected></option>
                            <option value="france">France</option>
                        </Select>
                    </Box>
                </Box>
            </Box>
        </>
    )
}