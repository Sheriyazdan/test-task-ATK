import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './Login'
import Header from './Header'

function Profile() {
    const userValue = useSelector(state => state.userSlice)

    return (
        <div>
            <Header />
            {userValue.value === false ? <Login /> :
                <div className="container mt-5">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-7">

                            <div className="card p-3 py-4">

                                <div className="text-center">
                                    <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" />
                                </div>

                                <div className="text-center mt-3">
                                    <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                    <h5 className="mt-2 mb-0">Хумарсерик Шерияздан</h5>
                                    <span>Frontend разработчик</span>

                                    <div className="px-4 mt-1">
                                        <p className="fonts">Исполнительность,
                                            HTML,
                                            CSS,
                                            Adobe Photoshop,
                                            JavaScript,
                                            Git,
                                            jQuery,
                                            Английский язык,
                                            Пользователь ПК,
                                            Работа в команде,
                                            React,
                                            React Hooks,
                                            React-Router,
                                            CSS3,
                                            HTML5,
                                            Умение работать в команде,
                                            Заключение договоров,
                                            Деловая коммуникация,
                                            Bootstrap,
                                            Грамотная речь,
                                            Ведение переговоров,
                                            Figma,
                                            Axios,
                                            API,
                                            redux-toolkit,
                                            React Content Loader,
                                            Lodash.Debounce</p>

                                    </div>

                                    <ul className="social-list">
                                        <li><i className="fa fa-facebook"></i></li>
                                        <li><i className="fa fa-dribbble"></i></li>
                                        <li><i className="fa fa-instagram"></i></li>
                                        <li><i className="fa fa-linkedin"></i></li>
                                        <li><i className="fa fa-google"></i></li>
                                    </ul>


                                </div>




                            </div>

                        </div>

                    </div>

                </div>
            }

        </div>
    )
}

export default Profile