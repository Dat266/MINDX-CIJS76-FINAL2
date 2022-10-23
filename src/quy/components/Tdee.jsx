import React from "react";
import "./Tdee.css";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";

export const Tdee = () => {
  const tdee = useContext(TdeeContext);
  const handleAgeChange = (e) => {
    tdee.setAge(parseInt(e.target.value));
    tdee.setSubmit(false);
  };
  const handleWeightChange = (e) => {
    tdee.setWeight(parseInt(e.target.value));
    tdee.setSubmit(false);
  };
  const handleHeightChange = (e) => {
    tdee.setHeight(parseInt(e.target.value));
    tdee.setSubmit(false);
  };
  const handleGenderChange = (e) => {
    tdee.setGender(e.target.value);
    tdee.setSubmit(false);
  };
  const handleActivityLevelChange = (e) => {
    tdee.setActivityLevel(e.target.value);
    tdee.setSubmit(false);
  };
  const handleBodyFatPercentChange = (e) => {
    tdee.setBodyFatPercent(parseInt(e.target.value));
    tdee.setSubmit(false);
  };
  //   console.log(
  //     tdee.age,
  //     tdee.weight,
  //     tdee.height,
  //     tdee.gender,
  //     tdee.activityLevel,
  //     tdee.bodyFatPercent
  //   );
  tdee.setSafeMinCalories(
    tdee.gender === "M" ? tdee.MIN_CAL_MALE : tdee.MIN_CAL_FEMALE
  );
  tdee.setLbm((100 - tdee.bodyFatPercent) * 0.01 * tdee.weight);

  tdee.setBmr(21.6 * tdee.lbm + 370);
  tdee.setTdeevl(Math.round(tdee.bmr * tdee.activityLevel));
  tdee.setBmi((tdee.weight / tdee.height / tdee.height) * 10000);
  //   tdee.setBmi(parseFloat(tdee.bmi.toFixed(1)));
  //   console.log(tdee.tdeevl, tdee.bmi);

  if (tdee.bmi < 18.5) {
    tdee.setBmirange("Thiếu Cân");
  } else if (tdee.bmi < 25) {
    tdee.setBmirange("Khỏe Mạnh");
  } else if (tdee.bmi < 30) {
    tdee.setBmirange("Thừa Cân");
  } else {
    tdee.setBmirange("Béo Phì");
  }
  //   console.log(tdee.tdeevl, tdee.bmi, tdee.bmirange);
  return (
    <div className="tdee-ctn">
      <div className="tdee-cal">
        <div>
          <label htmlFor="gender" style={{ marginRight: "10px" }}>
            Giới Tính:{" "}
          </label>
          <select id="gender" onChange={handleGenderChange}>
            <option value="M">Nam</option>
            <option value="F">Nữ</option>
          </select>
        </div>

        <br />
        <div>
          <label htmlFor="age" style={{ marginRight: "10px" }}>
            Tuổi:{" "}
          </label>
          <input
            className="tdee-cal-input"
            type="number"
            id="age"
            min="0"
            max="999"
            onChange={handleAgeChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="weight" style={{ marginRight: "10px" }}>
            Cân Nặng(kg):{" "}
          </label>
          <input
            className="tdee-cal-input"
            type="number"
            id="weight"
            min="0"
            max="999"
            onChange={handleWeightChange}
            required
          />
        </div>

        <br />
        <div>
          <label htmlFor="height" style={{ marginRight: "10px" }}>
            Chiều Cao(cm):{" "}
          </label>
          <input
            className="tdee-cal-input"
            type="number"
            id="height"
            min="0"
            max="999"
            onChange={handleHeightChange}
            required
          />
        </div>

        <br />
        <div>
          <label htmlFor="activityLevel">Mức độ hoạt động: </label>
          <select id="activityLevel" onChange={handleActivityLevelChange}>
            <option value="1.2">Ít vận động (Công việc văn phòng)</option>
            <option value="1.375">Tập thể dục nhẹ (1-2 ngày / tuần)</option>
            <option value="1.55">Cường Độ Trung bình (3-5 ngày / tuần)</option>
            <option value="1.725">Tập thể dục nặng (6-7 ngày / tuần)</option>
            <option value="1.9">Vận động viên (2 lần mỗi ngày)</option>
          </select>
        </div>

        <br />
        <div>
          <label htmlFor="bf">Tỉ Lệ Mỡ(%): </label>
          <input
            type="number"
            id="bodyFatPercent"
            min="0"
            max="100"
            onChange={handleBodyFatPercentChange}
          />
        </div>
        <button
          type="submit"
          id="submitBtn"
          onClick={() => {
            tdee.setSubmit(true);
          }}
        >
          Tính TDEE
        </button>
      </div>
      {tdee.submit && (
        <div className="tdee-result">
          <div id="infoContainer">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              TDEE của bạn là
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
                color: "green",
              }}
            >
              {tdee.tdeevl}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Calo 1 ngày
            </div>
            <br />
            <div
              style={{
                fontSize: "19px",
                textAlign: "center",
              }}
            >
              Chỉ số BMI của bạn là <b>{parseFloat(tdee.bmi.toFixed(1))}</b>,
              bạn đang <b>{tdee.bmirange}</b>
            </div>
            <div
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "3px 0",
                marginTop: "20px",
              }}
            >
              Để giảm 0,9kg / tuần, hãy ăn <b>{tdee.tdeevl - 1000}</b> calo mỗi
              ngày.
            </div>
            <div
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              Để giảm 0,45kg / tuần, hãy ăn <b>{tdee.tdeevl - 500}</b> calo mỗi
              ngày.
            </div>
            <div
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              Để duy trì cân nặng, hãy ăn <b>{tdee.tdeevl}</b> calo mỗi ngày.
            </div>
            <div
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              Để tăng 0,45kg / tuần, hãy ăn <b>{tdee.tdeevl + 500}</b> calo mỗi
              ngày.
            </div>
            <div
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              Để giảm 0,9kg / tuần, hãy ăn <b>{tdee.tdeevl + 1000}</b> calo mỗi
              ngày.
            </div>
          </div>

          <div id="resultsContainer"></div>
        </div>
      )}
      {!tdee.submit && (
        <div className="tdee-define">
          <h2 style={{ textAlign: "center" }}>TDEE LÀ GÌ ?</h2>
          <p>
            <b>TDEE (Total Daily Energy Expenditure)</b>nghĩa là lượng calo bạn
            sẽ đốt cháy trong 1 ngày, bao gồm cả ăn chơi ngủ nghỉ và tập luyện.
          </p>
          <p>
            TDEE rất quan trọng trong việc giảm cân hay tăng cân hay tăng cơ vì
            nó giúp ta biết nên tiêu thụ bao nhiêu calo là đủ Công thức thức
            tính rất đơn giản và phù hợp với mọi đối tượng.
          </p>
          <h4>Và đây là công cụ sẽ giúp bạn tính toán tự động</h4>
          <p>
            Công việc của bạn chỉ là nhập số liệu vào và bấm <b>Tính TDEE</b> mà
            thôi!
          </p>
        </div>
      )}
    </div>
  );
};
