import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from '../pages/SignIn'

const Rts = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/SignIn" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rts