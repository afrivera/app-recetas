import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'

import Modal from '@mui/material/Modal';
// import { makeStyles } from '@mui/material/styles';



function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {

  // configuración del modal del material ui
  const [ modalStyle ] = useState( getModalStyle );
  const [open, setOpen ] = useState( false );

  // const classes = useStyles();

  const handleOpen = ()=> {
    setOpen( true );
  }

  const handleClose = ()=> {
    setOpen( false );
  }

  // extraer los valores del context
  const { setIdReceta } = useContext( ModalContext); 


  return (
    <div className='col-md-4 mb-3'>
        <div className='card'>
            <h2 className='card-header'>{ receta.strDrink}</h2>

            <img className='card-img-top' src={ receta.strDrinkThumb } alt={`imagen de ${receta.strDrink}`} />

            <div className='card-body'>
                <button
                    type='button'
                    className='btn btn-block btn-primary'
                    onClick={()=> {
                      setIdReceta(receta.idDrink);
                      handleOpen();
                    }}
                >Ver Receta</button>

                <Modal
                  open={ open }
                  onClose={ handleClose }
                >
                  <div style={modalStyle} className={ style }>
                    <h1>Desde modal</h1>
                  </div>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default Receta