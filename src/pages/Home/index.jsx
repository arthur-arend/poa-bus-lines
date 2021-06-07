import React, { useState } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Card from "../../components/Card";
import "./styles.scss";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [lines, setLines] = useState();
  const [switchState, setSwitchState] = useState("o");

  const handleSearch = () => {
    if (searchField) {
      axios
        .get(
          `http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=${switchState}&p=${searchField}`
        )
        .then((res) => {
          if (res.data) {
            setLines(res.data);
          } else {
            alert("Não encontramos linhas");
          }
        })
        .catch((error) => {
          alert("Ocorreu um erro ao buscar a linha");
        });
    }
  };

  const switchHandle = () => {
    if (switchState === "o") {
      setSwitchState("l");
    } else {
      setSwitchState("o");
    }
    console.log(switchState);
  };

  return (
    <div className="home__container">
      <div className="search__container">
        <h1>Pesquisar Linhas</h1>
        <div className="inputs__container">
          <TextField
            className="search-input__field"
            id="outlined-basic"
            label="Pesquisar Linha"
            variant="outlined"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />

          <Button
            className="search-input__button"
            variant="contained"
            color="primary"
            onClick={() => handleSearch()}
          >
            Buscar
          </Button>
        </div>
        <div className="switch__container">
          Ônibus
          <Switch
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            onChange={() => switchHandle()}
          />
          Lotação
        </div>
      </div>
      <div className="result__container">
        {lines
          ? lines.map((line) => {
              return <Card key={line.id} line={line} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Home;
