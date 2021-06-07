import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";

import "./styles.scss";

function Home() {
  const [searchField, setSearchField] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/detail/${searchField}`);
    alert(searchField);
  };

  return (
    <div className="home__container">
      <h1>Pesquisar Linhas</h1>
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
  );
}

export default Home;
