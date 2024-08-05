import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const err = useRouteError();

    return <div className="m-2 p-2">
        <h1>Oops !!</h1>
        <h2>Something went Wrong</h2>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
}

export default Error;