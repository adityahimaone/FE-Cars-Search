import React from "react";
import { UsersIcon, CalendarIcon, CogIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { convertToIDR } from "utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { saveDetailCars } from "redux/action/carsDetailAction";

export default function CardCars({ id, image, name, price }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const descriptionCar = {
    passenger: 4,
    transmission: "Manual",
    year: 2020,
  };

  const onClick = () => {
    navigate(`/cars/${id}`);
    dispatch(saveDetailCars({ id, image, name, price, descriptionCar }));
  };

  return (
    <div
      key={id}
      className=" bg-white rounded-md shadow-md p-4 hover:scale-105"
    >
      <div className="flex flex-wrap justify-center my-4 p-4">
        <img src={image} alt="car" className="overflow-hidden w-full h-auto" />
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
          <UsersIcon className="w-5 h-5 mr-2" />
          {descriptionCar.passenger} Orang
        </p>
        <p className="flex items-center">
          <CogIcon className="w-5 h-5 mr-2" />
          {descriptionCar.transmission}
        </p>
        <p className="flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2" />
          Tahun {descriptionCar.year}
        </p>
      </div>
      <button
        onClick={onClick}
        type="button"
        className="flex justify-center btnSecondaryGreen"
      >
        Pilih Mobil
      </button>
    </div>
  );
}
