import logo from './logo.svg';
import './App.css';
import Comment_Detail from './Comment_Detail';
import 'bootstrap/dist/css/bootstrap.css';
import EventHandlingDemoComponent from './EventHandlingDemoComponent';
import SearchApp from './SearchApp';

function App() {
  return (
    <div className="ui container comments">
      {/* <EventHandlingDemoComponent /> */}
      <SearchApp />
    </div>
  );
}

export default App;
