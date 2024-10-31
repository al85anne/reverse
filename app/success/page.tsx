import Logo from "@/public/images/944c7b5c9bf8f87a73bc50d145569640.png"
import Image from "next/image"

export default function FormulairePage() {

    return (
        <div className="h-full min-h-screen " >
            <div style={{ backgroundColor: "#FBB03B", }} className="pb-20" >
                <div className="container mx-auto max-md:px-8 py-9">
                    <Image alt="Logo nosiArt" src={Logo.src} width={56} height={50}></Image>
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full py-20 ">
                        <div className="container max-md:px-8 max-w-7xl" >
                            <div className="max-w-2xl p-8 mx-auto text-center text-green-500 bg-white shadow-md rounded-2xl">
                                Félicitations, vous êtes désormais inscrit à <br></br> <span className="text-2xl font-medium text-stone-600">NosiArt&apos;Afro Cup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}