import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Event from './component/Event';
import image1 from './image/image1.JPG';
import image2 from './image/image2.JPG';
import image3 from './image/image3.jpg';
import image4 from './image/image4.JPG';
import image5 from './image/image5.jpg';
import image6 from './image/image6.JPG';
import image7 from './image/image7.JPG';
import image8 from './image/image8.jpg';
import image9 from './image/image9.jpg';
import image10 from './image/image10.jpg';
import ImageCarousel from './component/ImageCarousel';


const images = [
  image1,image2,image3,image4,image5,image6,image7,image8,image9,image10
];

function App() {
  return (
    <div className="App">
          
      <Navbar />
      <Sidebar />
      <Event />
      <ImageCarousel images={images} />
      
      
    </div>
  );
}

export default App;
