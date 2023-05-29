'use client';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { RiFilterLine } from 'react-icons/ri'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function HoteisPage({ params }) {
    const router = useRouter()
    const [cidade, setCidade] = useState("...")
    const [hoteis, setHoteis] = useState([])
    const [maxPreco, setMaxPreco] = useState(0)
    const [minPreco, setMinPreco] = useState(100)
    const [hideDialog, setHideDialog] = useState(()=>!localStorage.getItem('first-time-hoteis'))
    const valorMinimo = Math.min(...hoteis.map(item => Number(item.precoMinimo)))
    const valorMaximo = Math.max(...hoteis.map(item => Number(item.precoMaximo)))
    const hoteisFiltrados = useMemo(() => {
        if (Number(maxPreco) === Number(valorMaximo) && Number(minPreco) === Number(valorMinimo)) {
            return hoteis
        }
        return hoteis.filter(item => Number(item?.precoMaximo) >= Number(minPreco) && Number(item?.precoMinimo) <= maxPreco)
    }, [minPreco, maxPreco, valorMinimo, valorMaximo, hoteis])
    useEffect(() => {
        (async function getCidades() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/cidades/${params.id}/hoteis`, { cache: 'no-store' });
            const json = await res.json();
            setHoteis(() => json.hoteis)
            setCidade(() => json.cidade[0].nome)
            setMaxPreco(() => Math.max(...json.hoteis.map(item => item.precoMaximo)))
            setMinPreco(() => Math.min(...json.hoteis.map(item => item.precoMinimo)))
        })()

        setTimeout(()=>{
        localStorage.setItem("first-time-hoteis", true)
        setHideDialog(false)},5000)
    }, [params.id])

    function handleDetalhes(hotelID){
        router.push(`/cidade/${params.id}/hoteis/${hotelID}`)
    }
    return (<main className='h-[100%] w-[100%] flex gap-4 mx-auto mb-10'>

        <div className='drawer  w-[100%]'>

            <input id="my-drawer" type="checkbox" className="drawer-toggle " />

            <div className="drawer-content h-[100%] relative pt-10 px-13  p-5">
                <div className=' w-[100%] md:w-[60%] h-30 z-30 mb-[30px] rounded-xl mx-auto'>
                    <ul className="steps text-black z-30 pt-3 w-[100%] ">
                        <li className="step step-primary">Escolha um destino</li>
                        <li className="step  step-primary">Decida a data de partida</li>
                        <li className="step step-primary">Escolha um hotel</li>
                    </ul>
                </div>
                <h1 className='w-fit mb-10 text-3xl mx-auto'>Hospedagens em {cidade}</h1>
       
                <div  >


                    <div className='flex flex-row gap-4 flex-wrap justify-center align-center w-[100%] '>
                        {hoteisFiltrados?.length > 0 && hoteisFiltrados.map(item => (<div className="relative card w-60 h-80 bg-base-100 shadow-2xl pt-10">
                            <Image className='absolute top-6 left-[50px]' src="/hotel2.png" alt="aviao-icon" width={150} height={150} />
                            <div className="card-body text-xs items-center text-center mt-[55px]">
                                {/* <p className="">Data de saída: {item.data_hora_partida}</p> */}
                                <h2 className="text-xl">{item.nome}</h2>
                                <p>A partir de:</p>
                                <p>R$ {item.precoMinimo},00</p>
                                <p>Até:</p>
                                <p>R$ {item.precoMaximo},00</p>
                                {/* <p><pre>Saída:</pre> {item.cidadeOrigem}</p> */}
                                {/* <p><pre>Destino:</pre> {item.cidadeDestino}</p> */}
                                <div className="card-actions h-full relative ">
                                    <button onClick={()=>handleDetalhes(item.hotelID)} className="btn  btn-accent btn-sm  absolute -left-[47px] -bottom-[24px]">Detalhes</button>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>

                <label htmlFor="my-drawer" className="drawer-button absolute top-0 right-4 ">
                    <RiFilterLine className=" drawer-button text-5xl cursor-pointer hover:text-accent" />
                </label>
                {hideDialog && <div className="animation animate-pulse forward chat chat-end absolute top-14 right-14 p-2 ">
                    <div className="chat-bubble bg-[#7caa6d">Passagens!!</div>
                </div>}
                <Link href={`/`}><Image className='absolute top-14 right-4' src="/home-icon.png" alt="home-icon" width={40} height={40} /></Link>
                <Link href={`/cidade/${params.id}/passagens`}><Image className='absolute  top-[110px]  right-4' src="/aviao-azul-preenchido.png" alt="aviao-icon" width={40} height={40} /></Link>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay">
                </label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <h1 className='text-center'> FILTROS</h1>
                    <p className='text-center mt-4'>Preço mínimo:</p>
                    <input onChange={(e) => setMinPreco((prev) => e.target.value)} type="range" min={parseInt(valorMinimo)} max={parseInt(valorMaximo)} value={minPreco} className="range" step={Number((valorMaximo - valorMinimo) / 5)} />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                    </div>
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>{valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 1 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 2 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 3 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 4 / 5 + valorMinimo}</span>
                        <span>{valorMaximo}</span>
                    </div>
                    <p className='text-center mt-4'>Preço máximo:</p>
                    <input onChange={(e) => setMaxPreco((prev) => e.target.value)} type="range" min={parseInt(valorMinimo)} max={parseInt(valorMaximo)} value={maxPreco} className="range" step={Number((valorMaximo - valorMinimo) / 5)} />

                    <div className="w-full flex justify-between text-xs px-2">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                    </div>
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>{valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 1 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 2 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 3 / 5 + valorMinimo}</span>
                        <span>{(valorMaximo - valorMinimo) * 4 / 5 + valorMinimo}</span>
                        <span>{valorMaximo}</span>
                    </div>

                </ul>
            </div>
        </div>
    </main>)
}