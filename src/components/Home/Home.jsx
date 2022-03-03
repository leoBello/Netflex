import { Header } from "../Header/Header";
import { Banner } from "../Banner/Banner";
import { ProductRow } from "../ProductRow/ProductRow";
import requests from "../../request";
import "./home.scss";

const Home = () => (
  <div className="home-container">
    <Header />
    <Banner>
      <ProductRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      ></ProductRow>
      <ProductRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      ></ProductRow>
      <ProductRow
        title="Comedi Movies"
        fetchUrl={requests.fetchComediMovies}
      ></ProductRow>
    </Banner>
  </div>
);

export { Home };
