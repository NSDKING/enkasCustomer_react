import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listAccounts, listUsers } from './graphql/queries'
import { useEffect, useState } from 'react'


function App() {
  const [Account, setAccount] = useState([])
  const [AccountData, setAccountData] = useState([])
  const [loading, setLoading] = useState(false)
  const [userList, setUserList] = useState([])

  
  const getListUsers = async()=>{
    if(loading){
      return;
  }

  setLoading(true)
  try {
  const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
    setUserList(response.data.listUsers.items)
   }catch(e){
          console.log(e)

  }
  setLoading(false)

  }



  const getAccount = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
  
    try {
      const response = await API.graphql(
        graphqlOperation(listAccounts, { limit: 1000 })
      );

      setAccount(response.data.listAccounts.items)
       
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAccount()
    getListUsers()
  
  }, [])


  const handleName = (userid)=>{
    let username = " "
    userList.map((item)=>{
        if(item.id === userid){
            username = item.FamilyName +" "+ item.LastName
        }
    })
    return username

}

  const handleNum = (userid)=>{
      let username = " "
      userList.map((item)=>{
          if(item.id === userid){
              username = item.phoneNumber
          }
      })
      return username

  }

  useEffect(()=>{
    const filterAccount = ()=>{
      let listAccountData = []

      Account.forEach(item => {
        if (!item._deleted && !item.free) {

          let newItem = {
            id: item.id,
            mail: item.mail,
            passe: item.passe,
            endDateProfil: item.endDateProfil,
            service: item.service,
            nom: handleName(item.userID),
            numero: handleNum(item.userID)
          }
          listAccountData.push(newItem)
      }
    });

     setAccountData(listAccountData)
    }

    filterAccount()
    console.log(AccountData)
  },[Account])


  const handleDownload = () => {
    const dataStr = JSON.stringify(AccountData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const link = document.createElement('a');
    link.href = dataUri;
    link.download = 'accounts.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <div className="App">
      <button onClick={handleDownload}>Download Accounts as JSON</button>

    </div>
  );
}

export default App;
