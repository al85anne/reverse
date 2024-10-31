
'use client'
// import { Country } from '@/app/(default)/layout'
import Image from 'next/image'
import { useState } from 'react'


export default function DropDown(props: { country: string[], onEmit: Function, id: string }) {

    const [pays, setPays] = useState<any[]>([])
    const [paysSelected, setPaysSelected] = useState<any>()


    const [clicked, setClicked] = useState<boolean>(false)
    const [hidden, setHidden] = useState<boolean>(false)
    const [CountryValue, setCountryValue] = useState<string>('');
    const [phoneValue, setPhoneValue] = useState<string>('');
    // const [maxLengthValue, setMaxLengthValue] = useState<number>(0)


    const handleKeyDownCountry = (e: string) => {
        // setMaxLengthValue(0)
        const tab: any[] = [];
        let val = e.replace(/\D/g, '');
       // if (val !== "" && CountryValue != "") {
        if (val !== "") {
            // props.country.forEach((e) => {
            //     if ((e.tel.toString().toLowerCase().indexOf((val.trim().toString())) != -1)) {
            //         console.log(e.tel.toString().toLowerCase())
            //         tab.push(e);
            //     }
            // });
        }
       // if (val.length == 4) {
            setHidden(true);
            props.country.map((i) => {
                if (i === val) {
                    setPaysSelected(i)
                    handleClickCountry(i)
                    setPays([])
                    document.getElementById('tel' + props.id)?.focus()
                    document.getElementById('tel' + props.id)?.click()

                }
           })

     //   }
        setPays(tab)
        setCountryValue(val);
    }

    const handleKeyDownTel = (e: string) => {
        setPays([])
        const tab: any[] = [];
        var val = e;
        const onlyNumbers = val.replace(/\D/g, '');
        if (val !== "" || CountryValue != "") {
            setPhoneValue(onlyNumbers)
        }
        props.onEmit({ tel: phoneValue, id: CountryValue });

    }
    const handleClickCountry = (e: string) => {
        setPaysSelected(e)
        setPays([])
        if (props.country.indexOf(e) != -1) {
            // setMaxLengthValue(e.length - e.tel.length)
        }else{
            // setMaxLengthValue(0)
        }
        setCountryValue(e);
    }
    const onClick = () => {
        if (clicked) {
            setPays(props.country)
            setClicked(false)

        } else {
            setPays([])
            setClicked(true)
            setHidden(true);
            document.getElementById('tel' + props.id)?.focus()
            document.getElementById('tel' + props.id)?.click()
        }

    }
    return (
        <div
            className={` ${pays.length > 0 ? 'ring-2 ring-lime-300' : ""} relative w-full  text-xs border rounded-full border-stone-400`}>

            <div className="z-10 flex flex-row items-center overflow-hidden text-lg font-bold text-blue-500 bg-white border-none rounded-full focus:ring-2 focus-within: w-96 focus-visible:ring-2 focus-visible:ring-lime-500 disabled:text-gray-600 focus:ring-gray-100 bg-inherit">
                <button onClick={onClick} className='flex p-4 text-xs font-bold border-r border-stone-400'> {!paysSelected ? "Rechercher" : (
                    <div className='flex items-center gap-1'>
                        <div className='w-8 h-8 overflow-hidden rounded-full bg-slate-200'>
                            <Image src={paysSelected.img} width={32} height={32} alt='image' />
                        </div>
                        {/* <span> {paysSelected.label}</span>
                         <span>{paysSelected.tel}</span> */}
                    </div>
                )}
                </button>
                <input
                    onChange={e => { handleKeyDownCountry(e.target.value) }}
                    type="tel"
                    value={CountryValue}
                    id="Country"
                    name="country"
                    onClick={onClick}
                    autoComplete='off'
                    className={`p-4 pr-0 border-none bg-gray-100  focus-visible:outline-none focus:ring-0 ${!hidden ? "w-full" : "w-14"}`}
                    maxLength={4}
                    placeholder={!hidden ? " numéro de téléphone" : ""}
                />
                {
                    !hidden ? null : (
                        <input
                            onChange={e => { handleKeyDownTel(e.target.value) }}
                            type="text"
                            value={phoneValue}
                            onClick={onClick}
                            id={"tel" + props.id}
                            name="tel"
                            autoComplete='off'
                            className={`p-4 pl-0 w-96 border-none bg-gray-100  focus-visible:outline-none focus:ring-0 `}
                            placeholder=" numéro de téléphone"
                          
                        />
                    )
                }
            </div>

            {
                pays.length > 0 ? (
                    <div
                        className="absolute left-0 z-50 w-full mt-3 overflow-hidden overflow-y-auto text-sm text-gray-900 bg-white border shadow-xl rounded-3xl max-h-96"
                    >
                        <ul
                            className="w-full h-full overflow-x-hidden text-gray-500"
                        >
                            <li className='p-4 font-bold text-gray-600 bg-gray-50'>Sélectionner un pays</li>
                            {pays.map((i: any, index: number) => (
                                <li
                                    className="p-4 hover:bg-blue-100"
                                    key={`${i.tel}${i.label}`}
                                >
                                    <div
                                        role='button'
                                        className="flex justify-between text-sm font-bold text-blue-600 "
                                        onClick={() => handleClickCountry(i)}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <div className='w-8 h-8 overflow-hidden rounded-full bg-slate-200'>
                                                <Image src={i.img} width={32} height={32} alt='image' />
                                            </div>
                                            <span> {i.label}</span>
                                        </div>

                                        <span>{i.tel}</span>

                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                ) : null}
        </div>

    )
}
