import loaderStyles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={loaderStyles.loaderDiv}>
            <div className={loaderStyles.loader} />
        </div>
    )
}

export default Loader
