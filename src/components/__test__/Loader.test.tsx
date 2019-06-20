import React from 'react';
import ReactDOM from 'react-dom';

import Loader from '../Loader';

describe('Loader', () => {
    let container: Element;

    beforeEach(() => {
        container = document.createElement('div');
    });

    it('should render the content the same with the content prop', () => {
        ReactDOM.render(<Loader content='content' />, container);

        const content = container.querySelector('div div div');
        expect(content && content.textContent).toEqual('content');
    });
});
