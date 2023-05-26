'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect,  useMemo,  useState } from 'react';

export default function Home() {
  const [cidades, setCidades] = useState([])
  const [cidadeInputFiltro, setCidadeInputFiltro] = useState()
  const router = useRouter()
  useEffect(()=>{
    (async function getCidades() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/cidades`);
       const json = await res.json();
       console.log(json)
       setCidades(()=>json)
    })()
  },[])
  const cidadesFiltradas = useMemo(()=> {
    if (!cidadeInputFiltro){
      return cidades
    } 
    return cidades.filter(item=>item?.cidade.replace("á","a").replace("ã","a").replace("ó","o").replace("í","i").replace("ú","u").toLowerCase().includes(cidadeInputFiltro.trim().toLowerCase()))
  },[cidadeInputFiltro, cidades])
  function handleCidade(id){
    router.push(`/cidade/passagens/${id}`)
  }
  return (
    <main className=" flex min-h-screen flex-col items-center  py-24  line-clamp-10 relative px-3">
      <Image className='hidden md:block md:w-fit absolute top-0 left-0 z-1 ' src="/foto-inicial.jpg" width="1500" height="1500" alt="imagem inicial" />
      <div className='flex flex-col md:mt-[96px] w-[100%] mx-auto my-[50px] max-w-sm md:max-w-md  h-full z-20 bg-slate-100 rounded-lg p-3 opacity-80 border-[1px] border-[#154715]'>
        <p className='mx-auto text-lg mb-2'>Venha conhecer os melhores destinos</p>
        <form className='mx-auto w-full flex flex-col align-center'>
          <label htmlFor="cidades" className='mx-auto mb-2'>Procure uma cidade:</label>
          <div className=' flex flex-col align-center'>
            <input
              value={cidadeInputFiltro}
              onChange={(e) => setCidadeInputFiltro(e.target.value)}
              type="text"
              placeholder="Digite o nome de uma cidade..."
              className='placeholder:text-green-900 rounded-md bg-[#77c459] text-[#310404] h-15 outline-none focus:border-[#154715] selection:bg-[#061406] selection:text-white  border-2  p-2 mb-4' />
           
          </div>
        </form>
      </div>
      <div className='flex md:overflow-y-scroll md:max-h-[550px] flex-col w-[100%] mx-auto  max-w-[1000px] h-full z-20 bg-slate-100 rounded-lg p-3 opacity-80 border-[1px] border-[#154715]'>
        <p className='mx-auto text-lg mb-2'>Cidades encontradas:</p>
        <table className=" table-auto  rounded-md ">
          <thead className='px-[3px] rounded-md bg-[#77c459]  mb-20'>
            <tr className='  rounded-md'>
              <th className='md:p-1   rounded-l-md '>Cidade</th>
              <th className='w-1/4  md:p-1   rounded-r-md '>Estado</th>
            </tr>
          </thead>
          <tbody >
            {cidadesFiltradas.map(item => (<tr onClick={()=>handleCidade(item.id)} key={item.id} className='hover:px-[3px] hover:rounded-md  hover:bg-green-900 cursor-pointer '>
                <td className=' md:p-1 rounded-l-md text-center'>{item.cidade}</td>
                <td className='w-1/4  md:p-1 rounded-r-md text-center'>{item.estado}</td>
              </tr>))}
         </tbody>
        </table>
      </div>
    </main>
  )
}
