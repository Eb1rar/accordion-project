import data from "./data";
// import "./index.css";
import SingleQuestion from "./Question";
import { useState } from "react";

const App = () => {
  //   const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
