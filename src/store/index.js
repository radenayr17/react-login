import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from "../reducers/index";

const config = {
    key:"root",
    storage:storage,
    stateReconciler:autoMergeLevel2
}

const persist = persistReducer(config,reducers);

export const store = createStore(persist,
    compose(
        applyMiddleware(thunk)
    )
);
export const persistor = persistStore(store);