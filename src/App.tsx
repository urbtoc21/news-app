import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import News from "./components/News.tsx";
import Header from "./components/Header.tsx";
import Categories from "./components/Categories.tsx";
import {makeStyles} from "@mui/styles";

function App() {

    const classes = useStyles();

  return (
    <div className={classes.container}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<News />}/>
                <Route path={"/categories"} element={<Categories />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        width: "100%",
    },
});

export default App
