import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import PostPage from './pages/PostPage';

// import Tryss from './components/Tryss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Tryss /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route
            path="/create-post"
            element={<CreatePost />}
          />
          <Route
            path="/update-post/:postId"
            element={<UpdatePost />}
          />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Route>
        <Route
          path="/post/:postSlug"
          element={<PostPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
