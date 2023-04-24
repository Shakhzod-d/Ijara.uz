import { useEffect } from "react";
import "./App.css";
import { AsideFilter } from "./components/Aside";
import { ItemContainer } from "./components/ItemContainer/ItemContainer";
import { useDispatch } from "react-redux";
import { updatePosts } from "./redux/Thunk";
import { Login } from "./pages/login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(updatePosts());
  }, []);

  return (
    <div className="app">
      <main className="main">
        <Login />
        {/* <AsideFilter />
        <ItemContainer /> */}
      </main>
    </div>
  );
}

export default App;
