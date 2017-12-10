import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../../components/Home'
import About from '../../components/About'
import NotFound from '../../components/NotFound'

const Main = () => (
	<main>
		<Switch>
  		<Route exact path='/' component={Home}/>
  		<Route path='/about' component={About}/>
  		<Route component={NotFound}/>
  	</Switch>
	</main>
)

export default Main
