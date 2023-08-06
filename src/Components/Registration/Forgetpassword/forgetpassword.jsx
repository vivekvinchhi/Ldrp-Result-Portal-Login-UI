import styles from './forget.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from '../It_is_logo_of_LDRP.png';



const Forgotpass = () => {

    return (
        <>
       
            <div className={styles.wrapper}>
                <div className={styles.right}>
                    <h2 className={styles.h2}>Result Portal</h2>
                <p> <img src={logo} alt="Ldrp" /></p>
               <p><h2 className={styles.h2}>Ldrp Institute of Technology And Research</h2></p>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className={styles.one}>
                            
                                <h2 className={styles.h2} >Forgot Password</h2>

                                <span> 
                                    <TextField
                                        id="outlined-required"
                                        label="Email / Enrollment No."
                                    />
                                </span>
                              <p><button className={styles.button}>Submit</button></p>
                        </div>
                    </Box>
                   

                </div>
            </div>

        </>
    );
};

export default Forgotpass;
