import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./Context/Movie.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </BrowserRouter>
);
