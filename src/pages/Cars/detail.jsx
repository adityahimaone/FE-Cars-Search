import React from "react";
import { Select, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  UsersIcon,
  ClockIcon,
  CalendarIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import CarImage from "../../assets/images/car.png";

function detail() {
  return (
    <>
      <div className="relative h-[266px] bg-bluewhite">
        <div className="w-full flex justify-center mx-auto relative lg:absolute lg:-bottom-14 xl:-bottom-10">
          <div className="flex w-full m-2 flex-col bg-white max-w-screen-xl p-4 rounded-md shadow-lg z-10">
            <div>
              <h1 className="font-bold my-2">Pencarianmu</h1>
            </div>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
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
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl mt-40 lg:mt-14 p-2">
        <div className="flex w-full flex-col-reverse md:flex-row lg:gap-8">
          <div className="w-full lg:w-8/12 rounded-sm shadow-lg p-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Tentang Paket</h2>
            </div>
            <div>
              <h3>Include</h3>
              <ul className="list-disc mx-5">
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
              </ul>
            </div>
            <div>
              <h3>Exclude</h3>
              <ul className="list-disc mx-5">
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
                <li>Apa saja ..... </li>
              </ul>
            </div>
            <div>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton px={0}>
                      <div className="flex w-full justify-between">
                        <h3 className="text-lg font-semibold">
                          Refund, Reschedule, Overtime
                        </h3>
                        <AccordionIcon />
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px={0} pb={4}>
                    <ul className="list-disc mx-5">
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                      <li>Test....</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full lg:w-4/12 rounded-sm h-fit shadow-lg p-4">
            <div className="my-4">
              <img src={CarImage} alt="car" className="w-full" />
            </div>
            <div>
              <h2>Nama/Tipe Mobil</h2>
            </div>
            <div className="flex flex-row space-x-2 mb-2 my-8">
              <p className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-2" />4 Orang
              </p>
              <p className="flex items-center">
                <CogIcon className="w-5 h-5 mr-2" />
                Manual
              </p>
              <p className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Tahun 2020
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <h4>Total</h4>
              <h4>Rp 430.00000</h4>
            </div>
            <button className=" bg-primaryLimeGreen-400 text-white p-2 rounded-sm w-full">
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default detail;
