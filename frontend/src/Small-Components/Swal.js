import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../components/pages/css/newlink.css';

const MySwal = withReactContent(Swal)
export const SwatResponse = () =>{
     return (
          MySwal.fire({
  title: <p>Hello World</p>,
  footer: 'Copyright 2018',
  didOpen: () => {
    // `MySwal` is a subclass of `Swal`
    //   with all the same instance & static methods
    MySwal.clickConfirm()
  }
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
     )}

export const array = {
     title: <p className="texto-array">Succefully</p>,
     footer: <p className="texto-array">Copyright</p>,
     icon: 'success',
     timer: 3000,
     background: 'black',
     timerProgressBar: true,
     segundo_title: <p className="text-array">Go ahead 🚀!</p>,
     segundo_timer: 3000


}


// import Swal from 'sweetalert2/src/sweetalert2.js'

// export const SwalPop = () => {
//      return (
      
//                	Swal.fire({
// 				title: 'Succefully!',
// 				text: 'Your link went to DB now!',
// 				timer: 3000,
// 				icon: 'success',
				
// 				timerProgressBar: true,
// 				showClass: {
// 				popup: 'animate__animated animate__fadeInDown'
// 				},
// 				hideClass: {
// 				popup: 'animate__animated animate__fadeOutUp'
// 				}
// 			})
       
//       )
// }