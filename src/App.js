import React from "react";

import "./App.scss";
import Menu from "./components/Menu";
import Title from "./components/Title";

import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import axios from "axios";

export const AppContext = React.createContext({});

function App() {
  const [contactsData, setContactsData] = React.useState();
  const [portfolioData, setportfolioData] = React.useState();
  const [portfolioSkills, setportfolioSkills] = React.useState();

  React.useEffect(() => {
    async function fetchFunction() {
      try {
        const contactsResponse = await axios.get(
          `https://portfolio-972bb-default-rtdb.europe-west1.firebasedatabase.app/Contacts/Contacts.json`
        );

        const portfolioWorksResponse = await axios.get(
          `https://portfolio-972bb-default-rtdb.europe-west1.firebasedatabase.app/Portfolio/Portfolio.json`
        );

        const portfolioSkillsResponse = await axios.get(
          `https://portfolio-972bb-default-rtdb.europe-west1.firebasedatabase.app/Skills.json`
        );

        contactsResponse.data === null
          ? setContactsData([])
          : setContactsData(Object.values(contactsResponse.data));

        portfolioWorksResponse.data === null
          ? setportfolioData([])
          : setportfolioData(Object.values(portfolioWorksResponse.data));

        portfolioSkillsResponse.data === null
          ? setportfolioSkills([])
          : setportfolioSkills(Object.values(portfolioSkillsResponse.data));
      } catch (error) {
        alert("Unable to load data");
        console.log(error);
      }
    }

    fetchFunction();
  }, []);
  return (
    <AppContext.Provider
      value={{ contactsData, portfolioData, portfolioSkills }}
    >
      <div className="wrapper">
        <div
          className="content"
          // style={{ backgroundImage: `url("/img/mainback.jpg")` }}
        >
          <img
            className="tuly_logo"
            src={process.env.PUBLIC_URL + "/img/logoTuly.svg"}
            alt="Code"
          />
          <Menu />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
