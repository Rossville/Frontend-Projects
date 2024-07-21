const gradientSection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 to-green-400 text-white py-16">
        <div className="container mx-auto px-4 md:flex justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Let's discuss Your project
            </h1>
            <p className="text-xl mb-8">
              Let's figure out how to create an effective application, its cost
              and terms of its development
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Full name"
                />
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Phone number"
                />
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Business name"
                />
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="email"
                  placeholder="Business mail"
                />
              </div>
              <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">
                Discuss the project
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default gradientSection;
