import style from "./user.module.css";

const UserImg = ({ name }) => {
  const sliceShortName = (name) => {
    return `${name[0].toUpperCase()}${name[1].toUpperCase()}`;
  };

  return (
    <>
      <div className={style.boxImg}>{sliceShortName(name)}</div>
    </>
  );
};

export default UserImg;
