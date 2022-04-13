import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Alert, AlertTitle,
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {useAuth, useRegisterInDB} from "../../../Hooks";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../../Config";
import {backToMainPage, divider, statusNavBarWidget} from "../../../status/statusPageWidgets";
import {isShowError, returnErrorMessage} from "./pageUtils";
import {useState} from "react";



const Register = () => {

    const {user, register} = useAuth();
    const [errorMessage, setErrorMessage] = useState("success");

    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            policy: false
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            firstName: Yup
                .string()
                .max(255)
                .required(
                    'First name is required'),
            lastName: Yup
                .string()
                .max(255)
                .required(
                    'Last name is required'),
            password: Yup
                .string()
                .min(6)
                .max(255)
                .required(
                    'Password is required and the length should be at least 6 characters'),
            policy: Yup
                .boolean()
                .oneOf(
                    [true],
                    'This field must be checked'
                )
        }),
        onSubmit: () => {

        }
    });

    return (
        <>
            {statusNavBarWidget()}
            {divider()}
            <Head>
                <title>
                    Register | Material Kit
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
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Create a new account
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Use your email to create a new account
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="First Name"
                            margin="normal"
                            name="firstName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                            fullWidth
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            label="Last Name"
                            margin="normal"
                            name="lastName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            variant="outlined"
                        />
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
                        <br/>
                        {isShowError(errorMessage)}
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                ml: -1
                            }}
                        >
                            <Checkbox
                                checked={formik.values.policy}
                                name="policy"
                                onChange={formik.handleChange}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                I have read the
                                {' '}
                                <NextLink
                                    href="#"
                                    passHref
                                >
                                    <Link
                                        color="primary"
                                        underline="always"
                                        variant="subtitle2"
                                    >
                                        Terms and Conditions
                                    </Link>
                                </NextLink>
                            </Typography>
                        </Box>
                        {Boolean(formik.touched.policy && formik.errors.policy) && (
                            <FormHelperText error>
                                {formik.errors.policy}
                            </FormHelperText>
                        )}
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
                                    let lastName = formik.values.lastName, firstName = formik.values.lastName;

                                    let result = await register(email, password, lastName, firstName);
                                    console.log(result);
                                    if(result.toLowerCase().includes("error") === false){
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
                                Sign Up Now
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Have an account?
                            {' '}
                            <div
                                onClick={()=>{window.location = "/login"}}
                            >
                                <Link
                                    variant="subtitle2"
                                    underline="hover"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </Typography>
                    </form>
                </Container>
            </Box>
        </>
    );


    function enableButton(){
        let email = formik.values.email, password = formik.values.password;
        let lastName = formik.values.lastName, firstName = formik.values.lastName;
        if(Boolean(formik.touched.firstName && formik.errors.firstName) === false && Boolean(formik.touched.lastName && formik.errors.lastName) === false){
            if(Boolean(formik.touched.email && formik.errors.email) === false&& Boolean(formik.touched.password && formik.errors.password) === false){
                if(email && password){
                    if(lastName && firstName){
                        return false;
                    }
                }
            }
        }
        return true;
    }
};




export default Register;
