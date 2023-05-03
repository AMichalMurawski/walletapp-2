import sprite from "../images/vectors/icons.svg"

const IconSvg = ({icon}) =>{
    return<>
    <svg className={icon}>
        <use className={icon+"_Use"}  href={sprite + '#icon-' +icon } />
    </svg>
    </>
}

export default IconSvg;
