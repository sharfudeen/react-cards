// import logo from "./logo.svg";
import { Card } from "./components/Card";
import { cardDetails } from "./data/cardDetails";
import "./App.css";
function App() {
  return (
    <section>
      <div className="container py-5">
        <header className="text-center mb-5 text-white">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <h1>Bootstrap pricing table</h1>
              <p>
                Easily create a classy pricing table in Bootstrap&nbsp;4.
                <br />
                <a
                  href="https://bootstrapious.com/snippets"
                  className="text-reset"
                >
                  Bootstrap snippet by Bootstrapious
                </a>
              </p>
            </div>
          </div>
        </header>
      </div>
      <div className="row text-center align-items-end">
        {cardDetails.map((data) => {
          return (
            <Card
              planName={data.planName}
              currencyPrefix={data.currencyPrefix}
              rate={data.rate}
              features={data.features}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
