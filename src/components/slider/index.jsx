const Slider = ({ children }) => {
    return (
        <div className="slider">
            <button className="previousButton"><span>&lt;</span></button>
            <button className="nextButton"><span>&gt;</span></button>
            <div className="sliderContent">
                {children}
            </div>
        </div>
    )
}

export default Slider