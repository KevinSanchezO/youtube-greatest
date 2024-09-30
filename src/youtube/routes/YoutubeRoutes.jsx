import { Navigate, Route, Routes } from "react-router-dom"
import { YoutubePage } from "../pages/YoutubePage"


export const YoutubeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<YoutubePage/>}/>

            <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>
    )
}
