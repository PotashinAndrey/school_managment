const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lightSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Some random text</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2024-12-24{" "}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Some random text not too short and not too long just like that.</p>
        </div>
        <div className="bg-lightPurpuleBase rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Some random text</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2024-12-24{" "}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Some random text not too short and not too long just like that.</p>
        </div>
        <div className="bg-lightYellowBase rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Some random text</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              2024-12-24{" "}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Some random text not too short and not too long just like that.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
