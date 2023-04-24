import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchTweets } from 'redux/tweets/operations';
import { selectIsLoading } from 'redux/tweets/selectors';
import { Loading } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return isLoading ? (
    <Loading>Loading, please, wait...</Loading>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
