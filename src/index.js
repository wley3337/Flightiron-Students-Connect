import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
