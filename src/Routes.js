import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Achain from "./Pages/Achain";
import Faq from "./Pages/Faqs";
import Seaweeds from "./Pages/Seaweeds";
import Sivar from "./Pages/Sivar";
export default function Routes(props) {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/achain" component={Achain} />
					<Route path="/sivar" component={Sivar} />
					<Route path="/seaweeds" component={Seaweeds} />
					<Route path="/faq" component={Faq} />
				</Switch>
			</Router>
		</>
	);
}
