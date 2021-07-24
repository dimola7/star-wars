import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import StarshipCard from "../../Components/StarshipCard/StarshipCard";
import shipStyles from "./Starships.module.css";
import { Results } from "../../Components/StarshipCard/StarshipCard";
import searchIcon from "../../assets/search.svg";
import back from "../../assets/arrow-point-to-right.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "../../Components/Loader/Loader";

const Starships = () => {
  const [starships, setStarships] = useState<Results | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    try {
      const fetchStarships = async () => {
        const { data } = await axios.get(`https://swapi.dev/api/starships/`);
        setIsLoading(false);
        setStarships(data);
      };

      fetchStarships();

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [isLoading]);
  console.log(starships);

  //   const changePage = () => {
  //     setStarships(data)
  //   }

  return (
    <div className={shipStyles.grid}>
      <div>
        <Sidebar />
      </div>
      <div className={shipStyles.right}>
        <div className={shipStyles.rightTop}>
          <NavBar />
          <div className={shipStyles.nav}>
            <div className={shipStyles.navflex}>
              <p>
                <img src={back} alt="" /> Back
              </p>
              <p>{starships?.count} Total</p>
              <p>Showing 1-10 of {starships?.count}</p>
              <p>
                <IoIosArrowBack />
              </p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
            <div className={shipStyles.search}>
              <input type="text" placeholder="Search for starship" onChange={(e) => {setSearch(e.target.value)}} />
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={shipStyles.bigCard}>
            {starships && (
              <StarshipCard starships={starships} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Starships;
