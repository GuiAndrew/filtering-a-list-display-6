import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote/Quote'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote:
            "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
          character: "Lisa Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
          characterDirection: "Right"
        },
        {
          quote:
            "I live in a single room above a bowling alley...and below another bowling alley.",
          character: "Frank Grimes",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
          characterDirection: "Left"
        },
        {
          quote: "Ahh! Sweet liquor eases the pain.",
          character: "Troy McClure",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
          characterDirection: "Right"
        },
        {
          quote:
            "Shoplifting is a victimless crime, like punching someone in the dark.",
          character: "Nelson Muntz",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
          characterDirection: "Left"
        },
        {
          quote:
            "You're turning me into a criminal when all I want to be is a petty thug.",
          character: "Bart Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          characterDirection: "Right"
        },
        {
          quote: "But my mom says I'm cool.",
          character: "Milhouse Van Houten",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
          characterDirection: "Right"
        },
        {
          quote:
            'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
          character: "Homer Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          characterDirection: "Right"
        },
        {
          quote: "Nothing you say can upset us. We're the MTV generation.",
          character: "Bart Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          characterDirection: "Right"
        },
        {
          quote: "Oh, so they have Internet on computers now!",
          character: "Homer Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          characterDirection: "Right"
        },
        {
          quote: "Ahh! Sweet liquor eases the pain.",
          character: "Troy McClure",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
          characterDirection: "Right"
        }
      ]
    };
  } 

  render() { 
    let filterList = this.state.quotes.filter((quote) =>  quote.character.includes('Simpson'));
    return (
      <div className="App">
        { 
          // this.state.quotes.map((quote, index) => <Quote key={ index } { ...quote } />) // Only map
          // this.state.quotes.map((quote, index) => quote.character.includes('Simpson') ? <Quote key={ index } { ...quote } /> : null) // Only map doing the filter
          // this.state.quotes.filter((quote) =>  quote.character.includes('Simpson')).map((quote, index) => <Quote key={ index } { ...quote } />) // Doing filter and

          filterList.map((quote, index) => <Quote key={ index } { ...quote } />) // Doing filter(in variable) and map.
        }  
      </div>
    );
  } 
}

export default App;
