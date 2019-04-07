import React from 'react';
import ReactDOM from 'react-dom';
import InventorTest from './InventorTest';



describe("Inventor Test", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InventorTest />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
