import Image from "next/image";

const CardStatSpecial = (props: { title: string, stat: number, image: string }) => {
    return (
        <>
            <div className="relative flex items-start gap-4 px-4 py-6 overflow-hidden text-black shadow-lg rounded-2xl bg-gradient-to-tr from-blue-500 bg-cyan-500 ">
                {/* <div className="p-2 overflow-hidden bg-blue-500 rounded-full w-14 h-14">
                  
                </div> */}
                <Image className="absolute -right-2 -bottom-8 opacity-40" src={props.image} alt="" width={150} height={150} ></Image>
                <div className="relative z-10 text-white">
                    <div className="text-2xl font-semibold">
                        {props.title}
                    </div>
                    <div className="text-4xl font-bold">{props.stat < 10 ? "0" + props.stat : props.stat}</div>
                </div>
            </div>
        </>
    )
}

export default CardStatSpecial;