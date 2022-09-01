import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from './components/UserProfile';


function App() {

 // const dispatch = useDispatch();
  const authentic = useSelector((state) => state.auth.isAuthenticated);

 
  return (
    <Fragment>
      <Header />
      {!authentic && <Auth />}
      {authentic && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
