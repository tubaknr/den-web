export default function Header(){
    return(
        <div className="border-b border-gray-300">
        <div className="bg-white p-5 space-x-5 flex items-center">
            <h1 className="font-bold mr-4">HONOR</h1>

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
    )
}