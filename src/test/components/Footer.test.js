import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Prueba de <Footer/>', () => {

  test('Render del componente footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const footer = mount(<Footer />);
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Comprobar UI de componnete Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

});
