import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ReadmePage from "./pages/ReadmePage";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { common } from "./styles/common";

function Routes() {
  return (
    <ThemeProvider common={common}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ExporterHubPage} />
          <Route exact path="/detail" component={ReadmePage} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
