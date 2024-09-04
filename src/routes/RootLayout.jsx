import {Outlet} from 'react-router-dom'
import MainHeader from "../components/MainHeader.jsx";

export default function RootLayout({children}) {
    return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
    )
}