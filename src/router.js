import { ROUTER } from "./utils/router";
import HomePage from "./pages/user/HomePage";
import ProfilePage from "./pages/user/ProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/theme/MasterLayout";
import ProductPage from "./pages/user/ProductPage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTER.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTER.USER.PROFILE,
      component: <ProfilePage />,
    },{
      path: ROUTER.USER.PRODUCT,
      component: <ProductPage />,
    },
  ];
  return (
    <Router>
      <MasterLayout>
        <Routes>
          {userRouters.map((item, key) => {
            return <Route key={key} path={item.path} element={item.component} />;
          })}
        </Routes>
      </MasterLayout>
    </Router>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
