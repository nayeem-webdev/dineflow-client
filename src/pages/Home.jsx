import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import ListProduct from "../components/ListProduct";
import TopFoodsSection from "../components/TopFoodSection";

const Home = () => {
  const slides = [
    {
      image: "/assets/slide 1.jpg",
      title: "Welcome to DineFlow",
      description: "Simplify your restaurant management with DineFlow.",
    },
    {
      image: "/assets/slide 2.jpg",
      title: "Discover Culinary Excellence",
      description:
        "Streamline operations and enhance customer satisfaction with DineFlow.",
    },
    {
      image: "/assets/slide 3.jpg",
      title: "Manage Your Restaurant with Ease",
      description:
        "DineFlow offers robust tools to make restaurant management effortless.",
    },
  ];

  return (
    <div>
      <Hero slides={slides} />
      <TopFoodsSection />
      <ListProduct />
      <AboutUs />
    </div>
  );
};

export default Home;
