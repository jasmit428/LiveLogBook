import Link from "next/link"

 // the main div to select if the user is admin or a driver
export default function ChooseUserType() {

    return (
        <div className="p-12 mx-auto mt-40 border-2 bg-blue-700 max-w-xl h-100 max-h-xl rounded-xl">
        
        <h1 className="text-white text-xl text-center mr-4 mt-10 font-bold">CHOOSE YOUR USER TYPE</h1>

        <div className="flex flex-col justify-center mt-12 my-8">
            <button className="block mx-auto w-64 text-blue-700 bg-white p-3 rounded-lg text-xl mb-6 font-bold hover:bg-gray-100"><Link href={"./AdminLogin"}>ADMIN</Link></button>

            <button className="block mx-auto w-64 text-blue-700 bg-white p-3 rounded-lg text-xl text-center mb-6 font-bold hover:bg-gray-100"><Link href={"./DriverLogin"}>DRIVER</Link></button>
        </div>
            
    </div>
    )
}