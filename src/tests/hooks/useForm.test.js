import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas en useForm', () => {
   const initialForm = {
      name: 'Angelo',
      email: 'viejosexy@gmail.com'
   }

   test('Debe de regresar un formulario por defecto', () => {
      const { result } = renderHook( () => useForm(initialForm))
      
      const [ values, handleInputChange, reset] = result.current

      expect(values).toEqual(initialForm)
      expect(typeof handleInputChange).toBe('function')
      expect(typeof reset).toBe('function')
   })

   test('Debe de cambiar el valor de formulario', () => {
      const { result } = renderHook( () => useForm(initialForm))
      const [ , handleInputChange] = result.current

      act( () => {
         handleInputChange({
            target:{
               name: 'name',
               value: 'Juanita'
            }
         })
      })

      const [ values ] = result.current
      
      expect(values).toEqual({ ...initialForm, name: 'Juanita' })
   })
   
})
