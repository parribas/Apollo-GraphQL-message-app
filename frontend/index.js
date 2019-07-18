import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// main app
import Messenger from './Components/Messenger'

import {ApolloProvider} from 'react-apollo'

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const {origin, port} = window.location
const client = new ApolloClient({
	link: new HttpLink({uri: 'http://127.0.0.1:5000'+'/api/v1/graphql'}),
  	cache: new InMemoryCache(),
})


const Main = () => (
	<ApolloProvider client={client}>
		<MuiThemeProvider>
			<Messenger />
		</MuiThemeProvider>
	</ApolloProvider>
)

ReactDOM.render(<Main />, document.getElementById('app'))
