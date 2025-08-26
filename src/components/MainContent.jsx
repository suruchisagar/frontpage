
import minions from "../assets/minion.jpg";



export function MainContent(){
    return(
        <div className="w-full">
            {/*black section*/}
            <div className="h-48 bg-black"></div>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6 p-4">
                {/*left box*/}
                <div className="h-64 md:h-76 rounded-2xl shadow bg-white md:col-span-2 -translate-y-6 md:-translate-y-12 flex flex-col items-center p-6">
                     <img 
                        src="{minions}" 
                        alt="profile"
                        className="w-28 h-28 rounded-xl object-cover shadow-md mb-4"
                    />
                    {/* Name */}
                    <h2 className="text-xl font-semibold">Minion</h2>

                    {/* Email */}
                    <p className="text-gray-700 mt-2">minion@gmail.com</p>

                    {/* Number */}
                    <p className="text-gray-700 mt-2">999999999</p>

                    {/* Address */}
                    <p className="text-gray-600 text-center mt-2">
                        New Delhi, India
                    </p>

                </div>
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-6 mt-6">
                    
                    {/* Date + Greeting ABOVE the middle box */}
                    <div className="md:col-span-8 text-left mb-4">
                        <p className="text-gray-800 text-lg font-medium">
                            Monday, 14 October
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Good Morning, Minion!
                        </h2>
                    </div>

                    {/* Middle Box */}
                    <div className="h-64 md:h-80 rounded-2xl shadow bg-pink-200 md:col-span-5 flex items-center justify-center">
                        {/* content */}
                    </div>

                    {/* Right Box */}
                    <div className="h-64 md:h-80 rounded-2xl shadow bg-yellow-200 md:col-span-3 flex flex-col items-center justify-center gap-6 p-6">
                        {/* content */}
                        {/* Schedule a Webinar */}
                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                        <img src="/schedule.png" alt="Schedule" className="w-8 h-8" />
                        <span className="font-medium">Schedule a Webinar</span>
                    </div>

                    {/* Join a Webinar */}
                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                        <img src="/join.png" alt="Join" className="w-8 h-8" />
                        <span className="font-medium">Join a Webinar</span>
                    </div>

                    {/* Open Recordings */}
                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                        <img src="/recordings.png" alt="Recordings" className="w-8 h-8" />
                        <span className="font-medium">Open Recordings</span>
                    </div>
                    </div>
                    </div>
                        </div>
        </div>
    )
}