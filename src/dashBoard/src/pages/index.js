import Head from 'next/head';
import {Box, Container, Divider, Drawer, Grid} from '@mui/material';
import { Visits } from '../components/dashboard/budget';
import NextLink from 'next/link';

import {LatestOrders, VisitsDetails} from '../components/dashboard/latest-orders';
import { LatestLinks } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import {DashboardLayout, DashboardLayoutRoot} from '../components/dashboard-layout';
import {func} from "prop-types";
import {DashboardSidebar} from "../components/dashboard-sidebar";
import {useState} from "react";
import {DashboardNavbar} from "../components/dashboard-navbar";
import {NavItem} from "../components/nav-item";
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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

const Dashboard = () => (

  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Visits />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestLinks sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <VisitsDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);





export const dashboardPage = ()=>{

  return (
      <div>
          <>
              <DashboardLayoutRoot>
                  <Box
                      sx={{
                          display: 'flex',
                          flex: '1 1 auto',
                          flexDirection: 'column',
                          width: '100%'
                      }}
                  >
                      {Dashboard()}
                  </Box>
              </DashboardLayoutRoot>
              <DashboardSidebar

                  open={true}
              />
          </>
      </div>


  );
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default dashboardPage;
