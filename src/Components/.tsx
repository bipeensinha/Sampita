import React from 'react'
import ReactPlayer from 'react-player'

export default function Player() {
    return (

                <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    
                    
                    url='https://youtu.be/S-FbnJvQT1U'
                    playing= {true}
                    controls= {true}
                    loop= {true}
                    
                   /* width='100%'
                    height='100%' */
                  />
                </div>
              )
                      

    
}
