
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
        {dataJson.map((single,index)=>{
        
        return(
        
                <table  key ={index} className={scss.cardTable}>
                    <tbody className={scss.cardTbody}>
                    
                    <tr>
                        {theadData.map((single =>{
                    
                            return(
                             <th key={single}>{single}</th>
                            
                            )
                        }))}
                    </tr>
                    <tr>
                        {tbodyData.map((single =>{
                            return(
                        
                                <td key={single}>{single}</td>

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
