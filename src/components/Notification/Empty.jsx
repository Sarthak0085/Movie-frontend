import { RiMovie2Line } from 'react-icons/ri'

const Empty = ({ message }) => {
  return (
    <div className='flex-column w-full py-12 px-4 rounded border border-border bg-main gap-4'>
      <div className='flex-column w-24 h-24 p-5 rounded-full bg-dry text-subMain text-6xl'>
        <RiMovie2Line />
      </div>
      <p className='text-border text-md'>{message}</p>
    </div>
  )
}

export default Empty