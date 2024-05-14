import { getDatabase, remove, ref } from "firebase/database";

const BlockLIstItems = ({ data }) => {
  const db = getDatabase();

  const handelUnBlock = (key) => {
    remove(ref(db, "block/" + key));
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-center items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={data.blockProfile} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{data.blockName}</h2>
        </div>
        <div className="ml-auto cursor-pointer">
          <button
            onClick={() => handelUnBlock(data.key)}
            className="px-4 py-2 rounded-xl text-white bg-brand"
          >
            Unblock
          </button>
        </div>
      </div>
    </>
  );
};

export default BlockLIstItems;
