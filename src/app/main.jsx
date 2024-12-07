"use client"
import { useContext } from "react";
import { ConfigContext } from "@/context/configcontext";
import Image from "next/image";
import { MdOutlineSwapVert } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import usdc from "../../src/usdc.png"
import solana from "../../src/solana.png"


export default function Home() {
  const {showModal, setShowModal} = useContext(ConfigContext)

  const handleShowModal = ()=>{
    setShowModal(!showModal)
  }
  return (
    <>
    
    <main className="fixed lg:relative flex items-center justify-center top-0 left-0 bottom-0 right-0 z-10 lg:mt-24 mt-20 mb-20">
      <section className="bg-[#0D1520] h-[90%] lg:h-[70%] w-[88%] lg:w-[50%] py-5 flex flex-col  items-center justify-between rounded-md">
        <div className="w-full text-center">
          <span className="text-2xl font-medium text-center">Swap</span>
        </div>

        <article className="mt-5 w-full flex flex-col justify-between items-center gap-y-4 lg:gap-y-2 text-sm">
          <div className="border rounded-xl border-[#222222] w-[80%] mx-auto h-[100px] flex flex-col justify-center px-4 gap-y-3">
            <div className="flex justify-between">
              <span>From</span>
              <span>MAX:4.235</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="inline-flex  items-center gap-x-1">
              <Image src={solana} alt="usdc" height={20} width={20}/>
                Sol
                <FaCaretDown onClick={handleShowModal} className="cursor-pointer"/>
              </span>
              <input className="bg-[#0D1520] border-[#333333] border rounded-md w-[70%]" />
            </div>
          </div>
          <MdOutlineSwapVert className="text-4xl" />

          <div className="border rounded-xl border-[#222222] w-[80%] mx-auto h-[100px] flex flex-col justify-center px-4 gap-y-3">
            <div className="flex justify-between">
              <span>To</span>
              <span>EST.OUTPUT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="inline-flex  items-center gap-x-1">
                <Image src={usdc} alt="usdc" height={20} width={20}/>
                usdc
                <FaCaretDown onClick={handleShowModal} className="cursor-pointer"/>
              </span>
              <input className="bg-[#0D1520] border-[#333333] border rounded-md w-[70%]" />
            </div>
          </div>
        </article>

        <span>Loot Routes</span>

        <div className="border rounded-xl border-[#222222] w-[80%] mx-auto h-[120px] flex flex-col justify-center px-2 gap-y-2 mt-6">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <VscCircleFilled className="text-[#AAB126] text-xl" />
              <span>ORCA</span>
            </div>
            <span>1.01 Rate 0.2% Fee</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <VscCircleFilled className="text-[#4E26B1] text-xl" />
              <span>Minimum Received</span>
            </div>
            <span>23333 USDC</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <VscCircleFilled className="text-[#10D4C5] text-xl" />
              <span>Max Transaction Fee</span>
            </div>
            <span className="">$2.1 (0.01 SOL)</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <VscCircleFilled className="text-[#201340] text-xl" />
              <span>Estimated Time</span>
            </div>
            <span className="">2 mins</span>
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center items-center ">
          <button className="bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-30% to-blue-500 to-90% text-black w-[80%] rounded-3xl mt-6 h-12">
            Swap Now
          </button>
        </div>
      </section>
    </main>
    </>

  );
}
