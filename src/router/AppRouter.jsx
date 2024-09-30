import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { YoutubeRoutes } from "../youtube/routes/YoutubeRoutes";


export const AppRouter = () => {
    const {status} = useAuthStore();

    if (status === 'checking') {
        return (
            <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div>
        );
    };

    return (
        <Routes>
            {
                (status === "not-authenticated")
                ?
                (
                    <>
                        <Route path="/auth/*" element={<AuthRoutes/>}/>
                    </>
                )
                :
                (
                    <>
                        <Route path="/*" element={<YoutubeRoutes />}/>
                    </>
                )
            }
            <Route path="/*" element={<Navigate to="/auth/"/>}/>
        </Routes>
    )
}
