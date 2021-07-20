import filmCardStyles from "./FilmCard.module.css";

export interface Results {
    count: number;
    next: null | number;
    previous: null | number;
    results: Record<string, any>[]
}

interface Props {
    films: Results;
  }

const FilmCard: React.FC<Props> = (props) => {
    return (
        <div className={filmCardStyles.div}>
            <div className={filmCardStyles.card}>
            <h2>Films</h2>
            <table className={filmCardStyles.table}>
            <thead>
              <tr>
                <th>Film Title</th>
                <th>Director</th>
                <th>Producer</th>
                <th>Release Date</th>
                <th>Episode ID</th>
                <th>Charcters</th>
              </tr>
            </thead>

            <tbody>
              {props.films.results.map((film:any) => (
                <tr>
                  <td>
                      {film.title}
                    <span className={filmCardStyles.singleGenreCard}>
                      {/* <img src={} alt='' /> */}
                    </span>
                    {/* <span>{track.title}</span> */}
                  </td>
                  <td>{film.director}</td>
                  <td>{film.producer}</td>
                  <td>{film.release_date}</td>
                  <td>{film.episode_id}</td>
                  <td>{film.characters[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default FilmCard
