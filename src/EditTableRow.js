import save from './save.png';
import del from './delete.png';
import {useState} from 'react';
function EditTableRow(props)
{
    var [firstName,fhandle] =  useState(props.FirstName);
    var [middleName,mhandle] =  useState(props.MiddleName);
    var [lastName,lhandle] =  useState(props.LastName);
    var [phone,phandle] =  useState(props.Phone);
    var [address,ahandle] =  useState(props.Address);
    var [email,ehandle] =  useState(props.Email);

    function fname(event)
    {
        fhandle(event.target.value);
    }
    function lname(event)
    {
        lhandle(event.target.value);
    }
    function mname(event)
    {
        mhandle(event.target.value);
    }
    function pname(event)
    {
        phandle(event.target.value);
    }
    function ename(event)
    {
        ehandle(event.target.value);
    }
    function aname(event)
    {
        ahandle(event.target.value);
    }
    function clickHandle()
    {
        props.handle(props.id);
    }
    function saveClick()
    {
        const dat = {
            id:props.id,
            FirstName:firstName,
            LastName:lastName,
            MiddleName:middleName,
            Phone:phone,
            Email:email,
            Address:address,
        }
        props.savehandle(props.id,dat);
    }
    return(
        <tr>
            <td style={{backgroundColor:"silver"}}><center><input id="fName" value={firstName} onChange={fname}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><input id="mName" value={middleName} onChange={mname}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><input id="lName" value={lastName} onChange={lname}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><input id="phone" value={phone} onChange={pname}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><input id="email" value={email} onChange={ename}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><input id="address" value={address} onChange={aname}/></center></td>
            <td style={{backgroundColor:"silver"}}><center><button onClick={clickHandle} key={props.id}><img src={del} style={{height:"25px"}}></img></button></center></td>
            <td style={{backgroundColor:"silver"}}><center><button key={props.id} onClick={saveClick}><img src={save} style={{height:"25px"}}></img></button></center></td>
        </tr>
    );
    
}

export default EditTableRow;