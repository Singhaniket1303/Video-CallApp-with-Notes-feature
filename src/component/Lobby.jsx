import React ,{useState ,useEffect,useCallback } from 'react'
import { useSocket } from '../context/SocketProviders';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
    const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit('room:join', { email, room }); //i want to join room 
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`)
      
    },[navigate]);
  

  useEffect(() => {
    socket.on('room:join', (data) => {
      handleJoinRoom(data);
    });

    return () => {
      socket.off('room:join', handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);


  return (
   <>
   <h1 className='h-[5rem] w-100 text-center bg-slate-200 text-2xl font-serif'>CLICK AND MEET</h1>
<div className='bg-gradient-to-r from-[#f87e66] to-blue-500 h-screen flex '>
    <h1 className='flex-1 text-center mt-[15rem] font-bold text-4xl '>Your loved once one click away
    <br />
    <br /> 
    <p className='text-2xl font-normal'>Video calls and meet for everyone</p></h1>
    
    <form className='flex-1 text-center mt-[15rem]' onSubmit={handleSubmitForm}>
        <label  className= 'p-16  font-bold' htmlFor="Email">Email-ID</label>
        <input className='p-4 mb-5 px-10 rounded-2xl' type="email" name="" 
          id='email'
          placeholder='Enter a Email-Id'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className= ' p-16 mr-4 font-bold'htmlFor="room">Room</label>
        <input className='p-4 mb-5 px-10 rounded-2xl' type="text" 
          id='room'
          placeholder='Enter a Room-ID'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button className="hover:bg-[#F6FFF8] border-2 text-xl mr-auto rounded-2xl border-black p-2 px-20 ml-[11rem]">Join</button>
    </form>
</div>
   </>
  )
}

export default Lobby