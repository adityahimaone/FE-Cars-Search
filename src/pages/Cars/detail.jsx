import React, { useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GetCarByID from "hooks/Cars/GetCarByID";
import { convertToIDR } from "utils/helper";
import SearchBar from "../../components/Search/SearchBar";

function Detail() {
  let { id } = useParams("id", null);
  const { response, getCarByID, isLoading } = GetCarByID(id);

  useEffect(() => {
    getCarByID(id);
  }, []);

  return (
    <>
      <div className="relative h-[266px] bg-bluewhite">
        <SearchBar title={true} />
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
            <div className="my-4 h-56">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </div>
              ) : (
                <img src={response?.image} alt="car" className="w-full" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{response?.name}</h2>
            </div>
            <div className="flex flex-row space-x-2 mb-2 my-4">
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
              <h4>{convertToIDR(response?.price)}</h4>
            </div>
            <button className="btnSecondaryGreen">Lanjutkan Pembayaran</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
