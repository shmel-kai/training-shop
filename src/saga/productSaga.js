import { put, call, all, takeLatest } from 'redux-saga/effects';

export const WOMEN_PRODUCTS_REQUESTED = 'WOMEN_PRODUCTS_REQUESTED';
export const WOMEN_PRODUCT_REQUEST_SUCCESS = 'WOMEN_PRODUCT_REQUEST_SUCCESS';
export const MEN_PRODUCT_REQUEST_SUCCESS = 'MEN_PRODUCT_REQUEST_SUCCESS';
export const MEN_PRODUCTS_REQUESTED = 'MEN_PRODUCTS_REQUESTED';
export const PRODUCTS_REQUESTED = 'PRODUCTS_REQUESTED';
export const PRODUCT_DATA_REQUESTED = 'PRODUCT_DATA_REQUESTED';
export const PRODUCTS_REQUEST_STARTED = 'PRODUCTS_REQUEST_STARTED';
export const PRODUCT_REQUEST_SUCCESS = 'PRODUCT_REQUEST_SUCCESS';
export const CURR_PRODUCT_REQUEST_SUCCESS = 'CURR_PRODUCT_REQUEST_SUCCESS';
export const PRODUCT_REQUEST_ERROR = 'PRODUCT_REQUEST_ERROR';

export const API = {
    products: 'https://training.cleverland.by/shop/products',
    product: 'https://training.cleverland.by/shop/product'
};

const productsRequestStarted = () => {
    return ({ type: PRODUCTS_REQUEST_STARTED });
};

const productsRequestSuccess = data => {
    return ({ type: PRODUCT_REQUEST_SUCCESS, data });
};

const currProductRequestSuccess = data => {
    return ({ type: CURR_PRODUCT_REQUEST_SUCCESS, data });
};

const menProductsRequestSuccess = data => {
    return ({ type: MEN_PRODUCT_REQUEST_SUCCESS, data });
};

const womenProductsRequestSuccess = data => {
    return ({ type: WOMEN_PRODUCT_REQUEST_SUCCESS, data });
};

const productsRequestError = errorMessage => {
    return ({ type: PRODUCT_REQUEST_ERROR, errorMessage });
};

const fetchProducts = (url) => {
    return fetch(url).then(res => res.json());
};

function* productsRequestWorker() {
    try {
        yield put(productsRequestStarted());
        const data = yield call(fetchProducts, API.products); // fetch(API.products)
        yield put(productsRequestSuccess(data));
    } catch (err) {
        yield put(productsRequestError(err.message));
    }
}

function* currProductRequestWorker(actionData) {
    console.log('actionData', actionData);
    try {
        yield put(productsRequestStarted());
        const data = yield call(fetchProducts, `${API.product}/${actionData.data.id}`);
        yield put(currProductRequestSuccess(data));
    } catch (err) {
        yield put(productsRequestError(err.message));
    }
}

function* menProductsRequestWorker(actionDataMen) {
    console.log('actionDataMen', actionDataMen);
    try {
        yield put(productsRequestStarted());
        const data = yield call(fetchProducts, `${API.products}/men`);
        yield put(menProductsRequestSuccess(data));
    } catch (err) {
        yield put(productsRequestError(err.message));
    }
}

function* womenProductsRequestWorker(actionDataWomen) {
    console.log('actionDataWomen', actionDataWomen);
    try {
        yield put(productsRequestStarted());
        const data = yield call(fetchProducts, `${API.products}/women`);
        yield put(womenProductsRequestSuccess(data));
    } catch (err) {
        yield put(productsRequestError(err.message));
    }
}

function* watchProductsRequest() {
    yield takeLatest(PRODUCTS_REQUESTED, productsRequestWorker)
}

function* watchProductRequest() {
    yield takeLatest(PRODUCT_DATA_REQUESTED, currProductRequestWorker)
}

function* watchMenProductsRequest() {
    yield takeLatest(MEN_PRODUCTS_REQUESTED, menProductsRequestWorker)
}

function* watchWomenProductsRequest() {
    yield takeLatest(WOMEN_PRODUCTS_REQUESTED, womenProductsRequestWorker)
}
  

// function* productsRequestWatcher() {
    
// }

export default function* rootSaga() {
    yield all([
        watchProductsRequest(),
        watchProductRequest(),
        watchMenProductsRequest(),
        watchWomenProductsRequest()
    ])
  }