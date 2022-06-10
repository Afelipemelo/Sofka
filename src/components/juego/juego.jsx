import React,{Fragment, useEffect, useState} from 'react';
import { Modal, Button, Text, Input, Image ,Card, Grid} from "@nextui-org/react";
import {PreguntasNivel1} from '../questions/preguntas'
import Swal from 'sweetalert2'

const Juego = () => {

  //ASIGNAMOS UNA BARIABLE AL LOCALSTORAGE SI ESTA BACIO 
  let userIniciales = JSON.parse(localStorage.getItem("usuarios"));
   if(!userIniciales ){
    userIniciales = [];
  }

  //NUMERO RAMDOM PARA LAS PREGUNTAS
  const numero =Math.floor(Math.random() * 5)    

   //ESTADOS 
  const [usuarios, setUsuarios] = useState(userIniciales)
  const [pregunta, setPregunta] = useState({})
  const [nivel, setNivel] = useState(0)
  const [user, setUser] = useState({
     userName: "",
     puntaje: 0 
  }) 
  
  //ASIGNAMOS AL LOCALSTORAGE LA INFORMACION DEL USUARIO
  useEffect(()=>{
    let userIniciales = JSON.parse(localStorage.getItem("usuarios"));
    if(userIniciales){
      localStorage.setItem('usuarios',JSON.stringify(usuarios))
    }else {
      localStorage.setItem('usuarios',JSON.stringify([]))
    }
  },[usuarios])

  //FUNCION PARA FILTRAR LAS PREGUNTAS POR NIVEL
   useEffect(()=>{
     const Preguntas = () => {
       const preuntad = PreguntasNivel1.filter(preguntas => preguntas.nivel == nivel)
       setPregunta(preuntad)
     }
     if(nivel != 0 ){
       Preguntas()
     }
   },[nivel])
  
  //FUNCION PARA LAS RESPUESTAS
  const respuesta = (opcion)=>{
    if(opcion === pregunta[numero].respuesta){
      if(nivel == 5){
        Swal.fire({
          icon: 'success',
          title: 'Genial...',
          text: 'Felicitacion genio',
        }).then((result) =>{
          if(result.isConfirmed){
            setPregunta({})
            setUser({
              userName: "",
              puntaje :  0
            })
          }
        })
        setUsuarios([
          ...usuarios,
            user
        ])
      }else {       
        setNivel(nivel + 1)
        setUser({ ...user, puntaje: user.puntaje + 50 })
      }
    }else if(opcion != pregunta[numero].respuesta){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Intentalo denuevo',
      }).then((result) =>{
        if(result.isConfirmed){
          setPregunta({})
          setUser({
            userName: "",
            puntaje :  0
          })
        }
      })
      setUsuarios([
        ...usuarios,
          user
      ])
      
    }
  }
  
  //FUNCION PARA ABANDONAR LA PARTIDA
  const abandonar = () =>{
    Swal.fire({
      icon: 'warning',
      title: 'Ey!!!',
      text: 'Estas seguro',
    }).then((result) =>{
      if(result.isConfirmed){
        setPregunta({})
        setUsuarios([
          ...usuarios,
          user
        ])
      }
    })
    setUser({
      userName: "",
      puntaje :  0
    })
  }
  return ( 
    <Fragment>
      {Object.keys(pregunta).length == 0 ?
      <>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={true}
      >
        <Modal.Header>
          <Image
            width={320}
            height={180}  
            src="https://imgs.search.brave.com/YX4HqeEi82pqAR7hqXXvOUf8VNlMV7HlLwj47GOc27c/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/QXV3YWFNTUJPekNw/MWJRYlV5M1pRSGFI/YSZwaWQ9QXBp"
          />
        </Modal.Header>
        <Modal.Header>
          <Input
            bordered
            color="primary"
            size="lg"
            placeholder="Nombre"
            type="text" 
            name="userName"
            value={user.userName}
            onChange={(e) =>
              setUser({
                ...user,
                [e.target.name]: e.target.value
              })}
          />
        </Modal.Header>
        <Modal.Footer className="boton">   
          <Button auto color="warning" onClick={()=>{setNivel(1)}} >
            Iniciar Juego
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      :
      <>
      <Grid.Container sm={12} md={8} className="container">
        <Card css={{ mw: "100%" }}>
          <Card.Header className='pregunta'>
            <Text b color="warning" size={25}>{pregunta[numero].pregunta}</Text>
          </Card.Header>
          <Card.Divider/>
            <Card.Body css={{ py: "$10", display:'flex' }}>
              <Button  bordered color="warning" auto rounded onClick={()=>respuesta(pregunta[numero].opciones[0])} className="botonPregunta">
                {pregunta[numero].opciones[0]}
              </Button>
              <Button  bordered color="warning" auto rounded onClick={()=>respuesta(pregunta[numero].opciones[1])} className="botonPregunta">
                {pregunta[numero].opciones[1]}
              </Button>
              <Button  bordered color="warning" auto rounded onClick={()=>respuesta(pregunta[numero].opciones[2])} className="botonPregunta">
                {pregunta[numero].opciones[2]}
              </Button>
              <Button  bordered color="warning" auto rounded onClick={()=>respuesta(pregunta[numero].opciones[3])} className="botonPregunta">
                {pregunta[numero].opciones[3]}
              </Button>
            </Card.Body>
          <Card.Divider/>
        </Card>
      </Grid.Container>
      <div className='puntaje'>  
        <Text
          h1
          size={30}
          color="warning"
          weight="bold"
        >
          Tu puntaje
        </Text>
      </div>
      <div className='puntaje'>  
        <Text
          h1
          size={30}
          color="warning"
          weight="bold"
        >
          {user.puntaje}
        </Text>
      </div>
      <div className='puntaje'>
        <Button auto color="error" onClick={()=>abandonar()}> Terminar</Button>
      </div>
      </>
      }
    </Fragment>
  );
} 
export default Juego;
