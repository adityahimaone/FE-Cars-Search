import React, { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import GetCars from "hooks/Cars/GetCars";
import CardCars from "../../components/Card/CardCars";
import SearchBar from "../../components/Search/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/action/carsAction";

function Search() {
  const dispatch = useDispatch();

  const { isLoading, data: cars } = useSelector((state) => state.cars);
  const { data: search } = useSelector((state) => state.search);

  console.log(search, "search");
  // const { response, getCars, isLoading, error } = GetCars();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div>
      <div className="hidden lg:block h-[230px] bg-bluewhite" />
      <SearchBar title={true} />
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-4 px-5 xl:px-0">
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
        ) : (
          cars
            .filter((car) => {
              return (
                // return if date available
                search.date !== ""
                  ? car.start_rent_at <= search.date &&
                      car.finish_rent_at >= search.date
                  : cars
              );
            })
            .map((car) => {
              return (
                <CardCars
                  key={car.id}
                  id={car?.id}
                  name={car?.name}
                  image={car?.image}
                  price={car?.price}
                />
              );
            })
          // cars?.map((item) => {
          //   return (
          //     <CardCars
          //       key={item.id}
          //       id={item?.id}
          //       name={item?.name}
          //       image={item?.image}
          //       price={item?.price}
          //     />
          //   );
          // })
        )}
      </div>
    </div>
  );
}

export default Search;
