import "../styles/Card.scss";

const Card = ({
  handleChangeInput,
  dataTask,
  handleSend,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput(inputValue, inputName);
  };

  const createTask = () => {
    handleSend();
  };

  return (
    <div>
      <div className="modal__dialog">
        <div className="modal__content">
          <form className="modal__content__form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
               <label  htmlFor="floatingInput">
              Tarea
            </label>
            <input
                className="form-control"
                required
                type="text"
                placeholder="Escribe aquí la tarea"
                name="title"
                id="floatingInput"
                value={dataTask.title}
                onInput={changeInput}
              />
           
            </div>
            <label className="form__label" htmlFor="">
              Fecha de Inicio
              <input
                required
                type="text"
                placeholder="2023, 3, 29"
                name="start"
                id="start"
                value={dataTask.start}
                onInput={changeInput}
              />
            </label>
            <label className="form__label" htmlFor="">
              Fecha de Fin
              <input
                required
                type="text"
                placeholder="2023, 03, 29"
                name="end"
                id="end"
                value={dataTask.end}
                onInput={changeInput}
              />
            </label>
            {/* <label className="form__label" htmlFor="house">
        Seleciona el tipo de tarea
        <select name="color">
          <option value="Ocio">Ocio</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Casa">Casa</option>
        </select>
      </label> */}
            <label className="form__label" htmlFor="desc">
              Descripción
              <textarea
                type="text"
                placeholder="Lista de la compra"
                name="desc"
                id="desc"
                value={dataTask.desc}
                onInput={changeInput}
              ></textarea>
            </label>
            <input
              className="form__button"
              type="submit"
              value="AÑADIR TAREA"
              onClick={createTask}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
