import speciesCardStyles from "./SpeciesCard.module.css";

export interface Results {
    count: number;
    next: null | number;
    previous: null | number;
    results: Record<string, any>[]
}

interface Props {
    species: Results;
  }

const SpeciesCard: React.FC<Props> = (props) => {
    return (
        <div className={speciesCardStyles.div}>
        <div className={speciesCardStyles.card}>
            <table className={speciesCardStyles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Classification</th>
                <th>Designation</th>
                <th>Average Height</th>
                <th>Average Lifespan</th>
                <th>Eye colors</th>
                <th>Hair colors</th>
                <th>Language</th>
              </tr>
            </thead>

            <tbody>
              {props.species.results.map((onespecies:any) => (
                <tr>
                  <td>box</td>
                  <td>{onespecies.name}</td>
                  <td>{onespecies.classification}</td>
                  <td>{onespecies.designation}</td>
                  <td>{onespecies.average_height}</td>
                  <td>{onespecies.average_lifespan}</td>
                  <td>{onespecies.eye_colors}</td>
                  <td>{onespecies.hair_colors}</td>
                  <td>{onespecies.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default SpeciesCard
