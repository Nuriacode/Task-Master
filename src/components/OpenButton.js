import "../styles/OpenButton.scss";

const OpenButton = ({ openTask, handleClickButton }) => {
  // const handleClick = () => {
  //     return form.remove("hidden");
  // }

  return (
    <section>
      <label
        type="button"
        className="btn btn-outline-danger"
        onClick={handleClickButton}>
        Crea un nuevo proyecto
      </label>
    </section>
  );
};

export default OpenButton;
