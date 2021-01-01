import List from './List';

const nomounts = [];
const mounts = [
  { name: 'Everest', elevation: 8848},
  { name: 'K2', elevation: 8611},
  { name: 'Kangchenjunga', elevation: 8586},
  { name: 'Lhotse', elevation: 8516},
  { name: 'Makalu', elevation: 8485},
];

function App() {
  return (
    <div className="App">
      <List d={mounts} renderEmpty={<div>No peaks found</div>} f={item => (<>{item.name} - {item.elevation} meters</>)}/>
    </div>
  );
}

export default App;
