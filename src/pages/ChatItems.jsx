const ChatItems = ({ imgUrl, idName, msg, day }) => {
  return (
    <>
      <div className="flex lg:w-1/2 cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={imgUrl} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{idName}</h2>
          <p className="text-lg font-normal text-secandari">{msg}</p>
        </div>
        <div className="ml-auto">
          <p>{day}</p>
          <p>10:30 PM</p>
        </div>
      </div>
    </>
  );
};

export default ChatItems;
