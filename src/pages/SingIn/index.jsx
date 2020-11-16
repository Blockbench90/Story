import React from 'react';
import {Typography, Button} from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {ModalBlock} from "../../componetns/ModalBlock";
import Paper from "@material-ui/core/Paper";
import {useStylesSignIn} from "./theme";


export const SignIn = () => {
    const classes = useStylesSignIn();
    //установка видимости модального окна
    const [visibleModal, setVisibleModal] = React.useState('signIn' | 'signUp');
    //для входа
    const handleClickOpenSignIn = () => {
        setVisibleModal('signIn');
    };
    //для регистрации
    const handleClickOpenSignUp = () => {
        setVisibleModal('signUp');
    };
    //для закрытия
    const handleCloseModal = () => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>

            <section className={classes.leftSide}>
                <ImportContactsOutlinedIcon color="primary" className={classes.leftSideBigIcon}/>
            </section>
            {/*БЛОК "ЗАГОЛОВКОВ"*/}
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <ImportContactsOutlinedIcon color="primary" className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
                        Услышал от деда, мамы, дяди, тети...</Typography>
                    <Typography className={classes.loginSubTitle}>
                        <b>Не храни это в себе, поделись!</b></Typography>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}}
                            variant="contained" color="primary" fullWidth>
                        Зарегистрироваться</Button>

                    <Button onClick={handleClickOpenSignIn} variant="outlined"
                            color="primary" fullWidth>
                        Войти</Button>
                    {/*БЛОК "ВОЙТИ"*/}
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal}
                                classes={classes} title="Войти в аккаунт">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField className={classes.loginSideField} autoFocus id="email"
                                           label="E-Mail" InputLabelProps={{ shrink: true }} variant="filled"
                                           type="email" fullWidth/>
                                <TextField className={classes.loginSideField} autoFocus id="password"
                                           label="Пароль" InputLabelProps={{ shrink: true }} variant="filled"
                                           type="password" fullWidth/>
                                <Button onClick={handleCloseModal} variant="contained"
                                        color="primary" fullWidth>Войти</Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    {/*БЛОК "РЕГИСТРАЦИИ"*/}
                    <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal}
                                classes={classes} title="Создайте учетную запись">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField className={classes.registerField} autoFocus
                                           id="name" label="Имя" InputLabelProps={{ shrink: true }}
                                           variant="filled" type="name" fullWidth />
                                <TextField className={classes.registerField} autoFocus
                                           id="email" label="E-Mail" InputLabelProps={{ shrink: true }}
                                           variant="filled" type="email" fullWidth />
                                <TextField className={classes.registerField} autoFocus
                                           id="password" label="Пароль" InputLabelProps={{ shrink: true }}
                                           variant="filled" type="password" fullWidth />
                                <Button variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};

