import { queryDeliveryData, queryOrdersProgress, queryAddressBook } from '@/services/api';

export default {
    namespace: 'deliveryCalendar',

    state: {
        deliveryData: [],
        ordersProgress: {},
        addressBook: [],
    },

    effects: {
        *fetchDeliveryData({ payload }, { call, put }) {
            const response = yield call(queryDeliveryData, payload);
            yield put({
                type: 'saveDeliveryData',
                payload: response.data
            })
        },
        *fetchOrdersProgress({ payload }, { call, put }) {
            const response = yield call(queryOrdersProgress, payload);
            yield put({
                type: 'saveOrderProgress',
                payload: response.data
            })
        },
        *fetchAddressBook({ payload }, { call, put }) {
            const response = yield call(queryAddressBook, payload);
            yield put({
                type: 'saveAddressBook',
                payload: response.data
            })
        }
    },

    reducers: {
        saveDeliveryData(state, { payload }) {
            return {
                ...state,
                deliveryData: payload || [],
            }
        },
        saveOrderProgress(state, { payload }) {
            return {
                ...state,
                ordersProgress: payload || {},
            }
        },
        saveAddressBook(state, { payload }) {
            return {
                ...state,
                addressBook: payload || [],
            }
        }
    }
}