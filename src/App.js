import List from './List';
import faker from 'faker';
import { FixedSizeList } from 'react-window';

const nomounts = [];
const mounts = [
  { name: 'Everest', elevation: 8848},
  { name: 'K2', elevation: 8611},
  { name: 'Kangchenjunga', elevation: 8586},
  { name: 'Lhotse', elevation: 8516},
  { name: 'Makalu', elevation: 8485},
];

const start = 1000000;
const bigList = [...Array(5000)].map((e,i) => (
{
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: `https://images.pexels.com/photos/${start+i}/pexels-photo-${start+i}.jpeg`
}
));

function App() {
  const renderItemBigList = (item) => (<>
  <div style={{ display: "flex" }}>
  <img src={item.avatar} width={50}></img> <p>{item.name} - {item.email}</p>
  </div>
  </>);

const renderRow = ({ index, style }) => (
  <div style={{ ...style, ...{ display: "flex" } }}>
    <img
      src={bigList[index].avatar}
      alt={bigList[index].name}
      width={50}
    />
    <p>
      {bigList[index].name} - {bigList[index].email}
    </p>
  </div>
);

  return (
    <div className="App">
      <List d={mounts} renderEmpty={<div>No peaks found</div>} renderItem={item => (<>{item.name} - {item.elevation} meters</>)}/>
      {/* <List d={bigList} renderItem={renderItemBigList} /> */}
      <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
    </div>
  );
}

export default App;
