import profilePic from './assets/avatar.svg'
function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="photo profile"  className='card-image'/>
            <h2 className='card-title'>Adib Bh</h2>
            <p className='card-text'>IT student</p>
        </div>
    )
}



export default Card;