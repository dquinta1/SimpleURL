import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {backToMainPage, redirectTo} from "../../../status/statusPageWidgets";

const NotFound = () => (
  <>
    <Head>
      <title>
        404 | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
          <br/><br/><br/>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h3"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src="https://material-kit-react.devias.io/static/images/undraw_page_not_found_su7k.svg"
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
            <div>
                <Button
                    component="a"
                    startIcon={(<ArrowBackIcon fontSize="small" />)}
                    sx={{ mt: 3 }}
                    variant="contained"
                    onClick={()=>{window.location = backToMainPage() + "/dashboard"}}
                >
                    Go back to dashboard
                </Button>
            </div>
        </Box>
      </Container>
    </Box>
  </>
);


export default NotFound;
