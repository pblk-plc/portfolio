import "./App.scss";
import Nav from "./components/nav";
import { SingleCenteredImage } from "./components/Images/SingleCenteredImage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <header>
        <Header text={"P.B.L.K."} />
        <Nav />
      </header>
      <div className="parent">
        <SingleCenteredImage
          src="./img/chocolate_cookies.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/grilled_mushrooms.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/roasted_veg_salad.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/veg_alfredo.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/veg_lentil_soup.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/veg_stir_fry.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/veggie_carbonara.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        <SingleCenteredImage
          src="./img/veggie_tacos.jpg"
          alt="Car hood"
        ></SingleCenteredImage>
        {/* <SetUpTileGrid /> */}

        <h2>❤ Things I like ❤</h2>
        <ul>
          <li>📘 Reading</li>
          <li>🔎 Problem solving</li>
          <li>🏷 Buying clothes</li>
        </ul>

        <h2>❤ Things I don't like ❤</h2>
        <ul>
          <li>📘 Reading</li>
          <li>📘 Reading</li>
        </ul>
      </div>
    </>
  );
}
