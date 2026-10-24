import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App'
import About from "./components/About"
import Contact from './components/Contact'
import EventDemo from "./components/EventDemo"
import AdminDaskBoard from "./components/admin/AdminDaskBoard"
import AdminLogin from "./components/admin/AdminLogin"
import AllContact from "./components/admin/AllContact"
import AllFeedBack from "./components/admin/AllFeedBack"
import Cource from "./components/admin/Cource"
import Notice from './components/admin/Notice'
import CoachDaskBoard from "./components/coach/CoachDaskBoard"
import CoachLogin from "./components/coach/CoachLogin"
import AllMemberRegistration from "./components/admin/AllMemberRegistration"
import FeedBack from "./components/member/FeedBack"
import MemberHeader from "./components/member/MemberHeader"
import MemberLogin from "./components/member/MemberLogin"
import MemberLoginDaskBoard from "./components/member/MemberLoginDaskBoard"
import MemberRegistration from "./components/member/MemberRegistration"
import MemberHome from "./components/member/MemberHome"
import MemberContact from "./components/member/MemberContact"
import AllCourses from "./components/member/AllCourses"
import MemberEditProfile from "./components/member/MemberEditProfile"
import EnrollmentForm from "./components/member/EnrollmentForm"
import PendingAdmission from "./components/admin/PendingAdmission"
import ConfirmAdmission from "./components/admin/ConfirmAdmission"
import MemberAdmissionDetails from "./components/member/MemberAdmissionDetails"
function MainRoute()
{

    return(
        <>
        <BrowserRouter>

       <Routes>

        <Route path ="/" element = {<App/>}></Route>     
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/registration" element={<MemberRegistration/>}></Route>
        <Route path = "/admin/allMemberRegistration" element={<AllMemberRegistration/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admin/allContacts" element={<AllContact/>}></Route>
        <Route path="/admin/notice" element={<Notice/>}></Route>
        <Route path="admin/cource" element={<Cource/>}></Route>
        <Route path="/member/allCourses" element={<AllCourses/>}></Route>
        <Route path="/member/feedback" element={<FeedBack/>}></Route>
        <Route path="/admin/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/member/memberLogin" element={<MemberLogin/>}></Route>
        <Route path="/admin/allFeedBacks" element={<AllFeedBack/>}></Route>
        <Route path="/component/eventdemo" element={<EventDemo/>}></Route>
        <Route path="/coach/login" element={<CoachLogin/>}></Route>
        <Route path="/admin/adminDaskBoard" element={<AdminDaskBoard/>}></Route>
        <Route path="/coach/coachDaskBoard" element={<CoachDaskBoard/>}></Route>
        <Route path="/member/memberHeader" element={<MemberHeader/>}></Route>
        <Route path="/member/memberLoginDaskBoard" element={<MemberLoginDaskBoard/>}></Route>
        <Route path="/member/memberHome" element={<MemberHome/>}></Route>
        <Route path="/member/membercontact" element={<MemberContact/>}></Route>
        <Route path="/member/editProfile" element={<MemberEditProfile/>}></Route>
        <Route path="/member/enrollCourse" element={<EnrollmentForm/>}></Route>
        <Route path="/admin/allPendingAdmission" element={<PendingAdmission/>}></Route>
        <Route path="/admin/allConfirmAdmission" element={<ConfirmAdmission/>}></Route>
        <Route path="/member/admissionDetails" element={<MemberAdmissionDetails/>}></Route>



        </Routes>


        </BrowserRouter>

        </>



     )


}
 export default MainRoute