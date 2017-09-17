import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import IndexComponent from './components/index/index.js'
import DetailComponent from './components/detail/index.js'
import ListComponent from './components/list/index.js'
import{createStore, combineReducers} from 'redux'
import reducer from './reducer/reducer.js'
import {Provider} from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(combineReducers({
	data: reducer,
	routing: routerReducer
}));
const history = syncHistoryWithStore(browserHistory, store)

class Root extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={IndexComponent}></Route>
					<Route path="/detail/:id" component={DetailComponent}></Route>
					<Route path="/list/:id" component={ListComponent}></Route>
				</Router>
			</Provider>
		)
	}
}


ReactDom.render(<Root />, document.getElementById("root"));