import './App.css';
import InputField from './components/InputField/InputField';

function App() {
    return (
        <div className="App">
            <InputField
                width="513px"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
                errorMessage="This field is required"
            />
        </div>
    );
}

export default App;
