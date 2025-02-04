// Los estilos de este componente se pueden modificar en el archivo _card.scss
import React from 'react'
// import Swal from 'sweetalert2'
// import 'animate.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ProgressBar from 'react-bootstrap/ProgressBar'
import background from '../../images/backgroundpk.png'
// Exportamos nuestra funcion CustomCard que recibe las props de la informacion que se
// desea renderizar

export const CustomCard = (props) => {
    const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
    // const getId = () => {
    //     console.log(props.stats);
    //     Swal.fire({
    //         //Aca va la informacion que deseamos mostrar
    //         title: props.name,
    //         imageUrl: props.image,
    //         imageWidth: 150,
    //         imageHeight: 150,
    //         imageAlt: 'Pokemon image',
    //         html: props.stats.base_stat,
    //         confirmButtonText: 'Cool',
    //         showClass: {
    //             popup: 'animate__animated animate__backInDown'
    //           },
    //           hideClass: {
    //             popup: 'animate__animated animate__backOutDown'
    //           }
    //       })

    // }
    return (
        <div id={props.id} className='cardContainer'>
            <div className='center'>
                <h2>{props.name}</h2>
                <div className='image-cont'>
                <img className='pokeima' src={props.image} alt="pokeImage" />
                <img className='background' src={background} alt="background" />
                </div>
                <Modal open={open} onClose={onCloseModal} classNames='espacio' center>
                    <div className='modalCont'>
                        <h2 className='modalName'>{props.name}</h2>
                        <img className='modalImage' src={props.image} alt="pokemon" />
                        <div className='modalStats'>
                            <ul>
                                {props.stats.map((e,k)=>{
                                return <li key={k}><p>{e.stat.name}:</p> <ProgressBar now={e.base_stat}/></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </Modal>
                <div className='btns'>
                <button onClick={onOpenModal} className='btn'>Más info</button>
                <button className='fav'>💘</button>
                </div>
            </div>
        </div>
        
    )
}
