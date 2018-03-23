require('../css/index.scss');

import {Component, createElement as E} from 'react';
import DOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './createStore';

const store = createStore();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
    }

    render() {
        return E('div', {
            className: 'wrapper'
        },
        E('h2', {}, 'Hello world')
        );
    }
}

window.addEventListener('load', () => {
    DOM.render(E(Provider, {
        store
    },
    E(App, {})
    ), document.getElementById('appwrapper'));
});
