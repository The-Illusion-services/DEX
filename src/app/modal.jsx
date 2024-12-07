"use client"
import React ,  {useContext} from "react";
import Image from "next/image";
import btc from "../btc.png";
import bnb from "../bnb.png";
import eth from "../eth.png";
import sol from "../solana.png";
import usdt from "../usdt.png";
import { HiMiniXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { ConfigContext } from "@/context/configcontext";

const Modal = () => {
  const {showModal, setShowModal} = useContext(ConfigContext)

  const handleShowModal = ()=>{
    setShowModal(!showModal)
  }
  if(showModal){

  return (
    <section className="fixed z-30 top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm ">
      <article className="lg:w-[40%] lg:h-[60%] w-[80%] h-[60%] rounded-md bg-[#090E15]  flex flex-col items-center px-4">
        <div className="w-full flex justify-end mt-1">
        <HiMiniXMark className="text-end text-3xl border rounded-md  border-[#2B2B2B] cursor-pointer" onClick={handleShowModal} />
        </div>
        <div className=" w-full bg-[#0D1520] border-[#2B2B2B] flex flex-row h-10 items-center rounded-xl px-2 mt-1">
          <CiSearch/>
          <input
            placeholder="Search by token or paste address "
            className="bg-[#0D1520] ml-2 px-2  w-full rounded-xl focus:outline-none "
          />
          <HiMiniXMark className="border rounded-full"/>
        </div>
        <div className="text-start w-full text-sm mt-4">
          <span>Popular Tokens</span>
          <div className="flex items-center gap-x-4">
            <div className="rounded-xl border border-[#2B2B2B] flex gap-x-1 items-center py-1 px-2">
              <Image src={btc} alt="btc" height={20} width={20} />
              BTC
            </div>
            <div className="rounded-xl border border-[#2B2B2B] flex gap-x-1 items-center py-1 px-2">
              <Image src={bnb} alt="bnb" height={20} width={20} />
              BNB
            </div>
            <div className="rounded-xl border border-[#2B2B2B] flex gap-x-1 items-center py-1 px-2">
              <Image src={eth} alt="eth" height={20} width={20} />
              ETH
            </div>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col gap-y-2">
          <div className="flex items-center gap-x-1">
            <Image src={btc} alt="btc" height={30} width={30} />
            <div className="flex flex-col ">
              <span>Bitcoin</span>
              <span className="text-xs font-extralight">Btc</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Image src={sol} alt="btc" height={30} width={30} />
            <div className="flex flex-col gap-x-1">
              <span>Sol</span>
              <span className="text-xs font-extralight">Solana</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Image src={usdt} alt="btc" height={30} width={30} />
            <div className="flex flex-col gap-x-1">
              <span>USDT</span>
              <span className="text-xs font-extralight">usdt</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
};

export default Modal;
