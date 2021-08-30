import profile from "../assets/images/puppy.jpg";

function Profile () {
    return (
        <div className="card mb-3" style={{width: 18 + 'rem'}}>
            <img src={profile} className="card-img-top" alt="do"/>
            <div className="card-body">
                <p className="card-text">Lorem ipsum</p>
            </div>
        </div>
    );
}

export default Profile;