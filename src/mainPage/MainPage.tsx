import { useState } from "react";
import "./Mainpage.style.sass";
import { Table } from "./table";

export function MainPage() {
  const [toolbarState, setToolbarState] = useState<string>("Просмотр");

  return (
    <>
      <header className={"header"}>
        <div className={"toolbar"}>
          <button className={"toolbar__btnMenu"} />
          <button className={"toolbar__btnBack"} />
          <div className={"toolbar__text " + `${toolbarState == "Просмотр" && "active"}`} onClick={() => setToolbarState("Просмотр")}>
            Просмотр
          </div>
          <div className={"toolbar__text " + `${toolbarState == "Управление" && "active"}`} onClick={() => setToolbarState("Управление")}>
            Управление
          </div>
        </div>
        <div className={"informationbar"}>
          <div className={"choose_project"}>
            <div className={"choose_project__text"}>
              <div className={"choose_project__title"}>Название проекта</div>
              <div className={"choose_project__subtitle"}>Аббревиатура</div>
            </div>
            <div className={"choose_project__arrow"}>
              <img src={"./icons/arrow.svg"} alt={"arrow"} />
            </div>
          </div>
          <div className={"project"}>Строительно-монтажные работы</div>
        </div>
      </header>
      <nav className={"nav"}>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>По проекту</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>По Объекты</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>РД</div>
        </div>
        <div className={"nav__item " + "active_project"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>МТО</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>СМР</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>График</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>МиМ</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Рабочие</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Капвложения</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Бюджет</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Финансирование</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Панорамы</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Камеры</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Поручения</div>
        </div>
        <div className={"nav__item"}>
          <div className={"nav__item_img"}>
            <img src={"./icons/puzzle.svg"} alt={"puzzle"} />
          </div>
          <div className={"nav__item_text"}>Контрагенты</div>
        </div>
      </nav>
      <aside className={"aside"}>
        <Table />
      </aside>
    </>
  );
}
