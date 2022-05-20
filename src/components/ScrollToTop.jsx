import { useEffect, useState } from "react"
import {BiArrowFromBottom,AiOutlineArrowUp,AiOutlineUp,BiChevronsUp,BsChevronDoubleUp} from 'react-icons/bs';

import { classNames } from "../utils/classNames";
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

export const ScrollToTop = () =>{

    const [isVisable,setIsVisable ] = useState(false)
    

    const toggleVisability = () => {
        if(window.pageYOffset>2800){
            setIsVisable(true);
        }else
        setIsVisable(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior: "smooth",
        });
    };
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisability);
        return ()=>{
                window.removeEventListener('scroll', toggleVisability);
        };
    },[]);
    return (
    <div className=" bottom-2 right-0 left-0  ">
        <button type="button" onClick={scrollToTop} className={classNames(
            isVisable ? 'opacity-100' : 'opacity-0',
            'animate-bounce p-3 rounded-full text-white bg-indigo-500 transition-opacity hover:bg-primary'
        )}>
            <BsChevronDoubleUp className="h-6 w-6" aria-hidden='true'/>
        </button>
    </div>
        )
};

