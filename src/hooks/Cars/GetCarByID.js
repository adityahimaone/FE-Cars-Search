import { useState } from "react";
import { AxiosCustom } from "../../utils/axiosCustom";

export default function GetCarByID() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const getCarByID = async (id) => {
    AxiosCustom.get(`/admin/car/${id}`)
      .then((res) => {
        setResponse(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setisLoading(false);
      });
  };
  return { response, error, isLoading, getCarByID };
}
