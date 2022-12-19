import { useQuery } from 'react-query'
import axios from 'axios';

function EffectNode18() {
  const sleeppp = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const { isLoading, error, data } = useQuery('dogs', async () => {
    const response = await axios.get('https://random.dog/woof.json')
    await sleeppp(2000)
    return response
  })

  if (error) return <div>Houve um erro - {error.message}</div>
  if (isLoading) return <div>Carregando...</div>

  console.log(data)
  return (
    <div>
        <div className='title'>EffectNode18 / useQuery</div>
        <p>Usa o react query ao invés de carregar com useEffect.
          Recarrega os valores quando a aba recebe o foco novamente.</p>
        <p>Não usar para:</p>
        <ul className='simple'>
          <li>Atualizar estados</li>
          <li>Fazer requisições para APIs</li>
          <li>Ações</li>
        </ul>
        <p>useEffect é para:</p>
        <ul className='simple'>
          <li>Event Listeners</li>
        </ul>
        <p>url: {data.data.url}</p>
    </div>
  )
}

export default EffectNode18