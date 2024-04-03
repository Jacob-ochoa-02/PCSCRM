import '../styles/Searchings.css'


export default function Searchin() {
    return (
        <div className='addPart'>
            <h1>CONSULTAR CLIENTES</h1>
            <hr />
            <div className='formOf'>
                <div id='searchCont'>
                    <div className='inputContainer One'>
                        <label htmlFor="" className='labelForm'>ID Cliente: </label>
                        <input className='formInputs' type="text" placeholder="Ingresa el ID del cliente"/>
                    </div>
                    <div className='buttonBox'>
                        <button>Buscar</button>
                        <img src="../styles/images/searchIcon.png" alt=''/>
                    </div>
                    <div className='buttonBox two'>
                        <button>Listar Todos</button>
                        <img src="../styles/images/searchIcon.png" alt=''/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}