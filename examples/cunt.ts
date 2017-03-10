/*import { createClient } from 'reactotron-core-client'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import Reactotron from 'reactotron-react-js'
import { trackGlobalErrors } from 'reactotron-react-js'

const Reactotron = createClient({
    io,
    host: 'localhost',
    port: 9090,
    name: 'React JS App',
});
Reactotron
    .configure({ name: 'jobjungle' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(trackGlobalErrors())
    .connect();

Reactotron.clear();/*

const middleware1 = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log('action dispatched', action);
      next(action);
    }
  }
};*/