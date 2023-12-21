import React, { Component } from 'react'
import  Home  from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { NotFound } from './components/NotFound'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cashout } from './components/Cashout'

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
      
                <CartContextProvider>
                    <BrowserRouter>
                        <Routes>
                            {/* home */}
                            <Route exact path='/Home' component={() => <Home user={this.state.user} />} />
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* cashout */}
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            <Route component={NotFound} />
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
        )
    }
}

export default App ;