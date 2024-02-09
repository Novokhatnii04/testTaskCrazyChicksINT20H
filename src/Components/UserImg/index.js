import style from "./user.module.css";

const UserImg = ({ name, surname }) => {
  const sliceShortName = (name, surname) => {
    return `${name[0].toUpperCase()}${surname[0].toUpperCase()}`;
  };

  return (
    <>
      <div className={style.boxImg}>{sliceShortName(name, surname)}</div>
    </>
  );
};

export default UserImg;
