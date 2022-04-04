import React, { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import GetCars from "hooks/Cars/GetCars";
import CardCars from "../../components/Card/CardCars";
import SearchBar from "../../components/Search/SearchBar";

function Search() {
  const { response, getCars, isLoading, error } = GetCars();

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <SearchBar title={true} />
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-2">
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
