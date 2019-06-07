import { applyMiddleware, compose, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { ENV_NAME } from "../../config/consts";

const defaultMiddlewares = [thunkMiddleware];

const composedMiddlewares = (customMiddlewares: any) =>
  ENV_NAME === "development"
    ? composeWithDevTools(
        applyMiddleware(...defaultMiddlewares, ...customMiddlewares)
      )
    : compose(applyMiddleware(...defaultMiddlewares, ...customMiddlewares));

const init = (reducers: Reducer) => (middlewares = []) =>
  createStore(reducers, composedMiddlewares(middlewares));

export default init;
