import Image from "next/image";

const CardStatSimple = (props: { icon?: JSX.Element, title: string, stat: number, image: string }) => {
    return (
        <>
            <div className="flex items-start gap-4 px-4 py-3 text-black bg-white rounded-lg ">
                {/* <div className="p-2 overflow-hidden bg-blue-500 rounded-full w-14 h-14">
                  
                </div> */}
                  {props.icon ?  props.icon : <Image src={props.image} alt="" width={50} height={50} ></Image> }
                <div>
                    <div className="font-semibold">
                        {props.title}
                    </div>
                    <div className="text-4xl font-bold">{props.stat < 10 ? "0" + props.stat : props.stat}</div>
                </div>
            </div>
        </>
    )
}

export default CardStatSimple;