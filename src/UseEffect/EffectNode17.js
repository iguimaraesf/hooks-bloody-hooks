import axios from 'axios';
import { useState, useEffect } from 'react'

function EffectNode17() {
    const sleeppp = async (ms) => {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setError(false)
            setLoading(true)
            try {
                const response = await axios.get('https://random.dog/woof.json')
                await sleeppp(2000)
                setData(response.data)
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
        console.log('Nova informação é ', data)
        return () => console.log('desmontando...')
    }, []);

    if (isError) return <div>Houve um erro</div>
    if (isLoading) return <div>Carregando...</div>
    return (
    <div>
        <div className='title'>EffectNode17</div>
        <p>{data.url}</p>
        <p>Quando compilar com node 18, não fazer a chamada http de dentro do useEffect. Mas se usar,
            será chamado 2 vezes no ambiente de desenvolvimento e 1 vez no ambiente de produção.
            Ao invés disso, use <b>React Query</b>.
        </p>
    </div>
  )
}

export default EffectNode17