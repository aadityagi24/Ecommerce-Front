// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation} from 'react-router-dom';

// const Spinner = () => {
//   const [count, setCount] = useState(5);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevValue) => --prevValue); // Fixed typo
//     }, 1000);

//     count === 0 && navigate('/login' , {
//       state: location.pathname
//     });
    

//     return () => clearInterval(interval);
//   }, [count, navigate , location]);

//   return (
//     <>
//       <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
//         <h2 className='text-center'>Redirecting to you in {count} second</h2>

//         <button className="btn btn-primary" type="button" disabled>
//           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          
//         </button>
//       </div>
//     </>
//   );
// };

// export default Spinner;
