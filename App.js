import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";

import {store,persistor} from "./src/store/index";
import AppScreen from "./src/components/screens/index";

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<AppScreen />
				</PersistGate>
			</Provider>
		)
	}
}

export default App;

