import React from 'react';

const Cardxp = () => {
  return (
    <div className={style.root}>
      {title && <h1 className={style.title}>{title}</h1>}
      {children}
    </div>
  );
};

export default Cardxp;
