import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar';
import HeaderBar from './components/headerBar';
import ListOfTrades from './components/listOfTrades';
import TradeDetails from './components/tradeDetails';
import LoginFrame from './components/loginFrame';
import Trade from './components/trade';
import "semantic-ui-css/semantic.css";
import {Header,Container,Menu} from "semantic-ui-react";
import TabBarContainer from "./tabs/TabBarContainer";
import Trades from "features/Trades";


class App extends Component{
	render(){
		const tabs = [
         {name : "trades", label : "Trades", component : Trades,},
          {name : "transfers", label : "Transfers"},
          {name : "transports", label : "Transports"}
		  ];
	 return (
	        <div className="App">
              <div className="App-header">
                    <Header inverted as="h1">Project Mini-Mek</Header>
                </div>
           
		   <Container>
                  <Menu tabular size="massive">
                       <Menu.Item name="trades" active={true}>TRADES</Menu.Item>
                       <Menu.Item name="transfers" >TRANSFERS</Menu.Item>
                       <Menu.Item name="transports" >TRANSPORTS</Menu.Item>
                   </Menu>
               </Container>
			   </div>
        );
}
};

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
