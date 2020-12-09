import React from 'react';
import PaletteIcon from '@material-ui/icons/Palette';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import CreateIcon from '@material-ui/icons/Create';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ModalBlock} from "./ModalBlock";
import {AddStoryForm} from "./AddStoryForm";
import {UserSideProfile} from "./UserSideProfile";
import {NavLink} from "react-router-dom";

export const SideMenu = ({classes}) => {
    console.log('SIDEMENU RENDER')
    const [visibleAddTweet, setSetVisibleAddTweet] = React.useState(false);

    const handleClickOpenAddTweet = () => {
        setSetVisibleAddTweet(true);
    };

    const onCloseAddTweet = () => {
        setSetVisibleAddTweet(false);
    };

    return (
        <>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <NavLink to='/home'>
                    <IconButton>
                            <ImportContactsOutlinedIcon className={classes.logoIcon} aria-label="" color="secondary"/>
                    </IconButton>
                    </NavLink>
                </li>
                <li className={classes.sideMenuListItem}>
                    <NavLink to='/home'>
                    <div>
                        <HomeIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Главная
                            </Typography>
                        </Hidden>
                    </div>
                    </NavLink>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Поиск
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Уведомления
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <MessageIcon className={classes.sideMenuListItemIcon}/>

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Сообщения
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkIcon className={classes.sideMenuListItemIcon}/>

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Закладки
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListIcon className={classes.sideMenuListItemIcon}/>

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Список
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <UserIcon className={classes.sideMenuListItemIcon}/>

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">
                                Профиль
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button
                        onClick={handleClickOpenAddTweet}
                        className={classes.sideMenuTweetButton}
                        variant="contained"
                        color="primary"
                        fullWidth>
                        <Hidden smDown>Опубликовать</Hidden>
                        <Hidden mdUp>
                            <CreateIcon/>
                        </Hidden>
                    </Button>
                    <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                        <div style={{width: 550}}>
                            <AddStoryForm maxRows={15} classes={classes}/>
                        </div>
                    </ModalBlock>
                </li>
            </ul>
            {/*<UserSideProfile classes={classes}/>*/}
        </>
    );
};
