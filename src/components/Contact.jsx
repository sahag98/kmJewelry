import React, { useRef, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import validator from 'validator';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {

  // const validateEmail = (e) => {
  //   var email = e.target.value
  
  //   if (validator.isEmail(email)) {
  //     setEmailError('Valid Email :)')
  //   } else {
  //     setEmailError('Enter valid Email!')
  //   }
  // }
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const formRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
 

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    if (validator.isEmail(email)) {
      console.log("Email")
    } else {
      console.log("not email");
    }
    emailjs
      .sendForm(
        'service_vviq8ml',
        'template_qyxugqe',
        formRef.current,
        'user_d2qZiInk63cNZqWX4wPoS'
      )
      .then((result) => {
        console.log(result.text);
        handleClick();
      },
        (error) => {
          console.log(error.text);
        });



      }
  return (
    <>
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

      <section className="bg-zinc-200 py-20 lg:py-[120px] overflow-hidden relative z-10 scroll-smooth">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-indigo-600 font-semibold text-4xl">
                  CONTACT US
                </span>
                <h2 className="
                      text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-[40px]
                      ">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base text-body-color leading-relaxed mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  adiqua minim veniam quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Your Name" className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            " required name='user_name' />
                  </div>
                  <div className="mb-6">
                    <input onChange={e=>setEmail(e.target.value)} value={email}type="email" placeholder="Your Email" className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            " required name='user_email' />
                  </div>
                  <div className="mb-6">
                    <input onChange={e=>setPhone(e.target.value)} value={phone}type="text" placeholder="Your Phone" className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            " required name='user_phone' />
                  </div>
                  <div className="mb-6">
                    <textarea onChange={e=>setMessage(e.target.value)} value={message} rows={6} placeholder="Your Message" className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            " required name='message' />
                  </div>
                  <div>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                    <button  type="submit" className="
                            w-full
                            text-white
                            bg-primary
                            rounded
                            border bg-zinc-700
                            p-3
                            transition
                            hover:bg-indigo-800
                            " required>
                      Send Message
                    </button>
                    <Snackbar  open={open} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Your email has been sent!
                      </Alert>
                    </Snackbar>
                    
                    </Stack>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3" />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg width={34} height={134} viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="31.9993" cy={132} r="1.66667" transform="rotate(180 31.9993 132)" fill="black" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="black" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="black" />
                      <circle cx="31.9993" cy={88} r="1.66667" transform="rotate(180 31.9993 88)" fill="black" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="black" />
                      <circle cx="31.9993" cy={45} r="1.66667" transform="rotate(180 31.9993 45)" fill="black" />
                      <circle cx="31.9993" cy={16} r="1.66667" transform="rotate(180 31.9993 16)" fill="black" />
                      <circle cx="31.9993" cy={59} r="1.66667" transform="rotate(180 31.9993 59)" fill="black" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="black" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="black" />
                      <circle cx="17.3333" cy={132} r="1.66667" transform="rotate(180 17.3333 132)" fill="black" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="black" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="black" />
                      <circle cx="17.3333" cy={88} r="1.66667" transform="rotate(180 17.3333 88)" fill="black" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="black" />
                      <circle cx="17.3333" cy={45} r="1.66667" transform="rotate(180 17.3333 45)" fill="black" />
                      <circle cx="17.3333" cy={16} r="1.66667" transform="rotate(180 17.3333 16)" fill="black" />
                      <circle cx="17.3333" cy={59} r="1.66667" transform="rotate(180 17.3333 59)" fill="black" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="black" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="black" />
                      <circle cx="2.66536" cy={132} r="1.66667" transform="rotate(180 2.66536 132)" fill="black" />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="black" />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="black" />
                      <circle cx="2.66536" cy={88} r="1.66667" transform="rotate(180 2.66536 88)" fill="black" />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="black" />
                      <circle cx="2.66536" cy={45} r="1.66667" transform="rotate(180 2.66536 45)" fill="black" />
                      <circle cx="2.66536" cy={16} r="1.66667" transform="rotate(180 2.66536 16)" fill="black" />
                      <circle cx="2.66536" cy={59} r="1.66667" transform="rotate(180 2.66536 59)" fill="black" />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="black" />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="black" />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg width={107} height={134} viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="104.999" cy={132} r="1.66667" transform="rotate(180 104.999 132)" fill="black" />
                      <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="black" />
                      <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="black" />
                      <circle cx="104.999" cy={88} r="1.66667" transform="rotate(180 104.999 88)" fill="black" />
                      <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="black" />
                      <circle cx="104.999" cy={45} r="1.66667" transform="rotate(180 104.999 45)" fill="black" />
                      <circle cx="104.999" cy={16} r="1.66667" transform="rotate(180 104.999 16)" fill="black" />
                      <circle cx="104.999" cy={59} r="1.66667" transform="rotate(180 104.999 59)" fill="black" />
                      <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="black" />
                      <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="black" />
                      <circle cx="90.3333" cy={132} r="1.66667" transform="rotate(180 90.3333 132)" fill="black" />
                      <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="black" />
                      <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="black" />
                      <circle cx="90.3333" cy={88} r="1.66667" transform="rotate(180 90.3333 88)" fill="black" />
                      <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="black" />
                      <circle cx="90.3333" cy={45} r="1.66667" transform="rotate(180 90.3333 45)" fill="black" />
                      <circle cx="90.3333" cy={16} r="1.66667" transform="rotate(180 90.3333 16)" fill="black" />
                      <circle cx="90.3333" cy={59} r="1.66667" transform="rotate(180 90.3333 59)" fill="black" />
                      <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="black" />
                      <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="black" />
                      <circle cx="75.6654" cy={132} r="1.66667" transform="rotate(180 75.6654 132)" fill="black" />
                      <circle cx="31.9993" cy={132} r="1.66667" transform="rotate(180 31.9993 132)" fill="black" />
                      <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="black" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="black" />
                      <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="black" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="black" />
                      <circle cx="75.6654" cy={88} r="1.66667" transform="rotate(180 75.6654 88)" fill="black" />
                      <circle cx="31.9993" cy={88} r="1.66667" transform="rotate(180 31.9993 88)" fill="black" />
                      <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="black" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="black" />
                      <circle cx="75.6654" cy={45} r="1.66667" transform="rotate(180 75.6654 45)" fill="black" />
                      <circle cx="31.9993" cy={45} r="1.66667" transform="rotate(180 31.9993 45)" fill="black" />
                      <circle cx="75.6654" cy={16} r="1.66667" transform="rotate(180 75.6654 16)" fill="black" />
                      <circle cx="31.9993" cy={16} r="1.66667" transform="rotate(180 31.9993 16)" fill="black" />
                      <circle cx="75.6654" cy={59} r="1.66667" transform="rotate(180 75.6654 59)" fill="black" />
                      <circle cx="31.9993" cy={59} r="1.66667" transform="rotate(180 31.9993 59)" fill="black" />
                      <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="black" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="black" />
                      <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="black" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="black" />
                      <circle cx="60.9993" cy={132} r="1.66667" transform="rotate(180 60.9993 132)" fill="black" />
                      <circle cx="17.3333" cy={132} r="1.66667" transform="rotate(180 17.3333 132)" fill="black" />
                      <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="black" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="black" />
                      <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="black" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="black" />
                      <circle cx="60.9993" cy={88} r="1.66667" transform="rotate(180 60.9993 88)" fill="black" />
                      <circle cx="17.3333" cy={88} r="1.66667" transform="rotate(180 17.3333 88)" fill="black" />
                      <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="black" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="black" />
                      <circle cx="60.9993" cy={45} r="1.66667" transform="rotate(180 60.9993 45)" fill="black" />
                      <circle cx="17.3333" cy={45} r="1.66667" transform="rotate(180 17.3333 45)" fill="black" />
                      <circle cx="60.9993" cy={16} r="1.66667" transform="rotate(180 60.9993 16)" fill="black" />
                      <circle cx="17.3333" cy={16} r="1.66667" transform="rotate(180 17.3333 16)" fill="black" />
                      <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="black" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="black" />
                      <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="black" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="black" />
                      <circle cx="46.3333" cy={132} r="1.66667" transform="rotate(180 46.3333 132)" fill="black" />
                      <circle cx="2.66536" cy={132} r="1.66667" transform="rotate(180 2.66536 132)" fill="black" />
                      <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="black" />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="black" />
                      <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="black" />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="black" />
                      <circle cx="46.3333" cy={88} r="1.66667" transform="rotate(180 46.3333 88)" fill="black" />
                      <circle cx="2.66536" cy={88} r="1.66667" transform="rotate(180 2.66536 88)" fill="black" />
                      <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="black" />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="black" />
                      <circle cx="46.3333" cy={45} r="1.66667" transform="rotate(180 46.3333 45)" fill="black" />
                      <circle cx="2.66536" cy={45} r="1.66667" transform="rotate(180 2.66536 45)" fill="black" />
                      <circle cx="46.3333" cy={16} r="1.66667" transform="rotate(180 46.3333 16)" fill="black" />
                      <circle cx="2.66536" cy={16} r="1.66667" transform="rotate(180 2.66536 16)" fill="black" />
                      <circle cx="46.3333" cy={59} r="1.66667" transform="rotate(180 46.3333 59)" fill="black" />
                      <circle cx="2.66536" cy={59} r="1.66667" transform="rotate(180 2.66536 59)" fill="black" />
                      <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="black" />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="black" />
                      <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="black" />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="black" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact