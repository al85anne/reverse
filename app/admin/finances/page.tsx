"use client"

import CardStatSimple from "@/components/ui/CardStatSimple"


export default function Page() {


    return (
        <>
            <title>Reserve - Finances</title>
            <div className="grid grid-cols-5 gap-8">
                <CardStatSimple title={"Nombre total de transactions effectuées"} stat={0} image={""}></CardStatSimple>
                {/* <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple>
                <CardStatSimple title={""} stat={0} image={""}></CardStatSimple> */}
            </div>
        </>
    )
}