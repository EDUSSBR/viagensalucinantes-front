import Image from 'next/image'
export default function Home() {
  const cidades = ["Florianópolis", "Rio de Janeiro", "Recife"]
  return (
    <main className=" flex min-h-screen flex-col items-center  py-24  line-clamp-10 relative px-3">
      <Image className='hidden md:block md:w-fit absolute top-0 left-0 z-1 ' src="/assets/foto-inicial.jpg" width="1500" height="1500" alt="imagem inicial" />
      <div className='flex flex-col md:mt-[96px] w-[100%] mx-auto my-[50px] max-w-sm md:max-w-md  h-full z-20 bg-slate-100 rounded-lg p-3 opacity-80 border-[1px] border-[#154715]'>
        <p className='mx-auto text-lg mb-2'>Venha conhecer os melhores destinos</p>
        <form className='mx-auto w-full flex flex-col align-center'>
          <label for="cidades" className='mx-auto mb-2'>Procure uma cidade:</label>
          <div className=' flex flex-col align-center '>
            <input
              type="text"
              placeholder="Digite o nome de uma cidade..."
              className='placeholder:text-green-900 rounded-md bg-[#73be55] text-[#310404] h-15 outline-none focus:border-[#154715] selection:bg-[#061406] selection:text-white  border-2  p-2 mb-4' />
            <input type="submit" className='cursor-pointer border-[1px] border-green-900 hover:bg-[#73be55] hover:border-[1px] hover:border-green-900 rounded-md p-2  ' value="Buscar" />
          </div>
        </form>
      </div>
      <div className='flex flex-col w-[100%] mx-auto  max-w-[1000px] h-full z-20 bg-slate-100 rounded-lg p-3 opacity-80 border-[1px] border-[#154715]'>
        <p className='mx-auto text-lg mb-2'>Cidades encontradas:</p>
        <table class=" table-auto  rounded-md">
          <thead className='px-[3px] rounded-md bg-[#73be55]  mb-20'>
            <tr className='  rounded-md'>
              <th className='mx-2  rounded-md'>Cidade</th>
            </tr>
          </thead>
          <tbody className='mt-[45px] '>
            <tr className='hover:px-[3px] hover:rounded-md hover:bg-[#73be55] cursor-pointer'>
              <td className='mx-2  rounded-md text-center'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            </tr>
            <tr  className='hover:px-[3px] hover:rounded-md hover:bg-[#73be55] cursor-pointer'>
              <td className='mx-2  rounded-md text-center'>Witchy Woman</td>
            </tr>
            <tr   className='hover:px-[3px] hover:rounded-md hover:bg-[#73be55] cursor-pointer'  >
              <td className='mx-2  rounded-md text-center'>Shining Star</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
