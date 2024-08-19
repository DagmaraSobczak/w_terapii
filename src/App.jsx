import {Routes, Route} from 'react-router-dom'
//import ReactDOM from 'react-dom/client'
import React from 'react';
import 'modern-normalize/modern-normalize.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import InternetSources from './pages/InternetSources/InternetSources'
import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase'
import Materials from './pages/Materials/Materials'
import News from './pages/News/News'
import OnlineTools from './pages/OnlineTools/OnlineTools.jsx'
import Webinars from './pages/Webinars/Webinars'
import BooksForPatients from './pages/Books/BooksForPatients'
import BooksForTherapists from './pages/Books/BooksForTherapists'
import LatestBooks from './pages/Books/LatestBooks'
import AuthoredArticles from './pages/KnowledgeBase/AuthoredArticles'
import CaseStudy from './pages/KnowledgeBase/CaseStudy'
import Experts from './pages/KnowledgeBase/Experts'
import StudiesAndArticles from './pages/KnowledgeBase/StudiesAndArticles'
import Children from './pages/Materials/Children'
import Documents from './pages/Materials/Documents'
import Movie from './pages/Materials/Movie'
import Network from './pages/Materials/Network'
import Questionnaire from './pages/Materials/Questionnaire'
import Adults from './pages/Materials/Adults'
import Tools from './pages/OnlineTools/Tools'
import Articles from './pages/OnlineTools/Articles'
import WeAreLearningTherapy from './pages/Webinars/weAreLearningTherapy'
import ConversationsAboutTherapy from './pages/Webinars/conversationsAboutTherapy'
import Menu from './components/Menu/Menu.jsx'
import Banner from './components/Banner/Banner.jsx'
import CardSection from './components/CardSection/CardSection.jsx';

function App() {
  return (
    <>
    <Menu></Menu>
    <Banner></Banner>
    <CardSection></CardSection>
   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route>
            {' '}
            <Route path="/books" element={<Books />} />
            <Route path="books-for-patients" element={<BooksForPatients />} />
            <Route path="latest-books" element={<LatestBooks />} />
            <Route
              path="books-for-therapist"
              element={<BooksForTherapists />}
            />
          </Route>
          <Route path="internet-sources" element={<InternetSources />} />
          <Route>
            <Route path="knowledge-base" element={<KnowledgeBase />} />
            <Route path="authored-articles" element={<AuthoredArticles />} />
            <Route path="experts" element={<Experts />} />
            <Route path="case-study" element={<CaseStudy />} />
            <Route
              path="studies-and-articles"
              element={<StudiesAndArticles />}
            />
          </Route>
          <Route>
            <Route path="materials" element={<Materials />} />
            <Route path="adults" element={<Adults />} />
            <Route path="children" element={<Children />} />
            <Route path="documents" element={<Documents />} />
            <Route path="movie" element={<Movie />} />
            <Route path="network" element={<Network />} />
            <Route path="questionnaire" element={<Questionnaire />} />
          </Route>
          <Route path="news" element={<News />} />
          <Route>
            <Route path="online-tools" element={<OnlineTools />} />
            <Route path="tools" element={<Tools />} />
            <Route path="articles" element={<Articles />} />
          </Route>
          <Route>
            <Route path="webinars" element={<Webinars />} />
            <Route
              path="conversations-about-therapys"
              element={<ConversationsAboutTherapy />}
            />
            <Route
              path="we-are-learning-therapy"
              element={<WeAreLearningTherapy />}
            />
          </Route>{' '}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
