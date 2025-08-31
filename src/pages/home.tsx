import Navbar from "../components/navbar";
import ImageSlider from "../components/imageSlider";



function Home() {

    return (
        <>
            <Navbar />
            <ImageSlider />
            <div className="p-4">
                {/* Container for all cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    

                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl overflow-hidden shadow-lg">
                        {/* Image Section */}
                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s')", // Replace with your image URL
                            }}
                        ></div>

                        {/* Info Section */}
                        <div className="p-4 bg-green-500">
                            <h3 className="text-xl font-semibold text-gray-800">Product Title 2</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            This is another description for a product. It's going to be truncated to two lines, no matter how long the content is.
                            </p>
                            <p className="text-lg font-bold text-gray-800 mt-4">$249.99</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Home;