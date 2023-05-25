import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestProductToSpring ({ commit }, productId) {
        return axiosInst.get(`/shopping/${productId}`)
        .then((res) => {
            commit(REQUEST_PRODUCT_TO_SPRING, res.data)
        })
    },
    requestProductToSpring({commit}) {
        axiosInst.get('/shopping/list')
        .then((res) => {
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
        })
    },
    requestRegisterProductToSpring ({}, payload) {

        const { productName, productPrice, email } = payload

        return axiosInst.post('/shopping/product-register', { productName, productPrice, email})
        .then((res) => {
            alert('상품 등록 성공!')
            return res
        })
        .catch(() => {
            alert('등록 실패')
        })
    }
}