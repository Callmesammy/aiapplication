import RightBar from "./_components/right-side";
import Sidebar from "./_components/Sidebar";

interface Hompeprops{
    children: React.ReactNode
}


const Homelayout = ({
    children
}: Hompeprops) => {
    return (  
        <div className="flex flex-col ">
        <main className="flex">
            <Sidebar/>
            <div className="flex flex-1 pt-3 px-3">
            {children}</div>
            <RightBar/>
        </main>
        </div>
    );
}
 
export default Homelayout;