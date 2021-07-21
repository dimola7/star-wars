import vehicleCardStyles from "./VehicleCard.module.css";

export interface Results {
    count: number;
    next: null | number;
    previous: null | number;
    results: Record<string, any>[]
}

interface Props {
    vehicles: Results;
  }

const VehicleCard: React.FC<Props> = (props) => {
    return (
        <div className={vehicleCardStyles.vehicleDiv}>
        <div className={vehicleCardStyles.card}>
            <table className={vehicleCardStyles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Vehicle Name</th>
                <th>Vehicle Model</th>
                <th>Vehicle Class</th>
                <th>Vehicle Manufacturer</th>
                <th>Vehicle Length</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Cargo Capacity</th>
              </tr>
            </thead>

            <tbody>
              {props.vehicles.results.map((vehicle:any) => (
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.vehicle_class}</td>
                  <td>{vehicle.manufacturer}</td>
                  <td>{vehicle.length}</td>
                  <td>{vehicle.crew}</td>
                  <td>{vehicle.passengers}</td>
                  <td>{vehicle.cargo_capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default VehicleCard
