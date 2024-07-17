import Image from 'next/image';

export default function Header(){
    return(
        <div>
        <div className="border-b border-gray-300">
        <div className="bg-white p-5 space-x-5 flex items-center">
            <h1 className="ml-5 font-bold  text-xl mr-4">HONOR</h1>

        <div className="flex items-center justify-center text-black space-x-4">
            <a href="#">Cep Telefonları</a>
            <a href="#">Laptoplar</a>
            <a href="#">Tabletler</a>
            <a href="#">Giyilebilir Ürünler</a>
            <a href="#">MagicOS 7.1</a>
            <a href="#">Daha fazla ürün</a>
            <a href="#">Community</a>
            <a href="#">Destek</a>
            <a href="#">Keşfet</a>
        </div>
        <div className="mr-4" style={{ justifyContent:'flex-end', paddingRight:'3cm', paddingLeft:'5cm' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        </div>

        </div>
        </div>

        <main class="max-w-5xl mx-auto space-x-5 ">
        <section className='flex justify-center sm:flex-row items-center gap-8'>
        <article class="sm:w-1/2">
                <h2
                    class="max-w-md text-2xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    HONOR  
                    <span className='font-bold'> 200</span> 
                    <span className='absolute px-2 py-1 rounded-md rounded-corner text-sm'>5G</span>
                    <span className='text-sm'> Series</span>
                </h2>
                <p class="max-w-md text-xl font-bold mt-4 text-center sm:text-left text-slate-800 dark:text-slate-400">
                    Herkes portrelerde uzman
                </p>
                <p class="max-w-md text-sm mt-4 text-center sm:text-left text-slate-600 dark:text-slate-400">
                    Stüdyo Kalitesinde AI Portre Kamerası | Kolay Fotoğraf Teknolojisi
                </p>
                <button class="max-w-md text-sm mt-4 flex text-center sm:text-left text-slate-900 dark:text-slate-400">
                    Daha fazlası için <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-4 w-4 flex-shrink-0 mt-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </button>
            </article>

            <div class="md:w-1/2 w-full">
            <img src="./images/ai.png" alt="Rocket Dab"/>        
            </div>
        </section>
        </main>
        </div>
    )
}