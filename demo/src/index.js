import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar';
import ListOfTrades from './components/listOfTrades';
import TradeDetails from './components/tradeDetails';
import LoginFrame from './components/loginFrame';
import Trade from './components/trade';

class App extends Component{
	render(){
	return (
	<div> 
	<SearchBar />
	<LoginFrame />
    <ListOfTrades />
	<TradeDetails />
	<Trade />
	</div>
	);
}
};

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
