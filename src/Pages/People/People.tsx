import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import PeopleCard from "../../Components/PeopleCard/PeopleCard";
import peopleStyles from "./People.module.css";
import {Results} from "../../Components/StarshipCard/StarshipCard";
import back from "../../assets/arrow-point-to-right.svg";
import searchIcon from "../../assets/search.svg";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";


const People = () => {
    const [people, setPeople] = useState<Results | null>(null);
    
        useEffect(() => {
            try {
                const fetchPeople = async () => {
                    const {
                      data,
                    } = await axios.get(`https://swapi.dev/api/people/`);
                    setPeople(data);
                  };
                  fetchPeople();
            } catch (error) {
                console.log(error)
            }   
          }, []);
          console.log(people)
    return (
        <div className={peopleStyles.grid}>
            <div>
                <Sidebar />
            </div>
            <div className={peopleStyles.right}>
                <div className={peopleStyles.rightTop}>
                    <NavBar />
                    <div className={peopleStyles.nav}>
                    <div className={peopleStyles.navflex}>
                            <p><img src={back} alt=""/> Back</p>
                            <p>{people?.count} Total</p>
                            <p>Showing 1-10 of {people?.count}</p>
                            <p><IoIosArrowBack /></p>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className={peopleStyles.search}>
                            <input type="text"  placeholder="Search for person" />
                            <img src={searchIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={peopleStyles.bigCard}>
                   {people && <PeopleCard people={people}/>}
                </div>
            </div>
        </div>
    )
}

export default People
