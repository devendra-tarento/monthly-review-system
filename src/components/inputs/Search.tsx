import styles from "./Search.module.css";
// import { filteredSearchList } from "states";
import { useRecoilState, useSetRecoilState } from "recoil";

interface SearchProps {
  list: any[];
}

export const Search = ({ list }: SearchProps) => {
  // const [filteredList, setFilteredList] = useRecoilState(filteredSearchList);
  const handleSearch = (text: string) => {
    let temp: any = [];
    if (list.length > 0) {
      list.map((item: any, index: number) => {
        if (item.title.toLowerCase().includes(text.toLowerCase())) {
          temp.push(item);
        }
      })
      // setFilteredList(temp);
    }
  }

  return (
    <input
      type={"search"}
      className={`${styles.custom_input_one} ${styles.search_bg_one} form-control`}
      placeholder="Search"
      autoComplete="off"
      onChange={(e: any) => { handleSearch(e.target.value) }}
    />
  );
};
