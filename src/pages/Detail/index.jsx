import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import Map from "../../components/Map";
import "./styles.scss";

function Detail() {
  const [route, setRoute] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`
      )
      .then((res) => {
        if (res.data) {
          let routesArray = [];
          routesArray.push(res.data);
          setRoute(routesArray);
        } else {
          alert("Não encontramos linhas");
        }
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar a linha");
      });
  }, []);

  return (
    <div className="detail__container">
      {route ? <Map route={route} /> : null}
      <Map />
    </div>
  );
}

export default Detail;
