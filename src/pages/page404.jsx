import { Link } from "react-router-dom"

const Page404 = ()=> <div className="page404 container column">
    <h1>Woops! there is nothing here for you</h1>
    <p>If you are looking for troubles. YOU WILL FIND IT!...</p>
    <p>If not please go back to the</p>
    <div className="container">
        <span className="dash-left">{'>'}</span>
        <span className="dash-left">{'>'}</span>
        <span className="dash-left">{'>'}</span>
        <Link to='/'>{'> Home <'}</Link>
        <span className="dash-right">{'<'}</span>
        <span className="dash-right">{'<'}</span>
        <span className="dash-right">{'<'}</span>
    </div>
</div>

export default Page404