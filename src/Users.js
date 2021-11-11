import * as data from './data.json';
import TableRow from './TableRow';
import {useState} from 'react';
import EditTableRow from './EditTableRow';
function Users()
{
    var backup = data.users;
    //var trTag = backup.map((user) => <TableRow handle={remove} editHandle= {edit} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></TableRow>);
    var [tag, changeTag] = useState(backup.map((user) => <TableRow handle={remove} editHandle= {edit} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></TableRow>));
    function remove(id)
    {
        console.log(id);
        delete backup[id-1];
        changeTag(backup.map((user) => <TableRow handle={remove} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></TableRow>));
    }
    function edit(id)
    {
        changeTag(backup.map((user) => user.id === id ? <EditTableRow handle={remove} savehandle={save} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></EditTableRow>:<TableRow handle={remove} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></TableRow>));
    }
    function save(id,dat)
    {
        backup[id-1] = {...dat};
        changeTag(backup.map((user) => <TableRow handle={remove} editHandle= {edit} id={user.id} FirstName={user.FirstName} MiddleName={user.MiddleName} LastName={user.LastName} Phone={user.Phone} Address={user.Address} Email={user.Email}></TableRow>));
    }

    return (
        <table style={{width:"100%",border:"solid black 2px"}}>
            <tr><td><center>FirstName</center></td><td><center>MiddleName</center></td><td><center>LastName</center></td><td><center>Phone</center></td><td><center>Email</center></td><td><center>Address</center></td></tr>
            {tag}
        </table>
    );
}

export default Users;