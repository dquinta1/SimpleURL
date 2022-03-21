import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import {DashboardLayout, DashboardLayoutRoot} from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import {useState} from "react";
import {DashboardSidebar} from "../components/dashboard-sidebar";

const Customers = () => (
  <>
    <Head>
      <title>
        Customers | Material Kit
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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);


export const customerPage = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return (
        <div>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {Customers()}
                </Box>
            </DashboardLayoutRoot>
            <DashboardSidebar

                open={true}
            />
        </div>


    );
}

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default customerPage;
