import "../styles/Card.scss";


const Card = ({handleChangeInput, dataTask, handleSend}) => {

    const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput (inputValue, inputName);
  }

  const createTask = () => {
    handleSend();
  } 

  return (
    <section className="form" >
        <form onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="title">
        Tarea
        <input 
        required 
        type="text" 
        placeholder="Hacer la compra"
        name="title"
        id="title"
        value={dataTask.title}
        onInput={changeInput}
        />
      </label>
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
        onInput={changeInput}/>
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
      onClick={createTask} />
       </form>
    </section>
  );
};

export default Card;
