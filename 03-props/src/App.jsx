import Card1 from "./components/Card"
function PropsIntro(){
  return(
    <>
    <h2 className="text-2xl font-extrabold bg-red-400 text-center">Welcome to React Props</h2>
    <h2 className="text-center bg-yellow-400 font-extrabold">Tailwind CSS Test</h2>
    <Card1 userName="Suhag S Shetty" description="He is a SWE at Nextiva. Working as a Backend developer and also handling few parts of devops." visit="Contact me"/>
    <br/>
    <Card1 userName="Sumana S Shetty" description="I am Suhag's Mother and the boss " visit="Know me"/>
    </>
  )
}
export default PropsIntro