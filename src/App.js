import Library from './Components/Library';

import './App.css';
import BooksProvider from './Context/BooksContext';

function App() {
  return (
    <BooksProvider>
      <Library />
    </BooksProvider>
  );
}

export default App;
