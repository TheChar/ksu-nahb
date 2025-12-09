type imgProp = {
    bgImg:string
    darkTxt:boolean,
    text?:string
    credit?:string
}

const Header: React.FC<imgProp> = ({bgImg, darkTxt, text, credit}) => {
    const classes = "text-5xl md:text-7xl absolute bottom-2/10 left-1/20 font-semibold font-serif";
    return (
        <div 
            className="w-full h-70 md:h-200 relative mb-7 bg-fixed bg-cover "
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {
                <h1 className={darkTxt ? "text-black " + classes : "text-white " + classes}>{text}</h1>
            }
            {credit ? <small className="text-gray-500 text-sm absolute bottom-0 right-2" >&copy; {credit}</small> : null }
        </div>
    );  
}

export default Header;