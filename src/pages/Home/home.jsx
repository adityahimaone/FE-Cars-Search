import React from "react";
import { UsersIcon, ClockIcon } from "@heroicons/react/outline";
import HeroImg from "../../assets/images/hero.png";
import { Select, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <section className="relative">
        <div className="bg-bluewhite relative">
          <div className="container mx-auto px-10 py-8 relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-6 z-10">
                <h1 className="text-4xl font-bold lg:w-[568px]">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className=" lg:w-[500px]">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <div className="flex-1 z-10 ">
                <img src={HeroImg} alt="hero" />
              </div>
            </div>
            <div className="absolute w-[474px] sm:w-[624px] md:w-[724px] lg:w-[410px] xl:w-[654px] 2xl:w-[754px] sm:h-[243px] h-[150px] bottom-0 right-0 rounded-tl-[60px] bg-primaryDarkBlue-400"></div>
          </div>
          <div className="absolute xl:w-[504px] w-[104px] lg:w-[274px] md:w-[324px] sm:h-[243px] h-[150px] bottom-0 right-0 bg-primaryDarkBlue-400"></div>
        </div>
        <div className="w-full flex justify-center mx-auto relative lg:absolute lg:-bottom-14 xl:-bottom-10">
          <div className="flex w-full m-2 flex-col lg:flex-row bg-white max-w-screen-xl space-y-3 lg:space-y-0 lg:space-x-3 p-4 rounded-md shadow-lg z-10">
            <div className="flex-1">
              <label>Tipe Driver</label>
              <Select variant="outline" placeholder="Pilih Tipe Driver">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
            <div className="flex-1">
              <label>Tanggal</label>
              <Input type="date" id="birthday" name="birthday" />
            </div>
            <div className="flex-1">
              <label>Waktu Jemput</label>
              <Select icon={<ClockIcon />} placeholder="Pilih Waktu">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
            <div className="flex-1">
              <label>Jumlah Penumpang (optional)</label>
              <InputGroup variant="outline">
                <Input placeholder="Jumlah Penumpang" />
                <InputRightElement
                  children={<UsersIcon className="h-5 w-5" />}
                />
              </InputGroup>
            </div>
            <div className="flex items-end">
              <button className="bg-primaryLimeGreen-400 text-white px-2 py-2 w-full rounded-sm">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
