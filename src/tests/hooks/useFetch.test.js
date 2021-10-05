import { renderHook } from "@testing-library/react-hooks"
import useFetch from "../../hooks/useFetch"

describe('Pruebas en useFetch', () => {
   test('Debe retornar la info por defecto', () => {
      const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/albums/1'))
      const { data, loading, error } = result.current
      
      expect(data).toBe(null)
      expect(loading).toBe(true)
      expect(error).toBe(null)
   })
   
   test('Debe de tener la info deseada', async() => {
      const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
      
      await waitForNextUpdate({timeout:2500})
      const { loading, error } = result.current
      const { data } = result.current.data
      
      expect(data.length).toBe(1)
      expect(loading).toBe(false)
      expect(error).toBe(null)
   })
})
