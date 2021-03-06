import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';

import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/Header';

export default observer(({ store, handlers }) => (
  <div className={merge(style.heading, !store.open && $U.hidden)}>
    <div className={$U.left}>
      <b className={merge(style.hli, !store.tools.heading.name && $U.hidden)}>
        MOBX-REACT-FORM
      </b>
      <b className={merge(style.hlb, !store.tools.heading.sub && $U.hidden)}>
        DEVTOOLS
      </b>
    </div>
    <button
      className={merge($U.button, style.btn)}
      onClick={handlers.handleOnCloseTools}
      data-tip="CLOSE"
    >
      <Icons.FaChevronCircleRight className={style.icon} />
    </button>
    <button
      className={merge($U.button, style.btn)}
      onClick={handlers.handleOnOpenDoc}
      data-tip="DOCS"
    >
      <Icons.FaBook className={style.icon} />
    </button>
  </div>
));
