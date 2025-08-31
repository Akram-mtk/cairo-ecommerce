

function Navbar() {
    return (
        <nav className="bg-[#E2ECFF] p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-black text-xl font-semibold">
                    <a href="#">Logo</a>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-4 max-w-xs hidden sm:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 bg-white rounded-lg border border-gray-300 focus:outline-none"
                    />
                </div>

                {/* Account and Cart */}
                <div className="flex items-center space-x-6">
                {/* Account */}
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" className="w-6 h-6"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                    <span className="hidden sm:block">Account</span>
                </div>

                {/* Cart */}
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" className="w-6 h-6"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z"/></svg>
                    <span className="hidden sm:block">Cart</span>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;