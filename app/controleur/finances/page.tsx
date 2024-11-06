"use client"

import CardChartLine from "@/components/ui/CardChartLine"
import CardStatSimple from "@/components/ui/CardStatSimple"
import { Box } from "@chakra-ui/react"
import FinanceIcon from "@/public/icones/icons8-bitcoin-accepted-48.png"

export default function Page() {


    return (
        <>
            <title>Reserve - Finances</title>
            <div className="grid grid-cols-5 gap-4">
                <CardStatSimple title={"Nombre total de transactions effectuées"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                <CardStatSimple title={"Nombre total de taxes enregistrées"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                <CardStatSimple title={"Nombre total de paiements effectuées"} stat={0} image={FinanceIcon.src}></CardStatSimple>
                {/* <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple> */}
            </div>
            <Box bg={"white"} mt={4} padding={4} className="rounded-2xl">
                <CardChartLine labels={["Jan", "Fev", "Mars", "Avr", "Mai", "Jun", "Jul", "Aut", "Sep", "Oct", "Nov", "Dec"]} height={0} subTitle={"Statistique sur le revenue sur l'année"} maxWidth={""} data={[10, 20, 30, 40, 0, 59, 0, 6]}></CardChartLine>
            </Box>
        </>
    )
}