import ReactComponent from './section/ReactComponent.jsx';
import Nested from './section/Nested.jsx';
import BasicUseState from './section/BasicUseState.jsx';
import ObjectUseState from './section/ObjectUseState.jsx';
import Footer from './section/Footer.jsx';
import ManipulateUseState from './section/ManipulateUseState.jsx';
import CostumHooks from './section/CostumHooks.jsx';

function App() {
  return (
    <div className={'bg-gray-900 min-h-screen font-display text-white'}>
      <div className={'container bg-gray-900'}>
        <h1 className={'text-4xl py-5 text-center'}>Welcome To React JS With Vite</h1>
        <ReactComponent />
        <Nested />
        <BasicUseState initialValue={10} />
        <ObjectUseState />
        <ManipulateUseState />
        <CostumHooks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
