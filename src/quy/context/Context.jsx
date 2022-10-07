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
  };
  return <TdeeContext.Provider value={value}>{children}</TdeeContext.Provider>;
}
export { TdeeContext, TdeeProvider };
