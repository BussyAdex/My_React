import ReactDOM from 'react-dom/client';
import Header from "./layout/header"
import Counter from './component/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Counter/>
  </div>
);

