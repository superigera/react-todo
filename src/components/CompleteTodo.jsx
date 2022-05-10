import React from "react";

export const CompleteTodo = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {complete.map((completeTODO, index) => {
          return (
            <div key={completeTODO} className="list-row">
              <li>{completeTODO}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
