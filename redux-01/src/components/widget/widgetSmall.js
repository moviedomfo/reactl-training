import React from 'react'
import './widgetSmall.css'
import { GrView } from 'react-icons/gr';

export default function WidgetSmall() {
    return (
        <div className='widgetSmall'>
            <span className='widgetSmallTitle'>Hola Wi Small</span>
            <ul className='widgetSmallList'>
                <li className='widgetSmallListItem'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k7l1WzfFSEkq1ZnxSDW1BQyS-X5UYnDKpQ&usqp=CAU" 
                    alt="" className="wigetSmallImage"  ></img>
                    <div className='widgetSmallUser'>
                        <div className='widgetSmallUserName'>Anna Keller</div>
                        <div className='widgetSmallUserJob'>Lower</div>
                    
                    </div>
                    <button className='widgetSmallButton'>
                            <GrView className='widgetSmallButtonIcon'></GrView>
                            Display
                    </button>
                    
                </li>
            </ul>
        </div>
    )
}
