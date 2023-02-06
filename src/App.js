// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
// import { DatePicker } from 'antd';
import { Layout } from './components/Layout/HomeLayout';
import Apps from './components/navigation/Navigation';






function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      {/* <Apps /> */}

    </div>
  );
}

export default App;
