import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import PeopleCard from "../../Components/PeopleCard/PeopleCard";
import peopleStyles from "./People.module.css";
import {Results} from "../../Components/StarshipCard/StarshipCard";


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
                    <div className={peopleStyles.nav}></div>
                </div>
                <div className={peopleStyles.bigCard}>
                   {people && <PeopleCard people={people}/>}
                </div>
            </div>
        </div>
    )
}

export default People
