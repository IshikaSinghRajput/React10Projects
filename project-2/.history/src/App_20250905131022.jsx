import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/Contact/ContactHeader";
import ContactFormj from "./components/ContactForm/ContactFormj";
import Button from "./components/Button/Button";
const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <ContactHeader />
        <ContactFormj />
      </main>
    </>
  );
};

export default App;
