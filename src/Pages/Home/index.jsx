import SearchItem from "../../Components/SearchItem";
import data from "./data";

function Home() {
  return (
    <div>
      <section className="search-section">
        <div>
          <h2>Find Study Materials</h2>
          <div className="">
            <input
              className="h-[35px] text-base text-black"
              type="text"
              id="search-input"
              placeholder="Search for subjects, courses or documents"
            />
            <button className="ml-4 text-base" id="search-button">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="documents-section">
        <div className="text-center">
          <h3>Documents</h3>
          <div className="document-list" id="document-list"></div>
        </div>
      </section>

      <div className="w-[1350px] m-auto flex flex-col gap-4">
        {data.map((item, index) => (
          <SearchItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Home;
