import React, { Fragment } from 'react'
import { BsFillCursorFill, BsEraserFill, BsPen, BsPenFill} from "react-icons/bs";

const Menus = () => {
    return (
        <Fragment>
         <div className='flex items-center justify-center'>
            <div className="flex-1"></div>
            <div className='flex-1 flex w-64 flex-row justify-around bg-blue-300 py-3 rounded-full m-2'>
                <BsFillCursorFill />
                <BsEraserFill />
                <BsPenFill />
            </div>
            <div className="flex-1"></div>
         </div>
        </Fragment>
    )
}

export default Menus;