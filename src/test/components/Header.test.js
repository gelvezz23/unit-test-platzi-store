import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../mocks/ProviderMock';
import Header from '../../components/Header';

describe('pruebas de <Header/>', () => {

  test('Prueba de que <Header/> se este renderizando', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,

    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header snapshot', () => {
  test('snapshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.toJSON()).toMatchSnapshot();
  });

});
