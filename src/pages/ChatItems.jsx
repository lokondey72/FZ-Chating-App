const ChatItems = ({ data }) => {
  
  const handelFriendList = () => {
    console.log(data);
  };

  return (
    <>
      <div
        onClick={handelFriendList}
        className="flex ml-auto sm:w-3/4 md:w-1/2 lg:w-3/4 cursor-pointer items-center my-5 gap-5"
      >
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={data?.friendImg} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{data?.friendName}</h2>
          <p className="text-lg font-normal text-secandari">dfgdsfg</p>
        </div>
        <div className="ml-auto">
          <p>10:30 PM</p>
        </div>
      </div>
    </>
  );
};

export default ChatItems;
