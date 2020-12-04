import {makeStyles} from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import {colors} from "@material-ui/core";

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 40,
    },
    modalMenu: {
      '@media (min-width:600px)': {
          display: 'none',
      }
    },
    menuHeader: {
        '@media (max-width:600px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 20
        }
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
        '@media (max-width:600px)': {
            display: 'none',
        }
    },
    sideMenuListItem: {
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },

        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 5,
            transition: 'background-color 0.1s ease-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 17,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 30,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    storyWrapper: {
        color: 'inherit',
        textDecoration: 'none',
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    storyCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    storyHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    storyHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    storyHeaderBackButton: {
        marginRight: 20,
    },
    story: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 10,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    storyAvatar: {
        display: 'flex-start',
        width: theme.spacing(5.5),
        height: theme.spacing(5.5),
        marginRight: 10,
        '@media (max-width:1100px)': {
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
        },
        '@media (max-width:890px)': {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        '@media (max-width:600px)': {
                width: theme.spacing(3.5),
                height: theme.spacing(3.5),
        }
    },
    storyFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    storyUserName: {
        color: grey[500],
    },
    storyCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    storyHed: {
        flex: 1
    },
    fullStory: {
        padding: 22,
        paddingBottom: 0,
    },
    fullStoryText: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
    fullStoryFooter: {
        margin: '0 auto',
        borderTop: '1px solid #E6ECF0',
        left: 0,
        maxWidth: '100%',
        justifyContent: 'space-around',
        padding: '2px 0',
        marginTop: 20,
    },
    rightSide: {
        width: 210,
        paddingTop: 20,
        position: 'sticky',
        top: 0,
        '@media(max-width: 640px)': {
            display: 'none'
        }
    },
    rightSideBlock: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 30,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 30,
        padding: '10px 15px',
        width: 260,
        borderRadius: 50,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.lightBlue[50],
        },
    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        },
    },
}))

