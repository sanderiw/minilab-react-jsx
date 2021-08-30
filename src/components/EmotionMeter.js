function EmotionMeter() {
    const emotion = "HAPPY";
    return (
        <div>
            {emotion === "HAPPY" 
            ? <i className="far fa-smile-beam fa-5x"></i>
            : emotion === "SAD"
            ?  <i className="far fa-sad-cry fa-5x"></i>
            : <i className="far fa-smile-beam fa-5x"></i>
            }
        </div>
    );
}

export default EmotionMeter;