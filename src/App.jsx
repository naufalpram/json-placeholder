import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserList from './pages/UserList';
import UserPostList from './pages/UserPostList';
import PostCommentList from './pages/PostCommentList';
import UserAlbumList from './pages/UserAlbumList';
import AlbumPhotoList from './pages/AlbumPhotoList';

const router = createBrowserRouter([
    {
        path: '/', element: <UserList />
    },
    {
        path: '/posts/:userId',
        children: [
            {index: true, element: <UserPostList />},
            {path: 'comments/:postId', element: <PostCommentList />}
        ]
    },
    {
        path: '/albums/:userId',
        children: [
            {index: true, element: <UserAlbumList />},
            {path: 'photos/:albumId',element: <AlbumPhotoList />}
        ]
    }
])

function App() {
    return (
        <Header>
            <RouterProvider router={router} />
        </Header>
    );
}

export default App;
