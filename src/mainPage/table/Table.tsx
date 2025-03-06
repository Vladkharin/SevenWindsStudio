import { JSX, useEffect, useState } from "react";
import "./Table.style.sass";
import { getData } from "./Table.services";
import { DATALIST } from "./Table.types";
import React from "react";

export function Table() {
  const [dataList, setDataList] = useState<DATALIST>();
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const fetchData = async () => {
    const data = await getData();
    setDataList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createRows = (items: DATALIST, level: number) => {
    console.log(items);
    if (Array.isArray(items) && items.length) {
      return (
        <React.Fragment>
          {items?.map((item) => (
            <>
              <div className={"table_item"} style={{ paddingLeft: `calc(${level} * 20px + 12px)` }}>
                <div className={"table_buttons_wrapper"}>
                  <button data-id={item.id} className={"table_button_document"}>
                    <img src="./icons/document.svg" alt="document" />
                    <div className={"line_down"} style={{ height: `calc(${item.total}*53px)` }} />
                    <div className={"line_left"} style={{ display: level > 0 ? "block" : "none" }} />
                  </button>
                  <button data-id={item.id} className="table_button_delete">
                    <img src="./icons/TrashFill.svg" alt="trash" />
                  </button>
                </div>
              </div>
              <div className={"table_item"} data-id={item.id}>
                {item.rowName}
              </div>
              <div className={"table_item"} data-id={item.id}>
                {item.mainCosts}
              </div>
              <div className={"table_item"} data-id={item.id}>
                {item.equipmentCosts}
              </div>
              <div className={"table_item"} data-id={item.id}>
                {item.overheads}
              </div>
              <div className={"table_item"} data-id={item.id}>
                {item.supportCosts}
              </div>
              {createRows(item.child, level + 1)}
            </>
          ))}
        </React.Fragment>
      );
    }
  };

  if (!dataList) {
    return;
  }

  return (
    <div className={"table"}>
      <div className={"table_column"}>Уровень</div>
      <div className={"table_column"}>Наименование работ</div>
      <div className={"table_column"}>Основная з/п</div>
      <div className={"table_column"}>Оборудование</div>
      <div className={"table_column"}>Накладные расходы</div>
      <div className={"table_column"}>Сметная прибыль</div>
      {createRows(dataList, 0)}
    </div>
  );
}
