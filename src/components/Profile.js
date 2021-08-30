import profile from "../assets/images/puppy.jpg";

function Profile () {
    return (
        <div className="card mb-3" style={{width: 18 + 'rem'}}>
            <img src={profile} className="card-img-top" alt="do"/>
            <div className="card-body">
                <h5 className="card-title">Cute Puppy</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam nunc. Praesent arcu tellus, tempor at gravida id, venenatis porttitor dolor. Cras vitae ipsum id sem ullamcorper congue a id quam.</p>
            </div>
        </div>
    );
}

export default Profile;