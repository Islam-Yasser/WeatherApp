import { AsyncPaginate } from "react-select-async-paginate";
import style from "./Search.module.css";
import { useState } from "react";
import { options, url } from "../../Api";
function Search({onSearchChange}) {
  const [search, setSearch] = useState("");

  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value)
  };
  const getOptions = (inputValue) => {
    return fetch(`${url}/cities?namePrefix=${inputValue}&&minPopulation=1000000`, options)
      .then((res) => res.json())
      .then((res) => {
        return{
            options:res.data.map((city)=>{
                return{
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name} {${city.countryCode}}`,
                };
            }),
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={getOptions}
      />
    </>
  );
}

export default Search;
