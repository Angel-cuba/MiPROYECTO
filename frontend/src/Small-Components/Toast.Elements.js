// import React, { useContext, useEffect } from 'react';

// import { ToastContainer ,toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

// import { AuthContext } from './../components/lib/auth.context'



// const Notify = () => {
// const {auth} = useContext(AuthContext)

// //  useEffect(() => {
// //        if(auth.name){ toastFx()}
// //        else{ 
// //             <></>
// //         }
// //   },[])

//  toast.configure()
//   const toastFx = () => {
//        toast.success(`Hello there ${auth.username} is good to see ya `)
//   }

 
   

//    return (
//         <>
//           {auth.username ?
//            (            

//      // (auth.username !== undefined) 
//         <>
//           {/* toastFx() */}
//           {/* <button onClick={toastFx}>Click</button> */}
// {/*           
//           <ToastContainer 
//                               position="top-right"
//                               autoClose = {2000}
//                               draggable
//                               // pauseOnHover
//                               // closeOnClick
//                               /> */}
        
//         </>
         
           
//           // ( toast.success(`Hello there ${auth.username} is good to see ya ` , {
//           //  position: toast.POSITION.TOP_LEFT,
//           //  autoClose:3000, 
//           //  limit: 10
//           //  }))
   
//           )
//        : ( <></>

//           //   toast.warning('Is good to see ya around', {
//           //                  position: toast.POSITION.TOP_CENTER ,
//           //                  autoClose : 2000
                           
//           //                  })
//                            )
//                            }
//         </>
//    )

// }

// export default Notify