import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
