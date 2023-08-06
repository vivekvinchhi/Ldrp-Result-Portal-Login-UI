import styles from './login.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from './It_is_logo_of_LDRP.png';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
  const forgetpass = () => {
    navigate("/Forgotpassword");
  };
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
                            
                                <h2 className={styles.h2} >Log in</h2>

                                <span> 
                                    <TextField
                                        id="outlined-required"
                                        label="Email / Enrollment No."
                                    />
                                </span>


                               <p> <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                </p>
                              <button className={styles.button}>Log in</button>
                              <p><button className={styles.buttonf} onClick={forgetpass}>Forget password</button>
                              </p>
                            
                        </div>
                    </Box>
                   

                </div>
            </div>

        </>
    );
};

export default Login;
