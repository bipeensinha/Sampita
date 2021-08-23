import React from 'react'
import ReactPlayer from 'react-player'

export default function Player() {
    return (

                <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    
                    
                    url='https://www.youtube.com/watch?v=e3_5NVMkXLM'
                    playing= {true}
                    controls= {true}
                    loop= {true}
                    width='98%'
                    
                   /* width='100%'
                    height='100%' */
                  />
                </div>
              )
                      

    
}
