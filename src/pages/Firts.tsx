import Banner from "@components/Banner/Banner";
import Categories from "@components/Categories/Categories";
import Costumes from "@components/Costumes/Costumes";
import CrawlLine from "@components/CrawlLine/CrawlLine";
import Location from "@components/Location/Location";
import Novelties from "@components/Noveltie/Novelties";
import TopProduct from "@components/TopProduct/TopProduct";
import Utp from "@components/Utp/Utp";

const First = () => {
  return (
    <>
      <Categories />
      <Novelties />
      <Banner />
      <Location />
      <CrawlLine />
      <TopProduct />
      <Costumes />
      <Utp />
    </>
  );
};

export default First;
