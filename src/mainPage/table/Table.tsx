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

  const createRows = ({ items, level }: { items: DATALIST; level: number }) => {
    console.log(items);
    // if (Array.isArray(items) && items.length) {

    //   });
    // }

    Array.isArray(items) && items.length ? (
      <React.Fragment>
        {items?.map((item) => (
          <>
            <div className={"table_item"}>
              <div className={"table_buttons_wrapper"}>
                <button data-id={item.id} className={"table_button_document"}>
                  <img src="./icons/document.svg" alt="document" />
                  <div className={"line_down"} style={{ height: `calc(${item.total}*53px)` }} />
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
            <createRows items={item.child} level={level + 1} />
          </>
        ))}
      </React.Fragment>
    ) : null;
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
      <CreateRows items={dataList} level={0} />
    </div>
  );
}
