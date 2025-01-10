import { BsThreeDotsVertical } from 'react-icons/bs'
import videoImg from '../assets/video.jpg'

const Video = () => {
  return (
    <div className='p-3 border-2'>
      <img src={videoImg} className='rounded-lg h-[200px] aspect-auto mb-3' />
      <div className='flex gap-4'>
        <img src={videoImg} className='rounded-full h-[50px] aspect-square' />
        <div className='flex flex-col items-start'>
          <p>Video text or title</p>
          <p className='text-gray-500'>Author</p>
          <p className='text-gray-500'>Statistics</p>
        </div>
        <div className='flex-1 flex justify-end'>
          <a>
            <BsThreeDotsVertical />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video
