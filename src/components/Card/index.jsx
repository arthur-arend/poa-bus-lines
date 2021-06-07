import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import "./styles.scss";

function Card(line) {
  const { id, codigo, nome } = line.line;
  const history = useHistory();

  const handleClickCard = (e) => {
    if (true) {
      history.push(`/detail/${e}`);
    }
  };

  console.log(line);
  return (
    <div className="card__container">
      <h1>Nome: {nome}</h1>
      <p>Código: {codigo}</p>
      <Button
        className="search-input__button"
        variant="contained"
        color="primary"
        onClick={() => handleClickCard(id)}
      >
        Detalhes
      </Button>
    </div>
  );
}

export default Card;
