import React from 'react';
import { BlocksControls, InlineTextarea } from 'react-tinacms-inline';
import styles from './paragraph.module.css'

function Paragraph({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className={styles.paragraph__background}>
        <div className="wrapper wrapper--narrow">
          <p className={styles.paragraph__text}>
            <InlineTextarea name="text" focusRing={false} />
          </p>
        </div>
      </div>
    </BlocksControls>
  );
}

export const paragraphBlock = {
  Component: Paragraph,
  template: {
    label: 'Paragraph',
    defaultItem: {
      text:
        'dummy text',
    },
    fields: [],
  },
};
