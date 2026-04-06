import { Link } from "react-router-dom";
import { SingleCenteredImage } from "../components/Images/SingleCenteredImage";
import BlogPostCard from "../components/blog/BlogPostCard";
import Badge from "../components/foundation/Badge";
import Divider from "../components/foundation/Divider";
import { getAllPosts } from "../lib/blogLoader";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { SITE } from "../config/site";
import "./Home.css";

const latestPosts = getAllPosts().slice(0, 3);

const interests = ["Cloud Computing", "Problem Solving", "Reading", "Photography"];

export default function Home() {
  useDocumentTitle("Home");
  return (
    <div>
      <SingleCenteredImage
        src="/img/chocolate_cookies.jpg"
        alt="Close-up of homemade chocolate cookies"
      />

      <section className="home-section home-intro">
        <h2>Hey, I'm {SITE.author}</h2>
        <p>
          In congue eros nec nunc mollis, nec tempus ipsum laoreet. Nunc quis est vitae metus porta
          fringilla. Vestibulum vitae consequat nulla, placerat dapibus odio. Etiam mollis tortor
          eget nisi consequat dictum. Donec faucibus neque vitae ex rhoncus faucibus. Aenean lorem
          nunc, rhoncus id ipsum suscipit, vehicula aliquet dolor. Suspendisse mattis eros id ipsum
          vestibulum imperdiet. Fusce ornare pellentesque lacus, id ullamcorper orci tristique
          accumsan.
        </p>
        <Link to="/about" className="home-more-link">
          More about me &rarr;
        </Link>
      </section>

      <Divider label="Latest Thoughts" />

      <section className="home-section">
        <div className="home-posts">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>
        <Link to="/blog" className="home-more-link">
          View all posts &rarr;
        </Link>
      </section>

      <Divider label="Interests" />

      <section className="home-section">
        <div className="home-interests">
          {interests.map((interest) => (
            <Badge key={interest} variant="outline">
              {interest}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
