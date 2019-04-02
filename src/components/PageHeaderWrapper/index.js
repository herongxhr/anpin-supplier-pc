import React from 'react';
import { FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import PageHeader from '@/components/PageHeader';
import { connect } from 'dva';
import GridContent from './GridContent';
import styles from './index.less';
import MenuContext from '@/layouts/MenuContext';

// 由PageHeader和GridContent组成
const PageHeaderWrapper = ({ children, contentWidth, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <PageHeader
      wide={contentWidth === 'Fixed'}
      home={<FormattedMessage id="menu.home" defaultMessage="Home" />}
      {...value}
      key="pageheader"
      {...restProps}
      linkElement={Link}
      itemRender={item => {
        if (item.locale) {
          return <FormattedMessage id={item.locale} defaultMessage={item.title} />;
        }
        return item.title;
      }}
    />
    {children ? (
      // 左右上都有margin24px,下面margin0
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
);

export default connect(({ setting }) => ({
  contentWidth: setting.contentWidth,
}))(PageHeaderWrapper);
