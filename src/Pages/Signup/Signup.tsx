import signupStyles from "./Signup.module.css";
import Form from "../../Components/Form/Form";
import rocket from "../../assets/undraw_To_the_stars_qhyy.svg";
import astronaut from "../../assets/undraw_Astronaut_xko2.svg";

const Signup = () => {
  return (
    <>
      <div className={signupStyles.signupGrid}>
        <div className={signupStyles.left}>
          <div>
            Welcome to Starwars <br /> the Clone Wars
          </div>
          <img src={rocket} alt="" />
          <footer></footer>
        </div>
        <div className={signupStyles.center}>
          <Form />
          <div className={signupStyles.footer}>
            <div>
              <div>All rights reserved © 2020 STAR WARS</div>
            </div>
            <div className={signupStyles.footerLeft}>
              <div>Privacy | Terms</div>
              <div>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={signupStyles.right}>
          <img src={astronaut} alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
