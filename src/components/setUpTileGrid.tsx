import Tile from "./tile";
import "./setUpTileGrid.css";

export default function SetUpTileGrid() {
  const renderedItems = [];

  for (let x = 1; x < 13; x++) {
    for (let y = 1; y < 20; y++) {
      if (x == 1 && y == 1) {
        renderedItems.push(
          <Tile x={x} y={y} className="pattern2">
            {x}
          </Tile>,
        );
      } else {
        renderedItems.push(
          <Tile x={x} y={y} className="">
            {x}
          </Tile>,
        );
      }
    }
  }

  renderedItems.push(
    <Tile x={2} y={2} className="led">
      Override
    </Tile>,
  );
  return (
    <>
      <div className="grid">{renderedItems}</div>
    </>
  );
}
