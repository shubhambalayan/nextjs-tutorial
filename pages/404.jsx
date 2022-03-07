import Link from "next/link";

const notFound = () => {

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>This page can not be found</h2>
            <p>Go back to the <Link href="/"><a className="text-primary">Homepage</a></Link></p>
        </div>
     );
}
 
export default notFound;