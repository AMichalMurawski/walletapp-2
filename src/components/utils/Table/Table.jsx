const  Table = ({theadData, tbodyData, className}) => {
     return ( 
       <table className={className}><thead className={className+"_head"}><tr>{theadData.map(heading=>{return<th className={className +"_th"}key={heading}>{heading}</th>})}</tr></thead><tbody className={className +"_body"}>{tbodyData.map((row, index)=>{return<tr key={index}>{theadData.map((key,index)=>{return<td className={className+"_td"}key={row[key]}>{row[key]}</td>})}</tr>})}</tbody></table>
    );
    }

    export default Table