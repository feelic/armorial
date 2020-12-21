import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import SvgArms from './components/SvgArms/Arms';
import PartForm from './components/PartForm';
import styles from './app.module.scss';
import * as actions from './actions';


export default function App() {
  const parts = useSelector(state => state.parts);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(actions.createPartition('root', 'perPale'))
  }, [dispatch]);

  const root = parts.root;

  if (!root) {
    return 'loading';
  }

  return (
    <div className={styles.blasonContainer}>
      <div className={styles.block}>
        <SvgArms armsParts={parts} />
        <PartForm armsParts={parts} part={root} />
      </div>
      <div className={styles.block}>
        <pre>
        {JSON.stringify(parts, null, 2)}
        </pre>
      </div>
    </div>
  );
}
