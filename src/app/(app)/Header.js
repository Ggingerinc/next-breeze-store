"use client"

const Header = ({ title }) => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">

                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
                <span>Create new User</span>
            </div>
        </header>
    )
}

export default Header
