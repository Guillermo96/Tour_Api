import { Canister, query, text, update, Void } from 'azle';

// This is a global variable that is stored on the heap
let message = '';
let precio = '';
let fecha = '';
let reservacion = '';
let nft = '';

export default Canister({
    // Query calls complete quickly because they do not go through consensus
    getMessage: query([], text, () => {
        return message;
    }),
    // Update calls take a few seconds to complete
    // This is because they persist state changes and go through consensus
    setMessage: update([text], Void, (newMessage) => {
        message = newMessage; // This change will be persisted
    }),

    setPrice: query([text], text, (newprecio) => {
        precio = newprecio;
        return 'Precio Definido';
    }),

    getPrice: query([], text, () => {
        return precio;
    }),
    
    setDate: query([text], text, (newfecha) =>{
        fecha = newfecha;
        return 'Fecha Establecida';
    }),

    getDate: query([], text, () => {
        return fecha;
    }),

    setReservation: query([text], text, (newreservacion) => {
        reservacion = newreservacion;
        return 'Reservacion Creada' 
    }),

    getReservation: query([], text, () => {
        return reservacion;
    }),
    
    buildNFT: query([], text, () =>{
        return '#'+Math.random()*100000000000000000 + '';
    }),

    
});