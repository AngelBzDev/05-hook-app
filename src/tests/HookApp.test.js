import React from 'react'
import { shallow } from 'enzyme'
import HooksApp from '../HooksApp'
import toJson from 'enzyme-to-json'



describe('Pruebas en HookApp', () => {
   test('Debe mostrarse correctamente', () => {
      const wrapper = shallow(<HooksApp />)
      expect(toJson(wrapper)).toMatchSnapshot()
   })
})
