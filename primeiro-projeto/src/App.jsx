import React from "react";
import './styles/App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Article } from './components/Article/Article'

import dashboardImg from './assets/images/dashboard.png'
import womenImg from './assets/images/women.png'
import whatsImg from './assets/images/whats.png'
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis culpa reprehenderit excepturi voluptatem impedit aperiam officiis, vitae libero quae qui eos fuga? Saepe ipsum dolor ipsam incidunt. Laborum, in?"
            thumbnail = {dashboardImg}
          />

          <Article title="Vibrant Portrtaits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi mollitia molestiae corporis rerum provident earum doloremque qui temporibus eos dolor sit esse, modi repellat. Ipsum eius numquam maxime odio temporibus."
            thumbnail = {womenImg}
          />
        

          <Article title="36 Days of Malayalan type"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur praesentium, minima odit possimus natus quidem. Doloremque sit facere illo suscipit sed optio error quidem voluptatibus vero qui. Illum, molestiae."
            thumbnail = {whatsImg}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis culpa reprehenderit excepturi voluptatem impedit aperiam officiis, vitae libero quae qui eos fuga? Saepe ipsum dolor ipsam incidunt. Laborum, in?"
            thumbnail = {dashboardImg}
          />
        </section>

      </>
    );
  }
}

export default App;
