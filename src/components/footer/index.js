import logolift from "../../assets/logolift.svg";

function Footer() {
    return (
        <div className="px-[30px] md:px-[100px] py-[60px] bg-[#1F222B] grid grid-cols-1 md:flex md:flex-row gap-4">
            <div className="md:flex flex-wrap md:flex-row justify-between w-full">

                <div className="md:flex justify-center items-start md:gap-[100px]">

                    <div className="md:w-[200px] pb-[60px] md:h-[88px] my-[40px]  md:mt-[20px]">
                        <div className="flex flex-row items-center gap-4">
                            <img src={logolift} alt='logolift' />

                        </div>


                    </div>
                    <div className="flex flex-row gap-[100px]">
                        <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                            <p className="text-gray-50 text-[20px] md:text-[20px] font-semibold mt-4">Empresa</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Sobre Nosotros</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Soluciones</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Insights</p>

                        </div>

                        <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                            <p className="text-gray-50 text-[20px] md:text-[20px] font-semibold ">Categorías</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Contratar Talento</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Desarrollar Talento</p>
                            <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Herramientas de Gamificación</p>

                        </div>
                    </div>

                    <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                        <p className="text-gray-50 text-[15px] md:text-[15px] font-normal mt-12">Competencias Digitales </p>
                        <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Competencias Comerciales</p>
                        <p className="text-gray-50 text-[15px] md:text-[15px] font-normal">Liderazgo</p>

                    </div>


                </div>
                
            </div>
        </div>
    );
}
export default Footer;