import {useRouteError} from "react-router-dom"
const ErrorPage = () =>{
    const err = useRouteError();
    console.log(err)

    return (
        <>
        <h2>Oops!! we have not found what you are looking for!! </h2>
        <h2>{err.status} : {err.statusText}</h2>
        </>
    )
}

export default ErrorPage;