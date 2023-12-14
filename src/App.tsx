import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import PasswordInput from './components/PasswordInput';
import Calculator from "./components/Calculator.tsx";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PasswordInput />
                <Calculator/>
            </div>
        </Provider>
    );
}

export default App;
