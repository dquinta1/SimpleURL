import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import {
    accountPath,
    customerPath,
    dashboardPath,
    loginPath, logoutPath, notFoundPath,
    productPath,
    registerPath,
    settingPath
} from "../../../path/path";
import {backToMainPage, redirectTo} from "../../../status/statusPageWidgets";

const items = [
  {
    href: dashboardPath,
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  // {
  //   href: customerPath,
  //   icon: (<UsersIcon fontSize="small" />),
  //   title: 'Customers'
  // },
  {
    href: productPath,
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Links'
  },
  {
    href: accountPath,
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: settingPath,
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
    {
        href: logoutPath,
        icon: (<LockIcon fontSize="small" />),
        title: 'Log out'
    },
  // {
  //   href: loginPath,
  //   icon: (<LockIcon fontSize="small" />),
  //   title: 'Login'
  // },
  // {
  //   href: registerPath,
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Register'
  // },
  {
    href: notFoundPath,
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  },

];

function checkWindowWidth(){
    let intViewportWidth = window.innerWidth;
    console.log(intViewportWidth)
    return false;
}

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;

  const lgUp = false


    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        <NextLink
                            href="/"
                            passHref
                        >
                           <div>
                               <Logo
                                   sx={{
                                       height: 42,
                                       width: 42
                                   }}
                               />

                           </div>
                        </NextLink>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    Simple URL
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    Your tier
                                    {' '}
                                    : free
                                </Typography>
                            </div>
                            <SelectorIcon
                                sx={{
                                    color: 'neutral.500',
                                    width: 14,
                                    height: 14
                                }}
                            />
                        </Box>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => {
                        return (
                            <div>
                                <div style={{"height": "35px"}}></div>
                                <NavItem
                                    key={item.title}
                                    icon={item.icon}
                                    href={item.href}
                                    title={item.title}
                                />

                            </div>
                        );

                    })}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
                <Box
                    sx={{
                        px: 2,
                        py: 3
                    }}
                >
                    <Typography
                        color="neutral.100"
                        variant="subtitle2"
                    >
                        Need more features?
                    </Typography>
                    <Typography
                        color="neutral.500"
                        variant="body2"
                    >
                        Check out our Pro solution template.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: 2,
                            mx: 'auto',
                            width: '160px',
                            '& img': {
                                width: '100%'
                            }
                        }}
                    >

                    </Box>
                    <div

                    >
                        <div onClick={()=>{window.location.href = backToMainPage() + "/price"}}>
                            <Button
                                color="secondary"
                                component="a"
                                endIcon={(<OpenInNewIcon />)}
                                fullWidth
                                sx={{ mt: 2 }}
                                variant="contained"
                            >
                                Switch To Pro
                            </Button>
                        </div>

                    </div>
                </Box>
            </Box>
        </>
    );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"

      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: 'black',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="permanent"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
