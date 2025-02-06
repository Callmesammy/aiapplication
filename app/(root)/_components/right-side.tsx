import { RightItems } from "./right-items";

const RightBar = () => {
 
    return ( 
        <div className="sticky w-[18rem] bg-gray-900/45 min-h-screen justify-center  pt-5 px-5 space-y-6"> 
        <div> email or usernmae and i</div> 
        <RightItems/>
        </div>
     );
}
 
export default RightBar;