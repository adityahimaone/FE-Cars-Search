import React from "react";
import { UsersIcon, ClockIcon } from "@heroicons/react/outline";
import { Select, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ title = false }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };

  const typeDriver = ["Dengan Sopir", "Tanpa Sopir"];

  const pickupTime = ["08.00", "09.00", "10.00", "11.00", "12.00"];

  return (
    <div className="w-full flex justify-center mx-auto relative lg:-mt-14 px-3">
      <div className="flex w-full m-2 flex-col bg-white max-w-screen-xl p-4 rounded-md shadow-lg z-10">
        <div>{title && <h1 className="font-bold my-2">Pencarianmu</h1>}</div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="flex-1">
            <label>Tipe Driver</label>
            <Select variant="outline" placeholder="Pilih Tipe Driver">
              {typeDriver.map((item, index) => (
                <option key={index + 1} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex-1">
            <label>Tanggal</label>
            <Input type="date" id="birthday" name="birthday" />
          </div>
          <div className="flex-1">
            <label>Waktu Jemput</label>
            <Select icon={<ClockIcon />} placeholder="Pilih Waktu">
              {pickupTime.map((item, index) => (
                <option key={index + 1} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex-1">
            <label>Jumlah Penumpang (optional)</label>
            <InputGroup variant="outline">
              <Input placeholder="Jumlah Penumpang" />
              <InputRightElement children={<UsersIcon className="h-5 w-5" />} />
            </InputGroup>
          </div>
          <div className="flex items-end">
            <button className="btnSecondaryGreen" onClick={handleClick}>
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
