import React from "react";
// Librares
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
// Components
import Card from "../components/Card";
// Pages
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SigupPage";
// Store
import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
    let { path } = useRouteMatch();
    const isLoggedIn = useSelector(isLoggedInSelector());

    if (isLoggedIn) {
        return <Redirect to='/' />;
    }

    return (
        <div className='flex grow flex-col justify-center items-center  dark:text-slate-200 '>
            <Card>
                <Switch>
                    <Route path={path + "/login"} component={LoginPage} />
                    <Route path={path + "/signup"} component={SignUpPage} />
                    <Redirect to={path + "/signup"} />
                </Switch>
            </Card>
        </div>
    );
};

export default AuthLayout;
