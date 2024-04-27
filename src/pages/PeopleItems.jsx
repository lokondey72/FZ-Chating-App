const PeopleItems = ({ userData }) => {
  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={userData?.profile_picture} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">
            {userData?.username}
          </h2>
        </div>
        <div className="ml-auto">
          <button>add Friend</button>
        </div>
      </div>
    </>
  );
};

export default PeopleItems;
