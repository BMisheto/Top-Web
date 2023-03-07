import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donations from "./pages/donations/Donations";
import Header from "./components/header/Header";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import ForgotPassword from "./pages/account/ForgotPassword";
import ResetPasswordPage from "./pages/account/ResetPasswordPage";
import Feed from "./pages/posts/Feed";
import PostPage from "./pages/posts/PostPage";
import Dashboard from "./pages/dashboard/Dashboard";
import PostsPage from "./pages/dashboard/PostsPage";
import DonatePage from "./pages/dashboard/DonatePage";
import Account from "./pages/account/Account";
import ProfileEdit from "./pages/account/ProfileEdit";
import NormalPost from "./pages/posts/NormalPost";
import AddPoll from "./pages/posts/AddPoll";
import Events from "./pages/events/Events";
import EventsPage from "./pages/dashboard/EventsPage"
import EventsDetails from "./pages/events/EventsDetails";
import DonationDetails from "./pages/donations/DonationDetails";
import DashProfile from "./pages/dashboard/DashProfile";
import UsersPage from "./pages/dashboard/UsersPage";
import DashEventEditPage from "./pages/dashboard/events/DashEventEditPage";
import DashDonationEditPage from "./pages/dashboard/donations/DashDonationEditPage";
import DashPostEditPage from "./pages/dashboard/posts/DashPostEditPage";
import PrivateRoute from "./routes/PrivateRoute";
import DashCreatePostPage from "./pages/dashboard/posts/DashCreatePostPage";
import DashCreateEventPage from "./pages/dashboard/events/DashCreateEventPage";
import DashCreateDonationPage from "./pages/dashboard/donations/DashCreateDonationPage";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* header */}
        <Header />

        <Routes>
          {/* main routes */}

          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventsDetails />} />
          
          


          <Route path="/donate" element={<Donations />} />
          <Route path="/donate/:id" element={<DonationDetails />} />

          {/* login,register & password reset */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:encoded_pk/:token/" element={<ResetPasswordPage />} />



          <Route path="/account" element={
            <PrivateRoute>
                 <Account />

            </PrivateRoute>
          
       } />
          <Route path="/account/edit" element={
            <PrivateRoute>
              <ProfileEdit />

            </PrivateRoute>
          } />



          

          {/* Dashboard */}
          <Route path="/dashboard" element={
          
          <AdminRoute>
            <Dashboard />

          </AdminRoute>
          
          } />


          <Route path="/dashboard/profile" element={

            <AdminRoute>
                   <DashProfile />

            </AdminRoute>
          
          
     } />


          
          


          <Route path="/dashboard/users" element={
            <AdminRoute>
               <UsersPage />

            </AdminRoute>
          
         } />
          <Route path="/dashboard/users/:id" element={
            <AdminRoute>
              <Dashboard />

            </AdminRoute>
          
          } />

          <Route path="/dashboard/events" element={
            <AdminRoute>
               <EventsPage />

            </AdminRoute>
         } />
          <Route path="/dashboard/events/:id/edit" element={
            <AdminRoute>
               <DashEventEditPage />

            </AdminRoute>
          
         } />
          <Route path="/dashboard/events/create" element={
            <AdminRoute>
               <DashCreateEventPage />

            </AdminRoute>
          
         } />

          <Route path="/dashboard/posts" element={
            <AdminRoute>
              <PostsPage />

            </AdminRoute>
          } />
          <Route path="/dashboard/posts/:id/edit" element={
            <AdminRoute>
                <DashPostEditPage />

            </AdminRoute>
          
        } />
          <Route path="/dashboard/posts/create" element={
            <AdminRoute>
                <DashCreatePostPage />

            </AdminRoute>
          
        } />


          <Route path="/dashboard/donate" element={
            <AdminRoute>
              <DonatePage />

            </AdminRoute>
          } />
          <Route path="/dashboard/donate/:id/edit" element={
            <AdminRoute>
              <DashDonationEditPage />

            </AdminRoute>
          } />
          <Route path="/dashboard/donate/create" element={
            <AdminRoute>
              <DashCreateDonationPage />

            </AdminRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
