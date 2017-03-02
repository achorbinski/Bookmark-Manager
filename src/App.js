import React, { Component } from 'react';
import Subject from './Components/Subject';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {resources:
      [
        {subject: "Functional Programming Basics",
        resources: [{title: "LearnCode Academy React Tutorial",
                    url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                    {title: "LearnCode Academy React Tutorial",
                    url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae"},
                    {title: "LearnCode Academy React Tutorial",
                    url: "http://stack.formidable.com/es6-interactive-guide/#/"}
                  ]},
        {subject: "Week 2",
        resources: [{title: "LearnCode Academy React Tutorial",
                  url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                  {title: "LearnCode Academy React Tutorial",
                  url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                  {title: "Thinking in React",
                  url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                  {title: "Mindspace React Tutorial",
                  url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                  {title: "LearnCode Academy React Tutorial",
                  url: "https://youtu.be/fd2Cayhez58"}
                ]},
          {subject: "Week 3",
          resources: [{title: "LearnCode Academy React Tutorial",
                    url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                    {title: " Academy React Tutorial",
                    url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                    {title: "Thinking in React",
                    url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
                    {title: "Mindspace React Tutorial",
                    url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                    {title: "LearnCode Academy React Tutorial",
                    url: "https://youtu.be/fd2Cayhez58"}
                  ]}
          ]
  }


};





  render() {
  return (
    <div>
      <div>
       {
         this.state.resources.map((resource) => {
           return (
          <Subject items={resource}/>
            )
          })
        }
      </div>
      <div>
        <form>
          <input type="text" default="placeholder"/>
          <button>Add New Resource</button>
        </form>
      </div>
    </div>
    );
  }
}

export default App;
