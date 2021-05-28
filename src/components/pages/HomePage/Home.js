import HeroContainer from "../../HeroContainer/HeroContainer";
import Pricing from "../../Pricing/Pricing";
import { homeObjOne, homeObjFour, homeObjThree, homeObjTwo } from "./Data";
const Home = () => {
  return (
    <>
      <HeroContainer {...homeObjOne} />
      <HeroContainer {...homeObjThree} />
      <HeroContainer {...homeObjTwo} />
      <Pricing />
      <HeroContainer {...homeObjFour} />
    </>
  );
};

export default Home;
