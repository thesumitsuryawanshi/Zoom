'use Client'

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setisSetupComplete }: {
  setisSetupComplete:(value:boolean)=> void; }) => {

  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false)

  const call = useCall();

  if (!call) { 
    throw new Error ('useCall must be used withing Streamcall component')
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    }
    else { 
      call?.camera.enable();
      call?.microphone.enable();

    }

  }, [isMicCamToggledOn , call?.camera , call?.microphone])
  
  return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
              <h1 className='text-2xl my-4 font-bold'>
                    Setup
      </h1>
      <VideoPreview />
      <div className='flex flex-col h-16  items-center justify-center gap-3'>
        <label className='flex   items-center justify-center gap-2 font-medium'>
          <input type='checkbox' checked={isMicCamToggledOn} onChange={(e) => setisMicCamToggledOn(e.target.checked)} />
          Join with mic and camera off
        </label>
        <DeviceSettings />
        {/* joining the call by call.join method of stream video call SDK */}
        <Button className='rounded-md bg-green-500 px-4 py-2.5 '
          onClick={() => {
            call.join();
            setisSetupComplete(true);
           }}>
          Join Meeting
        </Button>
      </div>
    </div>
  )
}

export default MeetingSetup