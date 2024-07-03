function Menu({ title, items, isVisible }) {
  // daca la functie aveam 'props' ca variabila destructuram obiectul asa:
  //   const { title, items, isVisible } = props;
  //   console.log(props);

  if (!isVisible) {
    return null;
  }
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Menu;
