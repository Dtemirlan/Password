import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import PasswordInput from './components/PasswordInput';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PasswordInput />
            </div>
        </Provider>
    );
}

export default App;
