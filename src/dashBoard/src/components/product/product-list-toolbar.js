import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import {getUserInCache} from "../../../../cacheInfo";
import {useShortenUrl} from "../../../../Hooks";

export  function ProductListToolbar (){
    let userid = getUserInCache().uid;
    const urlShortenMutation = useShortenUrl();

    return (
       <div>
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
       </div>
    );
}
