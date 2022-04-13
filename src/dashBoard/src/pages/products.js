import Head from 'next/head';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    InputAdornment,
    Pagination, SvgIcon,
    TextField,
    Typography
} from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import {DashboardLayout, DashboardLayoutRoot} from '../components/dashboard-layout';
import {DashboardSidebar} from "../components/dashboard-sidebar";
import {validateUser} from "../../../utils";
import {getUserInCache} from "../../../cacheInfo";
import {Search as SearchIcon} from "../icons/search";
import {useShortenUrl} from "../../../Hooks";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";
import {checkError, checkValidURL, disableButton, returnErrorMessage, Transition} from "../../../App";


export function Products () {
    let userid = getUserInCache().uid;
    const urlShortenMutation = useShortenUrl();
    const onClickToShortenUrl = (uid, urlToShorten, prefix) => {
        if (urlToShorten && urlToShorten.length >= 1) {
            urlShortenMutation.mutate(
                { userID: uid, originalUrl: urlToShorten, prefix:prefix },
                {
                    onSuccess: () =>{},
                    onError: () =>{},
                }
            )
        } else {
            console.log("error");
        }
    }

    const [openAddLink, setOpenAddLink] = useState(false);
    const [validURL, setValidURL] = React.useState(false);
    const [inputURL, setInputURL] = React.useState("");


    function setURLAndCheck(event){
        let url = event.target.value;
        setInputURL(url);
        setValidURL(checkValidURL(url));
    }

    return (
        <div>
            <Head>
                <title>
                    Products | Material Kit
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
                    <Box>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                m: -1
                            }}
                        >
                            <Typography
                                sx={{ m: 1 }}
                                variant="h4"
                            >
                                Links
                            </Typography>
                            <Box sx={{ m: 1 }}>

                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={()=>{setOpenAddLink(true)}}
                                >
                                    Add links
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Card>
                                <CardContent>
                                    <Box sx={{ maxWidth: 500 }}>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SvgIcon
                                                            fontSize="small"
                                                            color="action"
                                                        >
                                                            <SearchIcon />
                                                        </SvgIcon>
                                                    </InputAdornment>
                                                )
                                            }}
                                            placeholder="Search link"
                                            variant="outlined"
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                    <Box sx={{pt: 3}}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {products.map((product) => (
                                <Grid
                                    item
                                    key={product.id}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <ProductCard product={product}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pt: 3
                        }}
                    >
                        <Pagination
                            color="primary"
                            count={3}
                            size="small"
                        />
                    </Box>
                </Container>
            </Box>
            <div>
                <Dialog
                    open={openAddLink}
                    onClose={()=> {
                        setOpenAddLink(false)
                    }}
                    fullWidth
                    maxWidth="md"
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Add your link"}
                    </DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label = {returnErrorMessage(validURL, inputURL)}
                            error = {checkError(validURL, inputURL)}
                            onChange={event => setURLAndCheck(event)}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {
                            setOpenAddLink(false)
                        }}>Cancel</Button>
                        <Button disabled={disableButton(validURL, inputURL)} onClick={()=> {
                            onClickToShortenUrl(userid, inputURL, "123");
                            setOpenAddLink(false)
                        }} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

function productPage(){
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
                    {Products()}
                </Box>
            </DashboardLayoutRoot>
            <DashboardSidebar

                open={true}
            />
        </div>

    );
}


Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default productPage;
