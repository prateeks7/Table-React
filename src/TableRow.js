import del from './delete.png';
import edit from './edit.png';

function TableRow(props)
{
    function clickHandle()
    {
        props.handle(props.id);
    }
    function editClickHandle()
    {
        props.editHandle(props.id);
    }
    return(
        <tr><td style={{backgroundColor:"silver"}} ><center>{props.FirstName}</center></td><td style={{backgroundColor:"silver"}}><center>{props.MiddleName}</center></td><td style={{backgroundColor:"silver"}}><center>{props.LastName}</center></td><td style={{backgroundColor:"silver"}}><center>{props.Phone}</center></td><td style={{backgroundColor:"silver"}}><center>{props.Email}</center></td><td style={{backgroundColor:"silver"}}><center>{props.Address}</center></td><td style={{backgroundColor:"silver"}}><center><button onClick={clickHandle} key={props.id}><img src={del} style={{height:"25px"}}></img></button></center></td><td style={{backgroundColor:"silver"}}><center><button onClick={editClickHandle} key={props.id}><img src={edit}  style={{height:"25px"}}></img></button></center></td></tr>
    );
}

export default TableRow;