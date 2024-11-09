const person = {
    GGUID: "GGV/19/23123",
    name: "Jack",
    School: "School of Studies of Computational Mathematics and Computer Science",
    Department: "CSIT",
    PositionAtDept: "Associate Professor",
    positionAtApp: "Sr. Executive"
};

const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <div className="flex flex-col items-center">
                    <img 
                        src="/sir.jpg" 
                        alt="Profile" 
                        className="rounded-full border-4 border-blue-500 mb-4 w-24 h-24 object-cover"
                    />
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {person.name}
                    </h1>
                    <p className="text-gray-500">{person.PositionAtDept}</p>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="text-gray-600 flex flex-col items-start">
                        <strong className="text-gray-800">GGUID:</strong> 
                        <p>{person.GGUID}</p>
                    </div>
                    <div className="text-gray-600 flex flex-col items-start">
                        <strong className="text-gray-800">School:</strong>
                        <p>{person.School}</p>
                    </div>
                    <div className="text-gray-600 flex flex-col items-start">
                        <strong className="text-gray-800">Department:</strong>
                        <p>{person.Department}</p>
                    </div>
                    <div className="text-gray-600 flex flex-col items-start">
                        <strong className="text-gray-800">Position in App:</strong>
                        <p>{person.positionAtApp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
