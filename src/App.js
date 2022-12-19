import './App.css';
import StateTutorial from './UseState/StateTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <StateTutorial/>
      <ReducerTutorial/>
      <QueryClientProvider client={queryClient}>
        <EffectTutorial/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
