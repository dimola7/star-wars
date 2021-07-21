import peopleCardStyles from "./PeopleCard.module.css";
import profile from "../../assets/pexels-bruno-scramgnon-596132.jpg";

export interface Results {
    count: number;
    next: null | number;
    previous: null | number;
    results: Record<string, any>[]
}

interface Props {
    people: Results;
  }

const PeopleCard: React.FC<Props> = (props) => {
    return (
        <div className={peopleCardStyles.peopleDiv}>
        <div className={peopleCardStyles.card}>
            <table className={peopleCardStyles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Gender</th>
                <th>Eye color</th>
                <th>Hair color</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Skin color</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>
              {props.people.results.map((person:any) => (
                <tr>
                  {/* <td>{person.name}</td> */}
                  <td><span><img className={peopleCardStyles.roundProfile} src={profile} alt="" /></span> <span>{person.name}</span></td>
                  <td>{person.birth_year}</td>
                  <td>{person.gender}</td>
                  <td>{person.eye_color}</td>
                  <td>{person.hair_color}</td>
                  <td>{person.height} CM</td>
                  <td>{person.mass} KG</td>
                  <td>{person.skin_color}</td>
                  <td>{person.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default PeopleCard
