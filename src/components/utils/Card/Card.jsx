import data from '../../../data.json';
import scss from './Card.module.scss';

const Card = () =>{
    const dataJson = data[0].data;
    const getHeadings = () => {
            return Object.keys(...dataJson);
        }
    const getValues = () =>{
        return Object.values(...dataJson)
    }

    const theadData = getHeadings();
    const tbodyData = getValues();
    return(
        <>
        {dataJson.map((single)=>{
             return(
                <table className={scss.cardTable}>
                    <tbody className={scss.cardTbody}>
                    
                    <tr>
                        {theadData.map((single =>{
                    
                            return(
                             <th>{single}</th>
                            
                            )
                        }))}
                    </tr>
                    <tr>
                        {tbodyData.map((single =>{
                            return(
                        
                                <td>{single}</td>

                                                     )
                        }))}
                    </tr>
                    </tbody>
                </table>
            )

                        
        })}
        </>
    )
}

export default Card;
