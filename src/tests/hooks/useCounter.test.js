import { useCounter } from '../../hooks/useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en el custom hook useCounter', () => {
   test('Debe retornar valores por defecto', () => {

      const { result } = renderHook(() => useCounter())
      
      expect(result.current.counter).toBe(1)
      expect(typeof result.current.decrement).toBe('function')
      expect(typeof result.current.increment).toBe('function')
      expect(typeof result.current.reset).toBe('function')
   })
   
   test('Debe retornar el counter en el valor que se le pasa como parametro', () => {

      const counte = 15
      const { result } = renderHook(() => useCounter(counte))
      
      expect(result.current.counter).toBe(counte)
   })

   test('Debe de incrementar el counter', () => {
      const { result } = renderHook( () => useCounter(10))
      const { increment } = result.current

      act( () => {
         increment()
      })

      const { counter } = result.current
      expect(counter).toBe(11)
   })

   test('Debe de decrementar el counter', () => {
      const { result } = renderHook( () => useCounter(10))
      const { decrement } = result.current

      act( () => {
         decrement()
      })

      const { counter } = result.current
      expect(counter).toBe(9)
   })
   
   test('Debe de formater el counter', () => {
      const { result } = renderHook( () => useCounter(10))
      const { decrement, reset } = result.current

      act( () => {
         decrement()
         reset()
      })

      const { counter } = result.current
      expect(counter).toBe(10)
   })
   
})
