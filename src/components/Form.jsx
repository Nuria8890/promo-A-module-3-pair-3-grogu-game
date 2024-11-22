function Form(props) {
  const handleChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="userName">Nombre</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={props.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
