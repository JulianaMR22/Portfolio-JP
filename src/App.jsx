import CardPresentation from "./components/card/cardPresentation/CardPresentation";
import CardCredential from "./components/card/cardCredential/CardCredential";
import CardWebProject from "./components/card/cardWebProject/CardWebProject";
import CardTools from"./components/card/cardTools/CardTools";
import CardGameProject from "./components/card/cardGameProject/CardGameProject";
import CardBlogPost from "./components/card/cardBlogPost/CardBlogPost";
import CardProfiles from "./components/card/cardProfiles/CardProfiles";
import "./App.css";

function App() {
  return <div className="main__container">
    <CardPresentation/>
    <CardCredential/>
    <CardWebProject/>
    <CardTools/>
    <CardGameProject/>
    <CardBlogPost/>
    <CardProfiles/>

  </div>;
}

export default App;
