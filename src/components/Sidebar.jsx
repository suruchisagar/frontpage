import { MainContent } from "./MainContent";

export function Sidebar(){
    return (
        <div className="flex">
            <div className="transition-all ease-in-out duration-150 md:w-96 w-0 h-screen">
                sidebar
            </div>
            <div className="bg-white w-full h-screen">
            <MainContent/>
            </div>
        </div>
    );
}