import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, List, Table } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Analysis.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
import PageLoading from '@/components/PageLoading';
import CalendarItem from '../../components/CalendarItem';

moment.locale('zh-cn');

@connect(({ loading, deliveryCalendar }) => ({
    ...deliveryCalendar,
    loading: loading.effects['chart/fetch']
}))
class Analysis extends Component {
    state = {
        week: ''
    }

    getDeliverData = () => {
        this.props.dispatch({
            type: 'deliveryCalendar/fetchDeliveryData',
            payload: { ...this.state }
        })
    }

    getOrdersProgress = () => {
        this.props.dispatch({
            type: 'deliveryCalendar/fetchOrdersProgress',
            payload: { ...this.state }
        })
    }

    getAddressBook = () => {
        this.props.dispatch({
            type: 'deliveryCalendar/fetchAddressBook',
            payload: { ...this.state }
        })
    }
    componentDidMount() {
        this.getDeliverData();
        this.getOrdersProgress();
        this.getAddressBook();
    }

    componentWillUnmount() {

    }

    render() {
        const orderTableCols = [
            {
                title: '订单编号',
                dataIndex: 'orderId',
            },
            {
                title: '客户',
                dataIndex: 'cateringtitle',
            },
            {
                title: '下单时间',
                dataIndex: 'orderTime',
            },
            {
                title: '完成时间 ',
                dataIndex: 'finishTime',
                render: text => text
            },
        ];
        const { deliveryData, orderProgress, addressBook } = this.props;
        return (
            <GridContent>
                {/* 头部卡片 */}
                <div className={styles.topCard}>
                    <Row>
                        <Col span={16}>
                            <Row>
                                <Col className={styles.companyName}>东阳市绿晨蔬菜配送有限公司</Col>
                            </Row>
                            <Row>
                                <Col>{moment().format('YYYY年MM月DD日  dddd')}</Col>
                            </Row>
                        </Col>
                        <Col span={8} className={styles.acceptanceSumary}>
                            <Row className={styles.summary}>
                                <Col><span className={styles.primaryColor}>23</span>/46</Col>
                            </Row>
                            <Row>
                                <Col>本周验收总况</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                {/* 配送日历 */}
                <div className={styles.deliveryCalendar}>
                    <div>
                        <Row className={styles.calendarHeader}>
                            <Col span={8}>配送日历</Col>
                            <Col span={8}></Col>
                            <Col span={8} style={{ textAlign: 'right' }}>
                                共<span className={styles.primaryColor}>46</span>张配送单
                            </Col>
                        </Row>
                        <List
                            className={styles.list}
                            dataSource={deliveryData}
                            renderItem={item => {
                                const width = `${100 / deliveryData.length}%`;
                                return (
                                    <List.Item
                                        className={styles.listItem}
                                        style={{ width: `${width}` }} >
                                        <CalendarItem
                                            itemData={item}
                                        />
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
                {/* 底部区域 */}
                <div className={styles.bottomWrap}>
                    <div className={styles.orderProgress}>
                        <Row className={styles.orderHeader}>
                            <Col span={8}>订单完成进度</Col>
                            <Col span={8}></Col>
                            <Col span={8} style={{ textAlign: 'right' }}>
                                共<span className={styles.primaryColor}>46</span>张订单
                            </Col>
                        </Row>
                        <Table
                            style={{ margin: "0 20px" }}
                            columns={orderTableCols}
                            dataSource={[]}
                        />
                    </div>
                    <div className={styles.addressBook}>
                        <Row className={styles.addressHeader}>
                            <Col span={12}>客户通讯录</Col>
                            <Col span={12} style={{ textAlign: 'right' }}>
                                共<span className={styles.primaryColor}>26</span>位客户
                            </Col>
                        </Row>
                        <List
                            dataSource={['1']}
                            renderItem={item => {
                                return (
                                    <List.Item className={styles.addressItem}>
                                        <span >金华市第一中学</span>
                                        <span>王二麻</span>
                                        <span>13305710571</span>
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
            </GridContent>
        )
    }
}

export default Analysis;