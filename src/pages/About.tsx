import Divider from "../components/foundation/Divider";
import Badge from "../components/foundation/Badge";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const interests = ["Reading", "Buying Clothes"];

export default function About() {
  useDocumentTitle("About");
  return (
    <div>
      <h2>About Me</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum ut nisl hendrerit
        lobortis. Nullam condimentum enim in nibh tincidunt, non rhoncus metus tempus. In semper
        nisi et turpis porttitor fermentum et et sem. Nullam fermentum nec quam et varius. Donec
        congue nunc eget purus laoreet pharetra. Aliquam mollis, lacus quis laoreet cursus, ex sem
        cursus tellus, in consectetur diam enim vel tellus. Sed pellentesque elit id nunc aliquet
        dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas.
      </p>

      <p>
        In congue eros nec nunc mollis, nec tempus ipsum laoreet. Nunc quis est vitae metus porta
        fringilla. Vestibulum vitae consequat nulla, placerat dapibus odio. Etiam mollis tortor eget
        nisi consequat dictum. Donec faucibus neque vitae ex rhoncus faucibus. Aenean lorem nunc,
        rhoncus id ipsum suscipit, vehicula aliquet dolor. Suspendisse mattis eros id ipsum
        vestibulum imperdiet. Fusce ornare pellentesque lacus, id ullamcorper orci tristique
        accumsan.
      </p>

      <p>
        Praesent ipsum purus, fermentum sit amet accumsan blandit, efficitur et risus. Duis lobortis
        ut augue ac suscipit. Nunc et orci quis velit pulvinar faucibus sit amet nec magna. Proin
        quis diam arcu. Aliquam pellentesque sagittis libero. Praesent eu neque sit amet lacus
        eleifend tincidunt ac id eros. Praesent malesuada suscipit volutpat.
      </p>

      <Divider label="Interests" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {interests.map((interest) => (
          <Badge key={interest} variant="outline">
            {interest}
          </Badge>
        ))}
      </div>

      <Divider label="Things I like" />

      <ul>
        <li>Reading</li>
        <li>Buying clothes</li>
      </ul>

      <Divider label="Things I don't like" />

      <ul>
        <li>Still thinking about this one</li>
      </ul>
    </div>
  );
}
