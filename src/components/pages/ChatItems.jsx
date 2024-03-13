const ChatItems = ({imgUrl, idName, msg}) => {
  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={imgUrl} alt="rikto-ltd-imgs" />
        </div>
        <div className="w-24">
          <h2>{idName}</h2>
          <p>{msg}</p>
        </div>
        <div className="ml-40">
          <p>10:30 PM</p>
        </div>
      </div>
    </>
  );
};

export default ChatItems;
