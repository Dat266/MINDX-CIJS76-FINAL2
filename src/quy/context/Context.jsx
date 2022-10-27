import { createContext, useState } from "react";

const TdeeContext = createContext();
function TdeeProvider({ children }) {
  const [submit, setSubmit] = useState(false);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("M");
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bodyFatPercent, setBodyFatPercent] = useState(1.2);
  const [bmr, setBmr] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [lbm, setLbm] = useState(0);
  const [tdeevl, setTdeevl] = useState(0);
  const [bmirange, setBmirange] = useState("");
  const MIN_CAL_FEMALE = 1200;
  const MIN_CAL_MALE = 1500;
  const [safeMinCalories, setSafeMinCalories] = useState(0);
  const [signindisplay, setSignindisplay] = useState("block");
  const [signupdisplay, setSignupdisplay] = useState("");
  const [emailsigninvalue, setEmailsigninvalue] = useState("");
  const [passwordsigninvalue, setPasswordsigninvalue] = useState("");
  const [emailsignupvalue, setEmailsignupvalue] = useState("");
  const [passwordsignupvalue, setPasswordsignupvalue] = useState("");
  const [message, setMessage] = useState("");
  const [messagedisplay, setMessagedisplay] = useState("none");
  const [messagecolor, setMessagecolor] = useState("");
  const [logged, setLogged] = useState(false);
  const [coloricon, setColoricon] = useState("white");
  const [accountname, setAccountname] = useState("");
  const [accountnamecurrent, setAccountnamecurrent] = useState("");
  const [servings, setServings] = useState([]);
  // st
  const [calocurrent, setCalocurrent] = useState(0);
  const [proteintotal, setProteintotal] = useState(0);
  const [carbtotal, setCarbtotal] = useState(0);
  const [fattotal, setFattotal] = useState(0);
  const [proteinpercent, setProteinpercent] = useState(60);
  const [carbpercent, setCarbpercent] = useState(30);
  const [fatpercent, setFatpercent] = useState(10);
  const [datachart, setDatachart] = useState({
    datasets: [
      {
        data: [proteinpercent, carbpercent, fatpercent],
        backgroundColor: ["#ff0000b5", "#d1ff00b5", "#00fffab5"],
        borderColor: "transparent",
        options: {
          scales: {
            pointLabels: { fontSize: 30 },
          },
        },
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Protein", "Tinh Bột", "Chất Béo"],
  });
  // end

  const handleEmailSigninValueChange = (e) => {
    setEmailsigninvalue(e.target.value);
  };
  const handleEmailSignupValueChange = (e) => {
    setEmailsignupvalue(e.target.value);
  };
  const handlePasswordSigninValueChange = (e) => {
    setPasswordsigninvalue(e.target.value);
  };
  const handlePasswordSignupValueChange = (e) => {
    setPasswordsignupvalue(e.target.value);
  };
  const Signupsubbtn = () => {
    setSignupdisplay("block");
    setSignindisplay("none");
  };
  const Signinsubbtn = () => {
    setSignupdisplay("none");
    setSignindisplay("block");
  };
  const Signupbtn = () => {
    console.log("signup");

    var user = {
      email: emailsignupvalue,
      password: passwordsignupvalue,
    };
    var json = JSON.stringify(user);
    console.log(json);
    localStorage.setItem(emailsignupvalue, json);
    setMessagedisplay("block");
    setMessage("Sign Up Success");
    setMessagecolor("rgb(76, 218, 76)");
    setEmailsignupvalue("");
    setPasswordsignupvalue("");
    setMessagedisplay("block");
    setMessage("Sign Up Success");
    setMessagecolor("rgb(76, 218, 76)");

    setTimeout(() => {
      setMessagedisplay("none");
      setSignupdisplay("none");
      setSignindisplay("block");
    }, 500);
  };
  const Signinbtn = () => {
    var user1 = localStorage.getItem(emailsigninvalue);
    console.log(emailsigninvalue);
    var data = JSON.parse(user1);
    if (
      !user1 ||
      emailsigninvalue !== data.email ||
      passwordsigninvalue !== data.password
    ) {
      setMessagedisplay("block");
      setMessage("Invalid username/password combination");
      setMessagecolor("red");
    } else if (
      emailsigninvalue === data.email &&
      passwordsigninvalue === data.password
    ) {
      setMessagedisplay("block");
      setMessage("Logged in successfully");
      setMessagecolor("rgb(76, 218, 76)");
      setEmailsigninvalue("");
      setPasswordsigninvalue("");
      setAccountname(emailsigninvalue);

      setTimeout(() => {
        setSignindisplay("none");
        setMessagedisplay("none");
        localStorage.setItem("logged", true);
        localStorage.setItem("accurrent", emailsigninvalue);

        setLogged(true);
      }, 1000);
    }
  };

  const value = {
    submit,
    setSubmit,
    MIN_CAL_FEMALE,
    MIN_CAL_MALE,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    gender,
    setGender,
    activityLevel,
    setActivityLevel,
    bodyFatPercent,
    setBodyFatPercent,
    bmr,
    setBmr,
    safeMinCalories,
    setSafeMinCalories,
    lbm,
    setLbm,
    tdeevl,
    setTdeevl,
    bmi,
    setBmi,
    bmirange,
    setBmirange,
    signindisplay,
    setSignindisplay,
    signupdisplay,
    setSignupdisplay,
    handleEmailSigninValueChange,
    handleEmailSignupValueChange,
    handlePasswordSigninValueChange,
    handlePasswordSignupValueChange,
    emailsigninvalue,
    passwordsigninvalue,
    emailsignupvalue,
    passwordsignupvalue,
    message,
    setMessage,
    messagedisplay,
    setMessagedisplay,
    messagecolor,
    setMessagecolor,
    Signupbtn,
    Signinbtn,
    Signinsubbtn,
    Signupsubbtn,
    logged,
    setLogged,
    coloricon,
    setColoricon,
    accountname,
    setAccountname,
    servings,
    setServings,
    setAccountnamecurrent,
    accountnamecurrent,
    setCalocurrent,
    calocurrent,
    setProteintotal,
    proteintotal,
    setCarbtotal,
    carbtotal,
    setFattotal,
    fattotal,
    proteinpercent,
    setProteinpercent,
    setCarbpercent,
    carbpercent,
    setFatpercent,
    fatpercent,
    setDatachart,
    datachart,
  };
  return <TdeeContext.Provider value={value}>{children}</TdeeContext.Provider>;
}
export { TdeeContext, TdeeProvider };
