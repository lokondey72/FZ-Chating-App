const Requests = ({ requList }) => {
  console.log(requList);

  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={requList?.senderPhotoURL} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{requList?.senderName}</h2>
        </div>
        <div className="flex flex-col gap-2 ml-auto">
          <button className="bg-brand text-white rounded-lg px-2 py-1">
            Confirm
          </button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Requests;
