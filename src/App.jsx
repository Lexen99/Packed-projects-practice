import "./App.css";
import Accordian from "./Components/Accordian/Accordian";
import ColorGenerater from "./Components/ColorGenerater/ColorGenerator";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import LoadMoreData from "./Components/LoadMoreData/LoadMoreData";
import TreeViewNav from "./Components/TreeViewNav/TreeViewNav";
import menus from './Components/TreeViewNav/data'
import QrCode from "./Components/qr-code-generator/QrCode";

function App() {
  return (
    <div className="app">
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <ColorGenerater /> */}
      {/* Star Rating component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* ImageSlider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* LoadMoreData component */}
      {/* <LoadMoreData /> */}
      {/* Tree view component */}
      {/* <TreeViewNav menus={menus} /> */}
      {/* QRCode Generator */}
      <QrCode />
    </div>
  );
}

export default App;
