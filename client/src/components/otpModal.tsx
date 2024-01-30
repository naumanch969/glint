import React, { useState, useEffect } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Snackbar } from '@mui/material';
import { Close } from '@mui/icons-material';
import { BACKEND_BASE_URL } from '../constant';

const OTPModal = ({ open, setOpen, setShowAlertTopbar, otpFormType }: { open: boolean, setOpen: any, setShowAlertTopbar: any, otpFormType: 'subscription' | 'contact' }) => {

    const [otp, setOtp] = useState<string>('');
    const [resendTime, setResendTime] = useState<number>(30);
    const [loader, setLoader] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarText, setSnackbarText] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            setResendTime((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!/^[0-9]{5}$/.test(otp) || otp.length !== 5 || otp === '') {
            setOpenSnackbar(true);
            setSnackbarText('OTP is not valid');
            return;
        }
        try {
            let email = ''
            let stringifiedEmail = ''
            if (otpFormType == 'contact') {
                stringifiedEmail = localStorage.getItem('contact_email')!
            }
            else {
                stringifiedEmail = localStorage.getItem('subscribe_email')!
            }

            if (stringifiedEmail) {
                email = JSON.parse(stringifiedEmail).email
            }
            else {
                setShowAlertTopbar(true)
                setOpenSnackbar(true)
                setSnackbarText('You have lost your data. Please resubmit the form.')
            }

            setLoader(true);
            const { data } = await axios.post(`${BACKEND_BASE_URL}/verify`, { otp, email });
            setOpenSnackbar(true);
            setSnackbarText(`Success! ${data.message}`);

            if (otpFormType == 'contact') {
                localStorage.removeItem('contact_email')
            }
            else {
                localStorage.removeItem('subscribe_email')
            }

            localStorage.setItem('maintopbar', JSON.stringify({ show: false }))
            setShowAlertTopbar(false)

            setOpen(false)
        } catch (err: any) {
            setOpenSnackbar(true);
            setSnackbarText(err?.response?.data?.message || 'Internal Server Error');
        } finally {
            setLoader(false);
        }
    };

    const handleResend = async (e: any) => {
        e.preventDefault();

        try {
            let email = ''
            let stringifiedEmail = ''
            if (otpFormType == 'contact') {
                stringifiedEmail = localStorage.getItem('contact_email')!
            }
            else {
                stringifiedEmail = localStorage.getItem('subscribe_email')!
            }

            if (stringifiedEmail) {
                email = JSON.parse(stringifiedEmail).email
            }
            else {
                setShowAlertTopbar(true)
                setOpenSnackbar(true)
                setSnackbarText('You have lost your data. Please resubmit the form.')
            }

            setLoader(true);
            const { data } = await axios.post(`${BACKEND_BASE_URL}/resend`, { email });
            setOpenSnackbar(true);
            setSnackbarText(`${data.message}`);
        } catch (err: any) {
            setOpenSnackbar(true);
            setSnackbarText(err?.response?.data?.message || 'Internal Server Error');
        } finally {
            setLoader(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleClose = () => {
        localStorage.setItem('maintopbar', JSON.stringify({ show: true }))
        setShowAlertTopbar(true)
        setOpen(false)
    }

    return (
        <>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbarText}
            />
            <Modal open={open} onClose={() => { }} className='w-screen h-screen flex justify-center items-center p-4 ' >
                <form onSubmit={handleSubmit} className="relative w-full sm:w-[70vw] md:w-[40rem] h-auto max-h-[80vh] flex flex-col items-center gap-[1rem] bg-gray border border-green rounded-lg px-8 py-4 ">

                    <button onClick={handleClose} className="absolute top-2 right-2 rounded-full p-[1px] w-[24px] h-[24px] flex justify-center items-center border border-green bg-white "><Close style={{ fontSize: '1rem', color: 'black' }} /></button>

                    <div className="space-y-2">
                        <h2 className='font-[cursive] font-bold text-[32px] gradient-text text-center w-full ' >Thanks for reaching out!</h2>
                        <p className='font-base text-white md:px-8 px-4 text-center ' >
                            We're thrilled to connect with you. To ensure a secure and seamless experience, a special key has been dispatched to your inbox. Enter the OTP to facilitate the completion of your form submission process. We appreciate your assistance!
                        </p>
                    </div>

                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        inputType="number"
                        renderSeparator={<span className="mx-1"> </span>}
                        renderInput={(props) => (
                            <div className="md:w-16 md:h-16 w-12 h-12">
                                <input
                                    {...props}
                                    style={{}}
                                    className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                    type="text"
                                />
                            </div>
                        )}
                    />
                    <div className="w-full px-12 space-y-3 ">
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                disabled={loader}
                                className='bg-green rounded-md px-4 py-2 text-white'
                            >
                                {loader ? 'Processing...' : 'Complete the submission'}
                            </button>
                        </div>

                        <div className="flex items-center justify-center text-white">
                            <button
                                disabled={resendTime > 0}
                                onClick={handleResend}
                                className='bg-inherit rounded-md px-4 py-2 font-bold'
                            >
                                Resend
                            </button>
                            {resendTime > 0 && <span className="ml-1">in {resendTime} seconds</span>}
                        </div>

                    </div>
                </form>
            </Modal>
        </>
    );
};

export default OTPModal;
