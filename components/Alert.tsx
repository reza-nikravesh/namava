import { useState } from "react";
import { GoAlert } from "react-icons/go";
import classes from "../scss/modules/Alert.module.scss";

const Alert = () => {
  const [show, setShow] = useState<boolean>(true);
  const clickHandler = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div className={classes.container}>
      <div className={classes.alert}>
        <div className={`${classes.title} title f-w-300`}>اخطار</div>
        <GoAlert className="ic-xxxl" />
        <div className={`${classes.message} subtitle f-w-200`}>
          <span>خطایی پیش آمده لطفا دوباره تلاش کنید</span>
        </div>
        <button onClick={clickHandler} className="button">
          باشه
        </button>
      </div>
    </div>
  );
};

export default Alert;
