const Contact = () =>{
    return(
        <>
          <div>
            <h1 className="font-bold">Contact Us page</h1>
            <div className="flex m-3">
            <input className="border border-black p-2 mx-3 rounded-sm text-lg" placeholder="name"/>
            <input className="border border-black p-2 mx-3 rounded-sm text-lg" placeholder="email"/>
            <button className="p-3 bg-purple-200 text-black rounded-lg">Submit</button>
            </div>
            
          </div>
          
        </>
    )
}

export default Contact;