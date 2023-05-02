import sprite from "../images/vectors/icons.svg";

const IconSvg = ({icon}) =>{
    return<>
    <svg>
        <use href={sprite + '#icon-' + icon } />
    </svg>
    </>
};

export default IconSvg;