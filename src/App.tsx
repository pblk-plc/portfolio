import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/nav";
import Header from "./components/Header";
import PageContainer from "./components/layout/PageContainer";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/foundation/ScrollToTop";
import { SITE } from "./config/site";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Photography = lazy(() => import("./pages/Photography"));
const PhotographyCategory = lazy(() => import("./pages/PhotographyCategory"));
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Header text={SITE.brand} />
        <Nav />
      </header>
      <PageContainer>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/photography/:category" element={<PhotographyCategory />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </PageContainer>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
