import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import rockets from "./rockets.json"
import Card from "./components/Card";

class App extends React.Component {
    state = {
        rockets,
        score: 0,
        highScore: 0
    };

    render() {
        return (

            <div>
                <Navbar />
                <Wrapper>
                    {this.state.rockets.map(rocket => (
                        <Card
                            key={rocket.id}
                            name={rocket.name}
                            image={rocket.image}
                        />
                    ))}

                </Wrapper>
                {/*<Footer /> */}
            </div>

        )
    };
}

export default App;
