import './App.css';
import Navbar from './Navbar';
import Personal from './components/Personal';
import AboutUs from './components/AboutUs';
const teammembers=['Braun','Lisa','Anna','Lucas']
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <AboutUs/>
        <Personal
        
          color='red'
          title='Adem'
          salary={4000}
          address={[2, 4, 5, 6, 7]}
          married={false}
          imgUrl={'https://upload.wikimedia.org/wikipedia/commons/4/44/Personal_photo.png'}
          style={{ width: '200px' }}
          desc='lorem ipsum lorem ipsum'
         members={teammembers}
        />
           <Personal
          color='black'
          title='Anar'
          salary={4000}
          address={[2, 4, 5, 5, 9]}
          married={true}
          imgUrl={null}
          desc='lorem ipsum lorem ipsum'
          members={teammembers}
        />
      </header>
    </div>
  );
}

export default App;
