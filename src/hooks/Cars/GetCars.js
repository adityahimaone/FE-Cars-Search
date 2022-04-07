import { useState } from "react";
import { AxiosCustom } from "../../utils/axiosCustom";

function GetCars() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const getCars = async () => {
    AxiosCustom.get("/admin/car")
      .then((res) => {
        setResponse(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setisLoading(false);
      });
  };
  return { response, error, isLoading, getCars };
}

export default GetCars;
