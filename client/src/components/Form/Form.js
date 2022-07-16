import React,{useState} from "react";
import useStyles from './styles';
import  {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';


const Form=() =>{
    const handleSubmit=()=>{

    }

    const [postData,setPostData]=useState({
        creator: '', title: '', message: '', tags: '',selectedFile: ''});
    const classes=useStyles();
    return(
        < Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memort</Typography>
            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" fullWidth
            value={postData.creator}
            //since we are set the values of each of the fields one after another if we dont spread the data using
            //..posData only the last Field value will be set and the remaining gets replaced.
            onChange={(e) => setPostData({...postData,creator:e.target.value})}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData,title:e.target.value})}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData,message:e.target.value})}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData,tags:e.target.value})}/>
            
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData,selectedFile:base64})}


                />
            </div>
            </form>
        </Paper>
    );
}

export default Form;