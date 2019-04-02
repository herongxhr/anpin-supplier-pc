import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './GridContent.less';

/**
 * 内容布局窗口
 * 如果是流式布局，宽度100%，高度100%，minHeight:100%
 * 如果是固定布局，宽度为1200px, margin: 0 auto;
 */
class GridContent extends PureComponent {
  render() {
    const { contentWidth, children } = this.props;
    let className = `${styles.main}`;
    if (contentWidth === 'Fixed') {
      className = `${styles.main} ${styles.wide}`;
    }
    return <div className={className}>{children}</div>;
  }
}

export default connect(({ setting }) => ({
  contentWidth: setting.contentWidth,
}))(GridContent);
