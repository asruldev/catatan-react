# REACT JS

## Daftar Isi

- [Pengenalan React](#pengenalan-react)
  - [Kenapa ini membantu banget?](#kenapa-ini-membantu-banget)

## Pengenalan React

React adalah *open source* yang sangat membantu untuk membangun *User Interface* (UI) lebih mudah dan cepat. Jalur pembelajaran ini akan mencakup berbagai API dan tool harus dipertimbangkan untuk meningkatkan kinerja dan kegunaan aplikasi.

Panduan ini akan menunjukkan cara untuk bangkit dan berjalan denan aplikasi React. Setiap panduan lain pada buku ini akan membahas topik untuk mengoptimalkan kecepatan atau aksesibilitas aplikasi React.

### Kenapa ini membantu banget?

Ada banyak konten yang menjelaskan cara membuat aplikasi yang cepat dan andal, tetapi tidak banyak yang menunjukkan cara membuat aplikasi React yang cepat dan andal. Panduan ini mencakup semua dari perspektif aplikasi React di mana hanya library, API, dan fitur khusus untuk ekosistem React yang disebutkan sesuai pengalaman penulis di dunia kerja.

### Apa yang akan kamu pelajari?

Tutorial pada buku ini *tidak hanya fokus* pada:

- Cara menggunakan React
- Bagaimana React bekerja

Meskipun kedua konsep ini akan disentuh saat dibutuhkan, semua panduan dan `kode` di bagian ini akan berfokus pada bagaimana membangun web React yang cepat dan dapat diakses. Untuk alasan ini, diperlukan **pengetahuan dasar React**.

### Membuat Aplikasi React

Create React App ([CRA](https://facebook.github.io/create-react-app/)) adalah cara termudah untuk memulai membangun aplikasi React. Ini memberikan pengaturan *default* dengan sejumlah fitur inti yang digunakan, termasuk sistem `build` yang berisi `bundler modul` (webpack) dan transpiler (Babel).

Pada `shell` atau terminal, Anda hanya perlu menjalankan perintah berikut untuk membuat aplikasi baru:

```bash
create-react-app nama-aplikasi
```

> Pastikan terlebih dahulu untuk sudah menginstalkan CRA pada komputer anda dengan `sudo yarn global add create-react-app`

Setelah perintah diatas selesai dieksekusi, Anda dapat menjalankan aplikasi dengan perintah berikut:

```bash
cd nama-aplikasi
yarn start
```

Berikut memperlihatkan halaman aplikasi React yang baru saja dibuat.

![React Js](./assets/react-after-install.png)

Berikut memperlihatkan struktur direktori dan halaman web aktual dari aplikasi CRA yang baru saja dibuat.

```bash
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock
```

> Meskipun CRA membuatnya mudah untuk mulai membangun aplikasi React, ada banyak cara berbeda untuk mulai membangun situs dengan React. Bisa menggunakan CDN atau lainnya.

Struktur direktori aplikasi CRA baru hanya berisi file yang benar-benar perlu Anda modifikasi untuk bekerja pada aplikasi Anda. [Dokumentasi CRA](https://facebook.github.io/create-react-app/docs/folder-structure) menjelaskan ini secara rinci.

## React Dasar

Pada React sendiri memiliki beberapa hal dasar yang harus dipahami:
1. Component
2. Props
3. State
4. Lifecycle

### Component
Component dalam react dapat dibuat dengan 2 cara, yaitu dengan membuat `class` atau dengan membuat `function`. Tapi apa bedanya  `class` dengan `function`, pasti memiliki kelebihan masing-masing.

1. Dengan class
Membuat component dengan `class` pada react disebut sebagai `component state full` karena dengan `class` Anda bisa membuat `state` sesuai kebutuhan. 

```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  render() {
    return (
      <div>Wellcome Asrul</div>
    )
  }
}

export default App
```

2. Dengan function
Membuat component dengan `function` pada react disebut sebagai `component state less` karena dengan `function` Anda tidak bisa membuat `state` tetapi bisa menerima `props` saja. 

```javascript
import React from 'react'

const Hello = ({ name }) => (<div>Hello, {name}!</div>);

export default Hello
```

Lantas bagai mana cara mengaksesnya?
Okay, cara mengakses komponen adalah dengan menjadikannya sebagai tag HTML, contoh component Hello akan diakses menjadi `<Hello />`

> Perlu diingat bahwa component harus diawali dengan huruf kapital sehingga sistem dapat membedakan code HTML dan kode Component

### Props
Props adalah cara component mengoper data yang berasal dari *parent* ke *child* dengan kata lain garis lurus kebawah.

```javascript
<Hello name="Asrul">
```
Dari component diatas misal sebuah component `Hello` dengan propertu **name** pada kode diatas, maka itu akan menurunkan data pada child `Hello` dengan props dengan `key` **name** dan `value` **Asrul**

### Mengakses Props
Pada induk telah mengover data dengan key **name** dan value **Asrul**, maka pada child akan bisa diakses dengan cara:

```javascript
import React from 'react'

const Hello = ({ props }) => (<div>Hello, {props.name}!</div>);

export default Hello
```

### State
State adalah tempat Anda menyimpan data pada component dan hanya bisa diakses oleh component itu sendiri secara default, tetapi bisa diturunkan pada child jika menggunkan props.

```javascript
state = {
  name: ''
}
```

### Mengubah Nilai State
Untuk mengubah nilai state telah diberikan method dari react menggunakan `setState`, berikut cara penggunaannya.
```javascript
this.setSetate({
  name: 'Asrul'
}, callback)
```

### Mengakses State
Anda telah mengetahui bagaimana cara mengubah nilai state, kemudian pada tahap ini, Anda akan membutuhkan cara mengakses state, hampir mirip dengan props, berikut caranya.
```javascript
import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  componentDidMount() {
    this.setState({
      name: 'Asrul H',
    })
  }
  
  render() {
    return (
      <div>Wellcome {this.state.name}</div>
    )
  }
}

export default Hello
```

### Lifecycle
React sendiri memiliki siklus hidup kompenen, maksudnya saat kapan aksi itu akan dijalankan.
- componentDidMount()
- componentWillMount()
- componentDidUpdate(prevProps, prevState)

## React Router DOM

React router dom adalah library kecil untuk membantu pengelolaan route pada web yang menggunakan react js.

### Cara instal React Router Dom

```bash
yarn add react-router-dom
```
### Helper penting pada `react-router-dom`
1. BrowserRouter, untuk membungkus sebagai canvas tempat router dijalankan
2. Switch, untuk menjadikan 404 sebagai hal yang ditampilkan hanya ketika dibutuhkan saja (untuk membungkus `Route`)
3. Route, component yang dijalankan sebagai alamat yang dituju
4. Link, alamat yang akan dituju ini seperti (`<a href...`)

### Cara Pakai React Router Dom
```javascript
import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './src/Page/Home'
import Home from './src/Page/About'
import Home from './src/Page/404'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={Home} />          
              <Route component={404} />  
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
```

### Mengirim params dari router
Init params yang akan ditrigger, contoh disini `:name`
```javascript
<Route path='/about/:name' exact component={AboutView} />
```

Init params diterima dalam `props` dengan nama `match`, lalu gunakan dengan `match.params.` + nama init params

```javascript
function AboutView({ match }) {
  return <h2>About {match.params.name} </h2>
}
```

## React Redux Thunk

### Cara install React Redux Thunk

```bash
yarn add redux
yarn add react-redux
yarn add react-redux-thunk
```

### Apa saja yang penting pada redux
1. Provider
2. Reducer
3. Action
4. Store
5. Connect

### Membuat Provider dari `react-redux`
```javascript
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store';

ReactDOM.render(
    <Provider store= {Store} ><App /> </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
```
### Membuat Reducer
```javascript
const initState = {
  warna : 'red',
  loading : true
}

export default (state = initState, action) => {
  switch (action.type){
    case 'GETWARNA': 
      return { 
        ...state,loading:false
      }
    default:
      return state
  }
}
```

```javascript
const initialState = {
  news: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_REQUEST':
      return {
        ...state,
        isLoaded: true
      }
    case 'GET_NEWS_DONE':
      return {
        ...state,
        news: action.payload.news,
        isLoaded: false
      }
    case 'GET_NEWS_ERROR':
      return {
        ...state
      }
    default:
      return state
  }
}
```

### Membuat Action
```javascript
import axios from 'axios'
import { key, URL_News } from '../secret'
export const getNews = (keyword) => {
  return dispatch => {
    dispatch({
      type: 'GET_NEWS_REQUEST'
    })
    axios({
      method: 'GET',
      url: URL_News + `everything?q=${keyword}&from=2019-02-07&sortBy=publishedAt&apiKey=${key}`
    })
      .then((response) => {
        dispatch({
          type: 'GET_NEWS_DONE',
          payload: {
            news: response.data.articles
          }
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_NEWS_ERROR'
        })
      })
  }
}
```

### Membuat Store

Ada 3 hal penting yang dipakai dari `redux` untuk menjalankan **Store**
1. createStore, untuk menjadikan file menjadi `Store`
2. combineReducers, untuk menggabungkan beberapa reducer menjadi 1
3. applyMiddleware, sebagai perantara antara load dan selesai load data pada reducer

Pada kasus ini kita menggunakan `react-thunk` sebagai middleware untuk menjadikan mutable menjadi immutable pada API

```javascript
import {
  createStore,
  combineReducers, 
  applyMiddleware
} from 'redux'
import ReducerWeb from './Reducer/ReducerWeb'
import NewsReducer from './Reducer/NewsReducer'
import thunk from 'redux-thunk';

const combine = combineReducers({
  web: ReducerWeb,
  news: NewsReducer,
})

const Store = createStore( combine, applyMiddleware(thunk) )
export default Store
```

### Membuat Connect
```javascript
import React, { Component } from 'react';
import {connect} from 'react-redux'
import CardNews from '../Component/CardNews'
import {getNews } from '../Store/Action/NewsAction'
import Loading from '../Component/Loading'

class News extends Component {
  componentDidMount(){
    this.props.NewsAction('technology')
  }

  render() {
    return (
      <div className="row">
        {
          this.props.news.news.length > 0 ? (
            this.props.news.news.map((list, i)=>(
              <div className="col-md-6">
              <CardNews key={i} berita={list} />
              </div>
            ))
          ) : (<Loading />)
        }
      </div>
    )
  }
}

const mapStateToProps = (Store) => {
    return {
        news:Store.news
    }
}

const mapDispatchToProps = dispatch => {
  return {
    NewsAction: (data) => {
      dispatch(getNews(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
```
