import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { publishRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRoutes.map((route, index) => {
            const Page = route.element;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.Layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
