import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { firebase } from "./Axios";

function History(props) {
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    fetchMatch();
  }, []);

  const fetchMatch = async () => {
    try {
      const response = await firebase.get("");
      const matchItems = [];
      for (let key in response.data) {
        matchItems.push({
          id: response.data[key].gameID,
        });
      }
      setMatchList(matchItems);
    } catch (error) {
      console.log(error);
    }
  };

  const renderMatch = () => {
      return matchList.map((item)=> {
        return <div key={item.id}>
            
        </div>
      })
  }

  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      {renderMatch()}
    </div>
  );
}

export default History;
