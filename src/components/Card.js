import "../styles/Card.scss";
const Card = ({eventList}) => {

    const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="form" >
        <form onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="title">
        Tarea
        <input 
        required 
        type="text" 
        placeholder="Hacer la compra."
        name="title" 
        id="title"
        value={eventList.title}
        onChange={changeInput}
        />
      </label>
      <label className="form__label" htmlFor="">
        Fecha de Inicio
        <input required type="text" placeholder="2023, 3, 29" />
      </label>
      <label className="form__label" htmlFor="house">
        Seleciona el tipo de tarea
        <select name="color">
          <option value="Ocio">Ocio</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Casa">Casa</option>
        </select>
      </label>
      <label className="form__label" htmlFor="desc">
        Descripción
        <textarea
          type="text"
          placeholder="Lista de la compra"
          name="desc"
          id="desc"
        ></textarea>
      </label>
      <input className="form__button" type="submit" value="AÑADIR TAREA" />
       </form>
    </section>
  );
};

export default Card;
