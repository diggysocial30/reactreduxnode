import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar';
import ListOfTrades from './components/listOfTrades';
import TradeDetails from './components/tradeDetails';

const App = () => {
	return (
	<div> 
	<SearchBar />
    <ListOfTrades />
	<TradeDetails />
	</div>
	);
	
};

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
