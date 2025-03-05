import { useEffect, useState } from "react";
import "./Table.style.sass";
import { getData } from "./Table.services";

export function Table() {
  const [dataList, setDataList] = useState();

  const fetchData = async () => {
    const data = await getData();
    setDataList(data);
  };

  useEffect(() => {});
  return (
    <div className={"table"}>
      <div className={"table_column"}>Уровень</div>
      <div className={"table_column"}>Наименование работ</div>
      <div className={"table_column"}>Основная з/п</div>
      <div className={"table_column"}>Оборудование</div>
      <div className={"table_column"}>Накладные расходы</div>
      <div className={"table_column"}>Сметная прибыль</div>
      <div className={"table_item"}>
        <div className={"table_buttons_wrapper"}>
          <button className={"table_button_document"}>
            <img src="./icons/document.svg" alt="document" />
          </button>
          <button className="table_button_delete">
            <img src="./icons/TrashFill.svg" alt="trash" />
          </button>
        </div>
      </div>
    </div>
  );
}
