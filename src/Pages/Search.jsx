import { Search } from "lucide-react";
import ProfileBar from "../Components/Profilebar";
const SearchPage = () => {
  return (
    <>
      <div className="flex flex-col my-10 gap-1.5">
        <div className=" flex flex-row  top-5 left-80 w-xl mx-auto p-4  gap-2 shadow-md shadow-gray-300 border rounded-lg">
          <Search strokeWidth={2} />
          <input
            type="text"
            name="name"
            placeholder=" search user"
            className="outline-none w-lg"
          />
        </div>
        <div className="">
          <ProfileBar />
          <ProfileBar />
          <ProfileBar />
          <ProfileBar />
          <ProfileBar/>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
