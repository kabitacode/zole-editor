"use client";

import { IconTypeMenu } from '@/types/icon.type';
import React, { Fragment, useState } from 'react'
import { BsFillCursorFill, BsEraserFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";



const Menus = () => {
    const [activeIcons, setactiveIcons] = useState<IconTypeMenu>(null);

    const handleClick = (icon: IconTypeMenu): void => {
        setactiveIcons(icon)
    }

    const iconClasses = (icon: IconTypeMenu): string =>
        `py-2 rounded-full cursor-pointer
    transition duration-200 ease-in-out 
    ${activeIcons === icon ? 'bg-orange-500 text-white' : 'hover:bg-blue-400 hover:text-white'}`


    return (
        <Fragment>
            <div className='flex items-center justify-center'>
                <div className="flex-1"></div>
                <div className='flex-1 flex w-64 flex-row justify-around bg-blue-300 py-2.5 rounded-full m-2'>
                    <BsFillCursorFill
                        size={35}
                        className={iconClasses('cursor')}
                        onClick={() => handleClick('cursor')}
                    />
                     <FaPen
                        size={35}
                        className={iconClasses('pen')}
                        onClick={() => handleClick('pen')}
                    />
                    <BsEraserFill
                        size={35}
                        className={iconClasses('eraser')}
                        onClick={() => handleClick('eraser')}
                    />
                </div>
                <div className="flex-1"></div>
            </div>
        </Fragment>
    )
}

export default Menus;