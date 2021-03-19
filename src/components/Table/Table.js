import { useState, useEffect } from "react";
import api from "../../services/api";
import "./Table.css";

const Table = () => {
  const [apiData, setApiData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(25);

  useEffect(() => {
    loadApiData();
  }, []);

  async function loadApiData() {
    setLoading(true);
    api
      .get()
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error("Falha ao acessar dados da API"));
  }

  const filterData = (apiData) => {
    return apiData.filter((val) => {
      if (searchUser == "") {
        return val;
      } else if (
        val.first_name.toLowerCase().includes(searchUser.toLowerCase())
      ) {
        return val;
      } else if (
        val.last_name.toLowerCase().includes(searchUser.toLowerCase())
      ) {
        return val;
      }
    });
  };

  const showMoreData = () => {
    setVisible((prevValue) => prevValue + 15);
  };

  return (
    <>
      <div className="table__wrapper">
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Procurar..."
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
            />
            <table cellSpacing={60}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Email</th>
                  <th>Gênero</th>
                  <th>Ip</th>
                </tr>
              </thead>
              <tbody>
                {filterData(apiData)
                  .slice(0, visible)
                  .map((users, key) => {
                    return (
                      <tr key={key}>
                        <td>{users.id}</td>
                        <td>{users.first_name}</td>
                        <td>{users.last_name}</td>
                        <td>{users.email}</td>
                        <td>{users.gender}</td>
                        <td>{users.ip_address}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {loading ? "" : <button onClick={showMoreData}>Carregar mais</button>}
      </div>
    </>
  );
};

export default Table;
