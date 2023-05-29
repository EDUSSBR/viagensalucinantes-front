'use client';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { RiFilterLine } from 'react-icons/ri'
import Link from 'next/link';
export default function PassagemPage({ params }) {
    const [passagens, setPassagens] = useState([])
    const [maxPreco, setMaxPreco] = useState(0)
    const [hideDialog, setHideDialog] = useState(() => !localStorage.getItem('first-time-passagens'))
    const [minPreco, setMinPreco] = useState(100)
    const valorMinimo = Math.min(...passagens.map(item => Number(item.preco)))
    const valorMaximo = Math.max(...passagens.map(item => Number(item.preco)))
    const passagensFiltradas = useMemo(() => {
        if (Number(maxPreco) === Number(valorMaximo) && Number(minPreco) === Number(valorMinimo)) {
            return passagens
        }
        return passagens.filter(item => Number(item?.preco) >= Number(minPreco) && Number(item?.preco) <= maxPreco)
    }, [minPreco, maxPreco,valorMaximo, valorMinimo, passagens])
    useEffect(() => {
        (async function getCidades() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/cidades/${params.id}/passagens`, { cache: 'no-store' });
            const json = await res.json();
            const data = json.map(item => {
                const options = {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                };
                const data_hora_chegada_formatada = new Intl.DateTimeFormat('pt-BR', options).format(new Date(item.data_hora_chegada)).replace(',', '');
                const data_hora_partida_formatada = new Intl.DateTimeFormat('pt-BR', options).format(new Date(item.data_hora_partida)).replace(',', '');
                return { ...item, data_hora_chegada: data_hora_chegada_formatada, data_hora_partida: data_hora_partida_formatada }
            })
            setPassagens(() => data)
            setMaxPreco(() => Math.max(...data.map(item => item.preco)))
            setMinPreco(() => Math.min(...data.map(item => item.preco)))
        })()

        setTimeout(() => {
            localStorage.setItem("first-time-passagens", true)
            setHideDialog(false)
        }, 5000)
}, [params.id])
return (<main className='h-[100%] w-[100%] flex gap-4 mx-auto mb-10'>

    <div className='drawer  w-[100%]'>

        <input id="my-drawer" type="checkbox" className="drawer-toggle " />

        <div className="drawer-content h-[100%] relative pt-10 px-13  p-5">
            <div className='bg-transparent w-[60%] h-30 z-30 mb-[30px] rounded-xl mx-auto'>
                <ul className="steps text-black z-30 pt-3 w-[100%] ">
                    <li className="step step-primary">Escolha um destino</li>
                    <li className="step  step-primary">Decida a data de partida</li>
                    <li className="step text-slate-400">Escolha um hotel</li>
                </ul>
            </div>
            <h1 className='w-fit mb-10 text-3xl mx-auto'>Passagens para {passagens?.length > 0 && passagens[0].cidadeDestino}</h1>
            <div  >


                <div className='flex flex-row gap-4 flex-wrap justify-center align-center w-[100%] '>
                    {passagensFiltradas?.length > 0 && passagensFiltradas.map(item => (
                        <div key={item.vooID} className="relative card w-60 h-80 bg-base-100 shadow-2xl pt-10">
                            <Image className='absolute top-6 left-[100px]' src="/aviao-azul-preenchido.png" alt="aviao-icon" width={40} height={40} />
                            <div className="card-body text-xs items-center text-center mt-4">
                                <p className="">Data de saída: {item.data_hora_partida}</p>
                                <p className="">Data de chegada: {item.data_hora_chegada}</p>
                                <p>R$ {item.preco},00</p>
                                <p><pre>Saída:</pre> {item.cidadeOrigem}</p>
                                <p><pre>Destino:</pre> {item.cidadeDestino}</p>
                                <div className="card-actions">
                                    <label htmlFor={`my-modal${item.vooID}`} className="btn  btn-accent btn-sm">Detalhes</label>
                                    <input type="checkbox" id={`my-modal${item.vooID}`} className="modal-toggle" />
                                    <div className="modal ">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Detalhes deste vôo:</h3>

                                            <p className="text-left text-slate-600 leading-10 mt-5 text-sm ">Cidade de Destino: {item.cidadeDestino}</p>
                                            <p className="text-left leading-10 text-sm ">Cidade de Origem: {item.cidadeOrigem}</p>
                                            <p className="text-left leading-10 text-sm">Companhia aérea: {item.companhiaAerea}</p>
                                            <p className="text-left leading-10 text-sm"> Horário de partida: {item.data_hora_partida.split(" ")[1]}</p>
                                            <p className="text-left leading-10 text-sm">Horário previsto de chegada: {item.data_hora_chegada.split(" ")[1]}</p>
                                            <p className="text-left leading-10 text-sm">Preço da passagem: R$ {item.preco},00</p>
                                            {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                                            <div className="modal-action justify-center">
                                                {/* <label htmlFor="my-modal" className="btn btn-error">Cancelar</label> */}
                                                <label htmlFor={`my-modal${item.vooID}`} className="btn btn-primary ">Sair</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button className="btn  btn-accent btn-sm">Detalhes</button> */}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>

            <label htmlFor="my-drawer" className="drawer-button absolute top-0 right-4 ">
                <RiFilterLine className=" drawer-button text-5xl cursor-pointer hover:text-accent" />

            </label>
            {hideDialog && <div className="text-left animation animate-pulse forward chat chat-end absolute top-14 right-14 p-2 ">
                <div className="chat-bubble bg-[#7caa6d">Hotéis!!</div>
            </div>}
            <Link href={`/`}><Image className='absolute top-14 right-4' src="/home-icon.png" alt="home-icon" width={40} height={40} /></Link>
            <Link href={`/cidade/${params.id}/hoteis`}><Image className='absolute top-[100px] right-4' src="/hotel-icon.png" alt="aviao-icon" width={40} height={40} /></Link>
   
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
    {/* <div className="btm-nav md:hidden">
            <button className="text-error">
                <Image src={"/home-icon.png"} width={35} height={35} alt="home-icon" />
            </button>
            <button className="text-error active">
                <Image src={"/aviao-azul-preenchido.png"} width={35} height={35} alt="home-icon" />
            </button>
            <button className="text-error">
                <Image src={"/hotel-icon.png"} width={35} height={35} alt="home-icon" />
            </button>
        </div> */}
</main>)
}