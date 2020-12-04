import React from "react";
import {ModalBlock} from "../../../componetns/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {useStylesSignIn} from "../theme";

{/*БЛОК "ВОЙТИ"*/}
const LoginModal = ({open, onClose}) => {
    const classes = useStylesSignIn();
    return (
        <ModalBlock visible={open} onClose={onClose}
                    classes={classes} title="Войти в аккаунт">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField className={classes.loginSideField} autoFocus id="email"
                               label="E-Mail" InputLabelProps={{shrink: true}} variant="filled"
                               type="email" fullWidth/>
                    <TextField className={classes.loginSideField} autoFocus id="password"
                               label="Пароль" InputLabelProps={{shrink: true}} variant="filled"
                               type="password" fullWidth/>
                    <NavLink to='/home'>
                        <Button onClick={onClose} variant="contained"
                                color="primary" fullWidth>
                            Войти
                        </Button>
                    </NavLink>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    )
}
export default LoginModal