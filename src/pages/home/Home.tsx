import Toplist from "../../components/cards/Toplist";
import "./Home.scss";

const Home = () => {
  return (
    <div className="overview">
      <div className="overview__card overview__1">
        <Toplist />
      </div>
      <div className="overview__card overview__2">Card 2</div>
      <div className="overview__card overview__3">Card 3</div>
      <div className="overview__card overview__4">Card 4</div>
      <div className="overview__card overview__5">Card 5</div>
      <div className="overview__card overview__6">Card 6</div>
      <div className="overview__card overview__7">Card 7</div>
      <div className="overview__card overview__8">Card 8</div>
      <div className="overview__card overview__9">Card 9</div>
    </div>
  );
};

export default Home;
