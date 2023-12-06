import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";


function Subfooter() {
    return (
        <div className="px-[30px] md:px-[100px] py-[60px] bg-[#1F222B]">
            <div>
                <div className=" w-full h-px border border-white"></div>
                <div className="flex flex-row cursor-pointer space-x-5 text-white">
                    <FaTwitter />
                    <SiDiscord />
                    <HiOutlineMail />
                    <p className="text-gray-50 text-[10px] md:text-[10px] font-semibold mx-8">Política de Privacidad <span>Términos y Condiciones</span>Código de Conducta </p>
                </div>
            </div>

        </div>
    );
};
export default Subfooter;