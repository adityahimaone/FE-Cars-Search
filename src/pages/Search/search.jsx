import React from "react";
import {
  UsersIcon,
  ClockIcon,
  CalendarIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { Select, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import CarImage from "../../assets/images/car.png";

function search() {
  return (
    <div>
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
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-32 lg:mt-14 p-2">
        <div className="border bg-white rounded-md shadow-md p-4">
          <div className="my-4">
            <img src={CarImage} alt="car" className="w-full" />
          </div>
          <div className="space-y-1 my-2">
            <h3>Nama/Tipe Mobile</h3>
            <h2 className="text-xl lg:text-lg font-semibold">
              Rp 430.000/hari
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-3 mb-2">
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
          <button className=" bg-primaryLimeGreen-400 text-white p-2 rounded-sm w-full">
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
  );
}

export default search;
