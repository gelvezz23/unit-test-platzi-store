import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ProviderMock from '../../mocks/ProviderMock';
import Product from '../../components/Product';
import productMock from '../../mocks/ProductMock';

describe('pruebas de <Product/>', () => {
  test('render de el componente <Product/>', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar le boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={productMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });

});
