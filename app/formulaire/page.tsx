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
                            <form className="max-w-2xl p-8 mx-auto bg-white shadow-md rounded-2xl">
                                <h1 className="mb-5 text-xl font-bold">NosiArt&apos;Afro Cup</h1>
                                <h2 className="font-medium">Données Personnelles</h2>
                                <hr className="border shadow-xl border-stone-200 " />
                                <div className="py-4">
                                    <div className="mb-5">
                                        <label htmlFor="nom" className="flex gap-2 mb-1 text-sm font-medium text-gray-900 ">Votre nom <span className="text-red-500">*</span></label>
                                        <input type="text" id="nom" name="nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Veuillez entrer votre nom" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="prenom" className="flex gap-2 mb-1 text-sm font-medium text-gray-900 ">Votre prénom <span className="text-red-500">*</span></label>
                                        <input type="text" id="prenom" name="prenom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Veuillez entrer votre nom" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="nom_artiste" className="flex gap-2 mb-1 text-sm font-medium text-gray-900 ">Votre nom d&apos;artiste <span className="text-red-500">*</span></label>
                                        <input type="text" id="nom_artiste" name="nom_artiste" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Veuillez entrer votre nom" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="nationalite" className="flex gap-2 mb-1 text-sm font-medium text-gray-900 ">Votre nationalité <span className="text-red-500">*</span></label>
                                        <select id="nationalite" name="nationalite" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Bénin</option>
                                            <option>Cameroun</option>
                                            <option>Congo-Brazzaville</option>
                                            <option>Côte d&apos;Ivoire</option>
                                            <option>Gabon</option>
                                            <option>Guinée-Équatoriale</option>
                                            <option>Madagascar</option>
                                            <option>Mauritanie</option>
                                            <option>Niger</option>
                                            <option>RDC</option>
                                            <option>Sénégal</option>
                                            <option>Tchad</option>
                                        </select>
                                    </div>
                                </div>
                                <h2 className="font-medium">Technique</h2>
                                <hr className="border shadow-xl border-stone-200 " />
                                <div className="py-4">
                                    <div className="mb-5">
                                        <label htmlFor="style_dessin" className="flex gap-2 mb-1 text-sm font-medium text-gray-900 ">Style de dessin <span className="text-red-500">*</span></label>
                                        <select id="style_dessin" name="style_dessin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Dessin au stylo (Dessin traditionnel)</option>
                                            <option>Dessin au numérique</option>
                                        </select>
                                    </div>
                                </div>
                                <button style={{ backgroundColor: "#FBB03B", }} type="submit" className="text-stone-800 hover:bg-orange-500 focus:ring-4 w-full focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center ">Soumettre</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}