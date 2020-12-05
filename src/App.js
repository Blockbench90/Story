import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import {SignIn} from "./pages/SingIn";
import Home from "./pages/Home";
import {UserApi} from "./restApi/userApi";
import {useDispatch, useSelector} from "react-redux";
import {authMeUser} from "./store/reducers/userReducer";

function App() {
    //РЕШИТЬ ПРОБЛЕМУ С РЕДИРЕКТОМ НА ГЛАВНУЮ СТРАНИЦУ
    // const dispatch = useDispatch()
    // const {data} = useSelector(({user}) => user);
    // //при первой загрузке, проверять пользователя по токену
    // const checkUserAuth = async () => {
    //     try {
    //         const data = await UserApi.getMe()
    //         dispatch(authMeUser(data))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // //если пользователь залогинен, редиректить на главную
    // React.useEffect(() => {
    //     checkUserAuth()
    // }, [])
    // if (data) {
    //     return <Redirect to={'/home'}/>
    // }

    return (
        <div className="App">
            <Switch>
                <Route path="/" component={SignIn} exact/>
                <Route path="/home" component={Home} />
            </Switch>
        </div>
    );
}

export default App;
