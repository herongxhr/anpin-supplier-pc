export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            { path: '/', redirect: '/dashboard' },
            { // 工作台
                path: '/dashboard',
                name: '工作台',
                icon: 'dashboard',
            },
            { // 订单中心
                path: '/orders',
                name: '订单中心',
                icon: 'order',
                routes: [
                    {
                        path: './orders',
                        component: './Orders'
                    },
                    {
                        path: './order/details',
                        component: './Orders/OrderDetails'
                    }
                ]
            },
            { // 配送验收
                path: '/delivery-acceptance ',
                name: '配送验收',
                icon: 'dashboard',
                routes: [
                    {
                        // 全部
                        path: '/delivery-acceptance/all',
                        component: './DeliveryAcceptance/Basic',
                    },
                    {
                        // 待启动
                        path: '/delivery-acceptance/will-start',
                        component: './DeliveryAcceptance/Security',
                    },
                    {
                        // 待配送
                        path: '/delivery-acceptance/will-delivery',
                        component: './DeliveryAcceptance/SupplyChannels',
                    },
                    {
                        // 已验收
                        path: '/delivery-acceptance/acceptanced',
                        component: './DeliveryAcceptance/SupplyChannels',
                    },
                    {
                        // 已验收
                        path: '/delivery-acceptance/details',
                        component: './DeliveryAcceptance/DeliveryAcceptanceDetails',
                    }
                ],
            },
            {// 对帐单
                path: '/reconciliation',
                name: '对帐单',
                icon: 'dashboard',
                routes: [
                    {
                        path: '/reconciliation/',
                        component: './Reconciliation'
                    },
                    {
                        path: '/reconciliation/details',
                        component: './Reconciliation/ReconciliationDetails'
                    }
                ]
            },
            {
                path: '/statistic-analysis',
                name: '统计分析',
                icon: 'dashboard',
                component: './StatisticAnalyis'
            },
            // 帐户管理
            {
                name: '设置',
                icon: 'setting',
                path: '/settings',
                routes: [
                    {
                        // 基本设置
                        path: '/settings/basic',
                        component: './Settings/Basic',
                    },
                    {
                        // 帐户安全
                        path: '/settiings/security',
                        component: './Settings/Security',
                    },
                    {
                        // 进货渠道
                        path: '/settings/supply-channels',
                        component: './Settings/SupplyChannels',
                    }
                ],
            },
            // {
            //     component: '404',
            // },
        ]
    }
];