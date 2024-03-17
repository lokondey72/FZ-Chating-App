const PeopleItems = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src="/public/group-img-(1).png" alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">Johnson & Johnson</h2>
        </div>
        <div className="ml-auto">
          <button>add</button>
        </div>
      </div>
    </>
  );
};

export default PeopleItems;
