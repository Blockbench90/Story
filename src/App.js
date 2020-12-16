import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import {SignIn} from "./pages/SingIn";
import Layout from "./pages/Layout";
import {UserApi} from "./restApi/userApi";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe} from "./store/reducers/userReducer";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import CircularProgress from "@material-ui/core/CircularProgress";
//TODO: поправить логинизацию, чтобы сразу перебрасывало на страницу пользователя
//проблемы скорее всего с фетчдата, проверке логинизации

const App = () => {
    console.log('app render')
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector(({user}) => user)
    const isAuth = useSelector(({user}) => user.isAuth)
    console.log(isAuth)

    //при первой загрузке, проверять пользователя по токену
    const checkUserAuth = async () => {
        try {
            const data = await UserApi.getMe()
            dispatch(fetchAuthMe(data))
        } catch (error) {
            console.log(error, "Ошибка логинизации")
        }
    }

    //если пользователь залогинен, редиректить на главную
    React.useEffect(() => {
        checkUserAuth()
    }, [])

    //проверка логинизации, если есть, на главную,
    //если нет токена, оставить на странице регистрации
    React.useEffect(() => {
        isAuth ? history.push('/home') : history.push('/')
        // if (!!data.data) {
        //     history.push('/home')
        // }
    }, [isAuth, data])
    return (
        <div className="App">
            <Route path="/" component={() => <SignIn/>} exact/>
            <Switch>
                <Layout>
                    <Route path="/home" component={() => <Home />}/>
                    <Route path="/profile" component={() => <Profile/>}/>
                </Layout>
            </Switch>
        </div>
    )
}

export default App;
