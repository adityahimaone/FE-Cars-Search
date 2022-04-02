import React, { useEffect } from "react";
import { UsersIcon, ClockIcon } from "@heroicons/react/outline";
import {
  Select,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import GetCars from "hooks/Cars/GetCars";
import CardCars from "../../components/Card/CardCars";

function Search() {
  const { response, getCars, isLoading, error } = GetCars();

  useEffect(() => {
    getCars();
  }, []);

  console.log(response, "response");
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
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-32 lg:mt-14 p-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-52 col-span-3">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-52 col-span-3">
            <p>{error}</p>
          </div>
        ) : (
          response?.map((item) => {
            return (
              <CardCars
                id={item?.id}
                name={item?.name}
                image={item?.image}
                price={item?.price}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Search;
