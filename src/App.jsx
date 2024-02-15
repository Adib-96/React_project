import Student from "./Students"

function App() {
  return (
    <>
    <Student name="adib" age={30} isStudent={false}/>
    <Student name="samir" age={22} isStudent={true}/>
    <Student name="Monji" age={10} isStudent={false}/>
    <Student/>
    <Student/>

    </>
   
  )
}

export default App
