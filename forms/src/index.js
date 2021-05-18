import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// 앱이 오프라인에서 더 빠르게 작동되기 원한다면 아래의 unregister()를 register()로 바꾸면 된다.
// 그러나 주의사항이 있으므로 다음 페이지를 참고하기 바란다.
// https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
serviceWorker.unregister();
