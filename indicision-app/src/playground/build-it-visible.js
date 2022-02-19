const app = {
  title: "Visibility Toggle",
};

const appRoot = document.getElementById("app");

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      {app.title && <h1>{app.title}</h1>}
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Helloooooooooooooooo</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
