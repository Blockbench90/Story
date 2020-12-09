import React from 'react';
import {Route, useHistory, Switch} from 'react-router-dom'
import {SignIn} from "./pages/SingIn";
import Home from "./pages/Home";
import {UserApi} from "./restApi/userApi";
import {useDispatch, useSelector} from "react-redux";
import {authMeUser} from "./store/reducers/userReducer";


const App = () => {
    console.log('App RENDER')
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector(({user}) => user)

    // //при первой загрузке, проверять пользователя по токену
    const checkUserAuth = async () => {
        try {
            const data = await UserApi.getMe()
            dispatch(authMeUser(data))
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
     if(!!data.data) {
         history.push('/home')
     }
     },[data.data])
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={() => <SignIn/>} exact/>
                <Route path="/home" component={() => <Home/>} />
            </Switch>
        </div>
    );
}

export default App;
