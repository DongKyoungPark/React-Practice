import React, { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

/***********************************************************
  Card 컴포넌트를 import 한 뒤, props로 내려받은 데이터에 
  map 함수를 호출해 각각 다른 데이터를 가진 Card 컴포넌트들을 리턴해주세요!
  Card 컴포넌트에서 필요로 하는 데이터는 id, name, email 입니다.
***********************************************************/

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((mon) => {
                    return <Card key={mon.id} id={mon.id} name={mon.name} email={mon.email} />;
                })}
            </div>
        );
    }
}

export default CardList;
