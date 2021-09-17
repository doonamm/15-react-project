import { rgbToHex } from "./SomeFunction";

export default function SingleColor(props){
    const {rgb, weight, type} = props;
    const hexColor = rgbToHex(...rgb);
    return(
        <div className={`single-color ${type==='shade' ? 'shade' : null}`} style={{background: hexColor}}>
            <p className="weight">{weight}%</p>
            <p className="hex">{hexColor}</p>
        </div>
    );
}