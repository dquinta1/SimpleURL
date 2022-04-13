import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import {backToMainPage, divider, redirectTo, statusNavBarWidget} from "../../../status/statusPageWidgets";
import {dashboardPath} from "../../../path/path";
import {useState} from "react";
import {useAuth} from "../../../Hooks";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../Config";
import {isShowError, returnErrorMessage} from "./pageUtils";



function Login () {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            password: Yup
                .string()
                .max(255)
                .required(
                    'Password is required')
        }),
        onSubmit: () => {
            router.push('/');
        }
    });
    const {login} = useAuth();
    const [errorMessage, setErrorMessage] = useState("success");
    return (
        <>
            {statusNavBarWidget()}
            {divider()}
            <Head>
                <title>Login</title>
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
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }} style={{textAlign: "center"}}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Sign in
                            </Typography>

                        </Box>


                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        {isShowError(errorMessage)}
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                disabled={enableButton()}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                onClick={async () => {
                                    let email = formik.values.email, password = formik.values.password;
                                    let result = await login(email, password);
                                    console.log(result)
                                    if(result.toString().toLowerCase().includes("error") === false){
                                        window.location = backToMainPage() + "/dashboard";
                                        setErrorMessage("success");
                                    } else{
                                        let matchResult = result.match(/\(([^)]+)\)/);

                                        if(matchResult){
                                            let matchedString = matchResult[1];
                                            let error = returnErrorMessage(matchedString);
                                            setErrorMessage(error);
                                            console.log(error);
                                        }
                                    }
                                }}
                            >
                                Sign In Now
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Don&apos;t have an account?
                            {' '}
                            <div
                                onClick={()=>{window.location = "/register"}}
                            >
                                <Link
                                    to="/register"
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </Typography>

                    </form>
                </Container>
            </Box>
        </>
    );
    function loginWidget() {
        return (
            <div>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Button
                            color="info"
                            fullWidth
                            startIcon={<FacebookIcon />}
                            onClick={formik.handleSubmit}
                            size="large"
                            variant="contained"
                        >
                            Login with Facebook
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Button
                            fullWidth
                            color="error"
                            startIcon={<GoogleIcon />}
                            onClick={formik.handleSubmit}
                            size="large"
                            variant="contained"
                        >
                            Login with Google
                        </Button>
                    </Grid>
                </Grid>
                <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                >
                    or login with email address
                </Typography>
            </div>

        );
    }

    function enableButton(){
        let email = formik.values.email, password = formik.values.password;
        let errorEmail = Boolean(formik.touched.email && formik.errors.email);
        let errorPassword = Boolean(formik.touched.password && formik.errors.password);

        if(errorEmail === false && errorPassword === false){
            if(email && password) {
                return false;
            }
        }
        return true;
    }



}





export default Login;
