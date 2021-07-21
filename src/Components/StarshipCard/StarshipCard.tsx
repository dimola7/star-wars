import shipCardStyles from "./StarshipCard.module.css";

export interface Results {
    count: number;
    next: null | number;
    previous: null | number;
    results: Record<string, any>[]
}

interface Props {
    starships: Results;
  }

const StarshipCard: React.FC<Props> = (props) => {
    return (
        <div className={shipCardStyles.starshipDiv}>
        <div className={shipCardStyles.card}>
            <table className={shipCardStyles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Model</th>
                <th>Class</th>
                <th>cost (in GC)</th>
                <th>Passengers</th>
                <th>Length</th>
                <th>Crew</th>
              </tr>
            </thead>

            <tbody>
              {props.starships.results.map((starship:any) => (
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>{starship.name}</td>
                  <td>{starship.model}</td>
                  <td>{starship.starship_class}</td>
                  <td>{starship.cost_in_credits} GC</td>
                  <td>{starship.passengers}</td>
                  <td>{starship.length} Metres</td>
                  <td>{starship.crew}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default StarshipCard
