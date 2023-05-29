'use client';
import { useEffect,  useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function hotelInfoPage({ params }) {
    // const [hotelInfo, setHotelInfo] = useState([])
    // useEffect(() => {
    //     (async function getCidades() {
    //         const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/cidades/${params.id}/hotelInfo`, { cache: 'no-store' });
    //         const json = await res.json();
    //         setHotelInfo(() => json)
    //     })()

    // }, [])
    return (<main className='h-[100%] w-[100%] flex  flex-column justify-center p-[40px] flex-wrap '>           
            <Link href={`/`}><Image className='absolute top-[110px] right-4' src="/home-icon.png" alt="home-icon" width={40} height={40} /></Link>
            <Link href={`/cidade/${params.id}/hoteis`}><Image className='absolute top-[155px] right-4' src="/hotel-icon.png" alt="hotel-icon" width={40} height={40} /></Link>
            <Link href={`/cidade/${params.id}/passagens`}><Image className='absolute  top-[210px]  right-4' src="/aviao-azul-preenchido.png" alt="aviao-icon" width={40} height={40} /></Link>
        <div className="carousel h-100  cr:px-0 mb-[80px]">
   
                <a onClick={(e)=>{
                    e.preventDefault()       
                    e.stopPropagation()
                    e.target.parentNode.scrollBy(-e.target.parentNode.clientWidth,0)
                    window.scrollBy(0,0) 
                }}   href="#slide4" className={`absolute left-1 cr:left-[calc(50%-250px-48px-4%)]   top-[450px] btn btn-circle bg-slate-700 text-[12px] rounded-[50%] border-none border-transparent  hover:text-black hover:bg-accent hover:border-none`}>❮</a> 
                <a  onClick={(e)=>{
                    e.preventDefault()       
                    e.stopPropagation()
                    e.target.parentNode.scrollBy(e.target.parentNode.clientWidth,0)
                    window.scrollBy(0,0) 
                }}  href="#slide2" className={`absolute  right-1 cr:right-[calc(50%-250px-48px-4%)] top-[450px] btn btn-circle bg-slate-700 text-[12px] rounded-[50%] border-none border-transparent  hover:text-black hover:bg-accent hover:border-none`}>❯</a> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/AsmFAqd.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/Gv8HLLj.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/gOrKHg0.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/7455orl.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/nqML2XD.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/3yrduXG.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/VhntKYn.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/IIh3b1W.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/DMQTJaS.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/3yBPtKh.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/Pd4sIBa.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/BCT6CFW.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/NbsztfV.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/thCSsse.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/6RqOGfY.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src="https://i.imgur.com/e6Z9q0p.jpg" width={500} height={500} alt="foto-inicial" className="rounded-lg max-h-[300px]  mx-auto" />
            </div> 
         

        </div>
        <div className='flex px-2 flex-column justify-center md:flex-row  gap-5 py-2 w-full h-full flex-wrap align-center max-w-[1200px]'>
                <div className='bg-white p-4  min-w-[250px]  h-[400px] w-[100%] md:w-[45%] shadow-2xl rounded-lg'>
                    <div className='text-center text-xl text-accent w-[100%] mx-auto   h-10'>Características</div>
                    <ul className='pl-4 w-[100%] h-[80%] mt-5 mx-auto '>
                        <li className='list-[disc] text-accent '>Local</li>
                        <li className='list-[disc] text-accent '>Preço</li>
                        <li className='list-[disc] text-accent '>Descrição</li>
                    </ul>
                </div>
                <div className='bg-white p-4 min-w-[250px]   h-[400px] w-[100%] md:w-[45%] shadow-2xl rounded-lg'>
                    <div className='text-center text-xl text-accent w-[100%] mx-auto   h-10'>Comodidades</div>
                    <ul className='pl-4  w-[100%] h-[80%] mt-5 mx-auto '>
                        <li className='list-[disc] text-accent '>Wifi</li>
                        <li className='list-[disc] text-accent '>Estacionamento incluso</li>
                        <li className='list-[disc] text-accent '>Serviço de quarto</li>
                        <li className='list-[disc] text-accent '>Academia</li>
                        <li className='list-[disc] text-accent '>Piscina</li>
                        <li className='list-[disc] text-accent '>Spa</li>
                        <li className='list-[disc] text-accent '>Sala para reuniões</li>
                        <li className='list-[disc] text-accent '>Serviço de lavanderia</li>
                        <li className='list-[disc] text-accent '>Deposito de bagagens</li>
                        <li className='list-[disc] text-accent '>Cofre</li>
                        <li className='list-[disc] text-accent '>Ar Condicionado</li>
                        <li className='list-[disc] text-accent '>Televisão</li>
                        <li className='list-[disc] text-accent '>Café da manhã</li>
                    </ul>
                </div>
                {/* <div className='bg-white p-4 h-full w-[45%] shadow-2xl rounded-lg'>
                    <div className='w-[100%] mx-auto  bg-black h-10'></div>
                    <div className='w-[100%] h-[80%] mt-5 mx-auto  bg-black'></div>
                </div> */}
        </div>
    </main>)

}
// id 
// wifi_gratuito ,
// estacionamento_incluso 
// servico_quarto 
// academia 
// piscina 
// spa 
// salas_reunioes 
// servico_lavanderia 
// deposito_bagagem 
// cofre_quarto 
// ar_condicionado 
// televisao 
// cafe_manha_incluso 
// servico_traslado 
// acesso_mobilidade_reduzida        
// <div className='drawer  w-[100%]'>

        //     <input id="my-drawer" type="checkbox" className="drawer-toggle " />

        //     <div className="drawer-content h-[100%] relative pt-10 px-13  p-5">
        //         <div className=' w-[100%] md:w-[60%] h-30 z-30 mb-[30px] rounded-xl mx-auto'>
        //             <ul className="steps text-black z-30 pt-3 w-[100%] ">
        //                 <li className="step step-primary">Escolha um destino</li>
        //                 <li className="step  step-primary">Decida a data de partida</li>
        //                 <li className="step step-primary">Escolha um hotel</li>
        //             </ul>
        //         </div>
        //         <h1 className='w-fit mb-10 text-3xl mx-auto'>Hospedagens em CIDADE</h1>
       
        //         <div  >


        //             <div className='flex flex-row gap-4 flex-wrap justify-center align-center w-[100%] '>
        //                 {hotelInfoFiltrados?.length > 0 && hotelInfoFiltrados.map(item => (<div className="relative card w-60 h-80 bg-base-100 shadow-2xl pt-10">
        //                     <Image className='absolute top-6 left-[50px]' src="/hotel2.png" alt="aviao-icon" width={150} height={150} />
        //                     <div className="card-body text-xs items-center text-center mt-[55px]">
        //                         {/* <p className="">Data de saída: {item.data_hora_partida}</p> */}
        //                         <h2 className="text-xl">{item.nome}</h2>
        //                         <p>A partir de:</p>
        //                         <p>R$ {item.precoMinimo},00</p>
        //                         <p>Até:</p>
        //                         <p>R$ {item.precoMaximo},00</p>
        //                         {/* <p><pre>Saída:</pre> {item.cidadeOrigem}</p> */}
        //                         {/* <p><pre>Destino:</pre> {item.cidadeDestino}</p> */}
        //                         <div className="card-actions h-full relative ">
        //                             <button className="btn  btn-accent btn-sm  absolute -left-[47px] -bottom-[24px]">Detalhes</button>
        //                         </div>
        //                     </div>
        //                 </div>))}
        //             </div>
        //         </div>

        //         <label htmlFor="my-drawer" className="drawer-button absolute top-0 right-4 ">
        //             <RiFilterLine className=" drawer-button text-5xl cursor-pointer hover:text-accent" />
        //         </label>
        //         {hideDialog && <div className="animation animate-pulse forward chat chat-end absolute top-2 right-14 p-2 ">
        //             <div className="chat-bubble bg-[#7caa6d">Passagens!!</div>
        //         </div>}
        //         <Link href={`/cidade/${params.id}/passagens`}><Image className='absolute top-14 right-4' src="/aviao-azul-preenchido.png" alt="aviao-icon" width={40} height={40} /></Link>
        //     </div>
        //     <div className="drawer-side">
        //         <label htmlFor="my-drawer" className="drawer-overlay">
        //         </label>
        //         <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        //             <h1 className='text-center'> FILTROS</h1>
        //             <p className='text-center mt-4'>Preço mínimo:</p>
        //             <input onChange={(e) => setMinPreco((prev) => e.target.value)} type="range" min={parseInt(valorMinimo)} max={parseInt(valorMaximo)} value={minPreco} className="range" step={Number((valorMaximo - valorMinimo) / 5)} />
        //             <div className="w-full flex justify-between text-xs px-2">
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //             </div>
        //             <div className="w-full flex justify-between text-xs px-2">
        //                 <span>{valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 1 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 2 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 3 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 4 / 5 + valorMinimo}</span>
        //                 <span>{valorMaximo}</span>
        //             </div>
        //             <p className='text-center mt-4'>Preço máximo:</p>
        //             <input onChange={(e) => setMaxPreco((prev) => e.target.value)} type="range" min={parseInt(valorMinimo)} max={parseInt(valorMaximo)} value={maxPreco} className="range" step={Number((valorMaximo - valorMinimo) / 5)} />

        //             <div className="w-full flex justify-between text-xs px-2">
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //                 <span>|</span>
        //             </div>
        //             <div className="w-full flex justify-between text-xs px-2">
        //                 <span>{valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 1 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 2 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 3 / 5 + valorMinimo}</span>
        //                 <span>{(valorMaximo - valorMinimo) * 4 / 5 + valorMinimo}</span>
        //                 <span>{valorMaximo}</span>
        //             </div>

        //         </ul>
        //     </div>
        // </div>