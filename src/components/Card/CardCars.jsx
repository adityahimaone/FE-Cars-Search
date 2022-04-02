import React from "react";
import { UsersIcon, CalendarIcon, CogIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { convertToIDR } from "utils/helper";

export default function CardCars({ id, image, name, price }) {
  return (
    <div
      key={id}
      className=" bg-white rounded-md shadow-md p-4 hover:scale-105"
    >
      <div className="flex flex-wrap justify-center my-4 h-64 p-4 lg:h-[200px]">
        <img src={image} alt="car" className="w-full h-auto" />
      </div>
      <div className="space-y-1 mt-11">
        <h3>{name}</h3>
        <h2 className="text-xl lg:text-lg font-semibold">
          {convertToIDR(price)}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <Link
        to={`/cars/${id}`}
        className="flex justify-center btnSecondaryGreen"
      >
        Pilih Mobil
      </Link>
    </div>
  );
}
